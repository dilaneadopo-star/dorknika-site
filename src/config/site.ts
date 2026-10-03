// CONFIGURATION CENTRALISÉE DE DORKNIKA
// Modifiez les variables ci-dessous pour mettre à jour les liens, tarifs et contacts.

export const SITE_CONFIG = {
  name: "DORKNIKA",
  tagline: "Apprends. Pratique. Progresse.",
  description: "DORKNIKA est une marque digitale éducative qui crée des formations, ressources et produits numériques pratiques pour vous aider à développer des compétences concrètes et passer immédiatement à l'action.",
  domain: "dorknika.com",
  url: "https://dorknika.com",
  contactEmail: "contact@dorknika.com",
  
  // TARIFICATION CENTRALISÉE
  pricing: {
    excelPackPrice: "15 000 FCFA",
    excelPackCurrency: "FCFA",
  },

  // PASSERELLE DE PAIEMENT CHARIOW
  // Remplacer l'URL ci-dessous dès que le lien réel est prêt
  chariowCheckoutUrl: "https://chariow.com/checkout/dorknika-excel-pack-placeholder",

  // RÉSEAUX SOCIAUX OFFICIELS (Laisser vide s'ils ne sont pas encore configurés)
  socialLinks: {
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    youtube: ""
  },

  // NAVIGATION PRINCIPALE
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Excel Pack", href: "/excel-pack" },
    { name: "Formations", href: "/formations" },
    { name: "Ressources Excel", href: "/ressources-excel" },
    { name: "Boutique", href: "/boutique" },
    { name: "À propos", href: "/a-propos" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]
};

// STRUCTURE DU DORKNIKA EXCEL PACK
export const EXCEL_PACK_DETAILS = {
  id: "excel-pack",
  title: "DORKNIKA Excel Pack",
  subtitle: "Un parcours structuré pour apprendre Excel par la pratique réelle.",
  shortDescription: "Inclus un Manuel PDF pédagogique illustré de 24 visuels exclusifs, des fichiers Excel d'exercices progressifs, leurs corrigés détaillés et le projet d'entreprise KAFO Distribution.",
  contents: [
    { title: "📘 Manuel PDF Pédagogique", description: "Guide complet structuré pas à pas avec 24 schémas et visuels explicatifs." },
    { title: "📊 Fichiers Excel Pratiques (.xlsx)", description: "Feuilles de calcul d'entraînement prêtes à l'emploi correspondant à chaque chapitre." },
    { title: "✅ Corrigés Détaillés", description: "Feuilles avec formules corrigées pour vérifier vos résultats et comprendre vos erreurs." },
    { title: "🚀 Projet d'Entreprise — KAFO Distribution", description: "Mise en situation professionnelle réelle pour valider l'ensemble des compétences." }
  ],
  chapters: [
    {
      number: 1,
      title: "Fondations d'Excel",
      description: "Comprendre la grille, le ruban, la structure d'un classeur, les cellules et la saisie propre des types de données (Texte, Nombre, Date)."
    },
    {
      number: 2,
      title: "Affichage & Formats de Données",
      description: "Mise en forme des tableaux, alignements, gestion des colonnes, formats monétaires et prévention des erreurs d'affichage."
    },
    {
      number: 3,
      title: "Formules & Logique Conditionnelle",
      description: "Les 4 opérations de base, la fonction SOMME, les références absolues ($B$2) pour figer une cellule, et la fonction conditionnelle SI."
    },
    {
      number: 4,
      title: "Tri, Filtres & Tableaux Structurés",
      description: "Organiser de grands ensembles de données, effectuer des tri multicritères et filtrer efficacement les informations clés."
    },
    {
      number: 5,
      title: "Graphiques & Présentation Visuelle",
      description: "Convertir des chiffres bruts en visuels parlants (Histogrammes, Courbes, Secteurs) adaptés aux présentations d'entreprise."
    }
  ],
  finalProject: {
    name: "Projet KAFO Distribution",
    description: "Calcul du Montant HT au TTC (TVA 18%), automatisation de la prime exceptionnelle de 150 000 FCFA selon le seuil SI de 2 000 000 FCFA, et création du tableau de bord global."
  }
};
