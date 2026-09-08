# Paste this whole file into Claude

You are setting up a human contributor on the Sacramento Stars website. Do the setup yourself. Only stop when a human must click, type a password, or install an app.

## Goal

Get this repo running locally, then wait for the human’s next feature request.

- GitHub: https://github.com/mrogers23458/SacramentoStarsWebsite
- Live site: https://sacramento-stars-website.vercel.app

## Hard rule

**Mobile first, then progressive enhancement.** Default styles are for a ~320px phone. Add layout as the viewport grows (see breakpoints in `STYLE_GUIDE.md` if useful). Do not design desktop-first and collapse down.

The human decides everything else (colors, pages, raffle, copy, etc.). `STYLE_GUIDE.md` is only a snapshot of how the site looks today — not a lock on future edits.

## What you can do vs what the human must do

You **can**: detect OS, install Node/Git with a package manager when it works unattended, clone, `npm install`, `npm run dev`, read files, make later code changes.

You **cannot**: finish GitHub login, 2FA, or browser OAuth for them. If an installer GUI, `gh auth login`, or a webpage needs a click, print the URL / command, tell them exactly what to click, then wait.

## Do this in order

### 1. Tools (Node first)

This app needs **Node.js 20 LTS or newer** (Next.js 16) plus `npm` and `git`.

1. Detect OS (`win32` / macOS / Linux).
2. Run `node -v` and `npm -v`.
3. If Node is missing or older than v20, **install it yourself** using the matching block below. Prefer a package manager over sending them to a website.
4. After any install, open a **new** shell (PATH often does not update in the current one) and re-check `node -v`. Do not continue until Node is ≥ 20.

#### Windows

Try this first:

```bash
winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
```

If `winget` is missing, install Git (includes Git Bash) then Node:

```bash
winget install -e --id Git.Git --accept-package-agreements --accept-source-agreements
```

If `winget` fails entirely, tell the human to download the **Windows LTS** installer from https://nodejs.org and run it with the default options (include npm, add to PATH). Then they must close and reopen the terminal.

#### macOS

If Homebrew exists:

```bash
brew install node@20
brew link --overwrite node@20
```

If Homebrew is missing, install it, then Node:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

That Homebrew script may ask the human for their Mac password. Wait for them. Then `brew install node@20`.

Fallback without Homebrew — nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# then in a new shell:
nvm install 20
nvm use 20
```

#### Linux

Prefer nvm (works without sudo):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# then in a new shell:
nvm install 20
nvm use 20
```

If they already use apt and want a system package:

```bash
sudo apt-get update
sudo apt-get install -y nodejs npm
```

Only use apt if the resulting `node -v` is ≥ 20; otherwise switch to nvm.

#### Git

If `git` is missing:

- Windows: `winget install -e --id Git.Git --accept-package-agreements --accept-source-agreements`
- macOS: `brew install git`
- Linux: `sudo apt-get install -y git` (or the distro equivalent)

`gh` (GitHub CLI) is useful for login and PRs. If it is missing, you may still clone over HTTPS. Install `gh` only if they will push:

- Windows: `winget install -e --id GitHub.cli --accept-package-agreements --accept-source-agreements`
- macOS: `brew install gh`
- Linux: see https://github.com/cli/cli/blob/trunk/docs/install_linux.md

### 2. Get the code

If the current folder is already `SacramentoStarsWebsite` with a `.git` remote pointing at that GitHub URL, skip clone.

Otherwise:

```bash
git clone https://github.com/mrogers23458/SacramentoStarsWebsite.git
```

Then work inside that directory. Clone does **not** need a GitHub login (the repo is public).

### 3. Install and run

```bash
npm install
npm run dev
```

Confirm http://localhost:3000 loads.

Do not start building features yet. Wait for the human’s instructions. Keep new UI mobile-first with progressive enhancement.

### 4. Push access (only if they need to send work to GitHub)

Check `gh auth status` (or `git` credentials).

- **Not logged in:** run `gh auth login`, protocol **HTTPS**, and wait for them to finish in the browser. Do not type passwords.
- **Logged in, pushing to the main repo:** they must be a collaborator. If `git push` is rejected, tell them to ask the owner (`mrogers23458`) for access, or use a fork:

```bash
gh repo fork mrogers23458/SacramentoStarsWebsite --remote=true
```

Work on a branch. Do not force-push `main`. Do not commit `.env` files.

### 5. When setup is done

Reply with:

- Node version (`node -v`, must be ≥ 20)
- Where the project lives on disk
- Whether `npm run dev` is running
- Whether GitHub login succeeded
- Whether they can push to origin or should fork / wait for collaborator access

Then stop and wait for their actual website task.

## Where code lives

| Thing | Path |
| --- | --- |
| Pages | `src/app/<route>/page.tsx` |
| UI | `src/components/` |
| Copy / nav | `src/lib/site.ts` |
| Events | `src/lib/events.ts` |
| Colors / CSS | `src/app/globals.css` |
| Logos | `public/logo.png`, `public/logo-mark.png` |
