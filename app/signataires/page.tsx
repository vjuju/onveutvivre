import type { Metadata } from 'next';
import Section, { TitreSection } from '@/components/Section';
import Compteur from '@/components/Compteur';
import { compteur, liens } from '@/content/site';

export const metadata: Metadata = {
  title: 'Les signataires',
  description:
    "Organisations et personnes qui ont signé l'appel à mobilisation nationale du 26 septembre 2026.",
};

const fmt = new Intl.NumberFormat('fr-FR');

export default function Signataires() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <TitreSection surtitre="Elles et ils ont signé">
              Les <span className="pastille">signataires</span>
            </TitreSection>
            <p className="mt-6 max-w-2xl text-lg text-creme/80">
              {fmt.format(compteur.signataires)} personnes et plus de {compteur.organisations}{' '}
              organisations nationales et locales ont signé la lettre ouverte au président de la
              République.
            </p>
            <p className="mt-4 max-w-2xl text-creme/70">
              Seules les signatures dont les auteur·es ont accepté la publication apparaissent ici.
            </p>
          </div>
          <Compteur />
        </div>
      </Section>

      <Section fond="charbon">
        <h2 className="titre text-3xl text-creme sm:text-4xl">Les organisations signataires</h2>
        <div className="carte mt-8 bg-noir">
          <p className="text-sm leading-relaxed text-creme/75">
            La liste complète des organisations signataires est en cours de consolidation et sera
            publiée ici. Associations, syndicats, collectifs, entreprises et collectivités : votre
            organisation peut rejoindre l&apos;appel.
          </p>
          <a
            href={liens.signerOrganisation}
            target="_blank"
            rel="noopener noreferrer"
            className="bouton-primaire mt-6"
          >
            Faire signer mon organisation
          </a>
        </div>
      </Section>

      <Section>
        <h2 className="titre text-3xl text-creme sm:text-4xl">Témoignages</h2>
        <p className="mt-3 max-w-2xl text-sm text-cremeSourde">
          Pourquoi marcher le 26 septembre ? Les témoignages des signataires qui ont accepté de
          partager leur engagement seront publiés ici.
        </p>
        <a href={liens.signer} target="_blank" rel="noopener noreferrer" className="bouton-secondaire mt-8">
          Témoigner de mon engagement
        </a>
      </Section>
    </>
  );
}
