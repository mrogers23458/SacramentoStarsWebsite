import leagueSchedule from "@/data/league-games.json";

export type TeamId = "red" | "blue";
export type EventType = "Scrimmage" | "Tournament" | "League";

export type TeamEvent = {
  id: string;
  team: TeamId;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  sortAt: string;
  completed?: boolean;
  result?: string;
};

export const teams = {
  red: {
    id: "red" as const,
    label: "10U Red",
    ageGroup: "10U",
    color: "red" as const,
    gameChangerUrl:
      "https://web.gc.com/teams/hQS4uNGf2oFZ/2026-fall-sacramento-stars-10u",
    playPassUrl:
      "https://playpass.com/delta-valley-youth-baseball/10u-division-fall-2026-RqQY4gG",
    playPassNote: "Delta Valley 10U fall games run through November 1.",
  },
  blue: {
    id: "blue" as const,
    label: "9U Blue",
    ageGroup: "9U",
    color: "blue" as const,
    gameChangerUrl:
      "https://web.gc.com/teams/q2uODZgzhSEu/2026-fall-sacramento-stars-9u",
    playPassUrl:
      "https://playpass.com/delta-valley-youth-baseball/9u-division-fall-2026-RbxBjwi",
    playPassNote:
      "Delta Valley 9U fall games run through November 1, with playoffs on November 1.",
  },
} as const;

const manualEvents: TeamEvent[] = [
  {
    id: "red-bring-the-heat",
    team: "red",
    title: "Bring The Heat",
    date: "June 27–28",
    time: "11:00 AM / 1:00 PM",
    location: "Mather Sports Complex",
    type: "Scrimmage",
    sortAt: "2026-06-27T11:00",
    completed: true,
    result: "4th place",
  },
  {
    id: "red-july-scrimmage",
    team: "red",
    title: "Scrimmage",
    date: "July 5",
    time: "10:30 AM / 12:30 PM",
    location: "TBD",
    type: "Scrimmage",
    sortAt: "2026-07-05T10:30",
    completed: true,
    result: "Win 15-5",
  },
  {
    id: "red-hot-august-days",
    team: "red",
    title: "Hot August Days",
    date: "August 1–2",
    time: "TBD",
    location: "Mather Sports Complex",
    type: "Tournament",
    sortAt: "2026-08-01T09:00",
    completed: true,
    result: "4th place",
  },
  {
    id: "red-summer-sizzler",
    team: "red",
    title: "Summer Sizzler",
    date: "August 15–16",
    time: "TBD",
    location: "3775 Schriever Ave, Mather",
    type: "Tournament",
    sortAt: "2026-08-15T09:00",
    completed: true,
    result: "3rd place",
  },
  {
    id: "red-halloween-havoc",
    team: "red",
    title: "Halloween Havoc",
    date: "Oct 31–Nov 1",
    time: "TBD",
    location: "Galt Sports Complex",
    type: "Tournament",
    sortAt: "2026-10-31T09:00",
  },
  {
    id: "red-winter-world-series",
    team: "red",
    title: "Winter World Series",
    date: "November 21–22",
    time: "TBD",
    location: "Golden Eagle Sports Complex, Reno",
    type: "Tournament",
    sortAt: "2026-11-21T09:00",
  },
];

export const events: TeamEvent[] = [
  ...manualEvents,
  ...(leagueSchedule.games as TeamEvent[]),
];

export function isTeamId(value: string | undefined): value is TeamId {
  return value === "red" || value === "blue";
}

function byDate(a: TeamEvent, b: TeamEvent) {
  return a.sortAt.localeCompare(b.sortAt);
}

export function eventsForTeam(team: TeamId) {
  return events.filter((event) => event.team === team).sort(byDate);
}

export function upcomingEvents(team?: TeamId, limit?: number) {
  const list = (team ? eventsForTeam(team) : [...events].sort(byDate)).filter(
    (event) => !event.completed,
  );
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function completedEvents(team: TeamId) {
  return eventsForTeam(team).filter((event) => event.completed);
}
