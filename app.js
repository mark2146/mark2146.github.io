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
