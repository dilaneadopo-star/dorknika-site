import Link from 'next/link';
import { SITE_CONFIG, EXCEL_PACK_DETAILS } from '@/config/site';
import ChariowButton from '@/components/ChariowButton';
import ProductImageSlot from '@/components/ProductImageSlot';

export default function ExcelPackPage() {
  return (
    <div className="space-y-20 pb-24">
      
      {/* HEADER HERO */}
      <section className="bg-dorknika-dark text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dorknika-emerald/20 text-dorknika-emerald text-xs font-mono font-bold border border-dorknika-emerald/30">
              Ressource Numérique & Fichiers Pratiques
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              {EXCEL_PACK_DETAILS.title}
            </h1>

            <p className="text-xl text-slate-300 font-medium">
              {EXCEL_PACK_DETAILS.subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <ChariowButton 
                variant="emerald" 
                label={`Acheter le Excel Pack — ${SITE_CONFIG.pricing.excelPackPrice}`}
              />
              <span className="text-xs text-slate-400 font-mono self-center">
                Livraison numérique immédiate après validation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DU PACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-dorknika-dark">Que contient le pack ?</h2>
          <p className="text-slate-600">Quatre éléments complémentaires pour assurer un apprentissage autonome.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXCEL_PACK_DETAILS.contents.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-dorknika-grid space-y-3 dorknika-card">
              <h3 className="font-bold text-base text-dorknika-dark">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMME DÉTAILLÉ EN 5 CHAPITRES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-dorknika-mint/40 rounded-3xl p-8 sm:p-12 border border-dorknika-emerald/20 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-dorknika-dark">Le Programme Pédagogique</h2>
            <p className="text-slate-600">Cinq chapitres progressifs accompagnés du projet final d&apos;entreprise.</p>
          </div>

          <div className="space-y-6">
            {EXCEL_PACK_DETAILS.chapters.map((chap) => (
              <div key={chap.number} className="bg-white p-6 rounded-2xl border border-dorknika-grid flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-dorknika-emerald uppercase">
                    Chapitre 0{chap.number}
                  </span>
                  <h3 className="text-xl font-bold text-dorknika-dark">{chap.title}</h3>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">{chap.description}</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-dorknika-mint text-dorknika-green font-bold text-xs whitespace-nowrap">
                  Fichier .XLSX + Corrigé
                </div>
              </div>
            ))}
          </div>

          {/* PROJET FINAL KAFO */}
          <div className="p-8 rounded-2xl bg-dorknika-dark text-white space-y-4 shadow-lg">
            <span className="text-dorknika-emerald font-mono text-xs uppercase tracking-widest font-bold">
              Épreuve Pratique de Synthèse
            </span>
            <h3 className="text-2xl font-bold">{EXCEL_PACK_DETAILS.finalProject.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {EXCEL_PACK_DETAILS.finalProject.description}
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE VISUELLE DU PACK (PREPARATION POUR LES 24 IMAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-dorknika-dark">Aperçu Visuel des Ressources</h2>
          <p className="text-slate-600">
            Emplacements réservés aux 24 visuels illustratifs et captures d&apos;exercices du pack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductImageSlot chapterNumber={1} visualIndex={1} title="Structure des Cellules & Types A1" />
          <ProductImageSlot chapterNumber={3} visualIndex={2} title="Mise en pratique Référence Absolue ($)" />
          <ProductImageSlot chapterNumber={5} visualIndex={3} title="Tableau de bord KAFO Distribution" />
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono text-center">
          💡 Pour remplacer ces visuels par vos propres images réelles : placez vos fichiers WEBP dans <code>public/images/excel-pack/</code>.
        </div>
      </section>

      {/* CALL TO ACTION D'ACHAT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-dorknika-mint border-2 border-dorknika-emerald rounded-3xl p-10 sm:p-14 space-y-6">
          <h2 className="text-3xl font-extrabold text-dorknika-dark">Prêt à pratiquer dès maintenant ?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Obtenez immédiatement le manuel PDF, les feuilles d&apos;exercices et les corrigés.
          </p>
          <div>
            <ChariowButton 
              variant="primary" 
              label={`Obtenir le Excel Pack — ${SITE_CONFIG.pricing.excelPackPrice}`}
              className="px-10 py-4 text-lg"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
