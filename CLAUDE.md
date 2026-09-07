# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Astro dev server (default port 4321; if that port is already taken, Astro silently picks the next free one — check the terminal output for the actual URL, and prefer killing the stale process over running two servers).
- `npm run build` — static build to `dist/`. Should always produce 21 pages (7 routes × 3 locales: `es` unprefixed, `/ca/*`, `/en/*`).
- `npm run preview` — serve the built `dist/` output.
- `npx astro check` — type-checks all `.astro`/`.ts` files (not wired into `package.json` scripts). Run this and `npm run build` after any non-trivial change; there is no test suite in this repo, so these two commands plus a manual look are the only verification available.

## Architecture

Clean-architecture Astro site: `src/core/` holds framework-free business logic, `src/presentation/` holds all UI. `src/pages/` contains only thin routing wrappers.

### Feature modules (`src/core/<feature>/`)

Each of `experience`, `education`, `skills`, `cv`, `projects` follows the same internal shape, even though every data source today is just a local JSON file — this is a deliberate seam for swapping in a real API later without touching domain or UI code:

```
domain/models/          — plain interfaces, must stay locale-agnostic (no translated strings)
domain/repository/      — repository interface
infrastructure/dto/     — shape of the raw JSON
infrastructure/datasource/ — reads src/data/*.json, casts to the DTO type
infrastructure/mapper/  — DTO -> domain model
infrastructure/repository/ — implements the domain repository using datasource + mapper
application/usecases/   — one class per use case, takes the repository via constructor
constants.ts            — locale-aware getters (see i18n below), not static exports
```

`src/core/di/container.ts` is the single wiring point: it instantiates every datasource/repository/usecase once and exposes them as `container.getExperiences`, `container.getEducation`, `container.getSkills`, `container.getProjects`, `container.getCVData`, etc. Pages call these directly (`container.getExperiences.execute()`) — there is no other way to reach the data layer.

`src/data/cv.json` backs experience/education/skills/cv; `src/data/projects.json` backs projects (currently placeholder/TODO content).

### Page routing pattern

`src/pages/*.astro` files are pure re-export wrappers with no logic — they just import and render the matching component from `src/presentation/pages/*.astro`. All real page composition (fetching via `container`, computing locale, passing props to section components) lives in `src/presentation/pages/`, never in `src/pages/`.

Because of i18n routing (see below), every route needs **three** wrapper files pointing at the same `presentation/pages/*.astro` component: `src/pages/<route>.astro` (Spanish, default), `src/pages/ca/<route>.astro`, `src/pages/en/<route>.astro`. When adding a new page, create all three wrappers plus the one shared `presentation/pages/<route>.astro`.

### i18n

Configured in `astro.config.mjs` via Astro's built-in `i18n` integration: `es` is the default locale with no URL prefix, `ca` and `en` are prefixed (`/ca/...`, `/en/...`). Route **path segments are not translated** (`/en/experiencia`, not `/en/experience`) — only the rendered content is.

- `src/core/shared/i18n/dictionary.ts` — single source of truth for every UI string (nav, drawer, hero, section titles/eyebrows, CV labels, etc.), keyed by `Locale` (`'es' | 'ca' | 'en'`).
- `src/core/shared/i18n/locale.ts` — `resolveLocale(Astro.currentLocale)` (fall back to default), `localizedPath(path, locale)` (build a locale-prefixed href from a canonical path), `canonicalPath(pathname, locale)` (strip a locale prefix back off).
- Every component reads the locale itself via `resolveLocale(Astro.currentLocale)` and calls the relevant `get*(locale)` helper from a feature's `constants.ts` — there is no prop-drilling of locale through the component tree.
- **CV content data is intentionally not translated** — bio, job descriptions, degree names, institution names, skill items, language names, and status strings (`"en curs"`, `"en pausa"`) stay as authored in `src/data/cv.json` regardless of locale. Only interface chrome goes through the dictionary. This was an explicit product decision, not an oversight — don't translate data-layer content without checking first.
- Because translated labels can't live on a locale-agnostic domain model, `SkillCategory` in `core/skills/domain/models/Skill.ts` deliberately has no `title`/`cvTitle` field. Those are resolved in the presentation layer via `getSkillCategoryMeta(locale)`, looked up by `category.key`. Follow this pattern for any other feature that needs translated labels on top of domain data: keep the domain model clean, resolve display strings at the presentation edge.

### Navigation chrome

`TopBar.astro` (fixed top bar, present on every page via `Layout.astro`) owns the drawer open/close button, the language dropdown, and the theme switch — including **all** of their interactive `<script>` logic. `Drawer.astro` is just the slide-out `<aside>` markup with the nav link list; it has no script of its own. The two components coordinate purely through shared DOM element IDs (`#drawerToggle`, `#drawerOverlay`, `#siteDrawer`, `#pageContent`) manipulated from TopBar's script — don't add drawer-open/close logic to `Drawer.astro` expecting it to run; it belongs in `TopBar.astro`.

### Icons

`src/core/shared/constants/icons.ts` holds real SVG path data — no emoji, ever. Stroke icons are copied verbatim from Lucide (ISC license); brand marks (GitHub, LinkedIn) come from Simple Icons (CC0). Render via `presentation/components/shared/Icon.astro` (`<Icon name="briefcase" />`). When a new icon is needed, pull the actual path data from `https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/<name>.svg` (or Simple Icons for brand logos) rather than approximating it by hand.

### Theming

Dark mode is class-based (`darkMode: 'class'` in `tailwind.config.mjs`), toggled by adding/removing `.dark` on `<html>`. `Layout.astro` has a no-flash inline script that sets the class from `localStorage` (falling back to `matchMedia`) before first paint; `TopBar.astro`'s switch is the only way to change it afterward, persisting to `localStorage['theme']`. Color tokens are CSS custom properties (`--bg`, `--surface`, `--surface-border`, `--text`) defined under `:root` and `.dark` in `src/styles/global.css` — component classes like `.glass-card` and `.neo-panel` read these vars rather than hardcoding light/dark colors, so any new surface-level component should do the same instead of using static Tailwind color classes for backgrounds.

### Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`); used throughout instead of relative `../../..` imports for anything under `core/`.
