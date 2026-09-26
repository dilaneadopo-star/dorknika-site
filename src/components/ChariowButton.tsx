'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';

interface ChariowButtonProps {
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'emerald';
}

export default function ChariowButton({ 
  label = "Acheter le Excel Pack", 
  className = "",
  variant = "primary"
}: ChariowButtonProps) {
  const [showNotice, setShowNotice] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isPlaceholder = SITE_CONFIG.chariowCheckoutUrl.includes('placeholder') || SITE_CONFIG.chariowCheckoutUrl === "";
    
    if (isPlaceholder) {
      setShowNotice(true);
    } else {
      window.open(SITE_CONFIG.chariowCheckoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'emerald':
        return 'bg-dorknika-emerald text-dorknika-dark hover:bg-emerald-400 font-extrabold';
      case 'secondary':
        return 'bg-dorknika-mint text-dorknika-green border border-dorknika-emerald/30 hover:bg-emerald-100 font-bold';
      default:
        return 'bg-dorknika-green text-white hover:bg-opacity-95 font-extrabold shadow-md';
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`px-6 py-3.5 rounded-xl transition-all duration-200 transform active:scale-95 text-center inline-flex items-center justify-center gap-2 ${getVariantClasses()} ${className}`}
      >
        <span>{label}</span>
      </button>

      {/* POPUP D'INFORMATION PRÉ-OUVERTURE (Si URL est encore un placeholder) */}
      {showNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl space-y-5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-dorknika-mint text-dorknika-green flex items-center justify-center font-bold text-xl">
              ℹ️
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-dorknika-dark">Intégration Chariow Prête</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le système de paiement est prêt pour la mise en ligne. L&apos;URL de checkout Chariow est actuellement configurée avec l&apos;adresse de test.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
              <div className="font-bold text-slate-900">Emplacement pour votre lien :</div>
              <div className="text-dorknika-green break-all">src/config/site.ts → chariowCheckoutUrl</div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowNotice(false)}
                className="w-full py-3 rounded-xl bg-dorknika-dark text-white font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
