'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulation d'envoi propre sans prétendre à un faux backend
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-dorknika-grid shadow-sm space-y-6">
      
      {status === 'success' ? (
        <div className="p-6 rounded-2xl bg-dorknika-mint border border-dorknika-emerald/30 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-dorknika-emerald text-dorknika-dark flex items-center justify-center font-bold text-xl mx-auto">
            ✓
          </div>
          <h3 className="font-bold text-lg text-dorknika-dark">Message pré-enregistré</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Votre message a été validé par l&apos;interface. Pour connecter la réception réelle de vos messages e-mail sur ce formulaire, activez un service comme <strong>Resend</strong> ou <strong>Formspree</strong> dans <code>src/app/api/contact/route.ts</code>.
          </p>
          <button
            onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); }}
            className="mt-2 px-6 py-2.5 rounded-xl bg-dorknika-green text-white text-xs font-bold"
          >
            Nouveau message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-dorknika-dark">Nom complet</label>
            <input
              type="text"
              required
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dorknika-grid focus:outline-none focus:border-dorknika-green text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-dorknika-dark">Adresse E-mail</label>
            <input
              type="email"
              required
              placeholder="votre.email@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dorknika-grid focus:outline-none focus:border-dorknika-green text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-dorknika-dark">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Comment pouvons-nous vous aider ?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dorknika-grid focus:outline-none focus:border-dorknika-green text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-xl bg-dorknika-green text-white font-extrabold text-base hover:bg-opacity-95 transition-all shadow-md"
          >
            {status === 'submitting' ? 'Validation...' : 'Envoyer le message'}
          </button>
        </form>
      )}

      {/* RAPPEL ARCHITECTURE TECH POUR L'UTILISATEUR */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
        ⚙️ Backend Ready : Route API préparée dans <code>src/app/api/contact/route.ts</code>
      </div>

    </div>
  );
}
