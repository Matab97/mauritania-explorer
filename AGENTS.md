# Mauritania Explorer

Single-page interactive map of Mauritania. The entire app is one self-contained file: `index.html` (inline HTML, CSS, and vanilla JS). No backend, no build step, no package manager, no tests.

## Cursor Cloud specific instructions

- This is a static, dependency-free site. There is nothing to install, build, lint, or test. The "update script" is intentionally a no-op.
- To run it, serve the repo root with any static file server, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/`. (Opening `index.html` directly as a `file://` URL also mostly works, but a static server is preferred so CDN/CORS behave normally.)
- The app loads runtime dependencies from CDNs (MapLibre GL JS from unpkg, base map tiles from `tiles.openfreemap.org`, fonts from Google Fonts) and embeds a YouTube iframe for music. Outbound internet access is required for the map to render; without it you only get the page chrome.
- On first load there is an intro overlay with a "Tap to Begin" button — you must click it before the interactive map appears.
