/* ============================================================
   Study-page extras
   - Reading progress bar (top), driven by scroll position.
   - Subnav scroll-spy: highlights the anchor of the section
     currently in view.
   Loaded only on detail pages (hustle-up / ibat / enac).
   ============================================================ */
(function () {
  // --- Email reveal (même mécanique anti-spam que main.js) ---
  // The link ships with a LinkedIn fallback href so it always works,
  // even if this script is blocked or fails to load. JS upgrades it to mailto.
  var mail = document.getElementById('mail'), mailtext = document.getElementById('mailtext');
  if (mail && mailtext) {
    var u = 'saintseverbenjamin', d = 'gmail.com';
    mail.href = 'mailto:' + u + '@' + d;
    mailtext.textContent = u + '@' + d;
  }

  // --- Reading progress bar ---
  var bar = document.createElement('div');
  bar.id = 'read-progress';

  var spyLinks = [];   // subnav <a> elements
  var sections = [];   // matching target sections

  function setupSpy() {
    var subnav = document.querySelector('.subnav');
    if (!subnav) return;
    spyLinks = [].slice.call(subnav.querySelectorAll('a[href^="#"]'));
    sections = spyLinks.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    });
  }

  function updateSpy() {
    if (!spyLinks.length) return;
    // active = last section whose top has passed the sticky offset
    var offset = 140; // header + subnav + a little margin
    var activeIdx = 0;
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      if (s && s.getBoundingClientRect().top - offset <= 0) activeIdx = i;
    }
    for (var j = 0; j < spyLinks.length; j++) {
      spyLinks[j].classList.toggle('is-active', j === activeIdx);
    }
  }

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (window.pageYOffset / max) * 100 : 0;
    bar.style.width = pct + '%';
    updateSpy();
    ticking = false;
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  // --- Spec figures : survol croisé marqueur <-> légende ---
  function setupSpecFigures() {
    document.querySelectorAll('.spec-figure').forEach(function (fig) {
      var items = fig.querySelectorAll('[data-spec]');
      function setActive(n, on) {
        items.forEach(function (el) {
          if (el.getAttribute('data-spec') === n) el.classList.toggle('is-active', on);
        });
      }
      fig.addEventListener('mouseover', function (e) {
        var el = e.target.closest('[data-spec]');
        if (el && fig.contains(el)) setActive(el.getAttribute('data-spec'), true);
      });
      fig.addEventListener('mouseout', function (e) {
        var el = e.target.closest('[data-spec]');
        if (el && fig.contains(el)) setActive(el.getAttribute('data-spec'), false);
      });
    });
  }

  // --- Token inspector : un composant vivant, 4 thèmes, mêmes tokens ---
  function setupTokenDemos() {
    var THEMES = {
      'athlete-light': { bg: '#d7f24b', text: '#101014', surface: '#f4f4f2' },
      'athlete-dark':  { bg: '#d7f24b', text: '#101014', surface: '#17171d' },
      'owner':         { bg: '#6d5de8', text: '#ffffff', surface: '#17171d' },
      'coach':         { bg: '#5b54f0', text: '#ffffff', surface: '#f4f4f6' }
    };
    document.querySelectorAll('.tok-demo').forEach(function (demo) {
      function apply(name) {
        var t = THEMES[name];
        if (!t) return;
        demo.style.setProperty('--tok-bg', t.bg);
        demo.style.setProperty('--tok-text', t.text);
        demo.style.setProperty('--tok-surface', t.surface);
        Object.keys(t).forEach(function (k) {
          demo.querySelectorAll('[data-val="' + k + '"]').forEach(function (el) { el.textContent = t[k].toUpperCase(); });
          demo.querySelectorAll('li[data-tok="' + k + '"] .tok-swatch').forEach(function (el) { el.style.setProperty('--sw', t[k]); });
        });
      }
      demo.querySelectorAll('.tok-chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          demo.querySelectorAll('.tok-chip').forEach(function (c) { c.classList.remove('is-active'); });
          chip.classList.add('is-active');
          apply(chip.getAttribute('data-theme'));
        });
      });
      // Survoler un token surligne la partie du composant qu'il peint
      demo.querySelectorAll('li[data-tok]').forEach(function (li) {
        var target = demo.querySelector('[data-tok-target="' + li.getAttribute('data-tok') + '"]');
        if (!target) return;
        li.addEventListener('mouseenter', function () { target.classList.add('is-inspected'); });
        li.addEventListener('mouseleave', function () { target.classList.remove('is-inspected'); });
      });
      var active = demo.querySelector('.tok-chip.is-active');
      if (active) apply(active.getAttribute('data-theme'));
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(bar);
    setupSpy();
    setupSpecFigures();
    setupTokenDemos();
    update();
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update, { passive: true });
})();
