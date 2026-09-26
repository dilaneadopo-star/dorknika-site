import { SITE_CONFIG } from '@/config/site';
import FaqAccordion from '@/components/FaqAccordion';

export default function FAQPage() {
  const allFaqs = [
    {
      question: "Qu'est-ce que le DORKNIKA Excel Pack ?",
      answer: "Le DORKNIKA Excel Pack est une ressource pédagogique numérique comprenant un Manuel PDF explicatif illustré, des feuilles d'exercices Excel (.xlsx), leurs corrigés étape par étape et le projet final KAFO Distribution."
    },
    {
      question: "Pour qui cette formation est-elle conçue ?",
      answer: "Elle s'adresse aux débutants souhaitant acquérir des bases solides sur Excel, ainsi qu'aux personnes voulant structurer leurs méthodes de travail avec des cas d'entreprise concrets."
    },
    {
      question: "Comment vais-je recevoir les fichiers après l'achat ?",
      answer: "Après validation du règlement via la passerelle Chariow, vous recevrez un accès téléchargeable direct pour récupérer votre kit complet d'apprentissage."
    },
    {
      question: "Quels logiciels sont nécessaires pour utiliser les fichiers ?",
      answer: "Les fichiers d'exercices au format .xlsx sont compatibles avec toutes les versions récentes de Microsoft Excel (PC/Mac/Web), Google Sheets et Office 365."
    },
    {
      question: "Comment contacter le support DORKNIKA ?",
      answer: "Vous pouvez utiliser le formulaire présent sur la page Contact de notre site ou envoyer un e-mail à l'adresse officielle de la marque."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 text-center">
        <span className="text-dorknika-emerald font-bold text-xs uppercase tracking-wider font-mono">
          Réponses & Assistance
        </span>
        <h1 className="text-4xl font-extrabold text-dorknika-dark">Foire Aux Questions</h1>
        <p className="text-slate-600 text-lg">
          Retrouvez les réponses aux interrogations les plus fréquentes sur DORKNIKA et nos ressources.
        </p>
      </div>

      <FaqAccordion items={allFaqs} />
    </div>
  );
}
