import { makeAvatarDataUri } from '../utils/avatar.js';

export const createProfileCardElement = ({ id, name, href, image }) => {
  const link = document.createElement('a');
  link.className = 'profile-card';
  link.href = href || '#';
  link.setAttribute('aria-label', `Open ${name || 'Profile'}`);

  const avatarSrc = image || makeAvatarDataUri(name);

  link.innerHTML = `
    <img class="profile-card__avatar" src="${avatarSrc}" alt="${name || 'Profile'} avatar" />
    <div class="profile-card__id">ID · ${String(id || 0).padStart(3,'0')}</div>
    <div class="profile-card__name">${name || 'Unnamed'}</div>
  `;

  return link;
};

export class ProfileCard {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.href = data.href;
    this.image = data.image;
  }

  render() {
    return createProfileCardElement(this);
  }
}