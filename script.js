// Mobile nav toggle + smooth scroll
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (btn) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      nav.classList.remove('open');
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', id);
    }
  });
});
