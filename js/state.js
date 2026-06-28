// ── Shared mutable application state ──────────────────────────────────────────
// ES module exports are read-only for importers, so all cross-module mutable
// state lives on this single object. Modules read/write `state.x` directly.
export const state = {
  map: null,                 // MapLibre map instance (set in map.js)
  MARKERS: [],               // [{ id, marker, cat, el }] — populated in markers.js
  currentMarkerEl: null,     // emphasize/deselect pattern
  currentCat: 'all',         // active category filter
  LANG: 'en',                // 'en' | 'ar'
  currentOpenId: null,       // id of place shown in the panel (re-render on lang change)
  currentPlaceIdx: 0,        // index into PLACE_KEYS for prev/next nav
  musicOn: false,            // music play state (read by lang.js for the button label)
};
