import type { Metadata } from 'next';
import Section, { TitreSection } from '@/components/Section';
import { liens, contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'Kits et documents',
  description:
    "Affiches, flyers, visuels, logos et documents à télécharger pour faire connaître la marche du 26 septembre 2026.",
};

const logos = [
  {
    nom: 'Bloc complet — couleur',
    detail: 'La version de référence, sur fond clair',
    fichier: 'ovv-complet-couleur',
    fond: 'bg-fond',
  },
  {
    nom: 'Bloc complet — noir et gris',
    detail: 'Impression monochrome, photocopie',
    fichier: 'ovv-complet-noir',
    fond: 'bg-fond',
  },
  { nom: 'On veut vivre — orange', detail: 'Version courante', fichier: 'ovv-orange', fond: 'bg-fond' },
  { nom: 'On veut vivre — noir', detail: 'Monochrome', fichier: 'ovv-noir', fond: 'bg-fond' },
  { nom: 'Pastille rouge', detail: 'Variante d’accent', fichier: 'ovv-rouge', fond: 'bg-fond' },
  { nom: 'Pastille verte', detail: 'Variante d’accent', fichier: 'ovv-vert', fond: 'bg-fond' },
  { nom: 'Pastille bleue', detail: 'Variante d’accent', fichier: 'ovv-bleu', fond: 'bg-fond' },
  {
    nom: 'Version horizontale',
    detail: 'Bandeaux, entêtes, signatures de mail',
    fichier: 'ovv-horizontal',
    fond: 'bg-fond',
  },
  { nom: 'Pastille « VIVRE »', detail: 'Avatar, favicon, tampon', fichier: 'ovv-vivre', fond: 'bg-fond' },
];

const charte = [
  { hex: '#FF751F', usage: 'Orange du logo — aplats, pastilles, boutons' },
  { hex: '#A8480F', usage: 'Orange sourd — liens et petits textes' },
  { hex: '#FFFCF5', usage: 'Crème — fond général' },
  { hex: '#FAF4E9', usage: 'Beige — cartes et blocs' },
  { hex: '#F0E8D6', usage: 'Sable — champs de formulaire' },
  { hex: '#19120B', usage: 'Encre — textes' },
  { hex: '#7ED957', usage: 'Vert — accent' },
  { hex: '#FF3131', usage: 'Rouge — accent' },
  { hex: '#38B6FF', usage: 'Bleu — accent' },
];

export default function Kits() {
  return (
    <>
      <Section>
        <TitreSection surtitre="La marche du 26">
          Kits et <span className="pastille">documents</span>
        </TitreSection>
        <p className="mt-6 max-w-2xl text-lg text-encre/80">
          Tout ce qu&apos;il faut pour faire connaître la marche autour de vous :{' '}
          <strong className="font-semibold text-encre">à imprimer, à coller, à partager.</strong>{' '}
          Ces visuels sont libres d&apos;usage pour la mobilisation.
        </p>
      </Section>

      {/* ── 1. Affiches et flyers, en tête ── */}
      <Section fond="beige">
        <h2 className="titre text-2xl text-encre sm:text-3xl">Affiches et flyers</h2>
        <p className="mt-3 max-w-2xl text-sm text-encre2">
          À partager par messagerie, à enregistrer dans vos photos, à imprimer en A3.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="carte bg-fond">
            <h3 className="titre text-base text-orange-lien">Les visuels de la mobilisation</h3>
            <p className="mt-3 text-sm leading-relaxed text-encre/75">
              Les affiches A3 et les flyers sont en cours de mise à disposition sur cette page. En
              attendant,{' '}
              <strong className="font-semibold text-encre">
                la boucle Telegram diffuse les visuels au fur et à mesure
              </strong>{' '}
              — c&apos;est là qu&apos;ils sortent en premier.
            </p>
            <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="bouton-primaire mt-5">
              Rejoindre le Telegram
            </a>
          </div>

          <div className="carte bg-fond">
            <h3 className="titre text-base text-orange-lien">Dossier de presse</h3>
            <p className="mt-3 text-sm leading-relaxed text-encre/75">
              Journalistes : le dossier de presse et les éléments de langage sont disponibles sur
              demande. <strong className="font-semibold text-encre">Nous répondons sous 48 heures.</strong>
            </p>
            <a href={`mailto:${contact.presse}?subject=Demande%20presse`} className="bouton-secondaire mt-5">
              Contacter la presse
            </a>
          </div>
        </div>
      </Section>

      {/* ── 2. Logos ── */}
      <Section>
        <h2 className="titre text-2xl text-encre sm:text-3xl">Logos</h2>
        <p className="mt-3 text-sm text-encre2">PNG haute définition, fond transparent.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((l) => (
            <div key={l.fichier} className="carte">
              <div className={`mb-4 flex h-40 items-center justify-center rounded-lg p-5 ${l.fond}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${l.fichier}-web.png`}
                  alt={l.nom}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-encre">{l.nom}</p>
              <p className="mt-0.5 text-xs text-encre2">{l.detail}</p>
              <a
                href={`/logos/${l.fichier}.png`}
                download
                className="lien-souligne mt-2 inline-block text-sm"
              >
                Télécharger le PNG
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-encre2">
          PNG à fond transparent, prêts à poser sur n&apos;importe quel fond.{' '}
          <strong className="font-semibold text-encre">
            Ne pas déformer ni recolorier le logo
          </strong>{' '}
          : utiliser la variante prévue pour le fond.
        </p>
      </Section>

      {/* ── 3. Charte, en dernier ── */}
      <Section fond="beige">
        <h2 className="titre text-2xl text-encre sm:text-3xl">Charte graphique</h2>
        <p className="mt-3 max-w-2xl text-sm text-encre2">
          Typographie des titres : <strong className="text-encre">Rubik Mono One</strong>. Typographie de
          texte : <strong className="text-encre">Poppins</strong>. Les couleurs sont relevées
          directement sur les fichiers du logo.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {charte.map((c) => (
            <div key={c.hex} className="carte bg-fond">
              <div
                className="mb-4 h-16 w-full rounded-lg border border-trait"
                style={{ background: c.hex }}
              />
              <p className="font-mono text-sm text-encre">{c.hex}</p>
              <p className="mt-1 text-xs text-encre2">{c.usage}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
