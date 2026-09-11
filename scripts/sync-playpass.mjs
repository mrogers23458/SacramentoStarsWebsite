import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = path.join(ROOT, "src/data/league-games.json");

const DIVISIONS = [
  {
    team: "red",
    ourName: "Sac Stars Red",
    url: "https://playpass.com/delta-valley-youth-baseball/10u-division-fall-2026-RqQY4gG?v=schedule",
  },
  {
    team: "blue",
    ourName: "Sac Stars Blue",
    url: "https://playpass.com/delta-valley-youth-baseball/9u-division-fall-2026-RbxBjwi?v=schedule",
  },
];

const USER_AGENT =
  "SacramentoStarsWebsite/1.0 (+https://github.com/mrogers23458/SacramentoStarsWebsite; schedule sync)";

function decode(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "tbd";
}

function formatDate(isoDate) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

function formatTime(hours, minutes) {
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function formatLocation(placeName) {
  const [place, rest] = placeName.split(" - ");
  if (!place) return "TBD";
  if (rest && /west sacramento/i.test(rest)) {
    return `${place.trim()}, West Sacramento`;
  }
  return place.trim();
}

function opponentFromEventName(name, ourName) {
  const match = name.match(/the game between (.+) and (.+)/i);
  if (!match) return "Opponent TBD";
  const other = [match[1].trim(), match[2].trim()].find(
    (team) => !team.toLowerCase().includes("sac stars"),
  );
  if (!other || /^\*+$/.test(other)) return "Opponent TBD";
  return other;
}

function parseJsonLdGames(html, ourName) {
  const games = [];
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    let data;
    try {
      data = JSON.parse(match[1]);
    } catch {
      continue;
    }
    const items = data?.mainEntity?.itemListElement;
    if (!Array.isArray(items)) continue;
    for (const entry of items) {
      const item = entry?.item;
      if (item?.["@type"] !== "SportsEvent") continue;
      if (!String(item.name || "").includes(ourName)) continue;
      const stamp = String(item.startDate);
      const timeMatch = stamp.match(/T(\d{2}):(\d{2})/);
      if (!timeMatch) continue;
      const isoDate = stamp.slice(0, 10);
      games.push({
        startDate: stamp,
        isoDate,
        hours: Number(timeMatch[1]),
        minutes: Number(timeMatch[2]),
        location: formatLocation(item.location?.name || ""),
        opponent: opponentFromEventName(item.name, ourName),
      });
    }
  }
  return games;
}

function parseScores(html, ourName) {
  const scores = [];
  let currentDate = "";
  const tokens = html.split(
    /(?=<time datetime="\d{4}-\d{2}-\d{2}"|<turbo-frame[^>]*id="robin_game_)/,
  );

  for (const token of tokens) {
    const dateMatch = token.match(/<time datetime="(\d{4}-\d{2}-\d{2})"/);
    if (dateMatch && !token.includes('id="robin_game_')) {
      currentDate = dateMatch[1];
      continue;
    }
    if (!token.includes('id="robin_game_') || !currentDate) continue;

    const teamMatches = [
      ...token.matchAll(/href="[^"]*[?&]st=\d+"[^>]*>([^<]+)<\/a>/g),
    ].map((match) => decode(match[1].trim()));
    const teams = teamMatches.filter(Boolean).slice(0, 2);
    if (teams.length < 2) continue;
    if (!teams.some((team) => team === ourName)) continue;

    const scoreMatches = [
      ...token.matchAll(
        /<p class="[^"]*\bscore\b[^"]*\bplayed\b[^"]*">\s*(\d+)\s*<\/p>/g,
      ),
    ].map((match) => Number(match[1]));
    if (scoreMatches.length < 2) continue;

    const timeMatch = token.match(
      /<time datetime="2000-01-01T(\d{2}):(\d{2})Z"/,
    );
    if (!timeMatch) continue;

    const ourIndex = teams.findIndex((team) => team === ourName);
    const theirIndex = ourIndex === 0 ? 1 : 0;
    const ourScore = scoreMatches[ourIndex];
    const theirScore = scoreMatches[theirIndex];
    if (!Number.isFinite(ourScore) || !Number.isFinite(theirScore)) continue;

    const opponent = /^\*+$/.test(teams[theirIndex])
      ? "Opponent TBD"
      : teams[theirIndex];
    const result =
      ourScore === theirScore
        ? `Tie ${ourScore}-${theirScore}`
        : ourScore > theirScore
          ? `Win ${ourScore}-${theirScore}`
          : `Loss ${ourScore}-${theirScore}`;

    scores.push({
      isoDate: currentDate,
      hours: Number(timeMatch[1]),
      minutes: Number(timeMatch[2]),
      opponent,
      result,
    });
  }
  return scores;
}

function isPastGame(startDate) {
  const start = new Date(startDate);
  return !Number.isNaN(start.getTime()) && start.getTime() < Date.now();
}

function toEvent(division, game, result) {
  const time = formatTime(game.hours, game.minutes);
  const completed = Boolean(result) || isPastGame(game.startDate);
  return {
    id: `${division.team}-league-${game.isoDate.replaceAll("-", "")}-${String(game.hours).padStart(2, "0")}${String(game.minutes).padStart(2, "0")}-${slug(game.opponent)}`,
    team: division.team,
    title: `vs ${game.opponent}`,
    date: formatDate(game.isoDate),
    time,
    location: game.location,
    type: "League",
    sortAt: `${game.isoDate}T${String(game.hours).padStart(2, "0")}:${String(game.minutes).padStart(2, "0")}`,
    ...(completed ? { completed: true } : {}),
    ...(result ? { result } : {}),
  };
}

function matchResult(game, scores) {
  return scores.find(
    (score) =>
      score.isoDate === game.isoDate &&
      score.hours === game.hours &&
      score.minutes === game.minutes &&
      score.opponent === game.opponent,
  )?.result;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!response.ok) {
    throw new Error(`PlayPass ${response.status} for ${url}`);
  }
  return response.text();
}

async function syncDivision(division) {
  const html = await fetchHtml(division.url);
  const games = parseJsonLdGames(html, division.ourName);
  const scores = parseScores(html, division.ourName);
  if (games.length === 0) {
    throw new Error(`No ${division.ourName} games found on PlayPass.`);
  }
  return games.map((game) => toEvent(division, game, matchResult(game, scores)));
}

async function main() {
  const leagueGames = [];
  for (const division of DIVISIONS) {
    const games = await syncDivision(division);
    console.log(`${division.ourName}: ${games.length} games`);
    leagueGames.push(...games);
  }

  leagueGames.sort((a, b) => a.sortAt.localeCompare(b.sortAt));

  const payload = {
    syncedAt: new Date().toISOString(),
    source: "playpass",
    games: leagueGames,
  };

  await writeFile(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote ${leagueGames.length} league games to ${path.relative(ROOT, OUT_FILE)}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
