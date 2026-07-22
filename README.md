# Portfolio — Théo Springer

Portfolio personnel développé en HTML, CSS et JavaScript, sans framework. Thème sombre, multi-pages, avec une étude de cas et des extraits de code commentés pour chaque projet.

🔗 **Site en ligne :** _à compléter après déploiement_

## Aperçu

- Landing page épurée avec une sélection de projets
- Page **À propos** : profil, stack maîtrisée et utilisée, répartition des langages
- Page **Parcours** : formation (BTS NDRC) et objectifs (BUT Informatique / BTS SIO)
- Cinq études de cas projet, chacune avec des traces de code réelles et leurs explications

## Structure

```
.
├── index.html            # Landing
├── about.html            # Qui je suis
├── parcours.html         # Plan d'études
├── projets/
│   ├── rewind-insights.html
│   ├── campuslocal.html
│   ├── crestfall.html
│   ├── csv-analyst.html
│   └── 2048.html
└── assets/
    ├── css/style.css
    └── js/main.js
```

## Stack

- HTML5, CSS3 (variables, flexbox, grid)
- JavaScript vanilla (menu, animations au scroll)
- [highlight.js](https://highlightjs.org/) pour la coloration syntaxique (via CDN)
- Polices Inter et JetBrains Mono (Google Fonts)

Aucune dépendance à installer, aucun build.

## Lancer en local

Ouvre simplement `index.html` dans un navigateur, ou sers le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déploiement

Site 100 % statique, déployable tel quel :

- **Vercel** : importer le repo, framework « Other », aucune commande de build.
- **Netlify** : glisser le dossier ou connecter le repo.
- **GitHub Pages** : activer Pages sur la branche `main`.

## Contact

Théo Springer · [theo.springer.iut@gmail.com](mailto:theo.springer.iut@gmail.com) · [github.com/Theo-Springer](https://github.com/Theo-Springer)
