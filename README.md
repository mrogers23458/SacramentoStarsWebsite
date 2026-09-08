# Sacramento Stars website

Public site for the Sacramento Stars 9–11U baseball program: home, about, events, donations, contact, and a raffle placeholder.

## For Claude / other coding agents

Paste **[CLAUDE_ONBOARDING.md](./CLAUDE_ONBOARDING.md)** into Claude as the first message. It clones the repo, installs Node if needed, runs the app, and stops when GitHub login needs a human.

The only standing UI rule for contributors is **mobile first, then progressive enhancement**.

## Design source of truth

Read **[STYLE_GUIDE.md](./STYLE_GUIDE.md)** before changing UI. Use only the sampled brand colors listed there. Do not add raffle-ticket sales or checkout flows.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4.
