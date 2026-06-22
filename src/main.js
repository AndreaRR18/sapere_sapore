// =========================================================
// Sapore è Sapere — enhancement layer
// Progressive, accessibility-first: the site works fully
// without JS. This only adds elegant motion on top.
// =========================================================

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Header: condensed state once the page is scrolled ---- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

/* ---- Tag a curated set of elements for reveal (keeps HTML clean) ---- */
function tagRevealTargets() {
  const selectors = [
    '.section-head',
    '.prose',
    '.card',
    '.feature-box',
    '.restaurant-content',
    '.thesis-panel',
    '.chef-content',
    '.menu-category',
    '.wine-region',
    '.gallery-item',
    '.contact-block',
    '.info-block',
    '.menu-group',
    '.timeline',
    '.btn-row',
  ];
  document.querySelectorAll(selectors.join(',')).forEach((el) => {
    if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
  });

  // Stagger items inside grids for a gentle cascade.
  document.querySelectorAll('.grid, .gallery-grid').forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      if (child.hasAttribute('data-reveal')) {
        child.style.transitionDelay = `${Math.min(i, 5) * 0.08}s`;
      }
    });
  });
}

/* ---- Scroll reveals via IntersectionObserver ---- */
function initReveals() {
  tagRevealTargets();
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  // Reduced motion or no IO support: show everything immediately.
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---- Reserve bar: reveal after a small scroll, mark page ready ---- */
function initReserveBar() {
  const bar = document.querySelector('.reserve-bar');
  if (!bar) return;
  // Show immediately; the CSS slide-in handles the entrance.
  requestAnimationFrame(() => bar.classList.add('is-ready'));
}

/* ---- Close the mobile menu after following a link ---- */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  if (!toggle) return;
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.checked = false;
    });
  });
}

function init() {
  initHeaderScroll();
  initReveals();
  initReserveBar();
  initMobileNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
