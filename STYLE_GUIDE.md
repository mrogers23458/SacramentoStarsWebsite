# Sacramento Stars — UI style guide for code agents

Use this file as the design contract. If a change conflicts with this guide, follow the guide.

**Related files:** `src/app/globals.css` (tokens + component classes), `src/lib/site.ts` (copy + nav), `src/components/*` (shared UI).

---

## Product rules

1. This is a **public team website**, not a raffle admin app.
2. **Do not invent colors.** Only the hex values in [Color tokens](#color-tokens) are allowed (plus transparent overlays of those colors, e.g. `border-white/15`).
3. **Mobile first.** Write the default CSS for a 320px-wide phone. Add layout at the breakpoints below; never start from a desktop grid and collapse down.
4. No dark-mode theme. The live brand screens are light page + navy header/footer.

---

## Color tokens

Sampled from the existing Stars fundraising screens (dashboard cards, header, forms, primary CTAs). CSS variables live on `:root` in `src/app/globals.css`. Tailwind names use the `stars-` prefix (`bg-stars-navy`, `text-stars-muted`, …).

| Token | Hex | Tailwind | Use |
| --- | --- | --- | --- |
| Navy | `#243970` | `stars-navy` | Header/footer, primary buttons, stat cards, serif headings on light backgrounds |
| Navy mid | `#35497b` | `stars-navy-mid` | Secondary solid buttons, inactive mobile nav pills, hover on navy |
| Navy deep | `#25325c` | `stars-navy-deep` | Text on rose buttons, secondary button label |
| Navy heading | `#404970` | `stars-navy-heading` | Form labels, kicker text on white |
| Red | `#a03233` | `stars-red` | High-emphasis CTA, active nav, highlight stat card, badges, required asterisks, event dates |
| Rose | `#dfb3b4` | `stars-rose` | Soft primary form submit / “give today” |
| Cream | `#faf7f0` | `stars-cream` | Recessed callout panels, confirmation strips |
| Page bg | `#fafafa` | `stars-bg` | Default document background |
| White | `#ffffff` | `stars-white` | Cards, inputs, text on navy/red |
| Border | `#e4e4e4` | `stars-border` | Card and input 1px borders |
| Ink | `#2b2b2b` | `stars-ink` | Body text (also `body` color) |
| Muted | `#717171` | `stars-muted` | Helper copy, descriptions |
| Placeholder | `#8d8d8d` | `stars-placeholder` | Input placeholders |
| Mist | `#adb3c9` | `stars-mist` | Header kicker, footer muted text |
| Mist light | `#bfc6d6` | `stars-mist-light` | Top of hero gradient, hero lede |
| Logo red | `#a52934` | `stars-logo-red` | Official seal inner field. Do not replace `stars-red` on buttons. |
| Logo blue | `#143da7` | `stars-logo-blue` | Star and SS outlines on the official marks |

### Color roles (do not mix)

- **Navy** = identity, chrome, default solid button.
- **Red (`#a03233`)** = active / urgent / donate emphasis. Never use as a large page background.
- **Logo red / logo blue** = sampled from the official PNG seals. Use them only when matching logo artwork, not as extra UI palettes.
- **Rose** = friendly submit on forms. **Text on rose must be navy deep (`#25325c`)**, not white — white on `#dfb3b4` fails contrast.
- **White on navy or red** for labels and numbers on stat cards.
- **Cream** only as a nested surface, never the full page.

### Forbidden

Black (`#000`), Tailwind default palettes (`blue-600`, `rose-500`, `zinc-900`, …), gradients that are not the hero mist→navy stack, colored shadows, neon accents.

Hero gradient (already in `.hero-gradient`):

```css
linear-gradient(180deg, #bfc6d6 0%, #adb3c9 18%, #35497b 52%, #243970 100%)
```

---

## Typography

| Role | Family | Tailwind | Weight | Notes |
| --- | --- | --- | --- | --- |
| Headings, prices, logo wordmark | Playfair Display | `font-serif` | 700 | Page titles, card titles, dollar amounts |
| UI, body, nav, buttons, labels | Inter | `font-sans` (default) | 400–700 | Buttons are 700 |

- Page `<h1>`: serif, ~`text-4xl` on small phones, `se:text-5xl`, `md:text-6xl`. Line height tight (`leading-tight` / `leading-[1.1]`).
- Section `<h2>`: serif, `text-3xl` → `md:text-4xl`, color `stars-navy`.
- Kickers (small all-caps labels): sans, `text-xs`, `tracking-[0.16em]`–`0.18em`, `uppercase`.
- Body: sans, `text-sm` on mobile is OK for supporting copy; `se:text-base` / `md:text-base` when it is the main paragraph.
- Do not use Geist, Arial-as-brand, or a third display font.

---

## Breakpoints (Chrome DevTools + Tailwind)

Mobile-first `min-width` queries. Defaults are for **320px** (Galaxy Fold / smallest inspect width).

| Name | `min-width` | rem | Chrome inspect device (approx.) |
| --- | ---: | ---: | --- |
| _(base)_ | 0 / 320px | — | Responsive 320, Galaxy Fold 280–320 |
| `xs` | 320px | 20 | Extra-small phones |
| `se` | 375px | 23.4375 | **iPhone SE** |
| `iphone` | 390px | 24.375 | **iPhone 12 / 13 / 14 Pro** |
| `pixel` | 412px | 25.75 | **Pixel 7**, Galaxy S20 Ultra, Galaxy A51/71 |
| `plus` | 430px | 26.875 | **iPhone 14/15/16 Pro Max** |
| `duo` | 540px | 33.75 | **Surface Duo** |
| `sm` | 640px | 40 | Large phone / small landscape |
| `md` | 768px | 48 | **iPad Mini**, tablet portrait |
| `air` | 820px | 51.25 | **iPad Air** |
| `lg` | 1024px | 64 | **iPad Pro**, Nest Hub, laptop |
| `xl` | 1280px | 80 | **Nest Hub Max**, 13" laptop |
| `2xl` | 1536px | 96 | Large desktop |
| `fhd` | 1920px | 120 | Full HD inspect width |

Also used in the wild (no extra token; sit between existing ones): Surface Pro 7 **912px** (use `air`/`lg`), iPad Pro 11" **834px** (use `air`).

### What changes at each major step

- **320–429:** Single column. Full-width buttons (`width: 100%` on `.btn`). Hamburger nav. Stat cards **2 columns**. Page padding 16–20px (`.page-wrap`).
- **md 768:** Horizontal spacing 32px. Cards can go 2–3 columns. Buttons may shrink to `width: auto`. Still hamburger until `lg`.
- **lg 1024:** Desktop nav in the header. Content max-width `72rem`. Hero can become a 3-part grid (logo / copy / actions).
- **xl+:** More vertical padding on heroes; do not stretch text to the full 1920px — keep `.page-wrap` max width.

Prefer `se:`, `md:`, `lg:`, `xl:` in class lists. Use `iphone` / `pixel` / `plus` / `air` only when a layout actually breaks on that device.

---

## Spacing, radius, touch

- Page gutter: `.page-wrap` (do not invent a second container width).
- Vertical section padding: `py-8` mobile → `md:py-12` / `md:py-14` → `lg:py-16` / `lg:py-20` for heroes.
- Gaps: `gap-3` tight card grids, `gap-4`–`gap-6` section stacks, `gap-8`–`gap-10` desktop splits.
- **Radius:** buttons `0.5rem` (`.btn` / `rounded-btn`), inputs `0.75rem` (`rounded-input`), cards `1rem` (`rounded-card`). Badges fully pill (`rounded-full`).
- **Touch targets:** 48px min height (`min-h-12` / `.btn`). Header hamburger is 48×48.
- No drop shadows. Depth = border + surface color (white on `#fafafa`, cream nested on white).

---

## Components

Reuse classes in `globals.css` instead of restyling from scratch.

| Class | Behavior |
| --- | --- |
| `.btn` + `.btn-primary` | Navy fill, white type |
| `.btn-accent` | Red fill, white type — Donate / active emphasis |
| `.btn-soft` | Rose fill, navy-deep type — forms |
| `.btn-secondary` | White fill, 2px navy border |
| `.card-panel` | White, 1px `#e4e4e4`, 16px radius, padding |
| `.card-stat` | Colored metric tile; label top, value bottom (dashboard language) |
| `.field-label` / `.field-input` / `.field-textarea` / `.field-select` | Form controls |
| `.badge-pill` | Red capsule, white uppercase type |
| `.hero-gradient` | Mist → navy vertical gradient |

`Button` in `src/components/Button.tsx` wraps those classes and can render `<Link>` or `<button>`.

### Logos

Do **not** redraw the seal in SVG. Use the official PNGs (black background punched to transparent):

| File | Use |
| --- | --- |
| `public/logo.png` | Full circular seal. Header + home hero via `<Logo />`. Red field, white California, arched **SACRAMENTO STARS** / **EST. 2024**, ring of white stars with blue outlines. |
| `public/logo-mark.png` | Alternate mark. Footer and compact spots via `<Logo variant="mark" />`. Star ring, red disc, California outline, interlocking **SS**. |
| `src/app/icon.png` | Favicon, derived from the mark. |

`Logo` in `src/components/Logo.tsx` is a `next/image` wrapper. Keep the circular crop; do not add drop shadows or extra rings.

### Header

- Sticky, navy, white type.
- Official seal left, kicker `SACRAMENTO STARS 9–11U` in mist + tracking, serif short name beside it.
- `< lg`: hamburger. Open menu is stacked full-width pills. **Active route = red.** Inactive = navy mid.
- `lg+`: inline text pills. Same active treatment.
- Lock body scroll while the mobile menu is open.

### Footer

- Navy background, mist supporting text, red Donate button.
- Use the alternate mark (`variant="mark"`), not a second copy of the full wordmark seal.

### Stat cards

- 2×2 on phones, 4 across from `md`.
- One card may be red; the rest navy. Label is smaller/lighter white; value is large sans bold.

### Donation amount tiles

- White cards, serif price, optional `.badge-pill` overlapping the top-right (`Best Value` / `Popular`).
- Selected state: navy border + `ring-2 ring-stars-navy`.
- Helper strip underneath uses cream, not a second hero.

---

## Layout recipes

**Inner page:** `PageHero` (gradient + serif H1 + lede) then `.page-wrap` sections.

**Home:** gradient hero with logo + two side-by-side CTAs (Donate red, Events navy mid) → stat grid → three `card-panel`s → events preview on white → donate + raffle teaser.

**Raffle:** only `ComingSoon`. Copy may say a fundraiser is planned. **No prices, tickets, or payment methods on that page.**

---

## UX copy

- Voice: direct, local, family-friendly. No sports-marketing clichés stacked on each other.
- Team name: **Sacramento Stars**. Age band: **9–11U**. Founded **2024**.
- Required fields: red asterisk (`text-stars-red`).
- Empty/error: muted or red sentence under the control — not toast libraries.

---

## Accessibility

- Skip link `.skip-link` in `SiteShell`.
- `:focus-visible` uses 2px navy outline, offset 3px.
- Official logo `<Image>` includes a descriptive `alt` (`Sacramento Stars`).
- Contrast: never put muted gray (`#717171`) on navy; never put white on rose.
- Mobile nav button must keep an accessible name (`Open menu` / `Close menu`).

---

## File map for new work

| Task | Where |
| --- | --- |
| New page | `src/app/<route>/page.tsx` + metadata |
| Shared chrome | `src/components/SiteHeader.tsx`, `SiteFooter.tsx`, `SiteShell.tsx` |
| Brand copy / nav | `src/lib/site.ts` |
| Calendar | `src/lib/events.ts` |
| Tokens / CSS components | `src/app/globals.css` |
| Logo | `src/components/Logo.tsx`, `public/logo.png`, `public/logo-mark.png`, `src/app/icon.png` |

Stack: Next.js App Router, TypeScript, Tailwind v4 (`@import "tailwindcss"`). Client components only when state is required (header menu, donate chooser, contact form).

---

## Review checklist

- [ ] Colors are tokens from this file only
- [ ] Default layout works at 320px and 375px without horizontal scroll
- [ ] Inspected at 390, 430, 768, 820, 1024, 1280 (Chrome device mode)
- [ ] Buttons are ≥ 48px tall
- [ ] Headings serif, UI sans
- [ ] No raffle ticket / checkout UI
- [ ] Raffle route still “Coming soon” unless explicitly replaced
