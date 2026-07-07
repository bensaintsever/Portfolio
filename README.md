# Portfolio · Benjamin Saint-Sever

Portfolio de Benjamin Saint-Sever, Product / UX / UI Designer à Toulouse.
Études de cas racontées par les décisions : workflow de design assisté par IA, design systems, interfaces denses en données et dashboards opérateurs.

**En ligne :** [bensaintsever.github.io/Portfolio](https://bensaintsever.github.io/Portfolio/)

## Principes

- **Statique et sans build.** HTML, CSS et JavaScript vanilla, servis tels quels par GitHub Pages. Pas de framework, pas de bundler : rien à installer pour contribuer ou relire.
- **Bilingue FR / EN.** Chaque page existe en deux versions (`index.html` / `index-en.html`, etc.), reliées par des balises `hreflang` et un toggle dans la navigation. La langue est mémorisée en `localStorage`, avec une détection navigateur au premier passage.
- **Conçu avec le workflow que le site raconte.** Le site est lui-même produit avec l'assistance de Claude Code, en cohérence avec l'étude de cas « Concevoir avec l'IA ».

## Structure

```text
index.html, index-en.html          Accueil (hero, projets, méthode, à propos, contact)
hustle-up.html, hustle-up-en.html  4 études de cas Hustle Up
ibat.html, ibat-en.html            4 études de cas ISYBUY & IBAT
enac.html, enac-en.html            Étude de cas ENAC (simulateur de vol)
styles.css                         Styles globaux (variables CSS, thème sombre)
main.js                            Comportements de l'accueil (hero cinétique, reveals GSAP)
study-extras.js                    Pages d'études : barre de progression, scroll-spy, email
transition.js                      Transitions de page (carton coloré par destination)
ptr-head-guard.js                  Anti-FOUC pour les transitions
assets/images/                     Visuels des études (WebP)
assets/cv/                         CV FR et EN (HTML source + PDF)
content/                           Sources Markdown des études de cas
```

## Développement local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Un serveur local est nécessaire (plutôt qu'ouvrir les fichiers directement) pour que les transitions et le `localStorage` de langue se comportent comme en production.

## Notes techniques

- Animations via GSAP + ScrollTrigger (CDN), avec repli propre : le contenu reste visible si le CDN est bloqué, et `prefers-reduced-motion` est respecté.
- Images en WebP, chargées en `loading="lazy"`, ratios réservés en CSS pour éviter les sauts de mise en page.
- L'adresse email est assemblée en JavaScript (anti-spam), avec un lien LinkedIn en repli sans JS.
