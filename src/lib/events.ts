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

export const events: TeamEvent[] = [
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
    id: "red-league-aug23-samurais",
    team: "red",
    title: "vs Samurais",
    date: "August 23",
    time: "9:00 AM",
    location: "North Laguna Creek Park",
    type: "League",
    sortAt: "2026-08-23T09:00",
    completed: true,
    result: "Win 13-9",
  },
  {
    id: "red-league-aug30-lab-rats",
    team: "red",
    title: "vs Lab Rats",
    date: "August 30",
    time: "11:00 AM",
    location: "Alyce Norman Field 3, West Sacramento",
    type: "League",
    sortAt: "2026-08-30T11:00",
    completed: true,
    result: "Loss 11-12",
  },
  {
    id: "red-league-aug30-top-performance",
    team: "red",
    title: "vs Top Performance",
    date: "August 30",
    time: "1:00 PM",
    location: "Alyce Norman Field 3, West Sacramento",
    type: "League",
    sortAt: "2026-08-30T13:00",
    completed: true,
    result: "Win 15-5",
  },
  {
    id: "red-league-sep13-lab-rats",
    team: "red",
    title: "vs Lab Rats",
    date: "September 13",
    time: "1:00 PM",
    location: "North Laguna Creek Park",
    type: "League",
    sortAt: "2026-09-13T13:00",
  },
  {
    id: "red-league-sep13-wheelhouse",
    team: "red",
    title: "vs Wheelhouse",
    date: "September 13",
    time: "5:00 PM",
    location: "North Laguna Creek Park",
    type: "League",
    sortAt: "2026-09-13T17:00",
  },
  {
    id: "red-league-sep20-top-performance",
    team: "red",
    title: "vs Top Performance",
    date: "September 20",
    time: "11:00 AM",
    location: "Alyce Norman Field 3, West Sacramento",
    type: "League",
    sortAt: "2026-09-20T11:00",
  },
  {
    id: "red-league-sep20-tbd",
    team: "red",
    title: "vs Opponent TBD",
    date: "September 20",
    time: "3:00 PM",
    location: "Alyce Norman Field 3, West Sacramento",
    type: "League",
    sortAt: "2026-09-20T15:00",
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
  {
    id: "blue-league-aug23-sandlot",
    team: "blue",
    title: "vs Sandlot",
    date: "August 23",
    time: "9:00 AM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-08-23T09:00",
    completed: true,
    result: "Loss 7-8",
  },
  {
    id: "blue-league-aug23-wolverines",
    team: "blue",
    title: "vs Wolverines",
    date: "August 23",
    time: "1:00 PM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-08-23T13:00",
    completed: true,
    result: "Win 19-7",
  },
  {
    id: "blue-league-aug30-hard-90",
    team: "blue",
    title: "vs Hard 90",
    date: "August 30",
    time: "11:00 AM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-08-30T11:00",
    completed: true,
    result: "Win 19-7",
  },
  {
    id: "blue-league-aug30-edh-miners",
    team: "blue",
    title: "vs EDH Miners",
    date: "August 30",
    time: "3:00 PM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-08-30T15:00",
    completed: true,
    result: "Loss 10-14",
  },
  {
    id: "blue-league-sep13-lab-rats",
    team: "blue",
    title: "vs Lab Rats",
    date: "September 13",
    time: "1:00 PM",
    location: "Alyce Norman Field 3, West Sacramento",
    type: "League",
    sortAt: "2026-09-13T13:00",
  },
  {
    id: "blue-league-sep13-the-yard",
    team: "blue",
    title: "vs The Yard",
    date: "September 13",
    time: "3:00 PM",
    location: "Alyce Norman Field 3, West Sacramento",
    type: "League",
    sortAt: "2026-09-13T15:00",
  },
  {
    id: "blue-league-sep20-hard-90",
    team: "blue",
    title: "vs Hard 90",
    date: "September 20",
    time: "9:00 AM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-09-20T09:00",
  },
  {
    id: "blue-league-sep20-wolverines",
    team: "blue",
    title: "vs Wolverines",
    date: "September 20",
    time: "1:00 PM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-09-20T13:00",
  },
  {
    id: "blue-league-sep20-sandlot",
    team: "blue",
    title: "vs Sandlot",
    date: "September 20",
    time: "3:00 PM",
    location: "Alyce Norman Field 1, West Sacramento",
    type: "League",
    sortAt: "2026-09-20T15:00",
  },
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
