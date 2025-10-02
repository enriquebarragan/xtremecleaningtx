# Codex Agent Notes

- Project root: `c:/Users/enrique/projects/xtemecleaningtx`
- Framework: Astro 5 (`npm run dev`, `npm run build`)
- Styling: Tailwind CSS via `@astrojs/tailwind` (`src/styles/tailwind.css`, `tailwind.config.js`)
- Shared content: `src/data/services.js` & `src/data/locations.js` drive service/location pages
- Key routes: `/` (`src/pages/index.astro`), `/services/*`, `/locations/*`, `/process`, `/reviews`, `/contact`
- Server config: `Caddyfile` serves the built `dist/`
- Keep files ASCII-only unless the user explicitly requests otherwise
