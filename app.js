document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => link.blur());
});

const themeToggle = document.querySelector('.theme-toggle');

function currentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function updateThemeControl() {
  if (!themeToggle) return;
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  themeToggle.setAttribute('title', `Switch to ${nextTheme} mode`);
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeControl();
});

updateThemeControl();

const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');

function closeNavigation() {
  if (!menuToggle || !mainNavigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mainNavigation.classList.remove('open');
}

menuToggle?.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
  mainNavigation?.classList.toggle('open', willOpen);
});

mainNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNavigation);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) closeNavigation();
});
