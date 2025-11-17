# 🚀 Digital'tek Service - Plan d'évolution du site

**Objectif** : Transformer le portfolio en site professionnel pour Digital'tek Service

---

## 🎯 Vision globale

Créer un site vitrine pro avec un parcours simple :
```
Visiteur → Page Services → Formulaire ou Prise de RDV Calendly
```

**Positionnement** : Développeur web Next.js / React à La Réunion

---

## 📦 PHASE 1 : Fondations & Contenu (PRIORITÉ 1)

### ✅ À GARDER de l'existant :
- Structure React + Vite actuelle
- Formulaire de contact + intégration Notion CRM
- Page About
- Page Formation
- Page MyProject (projets existants)
- Design actuel (juste améliorer, pas refaire)

### 🆕 À CRÉER :

#### 1.1 - Page Services (`/services`)

**3 offres à présenter :**

1. **Site vitrine "Starter"**
   - Description : [À REMPLIR]
   - Features : [À REMPLIR]
   - Tarif : "À partir de ... €"
   - CTA : Bouton vers formulaire + Calendly

2. **Site "Business" orienté conversion**
   - Description : [À REMPLIR]
   - Features : [À REMPLIR]
   - Tarif : "À partir de ... €"
   - CTA : Bouton vers formulaire + Calendly

3. **Web app / Projet sur mesure**
   - Description : [À REMPLIR]
   - Features : [À REMPLIR]
   - Tarif : "Sur devis" ou "À partir de ... €"
   - CTA : Bouton vers formulaire + Calendly

**Section "Comment je travaille" (4 étapes) :**

1. **Appel découverte**
   - Titre : [À REMPLIR]
   - Description : [À REMPLIR]

2. **Proposition**
   - Titre : [À REMPLIR]
   - Description : [À REMPLIR]

3. **Conception & développement**
   - Titre : [À REMPLIR]
   - Description : [À REMPLIR]

4. **Mise en ligne**
   - Titre : [À REMPLIR]
   - Description : [À REMPLIR]

**Section Témoignages :**
- Structure avec placeholders pour l'instant
- Format : Nom, entreprise, photo, avis, note

---

#### 1.2 - Refonte Home (`/`)

**Modifications à apporter :**

- **Hero :**
  - Message principal : "Digital'tek Service - Création web & mobile à La Réunion"
  - Sous-titre : Spécialiste Next.js / React
  - CTA principal : Bouton Calendly "Prendre RDV (30 min)"
  - CTA secondaire : "Voir mes services"

- **Section "Pourquoi me choisir ?"**
  - 3-4 points forts (expertise, local, réactivité, technos modernes)

- **Section CTA vers Services**
  - Redirection vers `/services`

- **Rappel Calendly en bas de page**
  - "Discutons de votre projet - Réserver un créneau"

---

#### 1.3 - Fichiers de données à créer

```
src/data/
  ├── services.json        (3 offres)
  ├── process.json         (4 étapes)
  └── testimonials.json    (avis clients - placeholders)
```

---

## 🎨 PHASE 2 : Design & UX (PRIORITÉ 2)

### Composants à créer :

```
src/components/
  ├── serviceCard/
  │   ├── ServiceCard.jsx
  │   └── serviceCard.module.scss
  ├── processStep/
  │   ├── ProcessStep.jsx
  │   └── processStep.module.scss
  ├── testimonial/
  │   ├── Testimonial.jsx
  │   └── testimonial.module.scss
  └── calendlyButton/
      ├── CalendlyButton.jsx
      └── calendlyButton.module.scss
```

### Design guidelines :
- Garder le design actuel comme base
- Harmoniser les couleurs Digital'tek
- Cards avec hover effects
- Timeline visuelle pour le process
- Responsive mobile-first

---

## 🚀 PHASE 3 : SEO & Analytics (PRIORITÉ 3)

### 3.1 - SEO On-page

**Meta tags par page :**
- `/` : "Développeur web Next.js React à La Réunion | Digital'tek Service"
- `/services` : "Création site web & application mobile - Digital'tek Service"
- `/about` : "À propos - Développeur full-stack à La Réunion"
- etc.

**À ajouter :**
- Schema.org markup (LocalBusiness, Service, Person)
- sitemap.xml
- robots.txt
- Open Graph tags
- Twitter Cards

