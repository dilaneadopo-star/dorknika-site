# DORKNIKA — Site Web Public Officiel V2

Bienvenue dans le dépôt du site officiel V2 de **DORKNIKA** (« Apprends. Pratique. Progresse. »).
Ce projet est construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

---

## 🚀 Prise en main & Lancement Local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Démarrage en mode développement
```bash
npm run dev
```
Rendez-vous sur `http://localhost:3000`.

### 3. Build de production
```bash
npm run build
npm run start
```

---

## ⚙️ Points de Configuration Majeurs

### 1. Données Centralisées, Tarifs & Chariow
Ouvrez le fichier : **`src/config/site.ts`**

* **Changer le prix du Excel Pack :**
  ```typescript
  pricing: {
    excelPackPrice: "15 000 FCFA",
  }
  ```
* **Mettre le vrai lien de paiement Chariow :**
  ```typescript
  chariowCheckoutUrl: "https://chariow.com/checkout/VOTRE_VRAI_LIEN"
  ```
  *(Remarque : Si l'URL contient le mot 'placeholder', les boutons afficheront un pop-up d'information au lieu d'ouvrir une page cassée).*

### 2. Emplacement des 24 Visuels du Pack Excel
Déposez vos images réelles dans :
📂 **`public/images/excel-pack/`**
*(Suivez le guide explicatif présent dans ce dossier).*

### 3. Service E-mail / Formulaire Contact
Ouvrez le fichier : **`src/app/api/contact/route.ts`** pour connecter un service tel que Resend, Formspree ou SendGrid.

---

## 🌍 Déploiement sur Vercel

1. Connectez ce dépôt à votre compte **Vercel**.
2. Vercel détectera automatiquement la configuration Next.js 14.
3. Cliquez sur **Deploy**.

---

## 📋 Checklist avant mise en ligne
- [x] Toutes les 7 routes fonctionnent sans fausse navigation JS.
- [x] Responsive testé sur ordinateur, tablette et smartphone.
- [x] AUCUN faux chiffre, AUCUN faux témoignage, AUCUNE fausse équipe.
- [x] Lien Chariow configurable dans `src/config/site.ts`.
- [x] SEO (Metadata, sitemap, robots.txt) configuré.
