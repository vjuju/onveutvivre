import type { Metadata } from 'next';
import Section, { TitreSection } from '@/components/Section';
import { contact, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales du site ${site.domaine}.`,
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <Section>
      <TitreSection>Mentions légales</TitreSection>

      <div className="prose-oep mt-10 max-w-3xl">
        <h3>Éditeur du site</h3>
        <p>
          Le site {site.domaine} est édité par le collectif « On veut vivre », à l&apos;origine de
          l&apos;appel à mobilisation nationale du 26 septembre 2026.
        </p>
        <p>
          Adresse : {contact.adresse}
          <br />
          Courriel : <a className="lien-souligne" href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p className="rounded-lg border border-orange/40 bg-orange/10 p-4 text-sm">
          <strong>À compléter avant la mise en ligne publique :</strong> forme juridique de la
          structure éditrice, numéro RNA ou SIREN le cas échéant, et nom du ou de la directrice de
          la publication.
        </p>

        <h3>Hébergement</h3>
        <p>
          Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107,
          États-Unis — <a className="lien-souligne" href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a>.
        </p>
        <p>
          Le nom de domaine est enregistré auprès d&apos;Infomaniak Network SA, rue Eugène-Marziano
          25, 1227 Les Acacias, Genève, Suisse.
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          Les visuels, logos et textes de la mobilisation sont mis à disposition pour un usage
          militant non commercial lié à la mobilisation du 26 septembre 2026. Merci de ne pas les
          modifier de façon à en altérer le sens.
        </p>
        <p>
          Les typographies <strong>Rubik</strong> et <strong>Rubik Dirt</strong> sont distribuées
          sous licence SIL Open Font License 1.1.
        </p>

        <h3>Signalement</h3>
        <p>
          Pour toute demande concernant un contenu publié sur ce site, écrivez à{' '}
          <a className="lien-souligne" href={`mailto:${contact.email}`}>{contact.email}</a>. Nous
          répondons sous 48 heures ouvrées.
        </p>
      </div>
    </Section>
  );
}
