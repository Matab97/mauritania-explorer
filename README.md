# Mauritania Explorer

Interactive map of Mauritania — [mauritania.abbad.app](https://mauritania.abbad.app)

A single-page, zero-build web app that lets you explore Mauritania's most striking
places on a stylised desert map. Click any marker to fly to the location and open a
panel with a description, key facts, and links (Instagram, YouTube, Wikipedia, maps).

## Features

### Map & navigation
- [MapLibre GL JS](https://maplibre.org/) with a custom dark desert colour palette
- Cinematic intro: on first load the map starts at a West-Africa overview and
  flies into Mauritania when you tap **Tap to Begin**
- Markers pinned to real-world coordinates (sourced from OSM), anchored to their
  exact point so border-adjacent icons stay inside the country
- Category filter pills (Nature · Historic · Transport · Cities) — each lights up
  in its own colour when active (green / terracotta / teal / stone)
- Prev / Next navigation through every place in the panel

### Animated Iron Ore Train
- Detailed SVG locomotive + 3 hopper wagons that switch between loaded (iron ore
  heaped on wagons, eastbound) and empty (return leg, westbound)
- Follows the real Mauritania Railway (SNIM) polyline traced from OpenStreetMap —
  Zouérat → Choum → Nouadhibou, 73 waypoints
- Cartoon wagon-wobble and locomotive smoke animations

### Custom desert iconography
Every location has its own hand-crafted SVG icon that reflects the place type:

| Icon | Location |
|------|----------|
| Concentric geological rings | Eye of the Sahara (Richat Structure) |
| Flamingo silhouette | Banc d'Arguin |
| Mosque minaret | Chinguetti |
| Manuscript scroll | Oualata |
| Neolithic ruins | Tichit |
| City skyline with minaret | Mauritanian cities |
| Palm oasis with pool | Terjit Oasis |
| Granite monolith | Ben Amera |
| Nautical anchor | Nouadhibou |

### Atmosphere & animations
- Sand particles — 55 golden grains of mixed sizes drifting across the screen
- Atlantic coastline wave — traveling teal dash animation along the Mauritanian
  coast (27 real coordinate waypoints)
- Camel walking across the header
- Entry overlay with bobbing camel, star field, and SVG dune silhouettes
- World inset map showing Mauritania's location in West Africa

### UI
- Mapbox-style emphasize / deselect marker: clicked marker scales up with a
  per-category colour glow; previous marker auto-deselects
- Desert-themed map zoom controls (dark background, gold icon tint)
- Info panel slides in with a large hero SVG icon coloured by category gradient
- Ambient background music (Dimi Mint Abba / DJ Dahker) with play / pause

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
- [MapLibre GL JS 4.5.0](https://maplibre.org/) for map rendering
- [OpenFreeMap](https://openfreemap.org/) dark vector tiles
- No build step, no npm, no framework

## Credits

Music: Dimi Mint Abba & DJ Dahker.
