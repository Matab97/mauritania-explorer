import { state } from './state.js';
import { t } from './i18n.js';
import { PLACES } from './data.js';
import { markerLabel } from './markers.js';
import { setMapLanguage } from './map.js';
import { openPlace } from './panel.js';

// ── Language switching engine ─────────────────────────────────────────────────
export function applyLanguage(lang) {
  state.LANG = (lang === 'ar') ? 'ar' : 'en';
  const rtl = state.LANG === 'ar';
  document.documentElement.lang = state.LANG;
  document.documentElement.dir  = rtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', rtl);

  // Header tagline
  const tag = document.getElementById('tagline');
  if (tag) tag.textContent = t('tagline');

  // Legend pill labels
  const legendMap = t('legend');
  document.querySelectorAll('.legend-item').forEach(item => {
    const cat = item.getAttribute('data-cat');
    const txt = item.querySelector('.legend-text');
    if (txt && legendMap[cat]) txt.textContent = legendMap[cat];
  });

  // Panel nav buttons
  const prevEl = document.getElementById('navPrevText');
  const nextEl = document.getElementById('navNextText');
  if (prevEl) prevEl.textContent = t('prev');
  if (nextEl) nextEl.textContent = t('next');

  // Music button label (respects current play state)
  const mLabel = document.getElementById('musicBtnText');
  if (mLabel) mLabel.textContent = state.musicOn ? t('pause') : t('play');

  // Home link
  const homeEl = document.getElementById('homeLink');
  if (homeEl) homeEl.textContent = (rtl ? t('home') + ' →' : '← ' + t('home'));

  // Language toggle active state
  document.querySelectorAll('.lang-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === state.LANG);
  });

  // Custom marker labels (cities & attractions)
  state.MARKERS.forEach(({ id, el }) => {
    const lbl = el.querySelector('.mb-label');
    if (lbl) lbl.textContent = markerLabel(PLACES[id]);
  });

  // Map labels + open panel re-render
  if (state.map && state.map.isStyleLoaded && state.map.isStyleLoaded()) setMapLanguage(state.LANG);
  if (state.currentOpenId) openPlace(state.currentOpenId);
}

export function setLanguage(lang) {
  applyLanguage(lang);
}
