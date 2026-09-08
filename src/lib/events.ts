export type TeamEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
};

export const events: TeamEvent[] = [
  {
    id: "fall-opener",
    title: "Fall Ball Opener",
    date: "2026-09-13",
    time: "9:00 AM",
    location: "Sacramento, CA",
    summary:
      "First games of the fall season. Arrive early for warm-ups and a short team meeting.",
  },
  {
    id: "skills-clinic",
    title: "Skills Clinic",
    date: "2026-09-20",
    time: "10:00 AM",
    location: "Team practice field",
    summary:
      "Stations for throwing, hitting, and base running. Siblings and new families are welcome to watch.",
  },
  {
    id: "fall-classic",
    title: "Fall Classic Tournament",
    date: "2026-09-27",
    time: "All day",
    location: "Greater Sacramento",
    summary:
      "Weekend tournament play. Exact field assignments will be posted here once the host shares them.",
  },
  {
    id: "family-day",
    title: "Family Day & Team Photos",
    date: "2026-10-11",
    time: "11:00 AM",
    location: "Home field",
    summary:
      "Team photos, a picnic lunch, and a short scrimmage. Bring chairs and a dish to share.",
  },
  {
    id: "season-close",
    title: "Fall Season Celebration",
    date: "2026-11-08",
    time: "4:00 PM",
    location: "Sacramento, CA",
    summary:
      "End-of-season gathering for players and families. Awards, snacks, and next-season info.",
  },
];

export function formatEventDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(new Date(`${isoDate}T12:00:00-07:00`));
}
