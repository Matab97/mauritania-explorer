# Mauritania Explorer

Interactive map of Mauritania — [mauritania.abbad.app](https://mauritania.abbad.app)

A single-page, zero-build web app that lets you explore Mauritania's most striking
places on a stylised desert map. Click any marker to fly to the location and open a
panel with a description, key facts, and links (YouTube, Wikipedia, maps).

## Features

### Map & navigation
- [MapLibre GL JS](https://maplibre.org/) with a custom dark desert colour palette
- Cinematic intro: on first load the map starts at a West-Africa overview and
  flies into Mauritania when you choose a language
- Markers pinned to real-world coordinates (sourced from OSM), anchored to their
  exact point so border-adjacent icons stay inside the country
- Category filter pills (Nature · Historic · Transport · Cities) — each lights up
  in its own colour when active, with themed SVG category glyphs
- Prev / Next navigation through every place in the panel

### Signature sand-wave transition
- A full-viewport dune curtain (layered SVG ridges + ochre gradient + drifting
  grain texture) washes across the screen every time a location opens or closes,
  swapping panel content at the crest so the reveal feels cinematic
- Also plays on the intro hand-off (language selection → live map)
- `prefers-reduced-motion` fallback skips the animation entirely

### Animated Iron Ore Train
- Detailed SVG locomotive + 3 hopper wagons that switch between loaded (iron ore
  heaped on wagons, eastbound) and empty (return leg, westbound)
- Follows the real Mauritania Railway (SNIM) polyline traced from OpenStreetMap —
  Zouérat → Choum → Nouadhibou, 73 waypoints
- Cartoon wagon-wobble and locomotive smoke animations

### Culturally-rooted SVG iconography
Every location has its own hand-crafted icon grounded in the place's identity:

| Icon | Location |
|------|----------|
| Concentric geological rings (as seen from orbit) | Eye of the Sahara (Richat Structure) |
| Pink flamingo with hooked bill | Banc d'Arguin |
| Old mosque — domed hall, stone minaret, crescent finial | Chinguetti |
| Red-ochre painted doorway with white geometric motifs | Oualata |
| Stepped Neolithic ruins | Tichit |
| City skyline with mosque crescent | Mauritanian cities |
| Date palm — curved trunk, arching fronds, date clusters | Terjit Oasis |
| Rounded granite inselberg dome | Ben Amera |
| Lateen-sail pirogue on Atlantic waves | Nouadhibou |
| Fortified ksar gate with crenellated towers | Atar |
| Side-view locomotive hauling an ore hopper | Iron Ore Train |

### Desert-nomad branding
- **Layered Saharan palette** — deep night ink, dune ochres, saffron gold, terracotta/henna,
  oasis teal, and national-flag green/gold accents
- **Reem Kufi** geometric Arabic display font for headings and the logo wordmark
- **Logo** — dune-wave ridges + gold crescent-and-star motif; matching `favicon.svg`
- **Moorish zellige lattice** (8-point khatam star pattern) bands the panel hero
- **Category filter pills** with themed glyphs replace plain coloured dots
- **Menus, nav buttons, music bar, and map controls** unified into one carved-leather
  desert look

### Atmosphere & animations
- Sand particles — 55 golden grains of mixed sizes drifting across the screen
- Sand burst — grains explode from every click point
- Camel walking across the header
- Entry overlay with star field and SVG dune silhouettes
- World inset map showing Mauritania's location in West Africa

### UI
- Mapbox-style emphasize / deselect marker: clicked marker scales up with a
  per-category colour glow; previous marker auto-deselects
- Desert-themed map zoom controls (dark background, gold icon tint)
- Info panel slides in (desktop: right drawer; mobile: bottom sheet) with a large
  hero SVG icon coloured by category gradient
- Ambient background music (Dimi Mint Abba / DJ Dahker) with play / pause
- EN / Arabic language toggle — full RTL layout in Arabic mode, map labels switch
  to Arabic place names, all panel content localised

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
- Fonts: Inter · Amiri · [Reem Kufi](https://fonts.google.com/specimen/Reem+Kufi)
- No build step, no npm, no framework

## Deployment

The app is deployed on a self-hosted server (`abbad-Aspire-VX5`) reachable over a
Tailscale network at `100.64.0.10`, exposed to the internet via a
**Cloudflare Tunnel** (`cloudflared`), and orchestrated with **k3s** (lightweight
Kubernetes).

### Architecture

```
Browser → Cloudflare Tunnel → Traefik ingress (k3s) → mauritania Service → nginx:alpine pod
```

The `index.html` and `favicon.svg` are stored as a Kubernetes **ConfigMap**
(`mauritania-html` in the `apps` namespace) and mounted into an `nginx:alpine`
container at `/usr/share/nginx/html`.

### Re-deploying after a code change

1. **Edit** `index.html` (and/or `favicon.svg`) locally.
2. **Commit and push** to GitHub:
   ```bash
   git add index.html favicon.svg
   git commit -m "your message"
   git push origin main
   ```
3. **Update the ConfigMap** and roll the deployment on the server:
   ```bash
   # Copy files to the server (password: 12345678)
   scp index.html favicon.svg abbad@100.64.0.10:/tmp/

   # SSH in and apply
   ssh abbad@100.64.0.10
   sudo k3s kubectl create configmap mauritania-html -n apps \
     --from-file=index.html=/tmp/index.html \
     --from-file=favicon.svg=/tmp/favicon.svg \
     --dry-run=client -o yaml | sudo k3s kubectl apply -f -
   sudo k3s kubectl rollout restart deploy/mauritania -n apps
   sudo k3s kubectl rollout status deploy/mauritania -n apps --timeout=90s
   rm /tmp/index.html /tmp/favicon.svg
   ```

### Useful kubectl commands

```bash
# Check pod status
sudo k3s kubectl get pods -n apps -l app=mauritania

# Tail nginx logs
sudo k3s kubectl logs -n apps -l app=mauritania -f

# Inspect the ConfigMap
sudo k3s kubectl get cm mauritania-html -n apps -o yaml
```

## Credits

Music: Dimi Mint Abba & DJ Dahker.
