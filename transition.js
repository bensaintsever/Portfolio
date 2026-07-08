/* ============================================================
   Carton de transition (page transition curtain)
   - Intra-page : couvre (monte du bas), saute le scroll sous
     couverture (invisible), puis se lève vers le haut.
   - Inter-pages : couvre puis navigue ; la page d'arrivée
     démarre déjà couverte (head-guard anti-FOUC) et lève le
     carton. Aucun scroll-to visible.

   Card color + kicker are derived from the DESTINATION page,
   not the current one, so every project keeps its own accent.
   The head-guard inline script (in each page <head>) handles
   the arrival cover before first paint.
   ============================================================ */
(function () {
  // Reduced motion : aucun carton, aucune interception. Les ancres et les
  // liens se comportent nativement (le CSS force déjà scroll-behavior auto).
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DUR_IN = 0.6, DUR_HOLD = 0.45, DUR_OUT = 0.7, EASE = 'power3.inOut';
  var SCROLL_OFFSET = 112;
  var STORE_KEY = 'ptr-transition';

  // Après le premier carton de la session, version raccourcie : l'effet
  // signature reste, sans taxer la navigation répétée. Le hold est calibré
  // pour laisser lire l'intitulé affiché sur le carton.
  var FAST = { in: 0.5, hold: 0.32, out: 0.55 };
  function hasSeen() { try { return sessionStorage.getItem('ptr-seen') === '1'; } catch (e) { return false; } }
  function markSeen() { try { sessionStorage.setItem('ptr-seen', '1'); } catch (e) {} }

  // Destination registry: per target page file, its accent + kicker + studies.
  // Shared with the head-guard via window.PTR_DEST (defined inline in <head>).
  var DEST = window.PTR_DEST || {
    'index.html':     { color: '#2b3cf0', kicker: 'PORTFOLIO', fallback: 'Benjamin Saint-Sever', map: {} },
    'hustle-up.html': { color: '#3bbf73', kicker: 'HUSTLE UP', fallback: 'Hustle Up', map: {
      'ia':        { n: '01', t: "Concevoir avec l'IA" },
      'ds':        { n: '02', t: 'Design system' },
      'header':    { n: '03', t: 'Redesign du header' },
      'dashboard': { n: '04', t: 'Dashboard gym owner' }
    }},
    'ibat.html':      { color: '#e0913b', kicker: 'ISYBUY · IBAT', fallback: 'ISYBUY & IBAT', map: {
      'isybuy': { n: '05', t: "Plateforme d'achat web" },
      'scan':   { n: '06', t: 'Scan de devis' },
      'achat':  { n: '07', t: 'Achat mobile' },
      'temps':  { n: '08', t: 'Gestion des temps' }
    }},
    'enac.html':      { color: '#9a7cff', kicker: 'ENAC', fallback: 'Simulateur de vol', map: {} }
  };

  // Current page file name (for intra-page lookups + arrival theming).
  var CURRENT = (location.pathname.split('/').pop() || 'index.html');
  if (!DEST[CURRENT]) CURRENT = 'index.html';

  function ensureOverlay() {
    var ov = document.getElementById('ptr');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'ptr';
      ov.innerHTML =
        '<div class="ptr-panel">' +
        '<div class="ptr-kicker"></div>' +
        '<div class="ptr-row"><span class="ptr-num"></span><span class="ptr-title"></span></div>' +
        '</div>';
      document.body.appendChild(ov);
    }
    return {
      ov: ov,
      panel: ov.querySelector('.ptr-panel'),
      kickerEl: ov.querySelector('.ptr-kicker'),
      numEl: ov.querySelector('.ptr-num'),
      titleEl: ov.querySelector('.ptr-title')
    };
  }

  function jumpTo(target) {
    var docEl = document.documentElement;
    var prev = docEl.style.scrollBehavior;
    docEl.style.scrollBehavior = 'auto';
    var y = target.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
    window.scrollTo(0, y);
    docEl.style.scrollBehavior = prev;
  }

  function revealNow(gsap, target) {
    target.querySelectorAll('[data-reveal]').forEach(function (el) {
      gsap.killTweensOf(el);
      gsap.set(el, { opacity: 1, y: 0, clearProps: 'transform' });
    });
  }

  function init(gsap) {
    var ui = ensureOverlay();
    var ov = ui.ov, panel = ui.panel, kickerEl = ui.kickerEl, numEl = ui.numEl, titleEl = ui.titleEl;
    var ptl = null, animating = false;

    function paintCard(dest, info) {
      panel.style.background = dest.color;
      kickerEl.textContent = dest.kicker || '';
      numEl.textContent = (info && info.n) || '';
      // Fall back to the destination's generic label when no study is targeted
      // (e.g. "back to all projects") so the card never looks empty/broken.
      titleEl.textContent = (info && info.t) || dest.fallback || '';
    }

    var arriving = document.documentElement.classList.contains('ptr-arriving');

    if (arriving) {
      var incoming = null;
      try { incoming = JSON.parse(sessionStorage.getItem(STORE_KEY)); } catch (e) {}
      try { sessionStorage.removeItem(STORE_KEY); } catch (e) {}
      incoming = incoming || {};
      // Theme the arrival card from the page we landed on.
      var arrDest = DEST[CURRENT] || { color: '#2b3cf0', kicker: '' };
      // Head-guard may have set kicker/color already; re-apply for safety.
      paintCard(arrDest, { n: incoming.n, t: incoming.t });
      gsap.set(ov, { yPercent: 0, pointerEvents: 'auto' });
      animating = true;

      requestAnimationFrame(function () {
        var target = incoming.hash ? document.getElementById(incoming.hash) : null;
        if (target) { jumpTo(target); revealNow(gsap, target); }
        document.documentElement.classList.remove('ptr-arriving');
        document.documentElement.style.backgroundColor = '';
        // Même tempo que le départ de cette navigation (flag passé dans le payload).
        var fast = !!incoming.fast;
        markSeen();
        ptl = gsap.timeline({ onComplete: function () { animating = false; } });
        ptl.to({}, { duration: fast ? FAST.hold : DUR_HOLD })
          .to(ov, { yPercent: -100, duration: fast ? FAST.out : DUR_OUT, ease: EASE })
          .set(ov, { yPercent: 100, pointerEvents: 'none' });
      });
    } else {
      gsap.set(ov, { yPercent: 100, pointerEvents: 'none' });
    }

    // INTRA-PAGE: cover (up), jump under cover, lift (up).
    function goIntra(hash) {
      var target = document.getElementById(hash);
      if (!target || animating) return;
      animating = true;
      var fast = hasSeen();
      markSeen();
      var dest = DEST[CURRENT] || {};
      paintCard(dest, (dest.map && dest.map[hash]) || {});
      if (ptl) ptl.kill();
      ptl = gsap.timeline({ onComplete: function () { animating = false; } });
      ptl.set(ov, { yPercent: 100, pointerEvents: 'auto' })
        .to(ov, { yPercent: 0, duration: fast ? FAST.in : DUR_IN, ease: EASE })
        .add(function () { jumpTo(target); revealNow(gsap, target); })
        .to({}, { duration: fast ? FAST.hold : DUR_HOLD })
        .to(ov, { yPercent: -100, duration: fast ? FAST.out : DUR_OUT, ease: EASE })
        .set(ov, { yPercent: 100, pointerEvents: 'none' });
    }

    // INTER-PAGE: cover (up) themed by DESTINATION, store, navigate.
    function goInter(href, file, hash) {
      if (animating) return;
      animating = true;
      var fast = hasSeen();
      var dest = DEST[file] || { color: '#2b3cf0', kicker: '' };
      var info = (hash && dest.map && dest.map[hash]) || {};
      paintCard(dest, info);
      try {
        // fast est transmis pour que l'arrivée garde le tempo du départ.
        sessionStorage.setItem(STORE_KEY, JSON.stringify({ n: info.n || '', t: info.t || '', hash: hash || '', fast: fast }));
      } catch (e) {}
      if (ptl) ptl.kill();
      ptl = gsap.timeline();
      ptl.set(ov, { yPercent: 100, pointerEvents: 'auto' })
        .to(ov, { yPercent: 0, duration: fast ? FAST.in : DUR_IN, ease: EASE })
        .add(function () { window.location.href = href; });
    }

    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || a.target === '_blank') return;

      // Same-page anchor mapped to a study card on the current page -> intra
      if (href.charAt(0) === '#') {
        var hash = href.slice(1);
        var curMap = (DEST[CURRENT] && DEST[CURRENT].map) || {};
        if (curMap[hash]) { e.preventDefault(); goIntra(hash); }
        return;
      }

      // Internal cross-page .html link (optionally with #hash) -> inter
      var m = href.match(/^([\w.\/-]+\.html)(?:#(.+))?$/);
      if (m) {
        var file = m[1].split('/').pop();
        e.preventDefault();
        goInter(href, file, m[2] || '');
      }
    });
  }

  function waitFor(cond, cb) {
    if (cond()) { cb(); return; }
    var n = 0, t = setInterval(function () {
      if (cond()) { clearInterval(t); cb(); }
      else if (++n > 200) clearInterval(t);
    }, 50);
  }

  waitFor(function () { return window.gsap && window.ScrollTrigger; }, function () { init(window.gsap); });
})();
