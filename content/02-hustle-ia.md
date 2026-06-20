# 02 — Concevoir avec l'IA (Hustle Up)

> Brouillon à valider avant intégration dans `index.html`.
> ⚠️ Cette étude est ton vrai différenciateur, mais c'est aussi la plus risquée à sur-vendre. J'ai gardé le propos factuel et centré sur le rôle « je pilote, l'IA exécute ». Les passages `[À confirmer]` attendent ta validation, notamment sur ton autonomie réelle côté code.

**Titre :** Concevoir avec l'IA
**Sous-titre :** Un workflow de génération de maquettes ancré sur le design system, où le designer garde la main

---

## Méta

- **Rôle** — Design system, mise en place du workflow IA
- **Outils** — Figma, Figma MCP, Claude Code
- **Contexte** — Hustle Up, design system multi-thème et multi-public

---

## Le problème

Deux façons de produire des maquettes posaient chacune un problème. Le maquettage classique, écran par écran dans Figma, est lent dès qu'un produit a plusieurs publics (athlète, coach, owner) et plusieurs thèmes (clair, sombre) à décliner. À l'inverse, demander à une IA de générer une interface « à vide » produit du générique : des écrans plausibles mais hors-système, qui ignorent les composants, les tokens et les règles déjà établis. Aucune des deux ne donnait à la fois de la vitesse et de la cohérence avec l'existant.

## Ce que j'ai fait

J'ai construit un workflow où l'IA ne part jamais de zéro : elle génère en s'appuyant directement sur le design system et la code base du produit.

- **Un design system structuré pour être lisible par une machine autant que par un humain.** Le DS Hustle Up est organisé en couches de design tokens — couleurs globales, puis sémantiques (interactive, surface, feedback) — déclinées sur quatre thèmes (Athlete Light/Dark, Owner et Coach). Cette structure n'est pas qu'esthétique : c'est ce qui permet à une génération assistée par IA de produire des écrans réellement ancrés dans le système plutôt que des approximations.
- **Un process de génération ancré sur le DS, raffiné avec Claude Code**, qui exploite la code base existante. L'IA propose une première version conforme aux composants et tokens du produit ; je raffine en designer ; et la mise en code passe par Claude Code en s'appuyant sur le code réel.
- **Je pilote, l'IA exécute.** Je définis l'intention, le cadre et les contraintes du système ; l'IA accélère la production ; je garde l'arbitrage et le contrôle qualité à chaque étape.

*Image — diagramme du workflow (version Figma à mettre en forme) : génération ancrée dans le DS → raffinage designer → mise en code via Claude Code.*

## Le parti pris

**Ancrer la génération sur le design system plutôt que de prompter à vide.**

Le réflexe courant avec l'IA générative, c'est de lui décrire un écran et d'espérer un bon résultat. Le problème, c'est que le résultat est déconnecté du système : il faut tout reprendre pour le remettre aux normes, et le gain de vitesse disparaît. J'ai fait le choix inverse : investir dans un design system suffisamment structuré et documenté pour que l'IA génère *dedans*, pas à côté. C'est plus de travail en amont, mais ça transforme l'IA d'un générateur d'idées jetables en un véritable accélérateur de production conforme.

Le second parti pris, c'est la place du designer. L'IA n'est pas un substitut, c'est un exécutant rapide. Le jugement — qu'est-ce qui est juste pour l'utilisateur, qu'est-ce qu'on garde, qu'est-ce qu'on écarte — reste côté designer.

> **Le principe que je retiens :** l'IA n'a de valeur en design que si elle est ancrée sur le système. Un design system bien structuré n'est pas seulement une bibliothèque pour les humains, c'est le socle qui rend la génération assistée fiable.

## Résultat

Le workflow accélère la production de maquettes tout en préservant l'intention design et la cohérence avec le système, jusqu'au code. C'est une capacité que peu de designers savent démontrer concrètement : un process réel, pas une démo, ancré sur un design system de production et exploité au quotidien.

[À confirmer — sois précis sur ton autonomie réelle côté code via Claude Code : jusqu'où tu vas seul, ce qui repasse par un dev. C'est le point où la sur-vente serait le plus coûteuse en entretien. Mieux vaut une formulation honnête et vérifiable.]
