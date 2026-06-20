# 09 — Poste de supervision pour simulateur de vol (Master IHM, ENAC)

> Brouillon v2, réécrit à partir du rapport de chef d'œuvre complet (et non plus du seul extract Behance).
> Corrections majeures vs version précédente :
>  - Le vrai projet = un POSTE DE SUPERVISION pour les instructeurs de pilotage (DFPV), pas une refonte de l'IIPP.
>  - L'IIPP est l'outil EXISTANT de l'ENAC (côté pseudo-pilotes/contrôleurs), analysé en état de l'art, pas votre conception.
>  - Ton rôle exact : Responsable Technique.
>  - Démarche centrée utilisateur sur deux itérations, avec de vrais arbitrages documentés.
> ⚠️ Pas de chiffres inventés. Note de confidentialité : le rapport mentionne une clause de non-divulgation côté ENAC ; le projet a depuis été publié par toi sur Behance, donc OK pour le portfolio, mais à garder en tête.

**Titre :** Poste de supervision pour simulateur de vol
**Sous-titre :** Donner aux instructeurs un contexte aérien réaliste, pensé pour des non-experts

---

## Méta

- **Rôle :** Responsable technique, conception centrée utilisateur (projet d'étude, équipe de 4)
- **Cadre :** Chef d'œuvre, Master 2 IHM, Université Paul Sabatier et ENAC, Toulouse (2017-2018)
- **Client :** ENAC (formation des pilotes)
- **Domaine :** Aéronautique, contrôle aérien, synthèse vocale

---

## Contexte

La formation des pilotes de ligne passe par le simulateur : il reproduit le cockpit et un environnement extérieur réaliste, paramétré en direct par un instructeur qui évalue aussi les élèves. Notre chef d'œuvre, commandé par l'ENAC, consistait à concevoir le **poste de supervision** que l'instructeur utilise pour piloter cette simulation. J'y étais responsable technique, dans une équipe de quatre, en suivant une démarche centrée utilisateur.

## Le problème

Les simulateurs de pilotage n'offraient aucun **contexte aérien** : les communications avec le contrôle et les échanges entre le contrôle et les autres avions du secteur étaient absents. Les pilotes ne les découvraient qu'en vol réel. L'enjeu était d'ajouter ce contexte, des messages ATC réalistes et un environnement vocal, tout en gardant l'outil utilisable par un instructeur qui mène déjà la séance, et sans supposer qu'il maîtrise la phraséologie aéronautique. La question centrale du projet : comment concevoir ce poste pour qu'il soit réaliste, dynamique et facile à utiliser par des utilisateurs non experts ?

## Ce que j'ai fait

Une démarche centrée utilisateur en deux itérations, ancrée dans le terrain et l'état de l'art.

- Étudié les simulations existantes et observé deux séances réelles avec un instructeur de la Direction de la Formation au Pilotage et des Vols (DFPV), d'une situation simple à une simulation chargée de fin de cycle.
- Analysé l'état de l'art, dont l'IIPP, l'Interface Innovante de Pseudo-Pilotage déjà conçue par la recherche de l'ENAC pour les pseudo-pilotes côté contrôleurs. Nous l'avons étudiée pour situer ce qui manquait, sans la reprendre : notre utilisateur et notre besoin étaient différents.
- Formalisé les besoins à partir d'un scénario réel de remise de gaz, puis prototypé en basse fidélité plusieurs représentations, confrontées aux clients, avant d'aboutir aux maquettes haute-fidélité du poste.

*Image, le poster de synthèse du projet (héro).*
*Image, l'étude amont, les phases du contrôle aérien.*
*Image, les premières maquettes papier (timeline, feedforward).*
*Image, les maquettes haute-fidélité (vue ND, vue carte centrée avion).*

## L'arbitrage que j'ai tranché

**Suivre les événements sans voler l'espace à la vue radar.**

Le cœur de l'interface, c'est de répondre à une question : comment l'instructeur visualise et déclenche les événements de l'exercice (les messages ATC) tout en gardant l'œil sur le trafic ? Nous avons prototypé plusieurs représentations temporelles. La **timeline circulaire**, inspirée de l'horloge, était élégante et lisible pour suivre les événements, mais elle prenait trop de place au détriment de la vue radar, qui est l'information vitale. Une autre piste combinait **timeline horizontale et verticale** simultanément : écartée, parce qu'elle alourdissait la charge cognitive.

J'ai retenu une **timeline horizontale en bas de l'écran**, compacte, où chaque bloc résume un message par le nom de l'interlocuteur (pour éviter à l'instructeur de lire tout le contenu), avec un code couleur distinguant la fréquence courante des autres. Un simple clic déclenche le message audio via la synthèse vocale. La règle qui a guidé tous ces choix : préserver la vue radar et limiter la charge cognitive, parce que l'instructeur gère déjà la séance.

> **Le principe que je retiens : sur un poste critique, chaque composant se juge à la place qu'il prend et à la charge mentale qu'il ajoute. La meilleure visualisation n'est pas la plus riche, c'est celle qui laisse de la place à l'essentiel.**

## Un second parti pris, réutiliser un repère connu

Pour manipuler les avions du trafic, plutôt que d'inventer un mode d'interaction, nous avons intégré un **Navigation Display (ND)**, l'écran que les instructeurs connaissent déjà du cockpit. Le faible coût d'apprentissage et l'efficacité de la manipulation directe (changer cap, vitesse, niveau d'un avion d'un geste) primaient sur l'originalité. On part de ce que l'utilisateur sait déjà.

## Résultat

Le chef d'œuvre a abouti à un prototype démontrable du poste de supervision, et surtout à la spécification des besoins et des éléments clés pour rendre une simulation plus réaliste et dynamique. Il était conçu comme le prélude d'un travail de recherche à l'ENAC. Pour moi, c'est le projet fondateur en design d'interaction : comprendre un métier exigeant avant de dessiner, observer l'usage réel, arbitrer entre densité et charge cognitive sur une interface critique. C'est le socle de tout ce que j'ai fait depuis sur des interfaces métier denses.
