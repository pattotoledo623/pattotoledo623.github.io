/* =============================================
   Script.js — Rebeca's Birthday Page
   ============================================= */

// ── PARTÍCULAS FLOTANTES ──────────────────────
(function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#E8A020','#F5C842','#C0392B','#FFFFFF','#7B3F1A'];
  const symbols = ['🐄','⭐','🌟','💛','✨','🎉','🐄','⭐'];

  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.classList.add('particle');

    const isEmoji = Math.random() > 0.5;
    const size = Math.random() * 18 + 8;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = Math.random() * 12 + 10;

    if (isEmoji) {
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.cssText = `
        left: ${left}%;
        font-size: ${size + 4}px;
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
        opacity: 0.12;
        background: transparent;
      `;
    } else {
      const color = colors[Math.floor(Math.random() * colors.length)];
      el.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
      `;
    }
    container.appendChild(el);
  }
})();


// ── CONTADOR DE EDAD (animado) ─────────────────
(function animateAge() {
  const target = 23; // ← Cambia aquí la edad de Rebeca
  const el = document.getElementById('ageCounter');
  let current = 0;
  const step = () => {
    current++;
    el.textContent = current;
    if (current < target) setTimeout(step, 60);
  };

  // arrancar cuando entra en viewport
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      step();
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  const section = document.querySelector('.counter-section');
  if (section) observer.observe(section);
})();


// ── GLOBOS INTERACTIVOS ────────────────────────
(function createBalloons() {
  const messages = [
    "¡Eres increíble! 💛",
    "¡La mejor amiga! 🤠",
    "¡Siempre tan guapa! 🌟",
    "¡Años de locuras! 🐄",
    "¡Que la rompas! 🎉",
    "¡Te quiero mucho! 💖",
    "¡Viva la vaquera! 🤍",
    "¡Feliz cumple! 🎂",
  ];
  const colors = [
    '#E8A020','#C0392B','#F5C842','#7B3F1A',
    '#27AE60','#E8A020','#C0392B','#F5C842',
  ];

  const grid = document.getElementById('balloonsGrid');

  messages.forEach((msg, i) => {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.innerHTML = `
      <span class="balloon__msg">${msg}</span>
      <div class="balloon__body" style="background:${colors[i]}"></div>
      <div class="balloon__knot" style="background:${colors[i]}"></div>
      <div class="balloon__string"></div>
    `;
    balloon.addEventListener('click', () => {
      if (balloon.classList.contains('balloon--popped')) return;
      balloon.classList.add('balloon--popped');

      // mini explosion
      const rect = balloon.getBoundingClientRect();
      spawnBurst(rect.left + rect.width/2, rect.top + rect.height/4, colors[i]);
    });
    grid.appendChild(balloon);
  });
})();

function spawnBurst(x, y, color) {
  for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div');
    const angle = (360 / 12) * i;
    const dist = Math.random() * 60 + 30;
    dot.style.cssText = `
      position: fixed;
      left: ${x}px; top: ${y}px;
      width: 8px; height: 8px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%,-50%);
      transition: transform 0.5s ease, opacity 0.5s ease;
    `;
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
      const rad = (angle * Math.PI) / 180;
      dot.style.transform = `translate(calc(-50% + ${Math.cos(rad)*dist}px), calc(-50% + ${Math.sin(rad)*dist}px))`;
      dot.style.opacity = '0';
    });
    setTimeout(() => dot.remove(), 600);
  }
}


// ── PASTEL INTERACTIVO ─────────────────────────
(function buildCake() {
  const row = document.getElementById('candlesRow');
  const colors = ['#E8A020','#C0392B','#F5C842','#7B3F1A','#27AE60'];
  const count = 5;

  for (let i = 0; i < count; i++) {
    const c = document.createElement('div');
    c.classList.add('candle');
    c.innerHTML = `
      <div class="candle__flame"></div>
      <div class="candle__body" style="background:${colors[i % colors.length]}"></div>
    `;
    row.appendChild(c);
  }
})();

let candlesBlown = false;
function blowCandles() {
  if (candlesBlown) return;
  candlesBlown = true;

  const candles = document.querySelectorAll('.candle');
  const msg = document.getElementById('cakeMessage');

  candles.forEach((c, i) => {
    setTimeout(() => {
      c.classList.add('candle--out');
    }, i * 200);
  });

  setTimeout(() => {
    msg.textContent = '🎉 ¡Pide un deseo, Rebeca! 🎉';
    launchConfetti();
  }, candles.length * 200 + 300);
}


// ── CONFETI ────────────────────────────────────
function launchConfetti() {
  const colors = ['#E8A020','#F5C842','#C0392B','#FFFFFF','#7B3F1A','#27AE60','#3498DB'];
  const count = 120;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const size = Math.random() * 8 + 6;
    const duration = Math.random() * 2.5 + 2;
    const delay = Math.random() * 1.5;
    const rotation = Math.random() * 360;

    piece.style.cssText = `
      left: ${left}vw;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      transform: rotate(${rotation}deg);
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + delay) * 1000 + 200);
  }
}


// ── CURSOR PERSONALIZADO (cow print star) ───────
(function customCursor() {
  // solo en desktop
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 99999;
    font-size: 1.4rem;
    transform: translate(-50%,-50%);
    transition: transform 0.1s ease;
    mix-blend-mode: normal;
  `;
  cursor.textContent = '🐄';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
  });
})();


// ── SCROLL REVEAL ──────────────────────────────
(function scrollReveal() {
  const targets = document.querySelectorAll(
    '.wish-card, .message-card, .age-display, .balloon, .cake'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = e.target.classList.contains('balloon')
          ? 'translateY(0)'
          : 'translateY(0) scale(1)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach((t, i) => {
    t.style.cssText += `
      opacity: 0;
      transform: translateY(30px) scale(0.97);
      transition: opacity 0.6s ${i * 0.07}s ease, transform 0.6s ${i * 0.07}s ease;
    `;
    observer.observe(t);
  });
})();