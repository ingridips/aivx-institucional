// ── bloco 1 ──
const slides = Array.from(document.querySelectorAll('.slide'));
const nav = document.getElementById('nav');

slides.forEach((s, i) => {
  const d = document.createElement('div');
  d.className = 'nd';
  d.title = s.dataset.label || '';
  d.onclick = () => s.scrollIntoView({behavior:'smooth'});
  nav.appendChild(d);
});
const dots = Array.from(nav.querySelectorAll('.nd'));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const i = slides.indexOf(e.target);
      dots.forEach((d, j) => d.classList.toggle('on', i === j));
    }
  });
}, { threshold: 0.5 });

slides.forEach(s => io.observe(s));

let busy = false;
document.addEventListener('keydown', e => {
  if (busy) return;
  if (!['ArrowDown','ArrowUp',' '].includes(e.key)) return;
  e.preventDefault();
  busy = true;
  setTimeout(() => busy = false, 800);
  const active = slides.findIndex(s => {
    const r = s.getBoundingClientRect();
    return r.top > -10 && r.top < window.innerHeight * 0.5;
  });
  if (e.key === 'ArrowDown' || e.key === ' ') {
    slides[Math.min(active + 1, slides.length - 1)]?.scrollIntoView({behavior:'smooth'});
  } else {
    slides[Math.max(active - 1, 0)]?.scrollIntoView({behavior:'smooth'});
  }
});

// ── bloco 2 ──
// S14 — carrossel auto-advance
(function(){
  var cs  = document.querySelectorAll('.s14-cs');
  var dts = document.querySelectorAll('.s14-dot');
  var i   = 0;
  if (!cs.length) return;
  setInterval(function(){
    cs[i].classList.remove('s14-active');
    dts[i].classList.remove('s14-dot-on');
    i = (i + 1) % cs.length;
    cs[i].classList.add('s14-active');
    dts[i].classList.add('s14-dot-on');
  }, 3800);
})();