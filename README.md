# Portfolio — déploiement sur GitHub Pages

## 1. Personnaliser le contenu
Avant de publier, éditez `index.html` :
- Nom, email, liens GitHub/LinkedIn
- Section "À propos"
- Les 3 projets (titre, description, tags, lien)

## 2. Créer le dépôt sur GitHub
Sur github.com : **New repository** → nommez-le par exemple `portfolio`
(ou `votre-pseudo.github.io` si vous voulez que le site soit à la racine
de `https://votre-pseudo.github.io`).

## 3. Pousser les fichiers

```bash
cd portfolio
git init
git add .
git commit -m "Premier commit du portfolio"
git branch -M main
git remote add origin https://github.com/VOTRE_PSEUDO/NOM_DU_DEPOT.git
git push -u origin main
```

## 4. Activer GitHub Pages
Dans le dépôt GitHub : **Settings → Pages**
- Source : `Deploy from a branch`
- Branch : `main`, dossier `/ (root)`
- Enregistrer

Le site sera disponible après 1-2 minutes à :
- `https://VOTRE_PSEUDO.github.io/NOM_DU_DEPOT/`
- ou `https://VOTRE_PSEUDO.github.io/` si le dépôt s'appelle `votre-pseudo.github.io`

## 5. Mises à jour
Après chaque modification :
```bash
git add .
git commit -m "Mise à jour"
git push
```
