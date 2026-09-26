import Link from 'next/link';
import { SITE_CONFIG, EXCEL_PACK_DETAILS } from '@/config/site';

export default function FormationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <span className="text-dorknika-emerald font-bold text-xs uppercase tracking-wider font-mono">
          Catalogue Officiel
        </span>
        <h1 className="text-4xl font-extrabold text-dorknika-dark">Formations & Resources Pratiques</h1>
        <p className="text-slate-600 text-lg">
          Découvrez nos programmes d&apos;apprentissage conçus pour vous transmettre des compétences concrètes par la pratique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* PRODUIT 1: EXCEL PACK */}
        <div className="bg-white rounded-2xl border border-dorknika-grid p-6 space-y-6 dorknika-card flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-dorknika-mint text-dorknika-green text-xs font-bold">
                Pack Pédagogique Numérique
              </span>
              <span className="font-extrabold text-dorknika-dark font-mono text-base">
                {SITE_CONFIG.pricing.excelPackPrice}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-dorknika-dark">{EXCEL_PACK_DETAILS.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{EXCEL_PACK_DETAILS.shortDescription}</p>

            <div className="pt-2 space-y-2">
              {EXCEL_PACK_DETAILS.contents.map((c, i) => (
                <div key={i} className="text-xs text-slate-500 flex items-center gap-2">
                  <span className="text-dorknika-emerald font-bold">✓</span>
                  <span>{c.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-dorknika-grid">
            <Link 
              href="/excel-pack"
              className="w-full inline-block text-center py-3.5 rounded-xl bg-dorknika-green text-white font-bold text-sm hover:bg-opacity-95 transition-all"
            >
              Découvrir la formation
            </Link>
          </div>
        </div>

        {/* CARTE EVOLUTIVE DORKNIKA */}
        <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center text-center space-y-4 text-slate-400 min-h-[360px]">
          <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xl font-mono">
            +
          </div>
          <h4 className="font-bold text-slate-700 text-lg">Prochaines Formations en Préparation</h4>
          <p className="text-xs max-w-xs leading-relaxed text-slate-500">
            DORKNIKA développe continuellement de nouvelles ressources éducatives pratiques sur les outils clés de la productivité.
          </p>
        </div>

      </div>
    </div>
  );
}
