import type { Metadata } from 'next';
import Section, { TitreSection } from '@/components/Section';
import { presse } from '@/content/site';

export const metadata: Metadata = {
  title: 'Presse',
  description: "Contact presse de l'appel « Les enfants veulent vivre ».",
};

export default function Presse() {
  return (
    <Section>
      <TitreSection>
        Contact <span className="pastille">presse</span>
      </TitreSection>

      <div className="mt-10 max-w-xl rounded-2xl border border-trait bg-fond2 p-6 sm:p-8">
        <p className="text-xl font-semibold text-encre">{presse.nom}</p>
        <ul className="mt-4 space-y-2 text-encre/85">
          <li>
            <a className="lien-souligne" href={`tel:${presse.telephoneLien}`}>
              {presse.telephone}
            </a>
          </li>
          <li>
            <a className="lien-souligne break-all" href={`mailto:${presse.email}`}>
              {presse.email}
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
