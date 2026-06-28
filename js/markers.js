import { state } from './state.js';
import { PLACES, COORDS, TRAIN_LINE } from './data.js';
import { ICONS, PLACE_ICON } from './icons.js';
import { openPlace } from './panel.js';

// Short label shown under a marker icon — Arabic name in full, English trimmed to
// the first two words to keep the badge compact.
export function markerLabel(p) {
  if (state.LANG === 'ar' && p.name_ar) return p.name_ar;
  return p.name.split(' ').slice(0, 2).join(' ');
}

// ── Markers with custom SVG icons ─────────────────────────────────────────────
export function addMarkers() {
  let delay = 0;
  Object.keys(PLACES).forEach(id => {
    const p    = PLACES[id];
    const coord = COORDS[id];
    if (!coord) return;

    const iconSvg = ICONS[PLACE_ICON[id] || 'city'];

    const el = document.createElement('div');
    el.className = 'mb-marker';
    el.setAttribute('data-cat', p.category);
    el.setAttribute('data-id',  id);
    delay += 80; // animation-delay applied inline on .mb-marker-inner

    // mb-marker-inner wrapper carries the drop animation so MapLibre's inline
    // transform on the outer element is never clobbered (main fix).
    // SVG icon replaces emoji; animation-delay set on the inner wrapper.
    el.innerHTML = `<div class="mb-marker-inner" style="animation-delay:${delay}ms"><div class="mb-icon">${iconSvg}</div><div class="mb-label">${markerLabel(p)}</div></div>`;

    el.onclick = () => {
      el.classList.add('clicked');
      setTimeout(() => el.classList.remove('clicked'), 600);
      emphasizeMarker(el);
      openPlace(id);
    };

    // Center anchor keeps the circular badge centred on its real coordinate so it
    // does not float north of the point (which made border-adjacent markers like
    // Ben Amera appear to spill across the Mauritania–Western Sahara border).
    const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
      .setLngLat(coord)
      .addTo(state.map);

    state.MARKERS.push({ id, marker, cat: p.category, el });
  });
}

// ── Emphasize / deselect (from Mapbox reference pattern) ─────────────────────
export function emphasizeMarker(el) {
  if (state.currentMarkerEl && state.currentMarkerEl !== el) {
    state.currentMarkerEl.classList.remove('emphasized');
  }
  state.currentMarkerEl = el;
  el.classList.add('emphasized');
}

export function deselectMarker() {
  if (state.currentMarkerEl) {
    state.currentMarkerEl.classList.remove('emphasized');
    state.currentMarkerEl = null;
  }
}

