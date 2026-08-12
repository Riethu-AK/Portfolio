// ---------------------------------------------------------------------------
// Typewriter effect for the hero name
// ---------------------------------------------------------------------------
function typewrite(el, text, speed = 55) {
  if (!el) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { el.textContent = text; return; }

  let i = 0;
  el.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.textContent = '_';

  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.querySelector('[data-typewrite]');
  if (nameEl) typewrite(nameEl, nameEl.getAttribute('data-typewrite'));

  // ---- scroll reveal -------------------------------------------------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- active sidebar link tracking on index page ---------------------
  const sections = document.querySelectorAll('main section[id]');
  const sidebarItems = document.querySelectorAll('.sidebar__item[data-target]');
  if (sections.length && sidebarItems.length && 'IntersectionObserver' in window) {
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          sidebarItems.forEach((item) => {
            item.classList.toggle('is-active', item.getAttribute('data-target') === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach((s) => navIo.observe(s));
  }
});
