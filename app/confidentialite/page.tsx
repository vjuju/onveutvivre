import type { Metadata } from 'next';
import Section, { TitreSection } from '@/components/Section';
import { contact, site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Traitement des données personnelles sur ${site.domaine}.`,
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <Section>
      <TitreSection>
        Politique de <span className="pastille">confidentialité</span>
      </TitreSection>

      <div className="prose-oep mt-10 max-w-3xl">
        <p>
          Nous demandons à celles et ceux qui signent l&apos;appel de nous confier des données
          personnelles. Voici précisément ce que nous en faisons.
        </p>

        <h3>Ce site ne vous piste pas</h3>
        <p>
          {site.domaine} ne dépose aucun cookie publicitaire, n&apos;utilise aucun traceur tiers et
          ne mesure pas votre navigation. Les typographies sont hébergées sur nos propres serveurs :
          aucune requête n&apos;est envoyée à Google Fonts ni à un autre service tiers lors du
          chargement des pages.
        </p>

        <h3>Les données de signature</h3>
        <p>
          Le formulaire de signature de l&apos;appel est hébergé sur la plateforme de la
          mobilisation. Les données collectées sont : prénom, nom, adresse électronique et code
          postal (obligatoires), téléphone et organisation (facultatifs).
        </p>
        <ul>
          <li>
            <strong>Publication du nom :</strong> votre signature n&apos;apparaît publiquement que si
            vous avez coché la case correspondante.
          </li>
          <li>
            <strong>Recontact :</strong> nous ne vous écrivons pour les suites de la mobilisation que
            si vous l&apos;avez accepté.
          </li>
          <li>
            <strong>Lettre d&apos;information :</strong> l&apos;inscription est facultative et la
            désinscription possible à tout moment, par le lien présent dans chaque envoi.
          </li>
        </ul>
        <p>
          Ces données servent uniquement à porter l&apos;appel et à organiser la mobilisation. Elles
          ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.
        </p>

        <h3>Durée de conservation</h3>
        <p>
          Les données de signature sont conservées le temps de la mobilisation et de ses suites, puis
          supprimées ou anonymisées.
        </p>

        <h3>Vos droits</h3>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation et d&apos;opposition sur vos données. Pour l&apos;exercer,
          écrivez à{' '}
          <a className="lien-souligne" href={`mailto:${contact.email}`}>{contact.email}</a> : nous
          répondons sous un mois. Vous pouvez également introduire une réclamation auprès de la CNIL.
        </p>

        <p className="rounded-lg border border-orange/40 bg-orange/10 p-4 text-sm">
          <strong>À compléter avant la mise en ligne publique :</strong> identité du responsable de
          traitement, nom de l&apos;outil hébergeant la base de signatures et sa localisation, et
          durée exacte de conservation retenue.
        </p>
      </div>
    </Section>
  );
}
