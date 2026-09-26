import Link from 'next/link';
import { SITE_CONFIG, EXCEL_PACK_DETAILS } from '@/config/site';
import ChariowButton from '@/components/ChariowButton';

export default function BoutiquePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <span className="text-dorknika-emerald font-bold text-xs uppercase tracking-wider font-mono">
          Boutique Numérique
        </span>
        <h1 className="text-4xl font-extrabold text-dorknika-dark">Ressources & Produits DORKNIKA</h1>
        <p className="text-slate-600 text-lg">
          Accédez directement à l&apos;ensemble de nos produits numériques officiels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* PRODUIT BOUTIQUE 1 */}
        <div className="bg-white rounded-2xl border border-dorknika-grid overflow-hidden dorknika-card flex flex-col justify-between">
          <div className="p-6 bg-dorknika-dark text-white space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-dorknika-emerald font-bold">
              Produit Phare
            </span>
            <h3 className="text-xl font-bold">{EXCEL_PACK_DETAILS.title}</h3>
            <p className="text-xs text-slate-300">Manuel PDF + Exercices .XLSX + Corrigés</p>
          </div>

          <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-2xl font-extrabold text-dorknika-green font-mono">
                {SITE_CONFIG.pricing.excelPackPrice}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {EXCEL_PACK_DETAILS.shortDescription}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-dorknika-grid">
              <Link
                href="/excel-pack"
                className="w-full inline-block text-center py-3 rounded-xl bg-slate-100 text-dorknika-dark font-bold text-xs hover:bg-slate-200 transition-all"
              >
                Voir les détails du produit
              </Link>
              <ChariowButton variant="primary" label="Acheter sur Chariow" className="w-full py-3 text-xs" />
            </div>
          </div>
        </div>

        {/* EMPLACEMENT FUTURS PRODUITS NUMÉRIQUES */}
        <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center text-center space-y-3 text-slate-400">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">Architecture Évolutive</span>
          <h4 className="font-bold text-slate-700 text-base">Prochains Fichiers & Templates</h4>
          <p className="text-xs text-slate-500 max-w-xs">
            Cette vitrine est conçue pour héberger vos futurs e-books, modèles Excel et ressources complémentaires.
          </p>
        </div>

      </div>
    </div>
  );
}
