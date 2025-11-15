# Configuration Notion CRM avec Netlify

Ce guide vous explique comment configurer l'intégration Notion pour votre formulaire de contact avec Netlify Functions.

## Architecture

Le formulaire utilise une architecture serverless :
- **Frontend (React)** : Envoie les données du formulaire
- **Netlify Function** : Fonction serverless qui communique avec Notion
- **Notion API** : Stocke les leads dans votre CRM

Cette approche sécurise votre clé API Notion (elle reste côté serveur).

---

## Étape 1 : Créer une base de données Notion

1. Ouvrez Notion et créez une nouvelle page
2. Ajoutez une base de données (Database - Full page)
3. Nommez-la "CRM Prospects" ou "Digitaltek CRM"

## Étape 2 : Configurer les propriétés de la base

Créez les propriétés suivantes dans votre base de données :

| Nom de la propriété | Type           | Description                    |
|---------------------|----------------|--------------------------------|
| **Name**            | Title          | Nom / Entreprise du prospect   |
| **Email**           | Email          | Adresse email                  |
| **Phone**           | Phone Number   | Numéro de téléphone (optionnel)|
| **Type de projet**  | Select         | Type de projet demandé         |
| **Budget**          | Select         | Budget estimé                  |
| **Délai souhaité**  | Select         | Délai de réalisation souhaité  |
| **Description**     | Text           | Description détaillée du projet|
| **Statut**          | Select         | État du lead (Nouveau, Contacté, etc.) |
| **Date de contact** | Date           | Date de réception de la demande|

### Options pour les champs Select :

#### Type de projet
- Site vitrine
- E-commerce
- Application web sur mesure
- Refonte de site existant
- Maintenance / Correction de bugs
- Optimisation SEO
- Autre

#### Budget
- Moins de 800€ (petit projet)
- 800€ - 1500€ (site vitrine simple)
- 1500€ - 2500€ (site complet / petit e-commerce)
- 2500€ - 3500€ (application web / e-commerce)
- Plus de 3500€ (projet complexe)
- À discuter

