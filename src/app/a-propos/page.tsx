import { SITE_CONFIG } from '@/config/site';

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 text-center">
        <span className="text-dorknika-emerald font-bold text-xs uppercase tracking-wider font-mono">
          Identité & Engagement
        </span>
        <h1 className="text-4xl font-extrabold text-dorknika-dark">À propos de DORKNIKA</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Une marque numérique engagée dans la création de ressources d&apos;apprentissage concrètes.
        </p>
      </div>

      <div className="space-y-8 text-slate-700 leading-relaxed text-base">
        
        <div className="p-8 rounded-2xl bg-dorknika-mint/40 border border-dorknika-emerald/20 space-y-4">
          <h2 className="text-2xl font-bold text-dorknika-dark">Notre Mission</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            DORKNIKA est née de la volonté de proposer des ressources pédagogiques claires, structurées et immédiatement applicables. Notre objectif est de réduire l&apos;écart entre la théorie et l&apos;autonomie réelle sur le terrain.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-dorknika-grid space-y-4">
          <h2 className="text-2xl font-bold text-dorknika-dark">Notre Approche Pédagogique</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-dorknika-emerald font-bold">✓</span>
              <span><strong>Clarté synthétique :</strong> Pas de jargon inutile, chaque notion est expliquée simplement.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-dorknika-emerald font-bold">✓</span>
              <span><strong>Pratique directe :</strong> Des fichiers réels fournis avec chaque guide pour s&apos;entraîner sans attendre.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-dorknika-emerald font-bold">✓</span>
              <span><strong>Cas concrets :</strong> Des exercices basés sur des problématiques réelles du monde professionnel.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
