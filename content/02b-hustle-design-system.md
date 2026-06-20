# 02 — Design system Hustle Up

> Brouillon à valider avant intégration dans `index.html`.
> Structure calquée sur le gabarit IBAT : contexte, problème, ce que j'ai fait, l'arbitrage, résultat.
> Cette étude précède celle du workflow IA, parce que le design system a été conçu d'abord, pour l'homogénéité. L'IA est venue se greffer dessus ensuite (étude suivante).
> Point de départ : un existant disparate (composants présents mais divergents, aucun token, styles à améliorer, gestion des couleurs incomplète). Pas du from scratch.
> ⚠️ Pas de chiffres avancés comme résultat de mon travail. `[À confirmer]` attend ta validation.

**Titre :** Design system Hustle Up
**Sous-titre :** Mettre en système un existant disparate pour tenir trois publics et plusieurs thèmes

---

## Méta

- **Rôle :** Conception, documentation et intégration du design system avec les devs
- **Outils :** Figma (et Figma MCP), Storybook
- **Période :** fin 2024

---

## Contexte

Hustle Up s'adresse à trois publics autour d'une salle de sport : les athlètes, les owners et les coachs. Chacun a son univers, son thème, son accent de couleur, et le produit existe en web comme en mobile, en clair comme en sombre. Sans système commun, un produit pareil dérive vite : chaque écran réinvente ses boutons, ses espacements, ses couleurs, et l'ensemble perd toute cohérence.

Mon rôle a été de concevoir le design system qui tient cet ensemble. Le point de départ n'était pas une page blanche : des composants existaient déjà, mais avec des disparités. Aucun token n'était en place, des styles restaient à améliorer, et la gestion des couleurs existait mais de façon incomplète. Le travail a donc consisté à mettre en système cet existant imparfait, à le structurer en profondeur et à combler ce qui manquait pour en faire un socle durable.

## Le problème

Le vrai enjeu n'était pas de styliser des composants, mais de faire tenir une seule et même base sous plusieurs publics et plusieurs thèmes sans la dupliquer, en repartant d'un existant inégal. Des composants étaient là mais divergeaient les uns des autres, il n'y avait pas de couche de tokens pour les unifier, et les couleurs n'étaient que partiellement gérées. Un athlète n'a pas le même univers visuel qu'un owner, mais un bouton reste un bouton : il doit se comporter de la même façon partout, tout en changeant d'apparence selon le contexte. Le risque, sans système, c'était de laisser ces disparités s'installer et de finir avec un comportement par public, donc autant d'occasions de divergence et de maintenance.

## Ce que j'ai fait

- Introduit une architecture de design tokens là où il n'y en avait aucun : des couleurs globales à la base, puis une couche sémantique (interactive, surface, feedback) qui décrit l'intention plutôt que la valeur brute. Un composant ne référence jamais une couleur directement, il référence un rôle, ce qui rend les déclinaisons possibles sans toucher au composant.
- Repris les composants existants pour lever leurs disparités et améliorer les styles, en complétant la gestion des couleurs qui n'était que partielle, de sorte que tout le système se range derrière les mêmes tokens.
- Décliné cette base sur quatre thèmes : Athlete Light, Athlete Dark, Owner et Coach. Le même token sémantique pointe vers une valeur différente selon le thème, ce qui permet de changer tout l'univers d'un public en restant sur une seule définition de composant.
- Documenté les composants comme des briques réutilisables, avec leurs variantes et leurs anatomies. Le composant Button, par exemple, est spécifié avec ses zones (leading-icon, label, trailing-icon, height) et ses déclinaisons en lien et en icon button, le tout versionné.
- Posé des règles génériques réutilisables au-delà du seul Hustle Up, dans le prolongement de ma pratique du design system sur les produits précédents (modèle de tableau unifié, formulaires, navigation).
- Collaboré directement avec les développeurs pour l'intégration des composants, via Storybook, en m'appuyant sur un système de tokens commun entre le design et le code. Le même token qui définit un rôle de couleur dans Figma se retrouve côté développement, ce qui évite la traduction manuelle et les écarts entre maquette et produit.

*Image, vue d'ensemble du design system, anatomie d'un composant sur les quatre thèmes. Fichier : `Extract screen/Composants/_Introduction.png`.*

*Image, l'architecture des tokens sémantiques déclinés par thème. Fichier : `Extract screen/Theme Token.png`.*

## L'arbitrage que j'ai tranché

**Une couche sémantique de tokens plutôt que des couleurs directes.**

Le choix simple aurait été d'attribuer des couleurs directement aux composants, thème par thème. Ça marche au début, et ça devient ingérable dès qu'on ajoute un public ou un mode sombre : chaque ajout oblige à repasser sur tous les composants. J'ai fait le choix plus exigeant d'insérer une couche sémantique entre les couleurs globales et les composants. Un bouton ne dit pas « je suis violet », il dit « j'utilise la couleur interactive primaire », et c'est le thème qui décide ce que ça vaut.

Ce niveau d'indirection coûte plus de travail en amont et demande de penser en rôles plutôt qu'en valeurs. Mais c'est exactement ce qui rend le système multi-public et multi-thème tenable sur la durée, et c'est aussi, on le verra dans l'étude suivante, ce qui a rendu possible le branchement d'un workflow assisté par IA.

> **Le principe que je retiens :** un design system se juge moins à son apparence qu'à sa capacité à absorber un nouveau cas sans tout refaire. La couche sémantique est ce qui transforme une bibliothèque de composants en système.

## Résultat

Hustle Up dispose d'un design system qui tient ses trois publics et ses thèmes sur une seule base, où ajouter ou ajuster un univers ne casse pas les composants. Parti d'un existant disparate, sans tokens et à la gestion des couleurs incomplète, le système est devenu une base cohérente et structurée en profondeur.

Surtout, ce système ne s'arrête pas à Figma. Il vit jusque dans le produit grâce à un système de tokens commun entre design et code et à un travail d'intégration mené directement avec les développeurs sur Storybook. C'est ce qui garantit que ce qui est défini en design se retrouve réellement à l'écran, sans dérive. Et c'est ce même socle, structuré en profondeur, qui a permis ensuite de greffer un workflow de conception assisté par IA capable de générer des écrans conformes au système, l'objet de l'étude suivante.
