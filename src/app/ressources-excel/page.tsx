 "use client";

import { useMemo, useState } from "react";

type Resource = {
  title: string;
  description: string;
  url: string;
  category: "Excel" | "Fonctions" | "VBA" | "Compléments" | "Logiciels gratuits";
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Tous niveaux";
  language: string;
  price: string;
  compatibility: string;
};

const resources: Resource[] = [
  {
    title: "Cours et aide officiels Excel",
    description: "Guides pour découvrir l’interface, organiser les feuilles, travailler avec les tableaux et progresser dans Excel.",
    url: "https://support.microsoft.com/fr-fr/excel",
    category: "Excel",
    level: "Tous niveaux",
    language: "Français",
    price: "Gratuit",
    compatibility: "Microsoft Excel; menus selon la version",
  },
  {
    title: "Fonctions Excel par catégorie",
    description: "Retrouve une fonction par famille et consulte sa syntaxe, ses arguments et ses exemples.",
    url: "https://support.microsoft.com/fr-fr/excel/excel-functions-by-category",
    category: "Fonctions",
    level: "Tous niveaux",
    language: "Français",
    price: "Gratuit",
    compatibility: "Certaines fonctions dépendent de la version d’Excel",
  },
  {
    title: "Comprendre les formules Excel",
    description: "Apprends le rôle du signe égal, des opérateurs et des références de cellules dans les calculs.",
    url: "https://support.microsoft.com/fr-fr/office/pr%C3%A9sentation-des-formules-dans-excel-ecfdc708-9162-49e8-b993-c311f47ca173",
    category: "Fonctions",
    level: "Débutant",
    language: "Français",
    price: "Gratuit",
    compatibility: "Microsoft Excel",
  },
  {
    title: "Formation Excel sur Microsoft Learn",
    description: "Explore des modules de formation et des ressources techniques pour approfondir tes compétences.",
    url: "https://learn.microsoft.com/fr-fr/training/browse/?products=excel",
    category: "Excel",
    level: "Intermédiaire",
    language: "Français selon le module",
    price: "Gratuit",
    compatibility: "Formation en ligne; certains contenus peuvent être en anglais",
  },
  {
    title: "Premiers pas avec VBA dans Office",
    description: "Découvre les macros, l’éditeur Visual Basic et les notions essentielles pour commencer à automatiser.",
    url: "https://learn.microsoft.com/fr-fr/office/vba/library-reference/concepts/getting-started-with-vba-in-office",
    category: "VBA",
    level: "Débutant",
    language: "Français",
    price: "Gratuit",
    compatibility: "Applications Office de bureau compatibles",
  },
  {
    title: "Référence officielle VBA pour Excel",
    description: "Documentation des objets Excel comme Workbook, Worksheet, Range, les cellules et les graphiques.",
    url: "https://learn.microsoft.com/fr-fr/office/vba/api/overview/excel",
    category: "VBA",
    level: "Avancé",
    language: "Français",
    price: "Gratuit",
    compatibility: "Excel de bureau compatible avec VBA",
  },
  {
    title: "Utiliser les fonctions Excel dans VBA",
    description: "Apprends à appeler certaines fonctions de feuille de calcul depuis un programme VBA.",
    url: "https://learn.microsoft.com/fr-fr/office/vba/excel/concepts/events-worksheetfunctions-shapes/using-excel-worksheet-functions-in-visual-basic",
    category: "VBA",
    level: "Intermédiaire",
    language: "Français",
    price: "Gratuit",
    compatibility: "Excel de bureau compatible avec VBA",
  },
  {
    title: "Microsoft AppSource",
    description: "Recherche des compléments Excel pour la productivité, l’analyse et les visualisations. Vérifie le prix et les permissions avant installation.",
    url: "https://appsource.microsoft.com/",
    category: "Compléments",
    level: "Intermédiaire",
    language: "Variable",
    price: "Gratuit ou payant selon le complément",
    compatibility: "Dépend de chaque complément",
  },
  {
    title: "Télécharger LibreOffice",
    description: "Installe gratuitement Calc, un tableur qui permet de pratiquer les tableaux, formules, filtres et graphiques.",
    url: "https://www.libreoffice.org/download/download-libreoffice/",
    category: "Logiciels gratuits",
    level: "Tous niveaux",
    language: "Interface française disponible",
    price: "Gratuit",
    compatibility: "Windows, macOS et Linux; certaines fonctions diffèrent d’Excel",
  },
  {
    title: "Aide officielle LibreOffice Calc",
    description: "Consulte l’aide sur les feuilles, formules, fonctions et outils de tableur de Calc.",
    url: "https://help.libreoffice.org/latest/fr/text/scalc/main0000.html",
    category: "Logiciels gratuits",
    level: "Tous niveaux",
    language: "Français",
    price: "Gratuit",
    compatibility: "LibreOffice Calc; ce n’est pas Microsoft Excel",
  },
];

