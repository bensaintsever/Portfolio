/* ============================================================
   Home page behaviour
   - Email reveal (anti-spam, with a safe no-JS fallback href)
   - Mobile nav toggle
   - Kinetic hero letters + ambient light + custom cursor ring
   - GSAP intro timeline + scroll reveals
   ============================================================ */
(function () {
  // --- Email reveal ---
  // The link ships with a LinkedIn fallback href so it always works,
  // even if this script is blocked or fails to load. JS upgrades it to mailto.
  var mail = document.getElementById('mail'), mailtext = document.getElementById('mailtext');
  if (mail && mailtext) {
    var u = 'saintseverbenjamin', d = 'gmail.com';
    mail.href = 'mailto:' + u + '@' + d;
    mailtext.textContent = u + '@' + d;
  }

  // --- Mobile nav toggle ---
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileNav = document.getElementById('nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', open);
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Kinetic letters + ambient light + cursor ring ---
  var letters = [].slice.call(document.querySelectorAll('[data-kl]')).map(function (el) { return { el: el, x: 0, y: 0, tx: 0, ty: 0 }; });
  var ambient = document.getElementById('ambient');
  var cursor = document.getElementById('cursor');
  var mx = -9999, my = -9999, ax = window.innerWidth / 2, ay = window.innerHeight * 0.5, cx = ax, cy = ay;
  var amTx = ax, amTy = ay;

  window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; amTx = e.clientX; amTy = e.clientY; });

  var R = 150;
  function loop() {
    requestAnimationFrame(loop);
    for (var i = 0; i < letters.length; i++) {
      var it = letters[i];
      var r = it.el.getBoundingClientRect();
      var bx = r.left + r.width / 2 - it.x;
      var by = r.top + r.height / 2 - it.y;
      var dx = bx - mx, dy = by - my;
      var d = Math.hypot(dx, dy) || 1;
      if (d < R) { var f = (1 - d / R); it.tx = (dx / d) * f * 24; it.ty = (dy / d) * f * 18; }
      else { it.tx = 0; it.ty = 0; }
      it.x += (it.tx - it.x) * 0.14;
      it.y += (it.ty - it.y) * 0.14;
      it.el.style.transform = 'translate(' + it.x.toFixed(2) + 'px,' + it.y.toFixed(2) + 'px)';
    }
    if (ambient) { ax += (amTx - ax) * 0.06; ay += (amTy - ay) * 0.06; ambient.style.left = ax + 'px'; ambient.style.top = ay + 'px'; }
    if (cursor) { cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2; cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px'; }
    if (mx < 0 && ambient) {
      var t = performance.now() * 0.0004;
      amTx = window.innerWidth * (0.5 + Math.cos(t) * 0.12);
      amTy = window.innerHeight * (0.5 + Math.sin(t * 0.8) * 0.1);
    }
  }
  loop();

  // --- Cursor hover scaling ---
  document.addEventListener('mouseover', function (e) {
    var a = e.target.closest('a, button');
    if (a && cursor) { cursor.style.width = '52px'; cursor.style.height = '52px'; cursor.style.background = 'rgba(91,108,255,.18)'; }
  });
  document.addEventListener('mouseout', function (e) {
    var a = e.target.closest('a, button');
    if (a && cursor) { cursor.style.width = '28px'; cursor.style.height = '28px'; cursor.style.background = 'transparent'; }
  });

  // --- GSAP intro + scroll reveals ---
  function waitFor(cond, cb) {
    if (cond()) { cb(); return; }
    var n = 0;
    var t = setInterval(function () {
      if (cond()) { clearInterval(t); cb(); }
      else if (++n > 200) { clearInterval(t); }
    }, 50);
  }

  waitFor(function () { return window.gsap && window.ScrollTrigger; }, function () {
    var gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('#hero-label', { y: 20, opacity: 0, duration: .8 })
      .from('#kname [data-kl]', { y: 60, opacity: 0, duration: .7, stagger: 0.02 }, '-=.4')
      .from('#hero-tag', { y: 24, opacity: 0, duration: .8 }, '-=.5');

    gsap.utils.toArray('[data-reveal]').forEach(function (el) {
      gsap.from(el, {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
      });
    });
  });
})();
