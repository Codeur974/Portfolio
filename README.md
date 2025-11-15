# Portfolio - Développeur Web Full Stack

Portfolio personnel présentant mes compétences et projets en développement web.

## Technologies utilisées

- **Frontend** : React 19, Vite
- **Styling** : SCSS/Sass
- **Routing** : React Router DOM
- **Email** : EmailJS (formulaire de contact + auto-réponse)
- **CRM** : Notion API (gestion des leads)
- **Serverless** : Netlify Functions
- **Déploiement** : Netlify
- **Icons** : React Icons

## Fonctionnalités

- Portfolio responsive avec présentation des projets
- Formulaire de contact avec double envoi d'emails :
  - Email admin pour recevoir les demandes
  - Email auto-réponse pour le prospect
- Intégration CRM Notion pour centraliser les leads
- Calendly intégré pour la prise de RDV
- Architecture serverless sécurisée

## Installation et développement local

### Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Codeur974/Portfolio.git

# Installer les dépendances
cd portfolio
npm install
```

### Configuration

Pour tester l'intégration Notion en local :

1. Installer le CLI Netlify :
```bash
npm install -g netlify-cli
```

2. Créer un fichier `.env` à la racine :
```env
NOTION_API_KEY=secret_votre_cle_api_notion
NOTION_DATABASE_ID=votre_id_de_base_notion
```

**Note** : Consultez `NOTION_SETUP.md` pour la configuration complète de Notion.

### Lancement en développement

```bash
# Avec Netlify Functions (recommandé pour tester Notion)
netlify dev

# Ou sans Netlify (pas d'intégration Notion)
npm run dev
```

L'application sera accessible sur `http://localhost:8888` (Netlify) ou `http://localhost:5173` (Vite).

## Scripts disponibles

```bash
npm run dev        # Lancer le serveur de développement Vite
npm run build      # Compiler le projet pour la production
npm run preview    # Prévisualiser le build de production
npm run lint       # Lancer ESLint
npm run deploy     # Déployer sur GitHub Pages
```

## Déploiement

Le projet est déjà déployé sur **Netlify** avec support des fonctions serverless.

### Mise à jour du déploiement

Pour activer l'intégration Notion CRM :

1. Ajouter les variables d'environnement dans Netlify :
   - `NOTION_API_KEY` (votre clé d'intégration Notion)
   - `NOTION_DATABASE_ID` (l'ID de votre base CRM)
2. Pousser le code sur GitHub :
   ```bash
   git push
   ```
3. Netlify déploiera automatiquement les fonctions serverless

**Documentation complète** : Voir `NOTION_SETUP.md`

## Structure du projet

```
portfolio/
├── src/
│   ├── components/         # Composants React
│   │   ├── contactForme/   # Formulaire de contact
│   │   └── ...
│   ├── context/            # Contextes React
│   ├── pages/              # Pages de l'application
│   └── ...
├── netlify/
│   └── functions/          # Fonctions serverless Netlify
│       └── add-to-notion.js
├── netlify.toml            # Configuration Netlify
├── NOTION_SETUP.md         # Guide configuration Notion
└── package.json
```

## Fonctionnalités CRM

Les leads du formulaire de contact sont automatiquement ajoutés dans Notion avec :
- Nom / Entreprise
- Email
- Téléphone
- Type de projet
- Budget estimé
- Délai souhaité
- Description du projet
- Statut (Nouveau, Contacté, etc.)
- Date de contact

## Contact

Pour toute question ou demande de collaboration, utilisez le formulaire de contact sur le portfolio.

## Licence

Projet personnel - Tous droits réservés
