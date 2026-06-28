const navigate = (url) => { window.location.href = url; };

const makeAvatarDataUri = (name) => {
  const initials = (name || '')
    .split(' ')
    .map(n => n[0] || '')
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'P';

  const bg = '#f3f4f6';
  const fg = '#737480';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'>
    <rect width='100%' height='100%' fill='${bg}'/>
    <text x='50%' y='50%' font-family='Inter, system-ui, sans-serif' font-size='96' fill='${fg}' dominant-baseline='middle' text-anchor='middle'>${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const createCardElement = ({ id, name, href, image }) => {
  const a = document.createElement('a');
  a.className = 'profile-card';
  a.href = href || '#';
  a.setAttribute('aria-label', `Open ${name || 'Profile'}`);

  // Image profile (url/default)
  const avatarSrc = image || makeAvatarDataUri(name);

  a.innerHTML = `
    <img class="profile-card__avatar" src="${avatarSrc}" alt="${name || 'Profile'} avatar" />
    <div class="profile-card__id">ID · ${String(id || 0).padStart(3,'0')}</div>
    <div class="profile-card__name">${name || 'Unnamed'}</div>
  `;

  return a;
};

class ProfileCard {
  constructor(data){ this.id = data.id; this.name = data.name; this.href = data.href; this.image = data.image; }
  render(){ return createCardElement(this); }
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('profile-list');
  if(!container) return;

  const profiles = Array.isArray(window.PROFILES) ? window.PROFILES.map(profile => new ProfileCard(profile)) : [];

  profiles.map(p => p.render()).forEach(el => container.appendChild(el));
});