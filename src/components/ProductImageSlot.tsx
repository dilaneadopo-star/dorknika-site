import React from 'react';

interface VisualSlotProps {
  chapterNumber: number;
  visualIndex: number;
  title: string;
  subtitle?: string;
}

export default function ProductImageSlot({
  chapterNumber,
  visualIndex,
  title,
  subtitle = "Emplacement Visuel Pédagogique Officiel"
}: VisualSlotProps) {
  const imageFileName = `chapter-${chapterNumber}-${visualIndex < 10 ? '0' + visualIndex : visualIndex}.webp`;

  return (
    <div className="rounded-2xl border border-dorknika-grid bg-slate-900 text-white p-6 relative overflow-hidden shadow-md group">
      {/* BADGE CHAPITRE */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-dorknika-emerald/20 text-dorknika-emerald font-mono text-xs font-bold border border-dorknika-emerald/30">
          Chapitre {chapterNumber} — Visuel #{visualIndex}
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          /public/images/excel-pack/{imageFileName}
        </span>
      </div>

      <div className="h-44 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col items-center justify-center p-4 text-center space-y-2 group-hover:border-dorknika-emerald/50 transition-colors">
        <div className="w-10 h-10 rounded-lg bg-dorknika-green/40 flex items-center justify-center text-dorknika-emerald font-mono font-bold text-sm">
          .XLSX
        </div>
        <h5 className="font-bold text-sm text-white">{title}</h5>
        <p className="text-xs text-slate-400 max-w-xs">{subtitle}</p>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Format : WEBP / PNG</span>
        <span className="text-dorknika-emerald">Haute Résolution</span>
      </div>
    </div>
  );
}
