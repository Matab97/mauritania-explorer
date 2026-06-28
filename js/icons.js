// ── Desert-themed SVG icon library ───────────────────────────────────────────
// Each icon is an <svg viewBox="0 0 20 20"> string; CSS sizes it inside .mb-icon
export const ICONS = {

  // Eye of the Sahara — concentric geological rings (as seen from orbit)
  richat: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.9" stroke="#b8924d" stroke-width=".8" opacity=".32"/>
    <circle cx="10" cy="10" r="6.8" stroke="#cda257" stroke-width="1" opacity=".5"/>
    <circle cx="10" cy="10" r="4.7" stroke="#e0b865" stroke-width="1.15" opacity=".72"/>
    <circle cx="10" cy="10" r="2.7" stroke="#e8c87a" stroke-width="1.2" opacity=".9"/>
    <circle cx="10" cy="10" r="1.15" fill="#f3e0a8"/>
    <circle cx="9.5" cy="9.4" r=".4" fill="#fff" opacity=".7"/>
  </svg>`,

  // Flamingo — Banc d'Arguin migratory birds
  arguin: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="9.4" y1="13.1" x2="8.6" y2="18.3" stroke="#e8789a" stroke-width=".9" stroke-linecap="round"/>
    <line x1="10.9" y1="13.1" x2="11.5" y2="18.3" stroke="#e8789a" stroke-width=".9" stroke-linecap="round"/>
    <ellipse cx="10.4" cy="11.2" rx="3.4" ry="2.6" fill="#ff8fb0"/>
    <path d="M13.3 10.3 L15.6 9.3 L13.7 12.1 Z" fill="#ff8fb0" opacity=".72"/>
    <path d="M8.7 10 C6.7 8.1 8.3 4.3 7.4 2.6" stroke="#ff8fb0" stroke-width="1.7" fill="none" stroke-linecap="round"/>
    <circle cx="7.2" cy="2.7" r="1.3" fill="#ff8fb0"/>
    <path d="M6.1 2.6 L4.2 3.3 L6.2 3.9 Z" fill="#2a1810"/>
    <circle cx="7.5" cy="2.4" r=".33" fill="#2a1810"/>
    <path d="M9 13.6 Q10.4 14.4 11.6 13.6" stroke="#ffb3c9" stroke-width=".6" fill="none" opacity=".5"/>
  </svg>`,

  // Old mosque — Chinguetti (dome, crescent finial & stone minaret)
  mosque: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="10" width="10.5" height="8" rx=".5" fill="#c0622a" opacity=".9"/>
    <path d="M3.8 10 Q3.8 5.2 7.75 5.2 Q11.7 5.2 11.7 10 Z" fill="#c0622a"/>
    <path d="M4.9 10 Q4.9 6.5 7.75 6.4" stroke="rgba(232,200,122,.3)" stroke-width=".5" fill="none"/>
    <line x1="7.75" y1="5.2" x2="7.75" y2="3.6" stroke="#e8c87a" stroke-width=".8" stroke-linecap="round"/>
    <path d="M6.95 3 A1 1 0 1 0 8.55 3 A.7 .7 0 1 1 6.95 3Z" fill="#e8c87a"/>
    <rect x="13.6" y="6.2" width="3.2" height="11.8" rx=".4" fill="#b35728"/>
    <path d="M13.6 6.2 L15.2 4.1 L16.8 6.2 Z" fill="#c0622a"/>
    <circle cx="15.2" cy="3.7" r=".55" fill="#e8c87a"/>
    <rect x="14.6" y="8" width="1.2" height="1.5" rx=".25" fill="rgba(0,0,0,.32)"/>
    <rect x="14.6" y="10.5" width="1.2" height="1.5" rx=".25" fill="rgba(0,0,0,.32)"/>
    <path d="M5.9 18 L5.9 13.4 Q7.75 11.4 9.6 13.4 L9.6 18 Z" fill="#311409"/>
    <path d="M3.4 14.6 Q4.2 13.6 5 14.6 L5 16.4 L3.4 16.4 Z" fill="rgba(0,0,0,.25)"/>
    <path d="M10.5 14.6 Q11.3 13.6 12.1 14.6 L12.1 16.4 L10.5 16.4 Z" fill="rgba(0,0,0,.25)"/>
  </svg>`,

  // Oualata painted doorway — red ochre wall with white geometric motifs
  doorway: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 18.5 L3.5 7 Q3.5 2.8 10 2.8 Q16.5 2.8 16.5 7 L16.5 18.5 Z" fill="#b1452a"/>
    <path d="M5.2 18.5 L5.2 7.3 Q5.2 4.5 10 4.5 Q14.8 4.5 14.8 7.3 L14.8 18.5" stroke="#f3e3c4" stroke-width=".75" fill="none" opacity=".9"/>
    <path d="M7.2 18.5 L7.2 9.2 Q7.2 6.6 10 6.6 Q12.8 6.6 12.8 9.2 L12.8 18.5 Z" fill="#311409"/>
    <path d="M7.9 5.6 L10 4 L12.1 5.6" stroke="#f3e3c4" stroke-width=".6" fill="none" opacity=".85"/>
    <circle cx="5" cy="9" r=".5" fill="#f3e3c4" opacity=".85"/>
    <circle cx="15" cy="9" r=".5" fill="#f3e3c4" opacity=".85"/>
    <circle cx="5" cy="12.5" r=".5" fill="#f3e3c4" opacity=".7"/>
    <circle cx="15" cy="12.5" r=".5" fill="#f3e3c4" opacity=".7"/>
    <path d="M9 9.4 L10 8.5 L11 9.4 L10 10.3 Z" fill="#f3e3c4" opacity=".5"/>
  </svg>`,

  // Neolithic ruins — Tichit ancient city
  ruins: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="13.5" width="14" height="2" rx=".5" fill="#7a5a3a" opacity=".6"/>
    <rect x="4"  y="9"  width="3"   height="5.5" rx=".5" fill="#c0622a" opacity=".7"/>
    <rect x="9"  y="6"  width="3"   height="8.5" rx=".5" fill="#c0622a" opacity=".9"/>
    <rect x="13.5" y="10" width="3" height="4.5" rx=".5" fill="#c0622a" opacity=".72"/>
    <path d="M9 6 L10.5 3 L12 6Z" fill="#e8c87a" opacity=".88"/>
    <line x1="3" y1="15.5" x2="17" y2="15.5" stroke="#8b4115" stroke-width=".4"/>
    <path d="M4 11 Q5 9.5 6 11" stroke="#e8c87a" stroke-width=".5" fill="none" opacity=".3"/>
  </svg>`,

  // Iron Ore Train — locomotive hauling an ore hopper
  train: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="16.8" x2="19" y2="16.8" stroke="#5a5048" stroke-width=".8" stroke-linecap="round"/>
    <rect x="1.5" y="8.2" width="7.2" height="5.6" rx="1" fill="#4a9db5"/>
    <rect x="2.2" y="5.6" width="4" height="3" rx=".6" fill="#3a8fa8"/>
    <rect x="2.9" y="6.3" width="2.5" height="1.7" rx=".3" fill="#bfe6f0"/>
    <rect x="2.5" y="4" width="1.4" height="1.9" rx=".3" fill="#3a8fa8"/>
    <rect x="1.5" y="11.1" width="7.2" height="1.1" fill="#e8c87a"/>
    <path d="M10 9 L18.6 9 L17.6 13.8 L11 13.8 Z" fill="#2c2824"/>
    <path d="M10.5 9 Q12.4 6.9 14.4 7.6 Q16.4 6.9 18.1 9 Z" fill="#a85b2b"/>
    <circle cx="11.6" cy="8.4" r=".5" fill="#854720"/>
    <circle cx="14" cy="7.9" r=".5" fill="#9a5326"/>
    <circle cx="16.3" cy="8.4" r=".5" fill="#854720"/>
    <circle cx="3.2" cy="15.2" r="1.4" fill="#0e0a05" stroke="#5a5048" stroke-width=".5"/>
    <circle cx="7"   cy="15.2" r="1.4" fill="#0e0a05" stroke="#5a5048" stroke-width=".5"/>
    <circle cx="12.4" cy="15.4" r="1.3" fill="#0e0a05" stroke="#5a5048" stroke-width=".5"/>
    <circle cx="16"   cy="15.4" r="1.3" fill="#0e0a05" stroke="#5a5048" stroke-width=".5"/>
  </svg>`,

  // City skyline with minaret — Mauritanian cities
  city: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17 L2 11 L4 11 L4 8.5 L6 8.5 L6 6 L8 6 L8 4.5 L10 4.5 L10 6 L12 6 L12 11 L14 11 L14 9 L16 9 L16 11 L18 11 L18 17Z"
          fill="#9e8b6e" opacity=".85"/>
    <line x1="8" y1="4.5" x2="8" y2="2.8" stroke="#e8c87a" stroke-width=".9" stroke-linecap="round"/>
    <path d="M7.2 2 A1 1 0 1 0 8.8 2 A.7 .7 0 1 1 7.2 2Z" fill="#e8c87a"/>
    <path d="M6.5 12.5 L6.5 10.2 Q7.75 8.8 9 10.2 L9 12.5Z" fill="rgba(0,0,0,.3)"/>
    <rect x="14.5" y="11.5" width="2" height="2.5" rx=".3" fill="rgba(232,200,122,.15)"/>
    <rect x="10.5" y="7.5" width="1.5" height="2"   rx=".3" fill="rgba(232,200,122,.15)"/>
  </svg>`,

  // Date palm — Terjit oasis (curved trunk, fronds & date clusters)
  oasis: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="18.5" rx="5.2" ry=".95" fill="#2a5880" opacity=".5"/>
    <path d="M9.2 18 Q8.7 12 10 7.6" stroke="#8a5a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M9.05 15 L10 15.2 M9 13 L9.95 13.1 M9.2 11 L10.1 11" stroke="#6b4420" stroke-width=".4" stroke-linecap="round"/>
    <path d="M10 7.6 Q5.6 6.2 2.6 8" stroke="#5f8a3f" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M10 7.6 Q14.4 6.2 17.4 8" stroke="#5f8a3f" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M10 7.6 Q6.8 3.9 4.2 3.8" stroke="#6a8c4f" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M10 7.6 Q13.2 3.9 15.8 3.8" stroke="#6a8c4f" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M10 7.6 Q9.4 4 8.7 2.4" stroke="#7aa055" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M10 7.6 Q10.7 4 11.4 2.6" stroke="#7aa055" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <circle cx="10" cy="7.5" r="1" fill="#5f8a3f"/>
    <circle cx="8.5" cy="8.7" r=".6" fill="#c0622a"/>
    <circle cx="9.1" cy="9.3" r=".5" fill="#9a5326"/>
    <circle cx="11.5" cy="8.7" r=".6" fill="#c0622a"/>
    <circle cx="10.9" cy="9.3" r=".5" fill="#9a5326"/>
  </svg>`,

  // Granite monolith — Ben Amera (rounded inselberg dome rising from the plain)
  monolith: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="17.2" rx="7.6" ry="1.3" fill="#5a4d38" opacity=".45"/>
    <path d="M2.6 17 Q2.6 5.6 10 4.6 Q17.4 5.6 17.4 17 Z" fill="#9e8b6e"/>
    <path d="M10 4.6 Q17.4 5.6 17.4 17 L13 17 Q13.4 8.6 10 4.6 Z" fill="rgba(0,0,0,.17)"/>
    <path d="M4.8 12 Q5.4 7.4 10 6.3 Q11.8 6.2 12.9 7.3" stroke="rgba(232,200,122,.28)" stroke-width=".6" fill="none"/>
    <path d="M7.6 6.6 Q6.6 11 7.2 16.6" stroke="#6b5d42" stroke-width=".4" fill="none" opacity=".5"/>
    <path d="M11.6 7 Q12.6 11 12 16.6" stroke="#6b5d42" stroke-width=".4" fill="none" opacity=".4"/>
    <path d="M3.4 14 Q10 13.4 16.6 14" stroke="#6b5d42" stroke-width=".4" fill="none" opacity=".35"/>
  </svg>`,

  // Ksar gateway — Atar, gateway to the Adrar (fortified desert town gate)
  gate: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.4 18 L2.4 6 L5.8 6 L5.8 18 Z" fill="#c08a4a"/>
    <path d="M14.2 18 L14.2 6 L17.6 6 L17.6 18 Z" fill="#c08a4a"/>
    <path d="M2.4 6 L2.4 4.6 L3.25 4.6 L3.25 5.4 L4.1 5.4 L4.1 4.6 L4.95 4.6 L4.95 5.4 L5.8 5.4 L5.8 6 Z" fill="#cf9a55"/>
    <path d="M14.2 6 L14.2 5.4 L15.05 5.4 L15.05 4.6 L15.9 4.6 L15.9 5.4 L16.75 5.4 L16.75 4.6 L17.6 4.6 L17.6 6 Z" fill="#cf9a55"/>
    <path d="M5.8 18 L5.8 9 Q10 4.8 14.2 9 L14.2 18 Z" fill="#a9763c"/>
    <path d="M7.8 18 L7.8 11.3 Q10 8.6 12.2 11.3 L12.2 18 Z" fill="#2a1810"/>
    <path d="M9 8.2 L10 7.3 L11 8.2" stroke="#e8c87a" stroke-width=".5" fill="none" opacity=".5"/>
  </svg>`,

  // Lateen-sail pirogue — Nouadhibou Atlantic port & fishing coast
  pirogue: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="2" x2="10" y2="12.5" stroke="#7a5a36" stroke-width=".8" stroke-linecap="round"/>
    <path d="M9.4 2.4 L9.4 11.6 L4 11.6 Z" fill="#e8c87a" opacity=".92"/>
    <path d="M10.6 3.6 L10.6 11.6 L15.2 11.6 Z" fill="#cf9a55" opacity=".75"/>
    <path d="M3.2 12.4 L16.8 12.4 L14.8 16.2 L5.2 16.2 Z" fill="#4a9db5"/>
    <line x1="4.4" y1="13.6" x2="15.6" y2="13.6" stroke="#7ec8e3" stroke-width=".6" opacity=".5"/>
    <path d="M2.5 17.6 Q4.3 16.7 6 17.6 Q7.8 18.5 9.5 17.6 Q11.3 16.7 13 17.6 Q14.8 18.5 16.5 17.6 L17.5 17.6"
          stroke="#4a9db5" stroke-width=".8" fill="none" opacity=".55" stroke-linecap="round"/>
  </svg>`,
};

// Map each place ID → icon key
export const PLACE_ICON = {
  richat:     'richat',
  arguin:     'arguin',
  chinguetti: 'mosque',
  oualata:    'doorway',
  atar:       'gate',
  terjit:     'oasis',
  tichit:     'ruins',
  benamera:   'monolith',
  nouakchott: 'city',
  nouadhibou: 'pirogue',
  train:      'train',
};

// SVG icons for external link buttons
export const LINK_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2.2" fill="none"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="17.2" cy="6.8" r="1.4" fill="currentColor"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7s-.3-2-1.2-2.8C19.7 3 18.4 3 17.8 2.9 15.6 2.8 12 2.8 12 2.8s-3.6 0-5.8.1C5.6 3 4.3 3 3.2 4.2 2.3 5 2 7 2 7S1.8 9.2 1.8 11.4v2C1.8 15.6 2 17.8 2 17.8s.3 2 1.2 2.8C4.3 21.8 5.8 21.7 6.4 21.8 8.4 22 12 22 12 22s3.6 0 5.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8S22.2 15.5 22.2 13.3v-2C22.2 9.2 22 7 22 7zM9.8 15.1V8.4l6.5 3.4-6.5 3.3z"/></svg>`,
  wiki:      `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="1.5"/><path d="M12 2C9 6 9 18 12 22" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 2C15 6 15 18 12 22" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
  google:    `<svg viewBox="0 0 24 24" fill="none"><path d="M22 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.5c-.2 1.2-1 2.3-2.1 3v2.5h3.4C20.9 17.5 22 15 22 12.2z" fill="#4285F4"/><path d="M12 22c2.7 0 5-.9 6.8-2.4l-3.4-2.5c-.9.6-2 1-3.4 1-2.4 0-4.4-1.6-5.2-3.8H3.3V16.6C5 19.6 8.3 22 12 22z" fill="#34A853"/><path d="M6.8 14.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.3C2.5 9 2 10.4 2 12s.5 3 1.3 4.6l3.5-2.3z" fill="#FBBC05"/><path d="M12 6.2c1.4 0 2.6.5 3.5 1.3l2.6-2.5C16.5 3.5 14.4 2.5 12 2.5 8.3 2.5 5 4.9 3.3 8.2l3.5 2.8C7.6 7.9 9.6 6.2 12 6.2z" fill="#EA4335"/></svg>`,
  maps:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="#34a853"/></svg>`,
};
