'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-dorknika-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO DORKNIKA */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-dorknika-green flex items-center justify-center text-white font-extrabold text-xl tracking-wider shadow-sm group-hover:bg-dorknika-emerald transition-colors">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-dorknika-green font-sans leading-none">
              DORKNIKA
            </span>
            <span className="text-[10px] tracking-widest text-dorknika-emerald font-bold uppercase mt-1">
              Éducation Numérique
            </span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {SITE_CONFIG.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${
                  isActive 
                    ? 'text-dorknika-green font-extrabold border-b-2 border-dorknika-green' 
                    : 'hover:text-dorknika-green'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA HEADER */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/excel-pack"
            className="px-5 py-2.5 rounded-xl bg-dorknika-green text-white text-sm font-bold hover:bg-opacity-95 transition-all shadow-sm hover:scale-[1.02]"
          >
            Découvrir le Pack
          </Link>
        </div>

        {/* BOUTON HAMBURGER MOBILE */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-dorknika-grid px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          {SITE_CONFIG.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-bold ${
                pathname === item.href
                  ? 'bg-dorknika-mint text-dorknika-green'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/excel-pack"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl bg-dorknika-green text-white font-bold text-sm"
            >
              Découvrir le Pack Excel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
