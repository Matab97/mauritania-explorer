// ── Sand-wave transition engine ──────────────────────────────────────────────
// A dune curtain washes across the screen; the supplied midFn runs at the crest
// (full coverage) so panel content swaps unseen, then the curtain recedes.
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sandWaveEl = document.getElementById('sandWave');
let sandWaveBusy = false;

export function isSandWaveBusy() { return sandWaveBusy; }

function burstAlongCrest() {
  const w = window.innerWidth, h = window.innerHeight;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => sandBurst(w * (0.18 + Math.random() * 0.64), h * (0.2 + Math.random() * 0.6)), 380 + i * 45);
  }
}

export function sandWaveReveal(midFn, doneFn) {
  if (prefersReducedMotion || !sandWaveEl) {
    if (midFn) midFn();
    if (doneFn) doneFn();
    return;
  }
  sandWaveBusy = true;
  sandWaveEl.classList.remove('run', 'recede');
  void sandWaveEl.offsetWidth; // restart animation
  sandWaveEl.classList.add('run');
  burstAlongCrest();
  const midTimer = setTimeout(() => { if (midFn) midFn(); }, 470);
  const onEnd = () => {
    sandWaveEl.removeEventListener('animationend', onEnd);
    clearTimeout(midTimer);
    sandWaveEl.classList.remove('run');
    sandWaveBusy = false;
    if (doneFn) doneFn();
  };
  sandWaveEl.addEventListener('animationend', onEnd);
}

// ── Sand particle system (throttled to ~25 fps, 20 particles) ─────────────────
const sandCanvas = document.getElementById('sandCanvas');
const ctx = sandCanvas.getContext('2d');
let particles = [];
let sandPaused = false;
let sandHidden = false; // paused when tab not visible

function resizeSand() {
  sandCanvas.width  = window.innerWidth;
  sandCanvas.height = window.innerHeight;
}
resizeSand();
window.addEventListener('resize', resizeSand);

function mkParticle(small) {
  // Mix: 60% small grains, 40% larger specks for visible depth
  const big = !small && Math.random() > .6;
  return {
    x: Math.random() * sandCanvas.width,
    y: Math.random() * sandCanvas.height,
    vx: (big ? .12 : .22) + Math.random() * .30,
    vy: (big ? .03 : .06) + Math.random() * .14,
    size: big ? 2.2 + Math.random() * 1.8 : 1.0 + Math.random() * 1.4,
    opacity: big ? .35 + Math.random() * .35 : .28 + Math.random() * .32,
  };
}
for (let i = 0; i < 55; i++) particles.push(mkParticle());

function drawSand() {
  if (!sandPaused && !sandHidden) {
    ctx.clearRect(0, 0, sandCanvas.width, sandCanvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,200,122,${p.opacity})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x > sandCanvas.width  + 2) { p.x = -2; p.y = Math.random() * sandCanvas.height; }
      if (p.y > sandCanvas.height + 2) { p.y = -2; p.x = Math.random() * sandCanvas.width;  }
    });
  }
  // ~30 fps
  setTimeout(() => requestAnimationFrame(drawSand), 33);
}
drawSand();

// Pause particles when info panel open or tab hidden
new MutationObserver(() => {
  sandPaused = document.getElementById('infoPanel').classList.contains('open');
}).observe(document.getElementById('infoPanel'), { attributes: true, attributeFilter: ['class'] });

document.addEventListener('visibilitychange', () => {
  sandHidden = document.hidden;
});

// ── Sand burst — fires on every click on an interactable element ──────────────
export function sandBurst(cx, cy) {
  const wrap = document.createElement('div');
  wrap.className = 'sand-burst-wrap';
  wrap.style.left = cx + 'px';
  wrap.style.top  = cy + 'px';

  const N = 12;
  for (let i = 0; i < N; i++) {
    const angle   = (i / N) * Math.PI * 2 + (Math.random() - .5) * .8;
    const dist    = 16 + Math.random() * 28;
    const size    = 1.8 + Math.random() * 2.6;
    const dur     = (.32 + Math.random() * .28).toFixed(3);
    const tx      = (Math.cos(angle) * dist).toFixed(1);
    const ty      = (Math.sin(angle) * dist).toFixed(1);
    const opacity = (.5 + Math.random() * .45).toFixed(2);

    const g = document.createElement('div');
    g.className = 'sand-grain';
    g.style.cssText = [
      `width:${size.toFixed(1)}px`, `height:${size.toFixed(1)}px`,
      `background:rgba(232,200,122,${opacity})`,
      `--sb-x:${tx}px`, `--sb-y:${ty}px`, `--sb-dur:${dur}s`,
    ].join(';');
    wrap.appendChild(g);
  }

  document.body.appendChild(wrap);
  setTimeout(() => wrap.remove(), 700);
}
