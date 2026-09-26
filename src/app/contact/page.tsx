import { SITE_CONFIG } from '@/config/site';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="space-y-4 text-center">
        <span className="text-dorknika-emerald font-bold text-xs uppercase tracking-wider font-mono">
          Communication
        </span>
        <h1 className="text-4xl font-extrabold text-dorknika-dark">Contactez DORKNIKA</h1>
        <p className="text-slate-600 text-lg">
          Une question sur un produit ou besoin d&apos;assistance ? Envoyez-nous un message.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