// ── Animated iron-ore train sprite ───────────────────────────────────────────
export function initTrainSprite() {
  const route = TRAIN_LINE; // full real SNIM rail path, Zouérat → Nouadhibou
  function lngLatDist(a, b) {
    const dx = (b[0]-a[0])*Math.cos((a[1]+b[1])*Math.PI/360);
    const dy = b[1]-a[1];
    return Math.sqrt(dx*dx+dy*dy);
  }
  // Pre-compute per-segment lengths so the train follows the polyline exactly.
  const segLen = [];
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) { const L = lngLatDist(route[i], route[i+1]); segLen.push(L); total += L; }
  function posAt(phase) {
    let target = Math.max(0, Math.min(1, phase)) * total;
    for (let i = 0; i < segLen.length; i++) {
      if (target <= segLen[i] || i === segLen.length - 1) {
        const f = segLen[i] ? target / segLen[i] : 0;
        return [route[i][0]+(route[i+1][0]-route[i][0])*f, route[i][1]+(route[i+1][1]-route[i][1])*f];
      }
      target -= segLen[i];
    }
    return route[route.length - 1];
  }

  // Build the iron-ore train SVG: locomotive + 3 hopper wagons.
  // `loaded=true` = ore heaped on wagons (Zouérat→Nouadhibou);
  // `loaded=false` = open empty hoppers (return leg).
  function trainSVG(loaded) {
    const wagon = (ox) => {
      const coupling = `<rect x="${ox-3}" y="18.5" width="4" height="1.6" fill="#4a4138"/>`;
      const body     = `<path d="M${ox} 12 L${ox+20} 12 L${ox+17} 22 L${ox+3} 22 Z" fill="#2c2824" stroke="#120d07" stroke-width="0.8"/>`;
      const chassis  = `<rect x="${ox+2}" y="22" width="16" height="1.8" fill="#1c150d"/>`;
      const wheels   = `<circle cx="${ox+5}" cy="25" r="2.4" fill="#0e0a05" stroke="#5a5048" stroke-width="0.6"/>`+
                       `<circle cx="${ox+15}" cy="25" r="2.4" fill="#0e0a05" stroke="#5a5048" stroke-width="0.6"/>`;
      const fill = loaded
        ? `<path d="M${ox+1} 12 Q${ox+6} 6.5 ${ox+10} 7.5 Q${ox+14} 6.5 ${ox+19} 12 Z" fill="url(#ore)"/>`+
          `<circle cx="${ox+6}" cy="9.7" r="1.1" fill="#9a5326"/><circle cx="${ox+11}" cy="9" r="1.2" fill="#a85b2b"/><circle cx="${ox+15}" cy="9.9" r="1" fill="#854720"/>`
        : `<path d="M${ox+2} 12 L${ox+18} 12 L${ox+15.5} 20 L${ox+4.5} 20 Z" fill="#140f0a"/>`+
          `<line x1="${ox}" y1="12" x2="${ox+20}" y2="12" stroke="#3a342e" stroke-width="0.9"/>`;
      return coupling+body+fill+chassis+wheels;
    };
    const loco = `<g class="train-car c0">`+
      `<rect x="3" y="21" width="26" height="2.4" fill="#15151c"/>`+
      `<rect x="4" y="12" width="15" height="9" rx="1" fill="#3a3a45"/>`+
      `<rect x="19" y="7" width="9" height="14" rx="1" fill="#43434f"/>`+
      `<rect x="21" y="9" width="5.2" height="4.2" rx="0.6" fill="#9fd2e2"/>`+
      `<rect x="4" y="17.6" width="24" height="2" fill="#c0622a"/>`+
      `<rect x="8" y="9" width="3" height="3.2" fill="#1c1c22"/>`+
      `<circle cx="5" cy="15.4" r="1.5" fill="#ffe7a0"/>`+
      `<circle cx="7.5" cy="25" r="2.7" fill="#0e0a05" stroke="#5a5048" stroke-width="0.7"/>`+
      `<circle cx="14" cy="25" r="2.7" fill="#0e0a05" stroke="#5a5048" stroke-width="0.7"/>`+
      `<circle cx="23" cy="25" r="2.7" fill="#0e0a05" stroke="#5a5048" stroke-width="0.7"/>`+
    `</g>`;
    return `<svg width="104" height="34" viewBox="0 0 104 34" xmlns="http://www.w3.org/2000/svg">`+
      `<defs><linearGradient id="ore" x1="0" y1="0" x2="0" y2="1">`+
        `<stop offset="0" stop-color="#a85b2b"/><stop offset="1" stop-color="#5a2c10"/></linearGradient></defs>`+
      `<g class="train-car c1">`+wagon(32)+`</g>`+
      `<g class="train-car c2">`+wagon(55)+`</g>`+
      `<g class="train-car c3">`+wagon(78)+`</g>`+
      loco+
      `<circle class="train-smoke" cx="9.5" cy="8" r="2.1" fill="#b8b1a4"/>`+
      `<circle class="train-smoke s2" cx="9.5" cy="8" r="1.7" fill="#cdc6ba"/>`+
      `<circle class="train-smoke s3" cx="9.5" cy="8" r="1.9" fill="#a59e92"/>`+
    `</svg>`;
  }

  const el = document.createElement('div');
  el.className = 'train-sprite';
  el.title = 'Iron Ore Train';
  el.onclick = () => openPlace('train');

  // Inner wrapper carries the direction flip so MapLibre's positioning transform
  // on `el` is never overwritten.
  const dirEl = document.createElement('div');
  dirEl.className = 'train-dir';
  el.appendChild(dirEl);

  let loaded = true;
  dirEl.innerHTML = trainSVG(loaded);

  const sprite = new maplibregl.Marker({ element: el, anchor: 'center' })
    .setLngLat(route[0])
    .addTo(state.map);

  const SPEED = 0.0006; // fraction of total route per frame
  let going = 1; // +1 = Zouérat→Nouadhibou (loaded), -1 = return (empty)
  let phase = 0;

  function applyDirection() { dirEl.style.transform = going === 1 ? 'scaleX(1)' : 'scaleX(-1)'; }
  function setLoaded(v) { if (v !== loaded) { loaded = v; dirEl.innerHTML = trainSVG(loaded); } }
  applyDirection();

  function tick() {
    phase += SPEED * going;
    if (phase >= 1) { phase = 1; going = -1; setLoaded(false); applyDirection(); }
    if (phase <= 0) { phase = 0; going =  1; setLoaded(true);  applyDirection(); }
    sprite.setLngLat(posAt(phase));
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
