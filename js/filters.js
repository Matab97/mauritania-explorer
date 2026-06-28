import { state } from './state.js';
import { CONFIG } from './config.js';
import { PLACES } from './data.js';
import { deselectMarker } from './markers.js';
import { fly } from './map.js';

// ── Search + filter system (from Mapbox reference pattern) ────────────────────
export function updateCategoryCounts() {
  const counts = { all: 0, nature: 0, historic: 0, transport: 0, city: 0 };
  Object.keys(PLACES).forEach(id => {
    counts.all++;
    const cat = PLACES[id].category;
    if (counts[cat] !== undefined) counts[cat]++;
  });
  Object.keys(counts).forEach(k => {
    const el = document.getElementById('cnt-' + k);
    if (el) el.textContent = counts[k];
  });
}

export function applyFilters() {
  state.MARKERS.forEach(({ id, marker, cat, el }) => {
    const show = state.currentCat === 'all' || cat === state.currentCat;
    marker.getElement().style.opacity       = show ? '1'   : '0.07';
    marker.getElement().style.pointerEvents = show ? 'all' : 'none';
    if (!show && state.currentMarkerEl === el) deselectMarker();
  });

  // Train line visibility
  const trainShow = state.currentCat === 'all' || state.currentCat === 'transport';
  try {
    state.map.setPaintProperty('train-line', 'line-opacity', trainShow ? .8 : .04);
    state.map.setPaintProperty('train-bg',   'line-opacity', trainShow ? .18 : .02);
  } catch(e) {}
}

export function filterCat(el, cat) {
  document.querySelectorAll('.legend-item').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  state.currentCat = cat;
  applyFilters();
}

export function resetAll() {
  state.currentCat = 'all';
  document.querySelectorAll('.legend-item').forEach((e, i) => e.classList.toggle('active', i === 0));
  deselectMarker();
  applyFilters();
  fly({ center: CONFIG.center, zoom: CONFIG.restingZoom, duration: CONFIG.flyDuration });
}
