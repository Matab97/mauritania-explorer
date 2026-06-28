# Mauritania Explorer

Single-page interactive map of Mauritania. Vanilla JS (ES modules), no backend, no build step, no package manager, no tests. Runtime dependencies (MapLibre, fonts, tiles, YouTube) load from CDNs.

## Project structure

- `index.html` — HTML shell only (markup + asset links). No inline CSS/JS.
- `css/styles.css` — all styles.
- `js/` — ES modules, each a focused scope:
  - `state.js` — single shared mutable `state` object (map, LANG, filters, panel, music). Cross-module mutable state lives here; modules read/write `state.x`.
  - `config.js` — `CONFIG` constants + `cubicOut` easing.
  - `icons.js` — inline SVG icon strings (`ICONS`, `PLACE_ICON`, `LINK_ICONS`).
  - `data.js` — `PLACES`, `CAT`, `COORDS`, `TRAIN_LINE`.
  - `i18n.js` — `I18N` dictionary + `t()` translator (reads `state.LANG`).
  - `map.js` — MapLibre init, desert palette, label language, `fly()`, train route + ocean layers. Publishes the map to `state.map`.
  - `markers.js` — place markers, labels, emphasize/deselect, animated train sprite.
  - `filters.js` — category counts + filtering.
  - `panel.js` — info panel open/render/close + prev/next nav.
  - `sand.js` — sand particle canvas, click sand-burst, sand-wave transition.
  - `music.js` — YouTube iframe player + play/pause.
  - `main.js` — entry point: imports modules, wires DOM event listeners (no inline `onclick`), `beginExperience`, keyboard + click handlers.
- `nginx.conf` — sample origin config for serving behind a Cloudflare Tunnel.

The dependency direction is roughly: `main.js` → feature modules → `map.js`/`data.js`/`state.js`. Function-level circular imports between `panel.js` and `markers.js` are intentional and safe (used only at runtime).

## Running

- Static, dependency-free site: nothing to install, build, lint, or test.
- Because it now uses ES modules, it MUST be served over HTTP (a `file://` URL will fail with CORS/module errors).
- Serve the repo root with any static server, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/`.
- Outbound internet access is required for the map/fonts/music to load.
- On first load there is an intro overlay — click a language button ("English" / "العربية") before the interactive map appears.

## Deployment (Cloudflare Tunnel)

- Served by nginx on a self-hosted Linux box, exposed via `cloudflared`. See `nginx.conf` (set `root`, point the tunnel ingress at the configured port).
- `index.html` is sent `no-cache`; JS/CSS/SVG get a short `max-age` so edits propagate within minutes without a build/hashing step.
