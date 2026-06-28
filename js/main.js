import { state } from './state.js';
import { CONFIG } from './config.js';
import './map.js'; // side-effect: creates the MapLibre map + style.load wiring
import { filterCat } from './filters.js';
import { closePanel, navPlace } from './panel.js';
import { applyLanguage, setLanguage } from './lang.js';
import { startMusic, toggleMusic } from './music.js';
import { sandBurst, sandWaveReveal } from './sand.js';

// ── Intro overlay → live experience ──────────────────────────────────────────
function beginExperience(lang) {
  applyLanguage(lang);
  document.getElementById('musicOverlay').style.display = 'none';
  startMusic();   // still inside the tap gesture — required for iOS audio
  // Sand-wave bridge from the intro overlay into the live map.
  sandWaveReveal(null);
  // Fly in from Africa overview → Mauritania resting view.
  state.map.flyTo({
    center:    CONFIG.center,
    zoom:      CONFIG.restingZoom,
    essential: true,
    duration:  CONFIG.introDuration,
    easing:    e => e < .5 ? 2*e*e : 1 - Math.pow(-2*e+2, 2)/2,
  });
  state.map.once('moveend', () => {
    state.map.setMinZoom(CONFIG.minZoom);
    state.map.setMaxBounds([[-26, 10], [4, 35]]);
  });
}

// ── Wire up DOM event listeners (replacing inline onclick handlers) ───────────
function wireEvents() {
  // Category filter pills
  document.querySelectorAll('.legend-item').forEach(item => {
    item.addEventListener('click', () => filterCat(item, item.getAttribute('data-cat')));
  });

  // Music toggle
  const musicBtn = document.getElementById('musicBtn');
  if (musicBtn) musicBtn.addEventListener('click', toggleMusic);

  // Language toggle (in the music bar)
  document.querySelectorAll('.lang-toggle-btn').forEach(b => {
    b.addEventListener('click', () => setLanguage(b.getAttribute('data-lang')));
  });

  // Intro overlay language choice
  document.querySelectorAll('.lang-choice-btn').forEach(b => {
    b.addEventListener('click', () => beginExperience(b.getAttribute('data-lang')));
  });

  // Panel close (backdrop + close button)
  const backdrop = document.getElementById('backdrop');
  if (backdrop) backdrop.addEventListener('click', closePanel);
  document.querySelectorAll('.panel-close').forEach(b => b.addEventListener('click', closePanel));

  // Panel prev/next nav
  document.querySelectorAll('.nav-prev').forEach(b => b.addEventListener('click', () => navPlace(-1)));
  document.querySelectorAll('.nav-next').forEach(b => b.addEventListener('click', () => navPlace(1)));

  // Escape closes the panel
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  // Sand burst on every click on an interactable element — fires on the map,
  // buttons, legend pills, markers, and info panel controls.
  document.addEventListener('click', e => {
    // Skip the overlay tap (it has its own animation) and map drag-end misclicks
    if (e.target.closest('#musicOverlay')) return;
    sandBurst(e.clientX, e.clientY);
  });
}

wireEvents();
