# Configuration du système d'avis clients

## Vue d'ensemble
Le système d'avis permet aux clients de soumettre des témoignages via un formulaire sur le site. Les avis sont envoyés par email pour modération avant publication manuelle.

## Fonctionnement

1. **Client remplit le formulaire** sur la page Services
2. **Soumission via Netlify Function** (`submit-review`)
3. **Email envoyé à l'admin** avec les détails de l'avis
4. **Modération manuelle** : tu lis l'avis dans ton email
5. **Publication** : tu ajoutes l'avis manuellement au fichier `src/data/testimonials.json`

## Configuration Netlify

### 1. Installer les dépendances
Ajoute nodemailer au package.json :
```bash
npm install nodemailer
```

### 2. Variables d'environnement Netlify

Va dans **Netlify Dashboard** > **Site settings** > **Environment variables** et ajoute :

#### Pour Gmail :
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `587`
- `SMTP_USER` = ton email Gmail
- `SMTP_PASS` = **App Password Gmail** (voir ci-dessous)
- `ADMIN_EMAIL` = ton email où recevoir les notifications

#### Pour Outlook/Hotmail :
- `SMTP_HOST` = `smtp-mail.outlook.com`
- `SMTP_PORT` = `587`
- `SMTP_USER` = ton email Outlook
- `SMTP_PASS` = ton mot de passe Outlook
- `ADMIN_EMAIL` = ton email où recevoir les notifications

### 3. Créer un App Password Gmail (si tu utilises Gmail)

Gmail nécessite un "App Password" pour les applications tierces :

1. Va sur https://myaccount.google.com/security
2. Active la **vérification en 2 étapes** (obligatoire)
3. Retourne dans **Sécurité** > **Mots de passe des applications**
4. Sélectionne "Autre" et donne un nom (ex: "Portfolio Netlify")
5. Copie le mot de passe généré (16 caractères)
6. Utilise ce mot de passe pour `SMTP_PASS`

## Protection anti-spam

Le système intègre plusieurs protections :

1. **Honeypot** : Champ caché "website" que seuls les bots remplissent
2. **Validation des champs** : Vérification des données obligatoires
3. **Rate limiting Netlify** : Limite automatique de requêtes

## Ajouter un champ honeypot au formulaire

Pour améliorer la protection anti-spam, ajoute ce champ caché dans `ReviewForm.jsx` :

```jsx
{/* Honeypot anti-spam - NE PAS RETIRER */}
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex="-1"
  autoComplete="off"
  value={formData.website || ''}
  onChange={handleChange}
/>
```

Et ajoute `website: ""` dans le state initial de `formData`.

## Publier un avis manuellement

Quand tu reçois un email d'avis :

1. Lis l'avis et vérifie qu'il est légitime
2. Ouvre `src/data/testimonials.json`
3. Ajoute un nouvel objet :

```json
{
  "id": 4,
  "name": "Nom du client",
  "company": "Nom entreprise",
  "role": "Poste",
  "avatar": "/images/avatar-placeholder.jpg",
  "rating": 5,
  "text": "Texte de l'avis",
  "service": "Service utilisé",
  "date": "2025-11-17"
}
```

4. Commit et push les changements
5. Netlify déploiera automatiquement

## Alternative : Système automatique avec Supabase

Si tu veux automatiser la publication d'avis (avec modération optionnelle), on peut configurer Supabase :

1. Créer une table `reviews` dans Supabase
2. Stocker les avis avec un champ `approved: false`
3. Créer une interface admin pour approuver
4. Afficher seulement les avis approuvés sur le site

Cette option nécessite plus de configuration mais offre une vraie interface de gestion.

## Tests

Pour tester en local :

1. Installe Netlify CLI : `npm install -g netlify-cli`
2. Lance le serveur local : `netlify dev`
3. Le site sera accessible sur `http://localhost:8888`
4. Les fonctions seront accessibles sur `http://localhost:8888/.netlify/functions/submit-review`

## Support

Si tu as des questions sur la configuration, consulte :
- Documentation Netlify Functions : https://docs.netlify.com/functions/overview/
- Documentation nodemailer : https://nodemailer.com/
