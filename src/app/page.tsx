import Link from 'next/link';
import { SITE_CONFIG, EXCEL_PACK_DETAILS } from '@/config/site';
import ChariowButton from '@/components/ChariowButton';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const sampleFaqs = [
    {
      question: "Qu'est-ce que le DORKNIKA Excel Pack ?",
      answer: "Un kit pédagogique numérique complet associant un guide PDF structuré, des fichiers d'exercices Excel .xlsx et leurs corrigés détaillés."
    },
    {
      question: "Pour qui est conçue cette ressource ?",
      answer: "Pour toute personne souhaitant passer directement de la théorie à la pratique sur Excel, qu'elle soit débutante ou désirant consolider ses bases d'entreprise."
    },
    {
      question: "Comment se déroule l'accès après l'achat ?",
      answer: "L'accès aux fichiers téléchargeables est fourni directement après la validation du règlement sur la plateforme Chariow."
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dorknika-mint border border-dorknika-emerald/30 text-dorknika-green font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-dorknika-emerald animate-pulse" />
              Marque Numérique d&apos;Éducation Pratique
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-dorknika-dark tracking-tight leading-tight">
              Développe tes compétences.<br />
              <span className="text-dorknika-green">Passe directement à la pratique.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              DORKNIKA conçoit des formations et ressources numériques structurées pour vous transmettre des compétences concrètes et directement exploitables.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/excel-pack"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dorknika-green text-white font-extrabold text-base shadow-lg hover:bg-opacity-95 transition-all text-center"
              >
                Découvrir le Excel Pack
              </Link>
              <Link
                href="/formations"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border-2 border-dorknika-grid text-slate-800 font-bold text-base hover:bg-slate-50 transition-all text-center"
              >
                Découvrir les formations
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1 — Pourquoi DORKNIKA ? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-dorknika-dark">Pourquoi choisir DORKNIKA ?</h2>
          <p className="text-slate-600">Une méthode d&apos;apprentissage axée sur l&apos;autonomie et l&apos;application immédiate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Apprentissage Pratique", desc: "Des fichiers réels pour appliquer chaque explication sans perdre de temps." },
            { num: "02", title: "Clarté Synthétique", desc: "Des guides visuels conçus pour aller droit à l'essentiel sans jargon." },
            { num: "03", title: "Structure Étape par Étape", desc: "Une progression pédagogique graduée pour consolider chaque acquis." },
            { num: "04", title: "Cas Concrets d'Entreprise", desc: "Des exercices basés sur des problématiques réelles de gestion." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-dorknika-mint/40 border border-dorknika-emerald/20 space-y-4 dorknika-card">
              <div className="w-10 h-10 rounded-xl bg-dorknika-green text-white font-bold font-mono flex items-center justify-center">
                {item.num}
              </div>
              <h3 className="font-bold text-lg text-dorknika-dark">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 — Produit Phare : DORKNIKA Excel Pack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-dorknika-dark text-white relative overflow-hidden shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full bg-dorknika-emerald/20 text-dorknika-emerald font-mono text-xs font-bold uppercase tracking-wider border border-dorknika-emerald/30">
                Produit Numérique Phare
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{EXCEL_PACK_DETAILS.title}</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {EXCEL_PACK_DETAILS.shortDescription}
              </p>

              <div className="space-y-3">
                {EXCEL_PACK_DETAILS.contents.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-slate-200">
                    <span className="text-dorknika-emerald font-bold">✓</span>
                    <span><strong>{c.title}</strong> — {c.description}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/excel-pack"
                  className="px-8 py-4 rounded-xl bg-dorknika-emerald text-dorknika-dark font-extrabold text-base hover:bg-emerald-400 transition-all text-center"
                >
                  Découvrir le Pack — {SITE_CONFIG.pricing.excelPackPrice}
                </Link>
                <ChariowButton variant="secondary" label="Achat Rapide" />
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-dorknika-emerald">Aperçu du Pack</span>
                <span className="text-xs font-mono text-slate-400">5 Chapitres + Projet</span>
              </div>

              <div className="space-y-3">
                {EXCEL_PACK_DETAILS.chapters.map((chap) => (
                  <div key={chap.number} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="font-mono text-dorknika-emerald font-bold">Chap. 0{chap.number}</span>
                    <span className="font-semibold text-slate-200">{chap.title}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-dorknika-green/30 border border-dorknika-emerald/30 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white">Cas Pratique : {EXCEL_PACK_DETAILS.finalProject.name}</div>
                <div className="text-[11px] text-slate-400">{EXCEL_PACK_DETAILS.finalProject.description}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — La Méthode en 4 Étapes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dorknika-mint/40 rounded-3xl p-8 sm:p-12 border border-dorknika-emerald/20 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-dorknika-dark">Comment fonctionne la méthode ?</h2>
            <p className="text-slate-600">Un processus conçu pour valider vos connaissances à chaque étape.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", name: "Comprendre", desc: "Consultez la fiche synthétique illustrée du chapitre." },
              { step: "02", name: "Observer", desc: "Analysez la mise en forme et les règles de calcul associées." },
              { step: "03", name: "Pratiquer", desc: "Ouvrez la feuille Excel d'exercice et saisissez vos formules." },
              { step: "04", name: "Valider", desc: "Comparez votre travail avec le corrigé explicatif étape par étape." }
            ].map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-dorknika-grid space-y-3 text-center">
                <div className="text-dorknika-emerald font-extrabold font-mono text-xl">{m.step}</div>
                <h3 className="font-bold text-dorknika-dark text-base">{m.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FAQ SYNTHÉTIQUE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-dorknika-dark">Questions Fréquentes</h2>
          <p className="text-slate-600">L&apos;essentiel à savoir sur DORKNIKA et ses ressources.</p>
        </div>

        <FaqAccordion items={sampleFaqs} />

        <div className="text-center">
          <Link href="/faq" className="text-sm font-bold text-dorknika-green hover:underline">
            Consulter la Foire Aux Questions complète →
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-dorknika-green text-white rounded-3xl p-10 sm:p-16 space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Développe tes compétences dès aujourd&apos;hui</h2>
          <p className="text-slate-200 max-w-xl mx-auto text-base">
            Passe à la pratique avec des ressources structurées et commence immédiatement.
          </p>
          <div>
            <Link
              href="/excel-pack"
              className="inline-block px-8 py-4 rounded-xl bg-dorknika-emerald text-dorknika-dark font-extrabold text-base hover:bg-emerald-400 transition-all"
            >
              Découvrir le DORKNIKA Excel Pack
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
