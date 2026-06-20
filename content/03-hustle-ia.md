# 03 — Concevoir avec l'IA (Hustle Up)

> Brouillon v2 à valider avant intégration dans `index.html`.
> Cette étude vient APRÈS l'étude design system : le socle est déjà raconté là-bas, ici on enchaîne sur le workflow IA greffé dessus. On ne re-décrit donc pas le DS en détail, on s'appuie sur lui.
> ⚠️ C'est ton vrai différenciateur, mais aussi le plus risqué à sur-vendre. Propos factuel, rôle « je pilote, l'IA exécute ».
> Cadrage validé : toutes les implémentations sont faites par les devs. Claude Code et la code base servent ta génération de maquettes ancrées sur le système, pas la mise en production. Bridge a été testé puis écarté (trop long à produire/itérer, trop coûteux en tokens) : présenté comme un arbitrage d'outil. Usage IA concret retenu : MCP Figma + scripts générés avec Claude pour harmoniser les fichiers Figma et y appliquer les tokens.
> Trois niveaux de maturité distingués dans l'étude : établi (MCP Figma + scripts), abandonné après test (Bridge), en POC (génération d'interfaces avec Claude Design, DS calqué sur le repo, prototype raffiné avec Claude Code).

**Titre :** Concevoir avec l'IA
**Sous-titre :** Greffer un workflow de génération de maquettes sur le design system, sans lâcher la main

---

## Méta

- **Rôle :** Mise en place du workflow de conception de maquettes assisté par IA
- **Outils :** Figma, Figma MCP, Claude Code, Claude Design (POC). Bridge testé puis écarté.
- **Contexte :** Hustle Up, sur la base du design system multi-public et multi-thème

---

## Le problème

Une fois le design system en place, restait la question de la production. Deux façons de produire des maquettes posaient chacune un problème. Le maquettage classique, écran par écran dans Figma, est lent dès qu'un produit a plusieurs publics (athlète, coach, owner) et plusieurs thèmes (clair, sombre) à décliner. À l'inverse, demander à une IA de générer une interface « à vide » produit du générique : des écrans plausibles mais hors-système, qui ignorent les composants, les tokens et les règles déjà établis. Aucune des deux ne donnait à la fois de la vitesse et de la cohérence avec l'existant.

L'IA est arrivée plus tard dans le projet, pour se greffer sur un design system déjà solide. C'est précisément ce qui a rendu la chose intéressante : il y avait un système sur lequel s'appuyer.

## Ce que j'ai fait

J'ai construit un workflow où l'IA ne part jamais de zéro. Elle génère des maquettes en s'appuyant directement sur le design system et sur la code base du produit, qui sert de référence à ce qui existe réellement.

- **Exploité la structure du design system comme point d'ancrage.** Parce que le DS est organisé en tokens sémantiques déclinés par thème (voir l'étude précédente), une génération assistée peut produire des écrans réellement ancrés dans le système plutôt que des approximations à reprendre.
- **Mis en place un process de génération raffiné avec Claude Code**, qui s'appuie sur la code base existante pour rester fidèle aux composants et aux tokens réels du produit. L'IA propose une première version conforme, je raffine en designer, et la maquette part ensuite en conception. L'implémentation, elle, reste du ressort des développeurs.
- **Automatisé l'entretien des fichiers Figma avec le MCP Figma et des scripts générés avec Claude.** Pour appliquer les tokens et harmoniser les fichiers, plutôt que de reprendre les écrans un par un à la main, j'ai utilisé le MCP Figma piloté par des scripts que je faisais générer par Claude. Une tâche répétitive et coûteuse en temps est ainsi devenue rapide et homogène, sans écart d'un fichier à l'autre.
- **Gardé la main à chaque étape.** Je définis l'intention, le cadre et les contraintes du système, l'IA accélère la production des maquettes, je garde l'arbitrage et le contrôle qualité.

*Image, diagramme du workflow (version Figma à mettre en forme) : génération de maquettes ancrée dans le DS, puis raffinage designer.*

## Ce que j'explore ensuite, en POC

La suite que je teste en ce moment, encore au stade de preuve de concept, pousse le même principe un cran plus loin : générer des interfaces avec Claude Design. J'y intègre le design system calqué sur le repo, pour que la génération s'appuie sur les vrais composants et les vrais tokens plutôt que sur des approximations. Concrètement, je crée un prototype que je raffine ensuite avec Claude Code. L'objectif reste constant, ne jamais générer hors-système, mais l'outillage évolue. Je le présente pour ce qu'il est, une exploration en cours et non un acquis, parce que distinguer ce qui est établi de ce que je teste fait partie de ma façon de travailler.

## Le parti pris

**Ancrer la génération sur le design system plutôt que de prompter à vide.**

Le réflexe courant avec l'IA générative, c'est de lui décrire un écran et d'espérer un bon résultat. Le problème, c'est que le résultat est déconnecté du système : il faut tout reprendre pour le remettre aux normes, et le gain de vitesse disparaît. J'ai fait le choix inverse, en m'appuyant sur le design system déjà construit pour que l'IA génère *dedans*, pas à côté. Ce n'est possible que parce que le socle existait et était structuré en profondeur. C'est ce qui transforme l'IA d'un générateur d'idées jetables en un véritable accélérateur de production conforme.

Le second parti pris, c'est la place du designer. L'IA n'est pas un substitut, c'est un exécutant rapide. Le jugement, qu'est-ce qui est juste pour l'utilisateur, qu'est-ce qu'on garde, qu'est-ce qu'on écarte, reste côté designer.

> **Le principe que je retiens :** l'IA n'a de valeur en design que si elle est ancrée sur le système. Le design system n'est pas seulement une bibliothèque pour les humains, c'est le socle qui rend la génération assistée fiable.

## Un outil testé puis écarté

J'ai aussi évalué Bridge pour générer des maquettes directement dans Figma. Après l'avoir mis à l'épreuve, je l'ai écarté : la production et l'itération étaient trop lentes pour le bénéfice, et la consommation de tokens trop élevée au regard du gain. Je le mentionne volontairement, parce que tester un outil et décider de ne pas le garder fait partie du travail. Je juge un outil de génération à son rapport coût/valeur réel dans mon workflow, pas à sa promesse. C'est la même exigence que celle qui m'a fait retirer une feature séduisante mais peu utile du dashboard.

## Résultat

Le workflow accélère la production de maquettes tout en préservant l'intention design et la cohérence avec le système. C'est une capacité que peu de designers savent démontrer concrètement : un process réel, pas une démo, ancré sur un design system de production et exploité au quotidien. La frontière reste nette, je conçois et génère des maquettes ancrées sur le système, l'implémentation revient aux développeurs, avec qui le pont se fait par le design system et ses tokens communs.
