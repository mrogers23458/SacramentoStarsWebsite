export const tryoutPhotos = [
  {
    src: "/photos/tryouts/tryout-player-fence.jpg",
    alt: "A Stars player in a helmet leans against the backstop at Wild Rose Park while teammates wait on the dirt.",
    width: 2160,
    height: 2880,
  },
  {
    src: "/photos/tryouts/gameday-01.jpg",
    alt: "Stars players and a coach put their hands in for a huddle on the field.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/photos/tryouts/gameday-02.jpg",
    alt: "Players in pinstripe jerseys talk with a coach in the dugout.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/photos/tryouts/gameday-03.jpg",
    alt: "Stars players stand along the fence in the dugout during a game.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/photos/tryouts/gameday-04.jpg",
    alt: "A Stars hitter waits on a pitch while the umpire stands behind the plate.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/photos/tryouts/gameday-06.jpg",
    alt: "Players gather under a tent with a younger sibling in a wagon after a game.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/photos/tryouts/hitaton-01.jpg",
    alt: "A young player in a red Stars shirt raises a bat on the infield at Wild Rose Park.",
    width: 1180,
    height: 1180,
  },
  {
    src: "/photos/tryouts/hitaton-03.jpg",
    alt: "Families watch a player take swings on the field at Wild Rose Park.",
    width: 3024,
    height: 3023,
  },
  {
    src: "/photos/tryouts/hitaton-04.jpg",
    alt: "The Sacramento Stars team poses together along the fence after a day at the park.",
    width: 3024,
    height: 3023,
  },
] as const;

export const tryoutLocation = {
  name: "Wild Rose Park",
  neighborhood: "North Natomas",
  address: "5200 Kankakee Dr, Sacramento, CA 95834",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=5200+Kankakee+Dr,+Sacramento,+CA+95834",
} as const;

export const tryoutSessions = [
  { id: "oct-28", weekday: "Wednesday", date: "October 28, 2026", iso: "2026-10-28" },
  { id: "nov-4", weekday: "Wednesday", date: "November 4, 2026", iso: "2026-11-04" },
] as const;

export const tryoutTeams = [
  {
    id: "9u",
    label: "9U Blue",
    ages: "9U",
    note: "Fall 2026 and spring 2027 openings on a roster we keep small so kids get reps and playing time.",
  },
  {
    id: "10u",
    label: "10U Red",
    ages: "10U",
    note: "A 10-player roster by design. Openings for fall and spring — more than one spot, still built to stay small.",
  },
  {
    id: "11u",
    label: "11U",
    ages: "11U",
    note: "New team forming this spring. These tryouts fill the first 11U roster.",
  },
] as const;

export const tryoutValues = [
  {
    title: "Love the game",
    note: "Love builds drive. Drive builds commitment. That is the starting point here.",
  },
  {
    title: "Development first",
    note: "Development over ring-chasing. Kids get better because they play, not because they sit.",
  },
  {
    title: "Small rosters",
    note: "Opportunity over roster size. Intentionally small groups mean more reps and meaningful playing time.",
  },
  {
    title: "Family culture",
    note: "A team culture that feels like family for committed players and families.",
  },
] as const;

export const tryoutCost = {
  amount: "$150/month",
  claim: "Lowest fees in the greater Sacramento area",
  includes: [
    "Two field practices each week",
    "One facility day each week",
    "Doubleheaders most weekends",
  ],
} as const;
