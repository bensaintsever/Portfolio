# 06 — Gestion des temps sur chantier (IBAT)

> Brouillon à valider avant intégration dans `index.html`.
> Structure sur le gabarit : contexte, problème, ce que j'ai fait, l'arbitrage, résultat.
> Arbitrage validé : densité d'information vs manipulation directe.
> ⚠️ Pas de chiffres inventés. `[À confirmer]` attend ta validation.

**Titre :** Gestion des temps sur chantier
**Sous-titre :** Suivre les heures des équipes sans re-saisie, du terrain au bureau

---

## Méta

- **Rôle :** UX/UI designer, recherche utilisateur
- **Personas :** chef d'équipe, conducteur de travaux, RH
- **Outils :** Adobe XD, Figma
- **Période :** 2018 à 2022

---

## Contexte

IBAT Temps est l'application de suivi des heures des équipes sur chantier. Elle relie trois profils aux besoins distincts : le chef d'équipe qui saisit sur le terrain, le conducteur de travaux qui supervise, et les RH qui exploitent les heures en bout de chaîne.

## Le problème

Le suivi des heures se faisait au papier-crayon, avec re-saisie ultérieure et aucune centralisation. Les heures notées sur le terrain étaient ressaisies plus tard, source d'erreurs et de perte de temps, et personne n'avait de vue consolidée fiable. Il fallait un outil qui capte l'information une seule fois, au bon endroit, et la rende exploitable sans double travail.

## Ce que j'ai fait

- Mené la recherche utilisateur (personas, user journey) pour cartographier qui saisit quoi, quand, et ce que chaque profil attend de l'outil.
- Conçu les wireframes puis un storyboard haute-fidélité couvrant le pointage, la saisie des heures et des absences, l'ajout d'heures locatives, et la consultation du planning de la semaine.
- Produit une seconde version améliorée par les tests utilisateurs, en corrigeant ce qui posait problème sur la première.

*Image, storyboard du parcours de pointage et de saisie. Fichier : `Extract screen/IBAT/Storyboard autopointage 1.png`.*

## L'arbitrage que j'ai tranché

**Tout voir d'un coup d'œil, sans renoncer à éditer vite.**

Le suivi des heures pose un dilemme classique des interfaces data-rich : pour décider, il faut une vue d'ensemble dense, l'ensemble des heures d'une semaine sous les yeux ; mais pour saisir vite sur le terrain, il faut pouvoir éditer directement, sans naviguer dans des sous-écrans. Densité et manipulation directe tirent en sens opposés, la première remplit l'écran, la seconde réclame de l'espace pour agir.

J'ai conçu la vue pour concilier les deux : une grille qui montre la semaine entière d'un seul tenant, où la saisie et la correction se font directement dans la cellule, là où l'œil est déjà posé, sans ouvrir un formulaire à part. La manipulation directe se fait dans la densité, pas à côté d'elle. C'est ce qui permet à un chef d'équipe de pointer vite tout en gardant le contexte de la semaine.

> **Le principe que je retiens :** densité et action ne s'opposent que si on les sépare. En rendant l'édition possible là où l'information est dense, on évite de choisir entre voir et faire.

## Résultat

L'application a remplacé le papier-crayon et la re-saisie par une capture unique au plus près du terrain, exploitable ensuite par les RH sans double saisie. La seconde version, retravaillée à partir des tests, a corrigé les points de friction de la première.

[À confirmer — tu mentionnes un bon niveau de NPS et des tests utilisateurs sur les apps IBAT. Si tu peux sourcer un chiffre ou un retour de test précis pour cette app, on l'ajoute ici. Sinon on reste qualitatif.]
