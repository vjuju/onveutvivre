import Link from 'next/link';
import { Marque } from './Logo';
import { Instagram, Facebook, Telegram, Linktree } from './IconesReseaux';
import { liens, contact, site } from '@/content/site';

const colonnes = [
  {
    titre: 'Le site',
    entrees: [
      { label: 'Accueil', href: '/' },
      { label: 'Manifeste', href: '/manifeste/' },
      { label: "Signer l'appel", href: '/signer/' },
    ],
  },
  {
    titre: 'Contact',
    entrees: [
      { label: 'Nous écrire', href: liens.contact, externe: true },
      { label: 'Contact presse', href: liens.presse, externe: true },
      { label: 'Faire un don', href: liens.don, externe: true },
    ],
  },
];

const reseaux = [
  { nom: 'Instagram', href: liens.instagram, Icone: Instagram },
  { nom: 'Facebook', href: liens.facebook, Icone: Facebook },
  { nom: 'Telegram', href: liens.telegram, Icone: Telegram },
  { nom: 'Tous nos liens', href: liens.linktree, Icone: Linktree },
];

export default function Footer() {
  return (
    <footer className="border-t border-trait bg-fond2">
      <div className="mx-auto max-w-contenu px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Colonne 1 */}
          <div>
            <Marque variante="horizontal" largeur="11rem" className="mb-5" />
            <p className="titre mb-3 text-lg text-encre">
              Les enfants
              <br />
              veulent vivre
            </p>
            <p className="text-sm leading-relaxed text-encre2">
              Parents, oncles et tantes, grands-parents et adultes solidaires des mobilisations
              lycéennes, pour le climat et les droits de l&apos;enfance.
            </p>

            {/* Réseaux sociaux */}
            <ul className="mt-6 flex items-center gap-2">
              {reseaux.map(({ nom, href, Icone }) => (
                <li key={nom}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={nom}
                    title={nom}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-trait bg-fond text-encre2 transition hover:border-orange hover:bg-orange hover:text-fond"
                  >
                    <Icone />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {colonnes.map((c) => (
            <div key={c.titre}>
              <h2 className="titre mb-4 text-base text-orange-lien">{c.titre}</h2>
              <ul className="space-y-2.5">
                {c.entrees.map((e) => (
                  <li key={e.label}>
                    {'externe' in e && e.externe ? (
                      <a
                        href={e.href}
                        target={e.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm text-encre/75 transition hover:text-orange-lien"
                      >
                        {e.label}
                      </a>
                    ) : (
                      <Link href={e.href} className="text-sm text-encre/75 transition hover:text-orange-lien">
                        {e.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-trait pt-6 text-xs text-encre2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {contact.adresse} · {contact.email}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales/" className="transition hover:text-orange-lien">
              Mentions légales
            </Link>
            <Link href="/confidentialite/" className="transition hover:text-orange-lien">
              Politique de confidentialité
            </Link>
            <span>{site.domaine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
