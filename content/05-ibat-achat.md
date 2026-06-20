# 05 — Achat mobile (IBAT)

> Brouillon à valider avant intégration dans `index.html`.
> Structure sur le gabarit : contexte, problème, ce que j'ai fait, l'arbitrage, résultat.
> Arbitrage principal validé : le mode déconnecté. Complément : la saisie d'achats faits sur place.
> ⚠️ Pas de chiffres inventés. `[À confirmer]` attend ta validation.

**Titre :** Achat mobile
**Sous-titre :** Commander chez les fournisseurs depuis le chantier, même sans réseau

---

## Méta

- **Rôle :** UX/UI designer, recherche utilisateur
- **Personas :** conducteur de travaux, chef de chantier
- **Outils :** Adobe XD, Figma
- **Période :** 2018 à 2022

---

## Contexte

IBAT Achat est une application de commande fournisseurs pour les professionnels du BTP, pensée pour le terrain. Elle s'adresse à deux personas, le conducteur de travaux et le chef de chantier, qui doivent passer et suivre des commandes depuis le chantier, là où les contraintes ne sont pas celles d'un bureau.

## Le problème

Avant l'application, la commande passait par téléphone, via un commercial. Le process était lent, générait de la paperasse, et n'offrait aucune traçabilité : pas de trace claire de ce qui avait été commandé, à quel prix, ni où en était la livraison. Sur le terrain s'ajoutait une contrainte concrète : le réseau mobile est souvent faible ou absent sur un chantier, et les habitudes d'achat ne passent pas toujours par un flux numérique propre.

## Ce que j'ai fait

- Mené la recherche utilisateur (personas, user journey) pour comprendre comment se passe réellement une commande sur le terrain, et où le numérique pouvait aider sans gêner.
- Conçu les wireframes puis un storyboard haute-fidélité de l'application : passage de commande, suivi, et un scan de document pour capturer un devis ou un bon directement depuis le téléphone.
- Décliné le tout dans l'UI kit IBAT pour rester cohérent avec le reste de la suite.

*Image, l'application IBAT Achat, écrans de commande et scan de document. Fichier : `Extract screen/IBAT/mobileAchat.png`.*

## L'arbitrage que j'ai tranché

**Concevoir pour le chantier sans réseau, pas pour le bureau connecté.**

La façon simple de concevoir une application de commande, c'est de supposer une connexion permanente : on remplit un panier, on valide, le serveur répond. Sur un chantier, cette hypothèse tombe. J'ai fait le choix de concevoir l'application autour du mode déconnecté : pouvoir préparer et saisir une commande sans réseau, puis la synchroniser une fois la connexion revenue. C'est une contrainte structurante qui change la conception, parce qu'il faut penser les états intermédiaires, ce qui est enregistré localement, ce qui se synchronise, et comment l'utilisateur sait où il en est.

Ce parti pris vient directement du terrain observé en recherche, pas d'une préférence technique. Sans lui, l'application aurait été inutilisable là où elle devait justement servir.

> **Le principe que je retiens :** sur une application terrain, la contrainte d'usage réel prime sur le confort de conception. Concevoir pour le cas dégradé, ici l'absence de réseau, c'est concevoir pour le moment où l'outil compte vraiment.

## En complément, respecter les habitudes d'achat sur place

Tout ne passe pas par une commande anticipée. Il arrive qu'un achat soit fait directement en point de vente, sur le moment. Plutôt que de forcer un flux unique qui ignorerait cette réalité, l'application permet de saisir a posteriori un achat réalisé sur place, pour que la traçabilité reste complète sans contraindre les habitudes terrain. C'est la même logique que l'arbitrage principal : épouser l'usage réel plutôt que l'imposer.

## Résultat

L'application a remplacé la commande par téléphone et la paperasse par un parcours traçable, utilisable depuis le chantier y compris sans réseau. Le scan de document a simplifié la capture d'un devis ou d'un bon sans ressaisie.

[À confirmer — tu mentionnes un bon niveau de NPS sur les apps IBAT. Si tu peux sourcer un chiffre ou un retour de test précis pour cette app, on l'ajoute ici. Sinon on reste qualitatif.]