const categories = ["Toutes", "Excel", "Fonctions", "VBA", "Compléments", "Logiciels gratuits"] as const;

export default function RessourcesExcelPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Toutes");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("fr");
    return resources.filter((resource) => {
      const matchesCategory = category === "Toutes" || resource.category === category;
      const matchesQuery =
        !q ||
        [resource.title, resource.description, resource.category, resource.level, resource.language]
          .join(" ")
          .toLocaleLowerCase("fr")
          .includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="min-h-screen bg-[#f6f8f6] text-slate-900">
      <section className="relative overflow-hidden bg-[#0D4B34] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">DORKNIKA EXCEL 2026</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Centre de ressources</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
            Cours Excel, fonctions, VBA, automatisation et outils gratuits pour continuer à apprendre à ton rythme.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-emerald-300/40 bg-white/10 px-4 py-2 text-sm font-semibold">
            Apprends. Pratique. Progresse.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0D4B34]">Trouve la bonne ressource</h2>
              <p className="mt-1 text-sm text-slate-600">Recherche par nom, compétence ou niveau.</p>
            </div>
            <div className="w-full md:max-w-sm">
              <label htmlFor="resource-search" className="mb-1.5 block text-sm font-semibold text-slate-700">Rechercher</label>
              <input
                id="resource-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex. VBA, fonctions, formules..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Filtrer par catégorie">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-[#0D4B34] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 mt-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Ressources disponibles</h2>
          <span className="text-sm text-slate-500">{filtered.length} résultat{filtered.length > 1 ? "s" : ""}</span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <article key={resource.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#0D4B34]">{resource.category}</span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">{resource.level}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">{resource.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{resource.description}</p>
                <dl className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-600">
                  <div><dt className="inline font-bold text-slate-700">Langue : </dt><dd className="inline">{resource.language}</dd></div>
                  <div><dt className="inline font-bold text-slate-700">Coût : </dt><dd className="inline">{resource.price}</dd></div>
                  <div><dt className="inline font-bold text-slate-700">Compatibilité : </dt><dd className="inline">{resource.compatibility}</dd></div>
                </dl>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#0D4B34] px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Ouvrir la ressource <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="font-semibold text-slate-800">Aucune ressource trouvée.</p>
            <p className="mt-1 text-sm text-slate-500">Essaie un autre mot ou choisis une autre catégorie.</p>
            <button onClick={() => { setQuery(""); setCategory("Toutes"); }} className="mt-4 rounded-lg bg-[#0D4B34] px-4 py-2 text-sm font-semibold text-white">Réinitialiser les filtres</button>
          </div>
        )}

        <aside className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
          <h2 className="font-bold text-[#0D4B34]">Conseil DORKNIKA</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Suis d’abord les leçons du manuel et pratique sur les fichiers d’exercice. Utilise les ressources externes pour approfondir une notion. Avant d’installer un complément ou d’activer une macro, vérifie sa source, ses permissions et sa compatibilité.
          </p>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Les sites, fonctionnalités, langues et conditions de gratuité peuvent changer. Vérifie les informations sur la page officielle avant utilisation.
          </p>
        </aside>
      </section>
    </main>
  );
}
