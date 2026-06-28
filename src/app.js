import { profiles } from './data/profiles.js';
import { ProfileCard } from './components/profile-card.js';

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('profile-list');
  if(!container) return;

  const cards = profiles.map(profile => new ProfileCard(profile));

  cards.map(card => card.render()).forEach(el => container.appendChild(el));
});