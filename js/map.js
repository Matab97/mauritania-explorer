import { state } from './state.js';
import { CONFIG, cubicOut } from './config.js';
import { TRAIN_LINE } from './data.js';
import { addMarkers, initTrainSprite } from './markers.js';
import { updateCategoryCounts } from './filters.js';
import { openPlace } from './panel.js';

// ── RTL text shaping plugin — makes MapLibre join/reorder Arabic glyphs ───────
// Without this, Arabic labels render left-to-right and disconnected (scrambled).
try {
  maplibregl.setRTLTextPlugin(
    'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js',
    null, true /* lazy load */
  );
} catch(e) {}

// ── MapLibre init ─────────────────────────────────────────────────────────────
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://tiles.openfreemap.org/styles/dark',
  center: CONFIG.startCenter,
  zoom:   CONFIG.startZoom,
  minZoom: 2.0,          // wide during intro; tightened after zoom-in
  maxZoom: CONFIG.maxZoom,
  attributionControl: true,
  // maxBounds set after intro animation ends
  pitchWithRotate: false,
  fadeDuration: 100,
});
state.map = map;

map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');

map.on('style.load', () => {
  applyDesertPalette();
  setMapLanguage(state.LANG);
  addTrainLayer();
  addOceanShimmer();
  addMarkers();
  initTrainSprite();
  updateCategoryCounts();
  // Map stays at the wide Africa view until the overlay is tapped
});

// ── Map label language ────────────────────────────────────────────────────────
// Switch every symbol layer's text-field between the English and Arabic name
// fields exposed by the OpenMapTiles schema (name:en / name:ar), with fallbacks.
export function setMapLanguage(lang) {
  const field = lang === 'ar'
    ? ['coalesce', ['get','name:ar'], ['get','name']]
    : ['coalesce', ['get','name:en'], ['get','name:latin'], ['get','name']];
  const styleData = map.getStyle();
  if (!styleData || !styleData.layers) return;
  styleData.layers.forEach(layer => {
    if (layer.type === 'symbol' && layer.layout && layer.layout['text-field'] !== undefined) {
      try { map.setLayoutProperty(layer.id, 'text-field', field); } catch(e) {}
    }
  });
}

// ── fly() — centralised flyTo with cubic-out easing (from Mapbox reference) ──
export function fly(opts) {
  const o = Object.assign(
    { center: CONFIG.center, zoom: CONFIG.restingZoom, duration: CONFIG.flyDuration },
    opts
  );
  map.flyTo({
    center:    o.center,
    zoom:      o.zoom,
    essential: true,
    duration:  o.duration,
    easing:    cubicOut,
  });
}

// ── Desert colour palette ─────────────────────────────────────────────────────
function applyDesertPalette() {
  const styleData = map.getStyle();
  if (!styleData || !styleData.layers) return;
  const waterLayers = ['water','ocean','water-shadow','waterway'];
  styleData.layers.forEach(layer => {
    const id = layer.id;
    if (id === 'background' || id === 'land' || id === 'landcover') {
      try { map.setPaintProperty(id, 'background-color', '#1e1508'); } catch(e) {}
      try { map.setPaintProperty(id, 'fill-color',       '#1e1508'); } catch(e) {}
    }
    if (waterLayers.some(w => id.startsWith(w))) {
      try { map.setPaintProperty(id, 'fill-color', '#0e2030'); } catch(e) {}
      try { map.setPaintProperty(id, 'line-color', '#0e2030'); } catch(e) {}
    }
    if (id.includes('border') || id.includes('boundary')) {
      try { map.setPaintProperty(id, 'line-color',   '#c0622a'); } catch(e) {}
      try { map.setPaintProperty(id, 'line-opacity', 0.7);       } catch(e) {}
    }
    if (id.includes('label') || id.includes('place') || id.includes('city')) {
      try { map.setPaintProperty(id, 'text-color',       '#c8a870'); } catch(e) {}
      try { map.setPaintProperty(id, 'text-halo-color',  '#1a1208'); } catch(e) {}
    }
  });
}

// ── Train route layer ─────────────────────────────────────────────────────────
function addTrainLayer() {
  map.addSource('train-route', {
    type: 'geojson',
    data: { type: 'Feature', geometry: { type: 'LineString', coordinates: TRAIN_LINE } }
  });
  map.addLayer({
    id: 'train-bg',   type: 'line', source: 'train-route',
    layout: { 'line-cap': 'round', 'line-join': 'round' },
    paint:  { 'line-color': '#4a9db5', 'line-width': 10, 'line-opacity': .18 }
  });
  map.addLayer({
    id: 'train-line', type: 'line', source: 'train-route',
    layout: { 'line-cap': 'round', 'line-join': 'round' },
    paint:  { 'line-color': '#7ec8e3', 'line-width': 2.5, 'line-dasharray': [2,5], 'line-opacity': .8 }
  });
  // Zouerat terminal dot
  const dotEl = document.createElement('div');
  dotEl.className = 'mb-train-dot';
  dotEl.onclick = () => openPlace('train');
  new maplibregl.Marker({ element: dotEl, anchor: 'center' }).setLngLat([-12.471, 22.735]).addTo(map);
}

// ── Ocean shimmer ─────────────────────────────────────────────────────────────
function addOceanShimmer() {
  map.addSource('ocean-shimmer', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[[-22,14],[-16.0,14],[-15.5,16],[-16.5,18.5],[-17.5,21],[-17.2,24],[-18,27],[-22,27],[-22,14]]]
      }
    }
  });
  map.addLayer({
    id: 'ocean-shimmer-layer', type: 'fill', source: 'ocean-shimmer',
    paint: { 'fill-color': '#3a8fa8', 'fill-opacity': .05 }
  });
}
