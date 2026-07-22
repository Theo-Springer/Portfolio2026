// Menu mobile
const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
if (burger) burger.addEventListener('click', () => links.classList.toggle('open'));

// Reveal au scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 60 + 'ms';
  io.observe(el);
});

// Coloration syntaxique
if (window.hljs) {
  document.querySelectorAll('pre code').forEach(b => window.hljs.highlightElement(b));
}
