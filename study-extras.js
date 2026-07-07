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

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(bar);
    setupSpy();
    update();
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update, { passive: true });
})();
