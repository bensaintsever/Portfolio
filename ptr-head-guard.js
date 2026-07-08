/* ============================================================
   Page-transition HEAD GUARD (must load BEFORE paint, no defer)
   - Defines the destination registry (window.PTR_DEST) shared
     with transition.js.
   - If we arrived under a curtain, covers the screen immediately
     with the DESTINATION page's accent color so there is no flash
     and no visible scroll-to before transition.js lifts it.
   ============================================================ */
(function () {
  window.PTR_DEST = {
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
    'enac.html':      { color: '#9a7cff', kicker: 'ENAC', fallback: 'Simulateur de vol', map: {} },
    'index-en.html':     { color: '#2b3cf0', kicker: 'PORTFOLIO', fallback: 'Benjamin Saint-Sever', map: {} },
    'hustle-up-en.html': { color: '#3bbf73', kicker: 'HUSTLE UP', fallback: 'Hustle Up', map: {
      'ia':        { n: '01', t: 'Designing with AI' },
      'ds':        { n: '02', t: 'Design system' },
      'header':    { n: '03', t: 'Header redesign' },
      'dashboard': { n: '04', t: 'Gym owner dashboard' }
    }},
    'ibat-en.html':      { color: '#e0913b', kicker: 'ISYBUY · IBAT', fallback: 'ISYBUY & IBAT', map: {
      'isybuy': { n: '05', t: 'Web procurement platform' },
      'scan':   { n: '06', t: 'Quote scanning' },
      'achat':  { n: '07', t: 'Mobile purchasing' },
      'temps':  { n: '08', t: 'Time tracking' }
    }},
    'enac-en.html':      { color: '#9a7cff', kicker: 'ENAC', fallback: 'Flight simulator', map: {} }
  };

  try {
    // Reduced motion : pas de carton du tout, la page arrive telle quelle.
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.removeItem('ptr-transition');
      return;
    }
    var raw = sessionStorage.getItem('ptr-transition');
    if (!raw) return;
    var d = JSON.parse(raw) || {};
    var file = (location.pathname.split('/').pop() || 'index.html');
    var dest = window.PTR_DEST[file] || { color: '#2b3cf0', kicker: '' };

    var title = d.t || dest.fallback || '';
    // Peint <html> à la couleur du carton AVANT le premier rendu : comble
    // l'instant où le carton n'est pas encore monté (anti-blink), le CSS
    // masquant le body pendant ce temps (html.ptr-arriving body).
    document.documentElement.style.backgroundColor = dest.color;
    document.documentElement.classList.add('ptr-arriving');
    document.addEventListener('DOMContentLoaded', function () {
      if (document.getElementById('ptr')) return;
      var ov = document.createElement('div');
      ov.id = 'ptr';
      ov.innerHTML =
        '<div class="ptr-panel" style="background:' + dest.color + ';">' +
        '<div class="ptr-kicker">' + (dest.kicker || '') + '</div>' +
        '<div class="ptr-row"><span class="ptr-num">' + (d.n || '') + '</span>' +
        '<span class="ptr-title">' + title + '</span></div>' +
        '</div>';
      document.body.appendChild(ov);
    });
    // Filet de sécurité : si transition.js ne prend jamais la main (CDN GSAP
    // bloqué...), on découvre la page plutôt que de la laisser masquée.
    setTimeout(function () {
      if (!document.documentElement.classList.contains('ptr-arriving')) return;
      document.documentElement.classList.remove('ptr-arriving');
      document.documentElement.style.backgroundColor = '';
      var ov = document.getElementById('ptr');
      if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
    }, 4000);
  } catch (e) {}
})();
