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

const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollProgress = document.querySelector('.scroll-progress');
function updateScrollProgress() {
  if (!scrollProgress) return;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}
updateScrollProgress();
window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);

const revealTargets = document.querySelectorAll(
  '.section-block, .publication, .news-list li, .projects article, .detail-role, .honors-list li, .awards-grid a'
);

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('reveal', 'visible'));
} else {
  revealTargets.forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(index % 6) * 60}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}

const spySections = document.querySelectorAll('main.layout section[id]');
const spyNavLinks = document.querySelectorAll('.site-header nav a[href^="#"]');

if (spySections.length && spyNavLinks.length && 'IntersectionObserver' in window) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`.site-header nav a[href="#${entry.target.id}"]`);
        if (!link || !entry.isIntersecting) return;
        spyNavLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  spySections.forEach((section) => spyObserver.observe(section));
}
