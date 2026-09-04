import Link from 'next/link';
import { Marque } from './Logo';
import { liens, contact, site } from '@/content/site';

const colonnes = [
  {
    titre: "L'appel à mobilisation",
    entrees: [
      { label: 'Lire le texte', href: '/#appel' },
      { label: "Signer l'appel", href: liens.signer, externe: true },
      { label: 'Nos trois plans', href: '/#trois-plans' },
      { label: 'Qui sommes-nous', href: '/#qui' },
      { label: 'Les signataires', href: '/signataires/' },
    ],
  },
  {
    titre: 'Agir avec nous',
    entrees: [
      { label: 'Rejoindre Telegram', href: liens.telegram, externe: true },
      { label: 'La carte des mobilisations', href: '/#carte' },
      { label: 'Kits et documents', href: '/kits/' },
    ],
  },
  {
    titre: 'Contact',
    entrees: [
      { label: 'Nous écrire', href: liens.contact, externe: true },
      { label: 'Contact presse', href: liens.presse, externe: true },
      { label: 'Instagram', href: liens.instagram, externe: true },
      { label: 'Facebook', href: liens.facebook, externe: true },
      { label: 'Telegram', href: liens.telegram, externe: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-bordure bg-charbon">
      <div className="mx-auto max-w-contenu px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 */}
          <div>
            <Marque taille="text-2xl" className="mb-4" />
            <p className="titre mb-3 text-lg text-creme">
              Marchons le samedi
              <br />
              26 septembre 2026
            </p>
            <p className="text-sm leading-relaxed text-cremeSourde">
              Partout en France, dans les métropoles et dans les bourgs de mille habitants, pour le
              climat, le vivant, la paix et la justice sociale.
            </p>
          </div>

          {colonnes.map((c) => (
            <div key={c.titre}>
              <h2 className="titre mb-4 text-base text-orange">{c.titre}</h2>
              <ul className="space-y-2.5">
                {c.entrees.map((e) => (
                  <li key={e.label}>
                    {'externe' in e && e.externe ? (
                      <a
                        href={e.href}
                        target={e.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm text-creme/75 transition hover:text-orange"
                      >
                        {e.label}
                      </a>
                    ) : (
                      <Link href={e.href} className="text-sm text-creme/75 transition hover:text-orange">
                        {e.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bordure pt-6 text-xs text-cremeSourde sm:flex-row sm:items-center sm:justify-between">
          <p>
            {contact.adresse} · {contact.email}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales/" className="transition hover:text-orange">
              Mentions légales
            </Link>
            <Link href="/confidentialite/" className="transition hover:text-orange">
              Politique de confidentialité
            </Link>
            <span>{site.domaine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
