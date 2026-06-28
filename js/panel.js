import { state } from './state.js';
import { CONFIG } from './config.js';
import { PLACES, CAT, COORDS } from './data.js';
import { ICONS, PLACE_ICON, LINK_ICONS } from './icons.js';
import { I18N } from './i18n.js';
import { fly } from './map.js';
import { deselectMarker } from './markers.js';
import { sandWaveReveal, prefersReducedMotion, isSandWaveBusy } from './sand.js';

// ── Info panel ────────────────────────────────────────────────────────────────
const PLACE_KEYS = Object.keys(PLACES);

export function navPlace(dir) {
  state.currentPlaceIdx = (state.currentPlaceIdx + dir + PLACE_KEYS.length) % PLACE_KEYS.length;
  openPlace(PLACE_KEYS[state.currentPlaceIdx]);
}

// Pick the language-appropriate field from a place, falling back to English.
export function pField(p, key) {
  return (state.LANG === 'ar' && p[key + '_ar']) ? p[key + '_ar'] : p[key];
}

export function openPlace(id) {
  if (!PLACES[id]) return;
  const freshOpen = !document.getElementById('infoPanel').classList.contains('open');
  if (freshOpen && !prefersReducedMotion && !isSandWaveBusy()) {
    sandWaveReveal(() => renderPlace(id));
  } else {
    renderPlace(id);
  }
}

export function renderPlace(id) {
  const p = PLACES[id];
  if (!p) return;
  state.currentOpenId = id;
  const c   = CAT[p.category];
  const idx = PLACE_KEYS.indexOf(id);
  if (idx >= 0) state.currentPlaceIdx = idx;
  document.getElementById('navCounter').textContent = `${state.currentPlaceIdx+1} / ${PLACE_KEYS.length}`;

  // Hero: large SVG icon with category gradient background
  const iconSvg = ICONS[PLACE_ICON[id] || 'city'];
  // Inject explicit width/height into the svg tag so it renders at 80×80 without CSS dependency
  const sizedSvg = iconSvg.replace('<svg ', '<svg width="80" height="80" ');
  const hero = document.getElementById('panelHero');
  hero.style.cssText = `background: linear-gradient(135deg, ${p.categoryColor}30, ${p.categoryColor}60), linear-gradient(160deg, #2a1a0a, #1a0f04); width:100%; height:155px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;`;
  hero.innerHTML = `<div style="width:80px;height:80px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(0 4px 20px ${p.categoryColor})">${sizedSvg}</div>`;

  const badge = document.getElementById('panelCat');
  badge.textContent = (I18N[state.LANG].cat && I18N[state.LANG].cat[p.category]) || p.category;
  badge.style.cssText = `background:${c.bg};color:${c.text};border:1.5px solid ${c.border}`;

  document.getElementById('panelTitle').textContent = pField(p, 'name');
  document.getElementById('panelSub').textContent   = pField(p, 'subtitle');
  document.getElementById('panelDesc').textContent  = pField(p, 'desc');
  const facts = (state.LANG === 'ar' && p.facts_ar) ? p.facts_ar : p.facts;
  document.getElementById('panelFacts').innerHTML   = facts.map(f =>
    `<div class="fact-card"><div class="fact-label">${f.label}</div><div class="fact-value">${f.value}</div></div>`
  ).join('');
  // Links are intentionally kept identical across languages (labels, URLs, layout).
  document.getElementById('panelLinks').innerHTML = p.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" class="link-btn ${l.style}">${LINK_ICONS[l.icon] || ''}${l.label}</a>`
  ).join('');

  document.getElementById('infoPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');

  const coord = COORDS[id];
  if (coord) {
    fly({ center: coord, zoom: id === 'train' ? 6 : CONFIG.flyZoom, duration: 1400 });
  }
}

export function closePanel() {
  if (!document.getElementById('infoPanel').classList.contains('open')) return;
  const doClose = () => {
    document.getElementById('infoPanel').classList.remove('open');
    document.getElementById('backdrop').classList.remove('open');
    state.currentOpenId = null;
    deselectMarker();
    fly({ center: CONFIG.center, zoom: CONFIG.restingZoom, duration: 1200 });
  };
  if (prefersReducedMotion || isSandWaveBusy()) { doClose(); return; }
  sandWaveReveal(doClose);
}