### 3.2 - Analytics

- Google Analytics 4
- Google Search Console
- Tracking conversions :
  - Formulaire soumis
  - Clic Calendly
  - Clic téléphone/email

---

## 📋 PHASE 4 : Finitions (PRIORITÉ 4)

- [ ] Tests responsive (mobile, tablette, desktop)
- [ ] Optimisation images (WebP, lazy loading)
- [ ] Tests accessibilité (WCAG)
- [ ] Performance Lighthouse (score 90+)
- [ ] Tests navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Vérification formulaires
- [ ] Test intégration Notion

---

## 🗂️ Structure des routes

```
/                    → Home (refonte)
/about              → À propos (GARDER)
/formation          → Formation (GARDER)
/myproject          → Projets (GARDER)
/services           → Services (NOUVEAU)
/menu               → Menu navigation (GARDER)
```

---

## 📊 Métriques de succès

**Objectifs :**
- Taux de conversion > 5% (visiteur → contact/RDV)
- Temps sur page Services > 2 min
- Score Lighthouse Performance > 90
- Position Google "développeur web réunion" < 10

---

## 🔧 Stack technique (GARDER)

- React 19
- Vite
- React Router DOM
- SCSS Modules
- EmailJS (formulaire)
- Netlify Functions (Notion)
- Netlify (hosting)

---

## 📝 Notes importantes

### Priorité développement :
1. **D'ABORD** : Page Services + data
2. **ENSUITE** : Refonte Home
3. **PUIS** : SEO + Analytics
4. **ENFIN** : Finitions

### Principes :
- ✅ Garder l'existant fonctionnel
- ✅ Améliorer, ne pas tout refaire
- ✅ Mobile-first
- ✅ Performance prioritaire
- ✅ SEO dès le début

---

## 🚦 État d'avancement

**Phase 1 :** 🔴 En attente des données
**Phase 2 :** ⚪ Pas commencé
**Phase 3 :** ⚪ Pas commencé
**Phase 4 :** ⚪ Pas commencé

---

## 📞 Informations en attente

### Services (✅ REÇU) :

**1. Site Web Complet - 800€ à 2 000€**
- [x] Description : Site vitrine professionnel clé en main
- [x] Features : Design moderne, 3-7 pages, responsive, formulaire contact, SEO base, mise en ligne, support
- [x] Tarif : 800€ - 2000€

**2. Application Web - 1 500€ à 2 800€**
- [x] Description : Application web sur mesure Next.js/React
- [x] Features : Cadrage, Next.js/React, API, interfaces sur mesure, responsive, tests, mise en ligne, doc
- [x] Tarif : 1 500€ - 2 800€

**3. Site E-commerce - 1 200€ à 2 800€**
- [x] Description : Boutique en ligne complète
- [x] Features : Design boutique, catalogue, panier, pages essentielles, paiement, livraison, responsive, formation
- [x] Tarif : 1 200€ - 2 800€

**4. Maintenance - 80€ à 200€/mois**
- [x] Description : Maintenance mensuelle du site
- [x] Features : MAJ régulières, surveillance, sauvegardes, bugs, MAJ contenu, support email, rapport
- [x] Tarif : 80€ - 200€/mois

**5. Développement sur mesure - 25€ à 40€/heure**
- [x] Description : Intervention à l'heure pour besoins spécifiques
- [x] Features : Ajout sections, design, optimisation perfs, formulaires/API, bugs, renfort technique
- [x] Tarif : 25€ - 40€/heure

**6. Application mobile - Sur devis**
- [x] Description : App mobile React Native Android/iOS
- [x] Features : Étude besoin, conception écrans, React Native, API, auth, Android/iOS, tests, stores
- [x] Tarif : Sur devis

### Process (✅ REÇU) :
- [x] Étape 1 : "On discute de ton projet" - Appel 20-30 min pour comprendre activité, objectifs, budget
- [x] Étape 2 : "Je te propose une solution sur mesure" - Proposition détaillée : pages, fonctionnalités, délais, tarif
- [x] Étape 3 : "Je conçois et je développe ton projet" - Structure, design, dev avec aperçus réguliers
- [x] Étape 4 : "Ton projet est en ligne, tu n'es pas seul" - Mise en ligne, tests, formation, support

---

**Dernière mise à jour** : 2025-11-16
**Par** : Claude Code
