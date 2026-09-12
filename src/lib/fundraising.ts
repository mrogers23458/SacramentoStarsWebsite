import { site } from "@/lib/site";

export const fundraisingPark = {
  name: "North Natomas Regional Park",
  address: "2501 New Market Drive, Sacramento, CA 95835",
  mapsUrl:
    "https://maps.google.com/?q=2501+New+Market+Drive,+Sacramento,+CA+95835",
};

export const raffle = {
  id: "booze-wagon",
  title: "Booze Wagon raffle",
  kicker: "21 and over · Drawing October 31",
  summary:
    "One fully loaded wagon of spirits. One winner. Tickets help 10U Red cover tournaments, equipment, and the rest of the season.",
  drawing: "October 31, 2026",
  winnerPresent: false,
  ageRule: "You must be 21 or older to buy tickets or win.",
  formUrl: "https://forms.gle/CoSdMxkw433zioj37",
  venmo: "@stars10ubaseball",
  venmoUrl: "https://venmo.com/u/stars10ubaseball",
  packages: [
    { price: "$10", tickets: "1 ticket" },
    { price: "$25", tickets: "3 tickets" },
    { price: "$75", tickets: "10 tickets" },
  ],
  steps: [
    "Fill out the Google Form and name the Stars player you are supporting.",
    "Choose a ticket package.",
    `Send payment on Venmo to @stars10ubaseball.`,
    "Buy in person at any Sacramento Stars game if that is easier.",
  ],
};

export const calendarDrive = {
  id: "whos-got-my-back",
  title: "Who's Got My Back?",
  kicker: "October t-shirt drive",
  summary:
    "Each player has an October calendar to fill. Sponsor a date — the dollar amount matches the day of the month. Names go on one team shirt the boys wear all season.",
  month: "October 2026",
  sellout: "$496",
  examples: [
    { day: "October 1", amount: "$1" },
    { day: "October 2", amount: "$2" },
    { day: "October 15", amount: "$15" },
    { day: "October 30", amount: "$30" },
  ],
  how: [
    "Ask a Stars family for their player's October calendar, or email the team.",
    "Pick one day or as many as you like. October 15 is $15, and so on through the 31st.",
    "A full calendar raises $496 for that player and the team.",
    "Every sponsor name is printed on the shared team t-shirt.",
  ],
};

export const fridayNightLights = {
  id: "friday-night-lights",
  title: "Friday Night Lights",
  kicker: "Hosted 10U tournament",
  date: "Friday, October 23, 2026",
  time: "6:00 PM – 10:00 PM",
  age: "10U",
  fee: "$425 per team",
  games: "2-game guarantee",
  field: "Four teams only",
  awards: "Rings and medals for first and second place",
  extras: "Snacks and drinks on site",
  mailto: `mailto:${site.email}?subject=${encodeURIComponent("Friday Night Lights — 10U team entry")}`,
};

export const homeRunDerby = {
  id: "home-run-derby",
  title: "Home Run Derby",
  kicker: "Hosted by the Stars",
  date: "Friday, October 30, 2026",
  time: "6:00 PM – 9:00 PM",
  ages: "8U–12U",
  fee: "$30 per hitter",
  format: "10 swings each round",
  prizes: [
    {
      place: "1st",
      prize: "Custom laser-engraved wooden bat with the winner's name",
    },
    { place: "2nd", prize: "Bruce Bolt batting gloves" },
    { place: "3rd", prize: "$25 Dick's Sporting Goods gift card" },
  ],
  mailto: `mailto:${site.email}?subject=${encodeURIComponent("Home Run Derby — player signup")}`,
};

export const novemberTournament = {
  id: "november-tournament",
  title: "9U & 10U tournament",
  kicker: "Hosted by the Stars",
  date: "November 14–15, 2026",
  ages: "9U and 10U",
  fee: "$600 per team",
  games: "3-game guarantee",
  awards: "Rings for first place",
  note: "Limited spots.",
  mailto: `mailto:${site.email}?subject=${encodeURIComponent("November 14–15 tournament — team entry")}`,
};

export const fundraisingJumpLinks = [
  { href: `#${raffle.id}`, label: "Booze Wagon" },
  { href: `#${calendarDrive.id}`, label: "T-shirt drive" },
  { href: `#${fridayNightLights.id}`, label: "Friday Night Lights" },
  { href: `#${homeRunDerby.id}`, label: "Home Run Derby" },
  { href: `#${novemberTournament.id}`, label: "November tournament" },
] as const;