#### Délai souhaité
- Urgent (moins d'1 mois)
- 1 à 2 mois
- 2 à 3 mois
- Plus de 3 mois
- Flexible

#### Statut
- Nouveau
- Contacté
- En discussion
- Devis envoyé
- Accepté
- Refusé
- Archivé

---

## Étape 3 : Créer une intégration Notion

1. Allez sur https://www.notion.so/my-integrations
2. Cliquez sur **"+ New integration"**
3. Remplissez les informations :
   - **Name** : "Portfolio Contact Form"
   - **Associated workspace** : Sélectionnez votre workspace
   - **Type** : Internal Integration
4. Cliquez sur **"Submit"**
5. **COPIEZ** le **"Internal Integration Token"** (commence par `secret_...`)
   - Gardez-le précieusement pour l'étape Netlify

---

## Étape 4 : Connecter l'intégration à votre base

1. Ouvrez votre base de données "CRM Prospects" dans Notion
2. Cliquez sur les **3 points** (⋯) en haut à droite
3. Cliquez sur **"Add connections"** ou **"Connexions"**
4. Cherchez et sélectionnez votre intégration ("Portfolio Contact Form")
5. Cliquez sur **"Confirm"**

---

## Étape 5 : Récupérer l'ID de la base de données

L'ID de votre base se trouve dans son URL.

### Méthode 1 : Depuis l'URL de la page

```
https://www.notion.so/workspace/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6?v=...
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                              C'est votre Database ID (32 caractères)
```

**Exemple concret :**
```
https://www.notion.so/myworkspace/c7e494b41c984215a508d65a8127c57b?v=55383929...
```
➜ Database ID : `c7e494b41c984215a508d65a8127c57b`

### Méthode 2 : Via "Copy link"

1. Cliquez sur **"Share"** en haut à droite de votre base
2. Cliquez sur **"Copy link"**
3. Collez l'URL quelque part
4. Extrayez les 32 caractères hexadécimaux (sans le `?v=...`)

**⚠️ Important :** Prenez UNIQUEMENT les 32 caractères AVANT le `?v=`, pas tout l'URL.

---

## Étape 6 : Configurer Netlify (déjà déployé)

Votre site est déjà sur Netlify, il suffit d'ajouter les variables d'environnement.

### 6.1 Configurer les variables d'environnement

**TRÈS IMPORTANT** : Les variables d'environnement doivent être configurées dans Netlify, pas dans `.env.local`.

1. Dans votre site Netlify, allez dans **"Site configuration"** > **"Environment variables"**
2. Cliquez sur **"Add a variable"**
3. Ajoutez ces 2 variables :

| Key                    | Value                                    |
|------------------------|------------------------------------------|
| `NOTION_API_KEY`       | Votre Integration Token (`secret_...`)   |
| `NOTION_DATABASE_ID`   | L'ID de votre base (32 caractères)       |

4. Cliquez sur **"Save"**

**⚠️ Note :** Les variables Netlify Functions n'ont PAS le préfixe `VITE_` (contrairement au client).

### 6.2 Pousser le code sur GitHub

Les fichiers nécessaires ont déjà été créés :
- `netlify/functions/add-to-notion.js` (fonction serverless)
- `netlify.toml` (configuration)
- `ContactForm.jsx` (mis à jour)

```bash
git add .
git commit -m "Ajout intégration Notion CRM avec Netlify Functions"
git push
```

Netlify va automatiquement :
- Détecter la fonction dans `netlify/functions/`
- La déployer
- La rendre accessible sur `/.netlify/functions/add-to-notion`

### 6.3 Vérifier le déploiement

1. Allez dans votre dashboard Netlify
2. Cliquez sur votre site
3. Allez dans **"Functions"** dans le menu
4. Vous devriez voir **"add-to-notion"** listée
5. Le déploiement est terminé quand le statut est "Published"

---

## Étape 7 : Tester l'intégration

### En local (développement)

Pour tester en local avec Netlify Functions :

1. Installez le CLI Netlify :
   ```bash
   npm install -g netlify-cli
   ```

2. Créez un fichier `.env` à la racine :
   ```env
   NOTION_API_KEY=secret_VotreCléAPINotion
   NOTION_DATABASE_ID=votreIDdeBaseDeDonnées
   ```

3. Lancez le serveur de dev Netlify :
   ```bash
   netlify dev
   ```

4. Testez le formulaire sur `http://localhost:8888`

### En production

1. Allez sur votre site Netlify déployé
2. Testez le formulaire de contact
3. Vérifiez que le lead apparaît dans votre base Notion

---

## Dépannage

### Erreur "object not found"
- Vérifiez que l'intégration est bien **connectée** à votre base (Étape 4)
- Vérifiez que le Database ID est correct (32 caractères, sans `?v=...`)

### Erreur "unauthorized"
- Vérifiez que votre API Key est correcte dans Netlify
- Vérifiez que l'API Key commence bien par `secret_`
- Vérifiez que les variables sont bien nommées `NOTION_API_KEY` et `NOTION_DATABASE_ID`

### Erreur de propriétés / "body failed validation"
- Vérifiez que les noms des propriétés dans `netlify/functions/add-to-notion.js` correspondent **exactement** à ceux de votre base Notion
- Les noms sont **sensibles à la casse** (majuscules/minuscules)
- Vérifiez que les types de propriétés sont corrects (Title, Email, Phone Number, Select, Text, Date)

### Erreur 500 sur la fonction Netlify
- Allez dans Netlify > **"Functions"** > **"add-to-notion"**
- Consultez les logs pour voir l'erreur détaillée
- Vérifiez que les variables d'environnement sont bien configurées

### Le formulaire se soumet mais rien n'apparaît dans Notion
- Vérifiez les logs de la fonction Netlify
- Vérifiez que les options des champs Select dans Notion correspondent exactement aux valeurs du formulaire
- Testez avec un lead simple pour isoler le problème

### Erreur CORS en développement local
- Utilisez `netlify dev` au lieu de `npm run dev`
- Ou testez directement en production

---

## Sécurité

✅ **Bonnes pratiques :**
- ✅ La clé API Notion est stockée côté serveur (Netlify Functions)
- ✅ Elle n'est jamais exposée au client
- ✅ Le fichier `.env` est dans `.gitignore`

❌ **À NE JAMAIS faire :**
- ❌ Commiter `.env` ou `.env.local` sur Git
- ❌ Partager votre API Key Notion publiquement
- ❌ Utiliser le SDK Notion côté client (navigateur)

---

## Architecture technique

```
┌─────────────┐
│   Client    │
│  (React)    │
└──────┬──────┘
       │ fetch('/.netlify/functions/add-to-notion')
       │
       ▼
┌─────────────────┐
│ Netlify Function│
│  (Serverless)   │
└──────┬──────────┘
       │ @notionhq/client
       │
       ▼
┌─────────────┐
│ Notion API  │
│   (CRM)     │
└─────────────┘
```

---

## Ressources

- [Documentation Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Documentation Notion API](https://developers.notion.com/)
- [SDK Notion JavaScript](https://github.com/makenotion/notion-sdk-js)
- [Guide Netlify + Notion](https://www.netlify.com/blog/2021/07/22/integrate-your-netlify-site-with-notion/)

---

## Support

Si vous rencontrez des problèmes :
1. Consultez les logs Netlify Functions
2. Vérifiez la console du navigateur (F12)
3. Testez l'intégration Notion directement sur https://developers.notion.com/
4. Vérifiez que toutes les étapes ont été suivies dans l'ordre
