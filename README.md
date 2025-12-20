# volteryde — Landing Page

A marketing/landing site built with Next.js and Tailwind CSS. It showcases volteryde's product features and download CTAs with rich animations courtesy of Framer Motion.

This README explains how the project is organized, how to run it locally, and where to find the main pieces of code so contributors can onboard quickly.

## Quick links

- Project root: `app/` (Next.js App Router)
- Components: `components/`
- Shared animations: `libs/animation.ts`
- Mock data: `mock/index.ts`
- Types: `types/index.ts`
- Main layout: `app/layout.tsx`
- Home page: `app/page.tsx`

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

See `package.json` for exact versions.

## Getting started (local development)

Prerequisites:

- Node.js (18+ recommended)
- npm (or pnpm/yarn if you prefer)

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Useful scripts (from `package.json`):

- `npm run dev` — start dev server (uses Turbopack)
- `npm run build` — create a production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project structure (high level)

- app/
  - layout.tsx         — Root layout (loads global font, Navbar, Footer)
  - page.tsx           — Home route; composes the main page sections
  - globals.css        — global Tailwind/css utilities
- components/
  - global/
    - Navbar.tsx       — top navigation (mobile + desktop)
    - Footer.tsx       — site footer
    - index.ts         — re-exports
  - Home/
    - HeroSection.tsx  — large hero with parallax image and CTAs
    - HowItWorks.tsx   — step-by-step section (uses `mock/steps`)
    - Getvolteryde.tsx  — download CTA buttons
    - CitySpace.tsx    — illustrative city/bus visual
    - index.tsx        — re-exports
- libs/
  - animation.ts       — Framer Motion variants used across components
- mock/
  - index.ts           — mock content: nav links and steps
- public/
  - assets/            — images and icons used by the site
- types/
  - index.ts           — small shared TypeScript interfaces

This is a small single-page marketing site (several sections on the home route). The code favors readable, composition-based React components with Framer Motion for animation.

## Key files explained

- `app/layout.tsx`
  - Loads the Google Poppins font via `next/font/google`.
  - Wraps pages with `Navbar` and `Footer` so these appear everywhere.

- `components/global/Navbar.tsx`
  - Implements responsive navigation with a mobile slide-down menu.
  - Uses `useScroll` + `useMotionValueEvent` from Framer Motion to toggle a compact header when scrolled.
  - Navigation items come from `mock/index.ts` (`navLinks`).

- `components/Home/*` sections
  - Each section is a self-contained component using Framer Motion for entrance and scroll-based effects.
  - `HeroSection` uses parallax `useScroll` transforms on a large background image.
  - `HowItWorks` consumes `steps` from `mock/index.ts` and uses `libs/animation.ts` variants.

- `libs/animation.ts`
  - Central place for Framer Motion variants (container/child coordination, title, buttons, etc.). Reuse these to keep animation consistent.

- `mock/index.ts`
  - Provides two simple exports: `steps` (array of step objects) and `navLinks` used by the navbar and sections. Useful for local dev and prototyping.

## Type definitions

- `types/index.ts` defines small interfaces used by the mock data:
  - `Step` { number, title, description }
  - `NavLink` { label, href }

Strict typing is intentionally minimal to keep components lightweight.

## Accessibility notes

- The components attempt to follow a11y best practices (semantic elements, visible focus, reduced motion patterns via Framer Motion where appropriate).
- One validator warning that commonly appears with JSX/TSX is about ARIA attribute values. For example, `aria-expanded` should be a valid ARIA string ("true"/"false") in some HTML validators. React accepts boolean values, but static validators sometimes expect strings. If you see a lint or validator error like:

  "Invalid ARIA attribute value: aria-expanded=\"{expression}\""

  then change the attribute in `components/global/Navbar.tsx` to explicitly render a string:

  ```tsx
  // inside the <button>
  aria-expanded={isOpen ? 'true' : 'false'}
  ```

  Alternatively, you can ensure the value is a boolean (React supports this):

  ```tsx
  aria-expanded={!!isOpen}
  ```

  The string form is the most compatible with HTML validators and accessibility tooling.

## Styling / Tailwind

- Tailwind is configured (see `postcss.config.mjs` and `tailwindcss` dependency). Global utilities are in `app/globals.css`.
- The repo uses Tailwind v4 dependency in devDependencies; check `tailwind.config` if you plan to customize the design system.

## Animations

- Framer Motion powers entrance/scroll animations and transforms across sections. Variants are declared in `libs/animation.ts` and consumed via `motion.*` components in each component.

## Linting and formatting

- ESLint is configured; run `npm run lint`.
- There is no Prettier config shipped — you can add one if you prefer automatic formatting.

## Tests

- There are no automated tests in this repository. Consider adding a small test setup (Jest + React Testing Library or Vitest) if you want CI coverage for crucial UI behaviors.

## Deployment

- The project is ready to be deployed to Vercel (recommended for Next.js). Build using `npm run build` and serve with `npm run start` for a production preview.

## Adding features / contributing

1. Create a new branch for your feature: `git switch -c feat/your-feature`.
2. Implement the change in `components/` or `app/`.
3. Keep animations in `libs/animation.ts` when shared across components.
4. Update `mock/index.ts` or add fixtures for demo content.
5. Open a pull request with a descriptive title and summary.

Checklist for PRs:

- Does the UI work at multiple screen sizes? (mobile-first)
- Are motion/animations respectful of reduced-motion preferences?
- Are interactive controls keyboard accessible and have visible focus states?

## Next steps / suggestions

- Add unit/integration tests.
- Add CI (GitHub Actions) to run lint/build on PRs.
- Add Storybook for isolated component development and visual review.

## Contact

If you need context on design decisions or assets, contact the project owner or refer to the comments in the components. The `Footer` includes placeholder contact info.

---

If you'd like, I can also:

- Update `components/global/Navbar.tsx` to change `aria-expanded` to the string form to resolve the validator error.
- Add a basic GitHub Actions workflow to lint and build on push.

Tell me which of those you'd like me to do next.
