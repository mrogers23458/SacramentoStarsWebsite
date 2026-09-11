export const site = {
  name: "Sacramento Stars",
  shortName: "Stars",
  ageGroup: "9U & 10U",
  tagline: "Natomas' own travel baseball club",
  founded: "2026",
  city: "Natomas, Sacramento, CA",
  email: "Sacramentostars10u@gmail.com",
  instagram: "https://www.instagram.com/dugout.stars",
  instagramHandle: "@dugout.stars",
  facebook: "https://www.facebook.com/profile.php?id=61591228059035",
  description:
    "Natomas' own travel baseball team — built by the community, playing for the community. Your support puts local kids on the field.",
  story: {
    kicker: "Who we are",
    title: "Born and Raised in Natomas",
    paragraphs: [
      "We started the Sacramento Stars in 2026 with a simple belief: every kid in Natomas deserves the chance to compete at a higher level without their family having to travel across town to find it.",
      "What began as a group of local kids with big dreams has grown into two teams — 9U Blue and 10U Red — showing up, working hard, and representing our neighborhood at games and tournaments across the Sacramento region.",
      "We're small but we're mighty — and we're just getting started. This season the Stars are competing in Delta Valley league play plus weekend events, and we're building something the whole Natomas community can be proud of for years to come.",
      "Every sponsor on this page is a neighbor. Every dollar raised stays local. Thank you for believing in us.",
    ],
  },
};

export const navItems = [
  { href: "/about", label: "Our Story" },
  { href: "/photos", label: "Photos" },
  { href: "/tryouts", label: "Tryouts" },
  { href: "/events", label: "Schedule" },
  { href: "/donate", label: "Levels" },
] as const;

export const sponsorLevels = [
  {
    id: "grand-slam",
    emoji: "🏆",
    name: "Grand Slam",
    amount: "$1,000 and up",
    perks: [
      "Banner at ALL games and tournaments",
      "Logo on player jerseys",
      "Named Official Team Sponsor",
      "Dedicated social media shoutouts",
      "Featured on sponsor page",
    ],
    cta: "Claim This Level",
  },
  {
    id: "home-run",
    emoji: "⚾",
    name: "Home Run",
    amount: "$500 – $999",
    perks: [
      "Banner at home games",
      "Logo on team gear bags",
      "Social media recognition",
      "Listed on sponsor page",
    ],
    cta: "Get Started",
  },
  {
    id: "triple",
    emoji: "🏃",
    name: "Triple",
    amount: "$250 – $499",
    perks: [
      "Logo on warm-up shirts",
      "Name on website and roster",
      "Social media thank-you post",
      "Listed on sponsor page",
    ],
    cta: "Get Started",
  },
  {
    id: "double",
    emoji: "✌️",
    name: "Double",
    amount: "$100 – $249",
    perks: [
      "Name on team banner",
      "Thank-you social post",
      "Listed on sponsor page",
    ],
    cta: "Get Started",
  },
  {
    id: "single",
    emoji: "🤝",
    name: "Single / In-Kind",
    amount: "Under $100 or Donation",
    perks: [
      "Community supporter listing",
      "Thank-you card from the team",
      "Fundraiser night eligibility",
    ],
    cta: "Get Started",
  },
] as const;
