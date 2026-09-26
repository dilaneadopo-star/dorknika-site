import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-dorknika-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* COLONNE MARQUE */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-dorknika-emerald flex items-center justify-center text-dorknika-dark font-extrabold text-lg">
                D
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">DORKNIKA</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="text-xs text-dorknika-emerald font-mono font-semibold uppercase tracking-wider">
              « {SITE_CONFIG.tagline} »
            </div>
          </div>

          {/* COLONNE PRODUITS */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Produits & Formations</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/excel-pack" className="hover:text-dorknika-emerald transition-colors">DORKNIKA Excel Pack</Link></li>
              <li><Link href="/formations" className="hover:text-dorknika-emerald transition-colors">Catalogue des formations</Link></li>
              <li><Link href="/boutique" className="hover:text-dorknika-emerald transition-colors">Boutique publique</Link></li>
            </ul>
          </div>

          {/* COLONNE SUPPORT */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Navigation & Support</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/a-propos" className="hover:text-dorknika-emerald transition-colors">À propos de DORKNIKA</Link></li>
              <li><Link href="/faq" className="hover:text-dorknika-emerald transition-colors">Foire Aux Questions (FAQ)</Link></li>
              <li><Link href="/contact" className="hover:text-dorknika-emerald transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* COLONNE PAIEMENT & LIVRAISON */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Livraison Numérique</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Livraison sécurisée et téléchargeable immédiatement après validation de commande.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
              ⚡ Traitement sécurisé via la passerelle Chariow.
            </div>
          </div>

        </div>

        {/* BAS DE PAGE */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DORKNIKA. Tous droits réservés.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>{SITE_CONFIG.domain}</span>
            <span>•</span>
            <span>Apprends. Pratique. Progresse.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
