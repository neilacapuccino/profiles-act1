export const makeAvatarDataUri = (name) => {
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