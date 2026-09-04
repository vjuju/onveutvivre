import type { Metadata } from 'next';
import Section, { TitreSection } from '@/components/Section';
import { liens, contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'Kits et documents',
  description:
    "Affiches, visuels, logos et documents à télécharger pour faire connaître la marche du 26 septembre 2026.",
};

const logos = [
  { nom: 'Logo horizontal — crème', fichier: '/logos/logo-horizontal-creme.png', fond: 'bg-noir' },
  { nom: 'Logo horizontal — orange', fichier: '/logos/logo-horizontal-orange.png', fond: 'bg-noir' },
  { nom: 'Logo horizontal — noir', fichier: '/logos/logo-horizontal-noir.png', fond: 'bg-creme' },
  { nom: 'Logo empilé — couleur', fichier: '/logos/logo-empile-couleur.png', fond: 'bg-noir' },
  { nom: 'Logo empilé — orange', fichier: '/logos/logo-empile-orange.png', fond: 'bg-noir' },
  { nom: 'Logo empilé — crème', fichier: '/logos/logo-empile-creme.png', fond: 'bg-noir' },
];

const charte = [
  { hex: '#EE7D3A', usage: 'Orange — logo, titres accentués, aplats' },
  { hex: '#D5702E', usage: 'Orange foncé — boutons, liens' },
  { hex: '#0C0A09', usage: 'Noir — fond général' },
  { hex: '#FFFCF5', usage: 'Crème — textes' },
  { hex: '#6BC24A', usage: 'Vert — accent' },
  { hex: '#4BA9F0', usage: 'Bleu — accent' },
  { hex: '#EE3B3B', usage: 'Rouge — accent' },
];

export default function Kits() {
  return (
    <>
      <Section>
        <TitreSection surtitre="La marche du 26">
          Kits et <span className="pastille">documents</span>
        </TitreSection>
        <p className="mt-6 max-w-2xl text-lg text-creme/80">
          Tout ce qu&apos;il faut pour faire connaître la marche autour de vous : à imprimer, à
          coller, à partager. Ces visuels sont libres d&apos;usage pour la mobilisation.
        </p>
      </Section>

      <Section fond="charbon">
        <h2 className="titre text-3xl text-creme sm:text-4xl">Logos</h2>
        <p className="mt-3 text-sm text-cremeSourde">PNG haute définition, fond transparent.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((l) => (
            <div key={l.fichier} className="carte bg-noir">
              <div className={`mb-4 flex h-32 items-center justify-center rounded-lg p-5 ${l.fond}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.fichier} alt={l.nom} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-sm font-medium text-creme">{l.nom}</p>
              <a href={l.fichier} download className="lien-souligne mt-2 inline-block text-sm">
                Télécharger le PNG
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/logos/logo-onveutvivre.svg" download className="bouton-secondaire">
            Logo horizontal — SVG vectoriel
          </a>
          <a href="/logos/logo-onveutvivre-empile.svg" download className="bouton-secondaire">
            Logo empilé — SVG vectoriel
          </a>
        </div>
      </Section>

      <Section>
        <h2 className="titre text-3xl text-creme sm:text-4xl">Charte graphique</h2>
        <p className="mt-3 max-w-2xl text-sm text-cremeSourde">
          Typographie des titres : <strong className="text-creme">Rubik Dirt</strong> (SIL Open Font
          License). Typographie de texte : <strong className="text-creme">Rubik</strong>.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {charte.map((c) => (
            <div key={c.hex} className="carte">
              <div
                className="mb-4 h-16 w-full rounded-lg border border-bordure"
                style={{ background: c.hex }}
              />
              <p className="font-mono text-sm text-creme">{c.hex}</p>
              <p className="mt-1 text-xs text-cremeSourde">{c.usage}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section fond="charbon">
        <h2 className="titre text-3xl text-creme sm:text-4xl">Affiches et dossier de presse</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="carte bg-noir">
            <h3 className="titre text-xl text-orange">Affiches et flyers</h3>
            <p className="mt-3 text-sm leading-relaxed text-creme/75">
              Les affiches A3 et les flyers de la mobilisation sont en cours de mise à disposition
              sur cette page. En attendant, la boucle Telegram diffuse les visuels au fur et à
              mesure.
            </p>
            <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="bouton-secondaire mt-5">
              Rejoindre le Telegram
            </a>
          </div>

          <div className="carte bg-noir">
            <h3 className="titre text-xl text-orange">Presse</h3>
            <p className="mt-3 text-sm leading-relaxed text-creme/75">
              Journalistes : le dossier de presse et les éléments de langage sont disponibles sur
              demande. Nous répondons sous 48 heures.
            </p>
            <a href={`mailto:${contact.presse}?subject=Demande%20presse`} className="bouton-secondaire mt-5">
              Contacter la presse
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
