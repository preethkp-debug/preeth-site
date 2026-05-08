/* =============================================================
   Preeth KP — site interactivity
   ============================================================= */
(function () {
  'use strict';

  /* ---------- CUSTOM CURSOR ---------- */
  const cursor = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');
  if (cursor && dot && window.matchMedia('(pointer: fine)').matches) {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();
    document.querySelectorAll('a, button, .case-row, .feed-card, .svc-card, .faq-item summary, .testimonial')
      .forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
      });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  /* ---------- HERO ROTATOR ---------- */
  const rotator = document.querySelector('.hero-rotator-track');
  if (rotator) {
    const items = rotator.querySelectorAll('span');
    let i = 0;
    const cycle = () => {
      i = (i + 1) % items.length;
      rotator.style.transform = `translateY(-${i * 100}%)`;
    };
    setInterval(cycle, 2400);
  }

  /* ---------- BLOB PARALLAX ---------- */
  const blobs = document.querySelectorAll('.blob');
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    blobs.forEach((b, idx) => {
      const f = (idx % 2 === 0) ? 1 : -1;
      b.style.translate = `${x * f}px ${y * f}px`;
    });
  });

  /* ---------- MARQUEE DUPLICATION ---------- */
  document.querySelectorAll('.marquee-track').forEach((track) => {
    track.innerHTML = track.innerHTML + track.innerHTML;
  });

  /* ---------- NAV ACTIVE STATE ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---------- FAQ — single open ---------- */
  document.querySelectorAll('.faq .faq-item').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        document.querySelectorAll('.faq .faq-item').forEach(o => { if (o !== d) o.open = false; });
      }
    });
  });

  /* ---------- COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const cIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const decimals = (el.dataset.count.split('.')[1] || '').length;
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      const dur = 1400;
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = (target * eased).toFixed(decimals);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cIo.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cIo.observe(c));

  /* ---------- LEAD / CONTACT FORM (no backend; just UX) ---------- */
  document.querySelectorAll('form[data-fake]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thanks — I\'ll reply within one business day. (Demo form, no data sent.)';
        note.style.color = 'var(--c-mint)';
      }
      form.reset();
    });
  });

  /* ---------- TESTIMONIAL DRAG SCROLL ---------- */
  const trk = document.querySelector('.testimonial-track');
  if (trk) {
    let down = false, sx = 0, sl = 0;
    trk.addEventListener('mousedown', (e) => { down = true; sx = e.pageX - trk.offsetLeft; sl = trk.scrollLeft; });
    trk.addEventListener('mouseleave', () => down = false);
    trk.addEventListener('mouseup', () => down = false);
    trk.addEventListener('mousemove', (e) => { if (!down) return; e.preventDefault(); trk.scrollLeft = sl - ((e.pageX - trk.offsetLeft) - sx) * 1.5; });
  }

  /* ---------- TIME / TZ DISPLAY (small detail) ---------- */
  const t = document.querySelector('[data-time]');
  if (t) {
    const update = () => {
      const d = new Date();
      const opts = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
      t.textContent = d.toLocaleTimeString('en-IN', opts) + ' IST';
    };
    update();
    setInterval(update, 1000 * 30);
  }
})();
