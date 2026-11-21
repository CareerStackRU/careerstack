# CareerStack

**Learn. Build. Prove.**

CareerStack is a career-development platform that helps business students turn
coursework into real projects, portfolios, and verifiable certificates. It
launches with Supply Chain Management at Rutgers, then expands to other
business majors. Projects — hands-on work built on real company datasets — are
the core product; certifications are supporting credentials.

This repo is the CareerStack web app: Next.js (App Router) + TypeScript +
Tailwind CSS v4, with Supabase for accounts/data and Vercel for hosting
(added in later build chunks).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

Copy `.env.example` to `.env.local` when you need environment variables
(never commit `.env.local`).

## Pages in this build (Chunk 1 — foundation + design system)

- `/` — homepage skeleton: outcome-first hero, 3-step "How it works"
  (Learn → Build → Prove), and the Supply Chain hub with the
  Certifications/Projects toggle and catalog cards from the founder's
  sketches.
- `/design-system` — living reference: brand color tokens, typography,
  buttons, difficulty stars, the toggle, and catalog cards.

## Design tokens

| Token | Hex | Use |
| --- | --- | --- |
| `cs-blue` | `#1557B0` | CareerStack Blue — primary |
| `cs-navy` | `#0B1F3A` | Deep Navy — headings, logo "Career" |
| `cs-bright` | `#2563EB` | Bright Blue — highlights & accents |
| `cs-light` | `#EAF2FF` | Light Blue — backgrounds & cards |
| `cs-gold` | `#F5B301` | Gold — Certifications toggle, stars |
| `cs-gray-dark` | `#1F2937` | Dark Gray — body text |
| `cs-gray-light` | `#F3F4F6` | Light Gray — borders & secondary bg |

Font: **Inter** (via `next/font/google`). Tokens are defined CSS-first in
`src/app/globals.css` under `@theme` (Tailwind v4). Components live in
`src/components/` (Logo, Header, Footer, Button, Card, DifficultyStars,
CertProjectsToggle, CatalogCard, AIBubble, SupplyChainHub).

One deliberate deviation from the original sketches: on desktop the header
shows an inline top nav (Home, Certifications, Projects, Portfolio, Pricing)
plus a Log In / Sign Up button, with secondary/account items in an Account
dropdown; the hamburger menu is mobile-only. The logo sits top-left and links
home on every page.

## For the founder: publish this code

### 1. Create the repo under the CareerStack GitHub organization

1. Sign in to GitHub as **max@careerstack.us** (email + password — do not use
   the "Sign in with Google" button; it loops on Workspace accounts).
2. Top-right **+** menu → **New organization** → Free plan → name it
   `CareerStack` (skip if already created).
3. In the organization: **New repository** → name `careerstack`, Public or
   Private, and do **not** add a README/gitignore (this code already has
   them).

### 2. Push this code

From this folder on your machine:

```bash
git remote add origin https://github.com/CareerStack/careerstack.git
git branch -M main
git push -u origin main
```

(Adjust the URL if the org/repo name differs.)

### 3. Import into Vercel

1. Sign in to Vercel (Continue with GitHub).
2. **Add New → Project** → import the `careerstack` repository.
3. Framework preset: **Next.js** (auto-detected). Root directory: `./`.
4. Add environment variables from `.env.example` when they exist (Supabase
   values arrive in Chunk 4). Deploy.
5. Later (Chunk 3): attach the `careerstack.us` domain under
   Project → Settings → Domains and update DNS at GoDaddy as Vercel directs.

## Build roadmap

Chunk 1 (this build): foundation + design system. Next: Chunk 2 public
website pages, Chunk 3 go-live on careerstack.us + Founding 100 signup,
Chunk 4 accounts + dashboard (Supabase), Chunk 5 first project (Inventory
Optimization), Chunk 6 first certification (Supply Chain Fundamentals).
