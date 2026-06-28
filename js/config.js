// ── CONFIG (from Mapbox reference pattern) ────────────────────────────────────
export const CONFIG = {
  center:             [-11.5, 20.0],
  // Wide Africa-level start — the map sits here behind the overlay
  startCenter:        [-5, 20],
  startZoom:          3.0,
  restingZoom:        5.1,
  flyZoom:            7.5,
  flyDuration:        1800,
  introDuration:      7000,  // Africa → Mauritania — slow so user can locate the country
  minZoom:            4.0,
  maxZoom:            14,
};

// ── Easing (cubic-out — from Mapbox reference pattern) ────────────────────────
export const cubicOut = t => 1 - Math.pow(1 - t, 3);
