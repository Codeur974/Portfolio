# 📐 Règles de développement - Portfolio Digital'tek

## 🏗️ Structure des composants

### Convention de nommage et organisation :

**TOUJOURS respecter cette structure** :

```
src/components/
  nomDuComposant/
    NomDuComposant.jsx      ← Composant React (PascalCase pour le fichier)
    nomDuComposant.module.scss  ← Styles SCSS (camelCase pour le fichier)
```

**Exemples existants** :
```
src/components/
  button/
    Button.jsx
    Button.module.scss
  cards/
    card.jsx
    cards.jsx
    card.module.scss
  header/
    Header.jsx
    header.module.scss
```

### ❌ À NE PAS FAIRE :
- Créer des sous-dossiers dans le composant
- Mettre les styles ailleurs que dans le dossier du composant
- Utiliser d'autres conventions de nommage

### ✅ À FAIRE :
- Un dossier par composant
- Le `.jsx` et le `.module.scss` au même niveau
- Importer les styles avec `import styles from "./nomDuComposant.module.scss"`

---

## 📁 Structure des données

Les fichiers de données JSON vont dans :
```
src/data/
  services.json
  process.json
  testimonials.json
```

---

## 📄 Structure des pages

```
src/pages/
  nomDeLaPage/
    NomDeLaPage.jsx
    nomDeLaPage.module.scss
```

Exemples :
```
src/pages/
  home/
    Home.jsx
  about/
    About.jsx
    about.module.scss
  services/        ← À créer
    Services.jsx
    services.module.scss
```

---

## 🎨 Conventions SCSS

- Utiliser des **modules SCSS** (`.module.scss`)
- Nommage des classes en **camelCase** dans le SCSS
- Utiliser `styles.className` dans le JSX

Exemple :
```scss
// button.module.scss
.contactButton {
  background: blue;

  &:hover {
    background: darkblue;
  }
}
```

```jsx
// Button.jsx
import styles from "./button.module.scss";

function Button() {
  return <button className={styles.contactButton}>Click</button>;
}
```

---

## 🔧 Imports des icônes

Toujours depuis `react-icons` :
```jsx
import { FaIcon1, FaIcon2 } from "react-icons/fa";
import { SiIcon1, SiIcon2 } from "react-icons/si";
```

---

## 🗂️ Organisation du code existant à GARDER

### Pages existantes :
- `/` → Home
- `/about` → About
- `/formation` → Formation
- `/menu` → Menu
- `/myproject` → MyProject

### Composants existants à NE PAS modifier :
- `header/`
- `footer/`
- `button/`
- `cards/`
- `intro/`
- `mySkills/`
- `contactForme/`
- `homePageContent/`
- `menuContent/`

### Données existantes :
- `src/doc.json` (projets + skills) ← NE PAS TOUCHER

---

## 🚀 Ajouts à faire

### Nouveaux composants :
- `serviceCard/` (carte pour chaque service)
- `processStep/` (étape du process)
- `testimonial/` (avis client)
- `calendlyButton/` (bouton CTA Calendly)

### Nouvelles pages :
- `services/` (page Services)

### Nouvelles données :
- `src/data/services.json` ✅ CRÉÉ
- `src/data/process.json` ✅ CRÉÉ
- `src/data/testimonials.json` (à créer)

---

## 📝 Checklist avant de créer un composant

- [ ] Le dossier du composant existe dans `src/components/` ?
- [ ] Le fichier `.jsx` est en PascalCase ?
- [ ] Le fichier `.module.scss` est en camelCase ?
- [ ] Les deux fichiers sont au même niveau (pas de sous-dossier) ?
- [ ] Les styles sont importés avec `import styles from "./nomDuComposant.module.scss"` ?
- [ ] Le composant est exporté avec `export default NomDuComposant` ?

---

**Dernière mise à jour** : 2025-11-16
**Par** : Claude Code
