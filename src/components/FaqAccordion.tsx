'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className="rounded-2xl border border-dorknika-grid bg-white overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-dorknika-dark hover:text-dorknika-green transition-colors focus:outline-none"
            >
              <span>{item.question}</span>
              <span className={`w-8 h-8 rounded-full bg-dorknika-mint flex items-center justify-center text-dorknika-green font-mono transition-transform duration-200 ${isOpen ? 'rotate-180 bg-dorknika-green text-white' : ''}`}>
                ↓
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
