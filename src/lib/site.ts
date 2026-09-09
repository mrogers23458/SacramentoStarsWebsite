export const site = {
  name: "Sacramento Stars",
  shortName: "Stars",
  ageGroup: "9–11U",
  tagline: "Youth baseball in Sacramento",
  founded: "2024",
  city: "Sacramento, California",
  description:
    "Sacramento Stars is a youth baseball program for 9–11U players. We play hard, stay kind, and keep families at the center of the season.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
  { href: "/raffle", label: "Raffle" },
  { href: "/contact", label: "Contact" },
] as const;

export const raffle = {
  title: "Support a Player, Win a Wagon",
  tagline: "Stars fall fundraiser",
  ticketPrice: "$[TICKET PRICE] per ticket",
  drawingDate: "[DRAWING DATE]",
  prizeDescription:
    "A wagon stocked with wine, spirits, and mixers, put together by Stars families. You must be 21 or older to claim this prize.",
  howToPay:
    "This form does not take payment. Pay by cash, check, or Venmo through a coach or team parent, and mention your player.",
};

export const donationLevels: {
  amount: number;
  label: string;
  detail: string;
  badge?: string;
}[] = [
  {
    amount: 25,
    label: "Team Snack",
    detail: "Helps cover a weekend’s worth of water, ice, and snacks.",
  },
  {
    amount: 50,
    label: "Practice Gear",
    detail: "Supports balls, tees, and replacement equipment.",
    badge: "Popular",
  },
  {
    amount: 100,
    label: "Tournament Entry",
    detail: "Goes toward a tournament fee so more kids can play.",
    badge: "Best Value",
  },
  {
    amount: 250,
    label: "Season Sponsor",
    detail: "Helps with uniforms, field time, and travel for the year.",
  },
] as const;
