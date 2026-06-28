import { state } from './state.js';
import { t } from './i18n.js';

// ── Music ─────────────────────────────────────────────────────────────────────
const SONGS = [
  { id: 'y5VoQps0Y3w', title: 'El Belloutou' },
  { id: 'z2Bf5In027A', title: 'Tikifit' },
  { id: 'wvvlkVpS2Vo', title: 'Tikifit (DJ Dahker)', start: 205 },
];
let songIdx = Math.floor(Math.random() * SONGS.length);
let pickedSong = SONGS[songIdx];
document.getElementById('musicLabel').textContent = pickedSong.title;

let ytPlayer   = null;
let ytApiReady = false;
let pendingPlay = false;
const btn     = document.getElementById('musicBtn');
const pulse   = document.getElementById('musicPulse');
const ytDiv   = document.getElementById('ytPlayer');

const PLAY_PATH  = '<path d="M8 5v14l11-7z"/>';
const PAUSE_PATH = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';

// Pre-initialize player as soon as YT API loads (not in a gesture).
// This cues the video so playVideo() can be called synchronously on tap.
window.onYouTubeIframeAPIReady = function() {
  ytApiReady = true;
  initPlayer();
};

function initPlayer() {
  ytDiv.innerHTML = '<div id="ytFrame"></div>';
  ytPlayer = new YT.Player('ytFrame', {
    height: '1', width: '1',
    videoId: pickedSong.id,
    playerVars: {
      autoplay: 0, loop: 1, playlist: pickedSong.id,
      controls: 0, rel: 0, modestbranding: 1,
      start: pickedSong.start || 0,
    },
    events: {
      onReady: function(e) {
        if (pendingPlay) {
          pendingPlay = false;
          e.target.unMute(); e.target.setVolume(100); e.target.playVideo();
        }
      },
      onError: function() {
        tryNextSong();
      },
    },
  });
}

let songAttempts = 0;
function tryNextSong() {
  if (ytPlayer) { try { ytPlayer.destroy(); } catch(e) {} ytPlayer = null; }
  ytDiv.innerHTML = '';
  if (++songAttempts >= SONGS.length) return; // every song failed on this device
  songIdx = (songIdx + 1) % SONGS.length;
  pickedSong = SONGS[songIdx];
  document.getElementById('musicLabel').textContent = pickedSong.title;
  initPlayer();
}

export function startMusic() {
  state.musicOn = true;
  btn.querySelector('svg').innerHTML = PAUSE_PATH;
  document.getElementById('musicBtnText').textContent = t('pause');
  pulse.style.display = 'block';
  // Player is pre-cued, so playVideo() runs synchronously inside the tap
  // gesture — required by iOS/Android to permit audio playback.
  if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
    ytPlayer.unMute(); ytPlayer.setVolume(100); ytPlayer.playVideo();
  } else {
    pendingPlay = true;
    if (ytApiReady) initPlayer();
  }
}

export function stopMusic() {
  if (ytPlayer) { try { ytPlayer.pauseVideo(); } catch(e) {} }
  state.musicOn = false;
  pendingPlay = false;
  btn.querySelector('svg').innerHTML = PLAY_PATH;
  document.getElementById('musicBtnText').textContent = t('play');
  pulse.style.display = 'none';
}

export function toggleMusic() {
  if (!state.musicOn) { startMusic(); } else { stopMusic(); }
}
