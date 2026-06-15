# Mauritania Explorer

Interactive map of Mauritania — [mauritania.abbad.app](https://mauritania.abbad.app)

A single-page, zero-build web app that lets you explore Mauritania's most striking
places on a stylised desert map. Click any marker to fly to the location and open a
panel with a description, key facts, and links (Instagram, YouTube, Wikipedia, maps).

## Features

- Interactive [MapLibre GL JS](https://maplibre.org/) map with a custom desert palette
- Markers pinned to real coordinates, grouped into four categories: Nature, Historic, Transport, Cities
- Category filter chips and Prev/Next navigation through every place
- 3D terrain + camera tilt for select natural landmarks (Richat, Atar, Terjit, Ben Amera)
- Animated Iron Ore Train sprite travelling the Zouerat → Nouadhibou rail line
- Ambient background music, a world-location inset, and a mobile-responsive layout

## Places

Iron Ore Train · Eye of the Sahara (Richat Structure) · Banc d'Arguin · Chinguetti ·
Oualata · Atar · Terjit Oasis · Tichit · Ben Amera · Nouakchott · Nouadhibou

## Running locally

The app is a single static `index.html` with no build step and no dependencies to
install. Serve the repository root with any static file server and open it in a browser:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

An internet connection is required at runtime: the map library, base map tiles, fonts,
and music are loaded from CDNs (unpkg, OpenFreeMap, Google Fonts, YouTube).

## Tech stack

- Vanilla HTML, CSS, and JavaScript — everything lives in `index.html`
- [MapLibre GL JS](https://maplibre.org/) for map rendering
- [OpenFreeMap](https://openfreemap.org/) vector tiles + AWS terrain tiles for 3D relief

## Credits

Music: Dimi Mint Abba & DJ Dahker.
