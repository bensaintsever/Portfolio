# 01, Dashboard gym owner (Hustle Up)

> Brouillon v2 à valider avant intégration dans `index.html`.
> Structure calquée sur l'étude IBAT/ISYBUY : contexte, problème, ce que j'ai fait, l'arbitrage, résultat.
> ⚠️ Aucune métrique chiffrée n'est avancée comme résultat de mon travail : les chiffres visibles sur les écrans sont des données de démo. Les passages entre crochets `[À confirmer]` attendent ta validation.

**Titre :** Dashboard gym owner
**Sous-titre :** Centraliser le pilotage quotidien d'une salle, avec des accès adaptés à chaque rôle

---

## Méta

- **Rôle :** Design system, recherche utilisateur, conception de la vue de pilotage
- **Équipe :** 1 PO, et le CEO sur quelques retours
- **Outils :** Figma (et Figma MCP)
- **Période :** fin 2024

---

## Contexte

Hustle Up est une plateforme qui réunit trois acteurs autour d'une salle de sport : les **athlètes** qui s'entraînent, les **owners** qui gèrent la salle, et les **coachs de gym** qui encadrent. Ce projet concerne les owners et leur outil de pilotage : un dashboard pour suivre l'activité de leur salle au quotidien, sur un thème et un accent de couleur qui leur sont propres dans le design system.

À l'intérieur d'une même salle, tout le monde n'a pas le même besoin ni le même droit de regard. Deux rôles cohabitent autour de ce dashboard : le **financial**, qui suit les données financières, et le **coach de gym**, qui suit les athlètes mais n'a pas forcément accès à la partie finance. Cette réalité organisationnelle a directement structuré la conception.

J'ai porté cette feature avec un PO, le CEO intervenant ponctuellement sur quelques retours, en m'appuyant sur des interviews menées directement auprès d'owners.

## Le problème

Après avoir échangé en interview avec des owners, un constat est revenu : pour piloter leur salle au quotidien, il leur faut un certain nombre d'informations centralisées, qu'ils n'avaient pas, ou seulement distillées dans plusieurs endroits du produit. Ces informations touchent à la fois les athlètes qui viennent (présences, remplissage des cours, engagement) et l'aspect financier, qu'un gérant doit suivre régulièrement pour la bonne santé de son entreprise.

Le problème n'était donc pas un manque de données, mais leur dispersion. Aucun endroit unique ne répondait à la question du matin, *est-ce que ma salle tourne bien aujourd'hui, et où dois-je agir ?*

## Ce que j'ai fait

- Identifié, à partir des interviews d'owners, les informations qui comptent vraiment pour le suivi quotidien et regroupé leur besoin sur une seule vue : les drop-in du jour, les sessions d'essai, les cours qui se remplissent, l'engagement des athlètes, et toute une section KPI.
- Centralisé ces informations qui, avant, n'existaient pas en un seul lieu ou restaient distillées dans le produit, en les organisant en colonnes thématiques sur le thème *owner* du design system. Chaque bloc est une synthèse, une tendance, un chiffre clé, un petit groupe d'athlètes à regarder, pas un tableau exhaustif.
- Tenu compte des rôles au sein de la salle dès la conception : la partie financière, à gauche, relève du rôle financial ; les informations sur les athlètes restent accessibles au coach de gym, qui n'a pas forcément le droit de regard sur la finance.
- Réutilisé pour les pages de détail (finances, planning, membres) le modèle de tableau unifié issu de ma pratique du design system : filtres, recherche, export. Le dashboard renvoie vers ces pages quand l'owner veut creuser.

*Image, vue principale du dashboard owner. Fichier : `Extract screen/Box/Dashboard [OWNER].png`. Unique capture de l'étude.*

## L'arbitrage que j'ai tranché

**Une vue de pilotage, pas un tableau de bord exhaustif.**

La tentation, sur un dashboard, c'est de tout mettre : chaque athlète, chaque transaction, chaque créneau, parce que tout existe déjà dans le produit. J'ai tranché dans l'autre sens. Le dashboard ne montre que ce qui aide à *décider* : des synthèses, des tendances, des segments d'athlètes réduits à quelques noms. Le détail exhaustif reste dans les pages dédiées. La liste complète des transactions vit dans la page Finances, avec son tableau filtrable, pas sur le dashboard.

Concrètement, chaque bloc du dashboard est une porte d'entrée vers un détail, pas le détail lui-même : on voit le taux de churn et les quelques athlètes inactifs à relancer, et un lien mène à la liste complète si besoin. Ce parti pris garde la page lisible malgré la densité réelle des données, et respecte le rythme d'un owner qui ouvre son dashboard le matin pour savoir où agir, pas pour éplucher des lignes.

> **Le principe que je retiens :** sur une interface de pilotage, la valeur n'est pas dans la quantité d'information affichée mais dans la décision qu'elle déclenche. Le détail doit rester à un clic, pas sous les yeux.

## En complément, des accès adaptés au rôle

Une même salle, plusieurs droits de regard. La conception du dashboard a intégré le fait que le **financial** a besoin de voir les données financières, regroupées sur la partie gauche, tandis que le **coach de gym** se concentre sur les athlètes sans accéder forcément à la finance. Plutôt que de multiplier les écrans, c'est la même vue de pilotage qui se module selon le rôle : le financial retrouve la même structure avec les blocs financiers en moins, simplement réagencés pour rester lisibles. Chacun voit ce qui le concerne, et l'information sensible reste cadrée par les droits d'accès.

## Résultat

L'owner dispose d'une vue unique qui centralise un suivi quotidien jusque-là dispersé, et qui répond à la question « où dois-je agir aujourd'hui ». Les retours utilisateurs ont été bons. La séparation nette entre synthèse (le dashboard) et détail (les pages filtrables), combinée à des accès adaptés au rôle, a aussi tenu le cap de cohérence du design system : le même modèle de tableau sert partout où le détail est nécessaire.

Un arbitrage de suivi mérite d'être cité, parce qu'il dit quelque chose de la méthode. Une feature de prise de notes quotidienne était initialement incluse. Elle plaisait aux utilisateurs sur les prototypes, mais une fois en usage réel, elle s'est révélée peu utilisée, davantage un *nice to have* qu'une vraie utilité. Elle n'a donc pas été maintenue. Garder une fonctionnalité simplement parce qu'elle séduit en test aurait alourdi la vue de pilotage sans servir la décision quotidienne, l'inverse exact du parti pris de l'écran.
