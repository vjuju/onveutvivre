import type { Metadata } from 'next';
import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';
import { Accentue } from '@/components/RichText';
import { plans, financements } from '@/content/site';

export const metadata: Metadata = {
  title: 'Nos trois plans',
  description:
    "Un plan d'urgence, un plan d'adaptation, un plan d'atténuation — et les recettes pour les financer.",
};

const teintes = {
  vert: { texte: 'text-vert-texte', bord: 'border-vert' },
  bleu: { texte: 'text-bleu-texte', bord: 'border-bleu' },
  rouge: { texte: 'text-rouge-texte', bord: 'border-rouge' },
  orange: { texte: 'text-orange-lien', bord: 'border-orange' },
} as const;

export default function PagePlans() {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <TitreSection surtitre="Ce que nous demandons">
            Trois plans,
            <br />
            et de quoi les <span className="pastille">payer.</span>
          </TitreSection>
          <div className="space-y-4 text-encre/80 lg:pt-4">
            <p className="leading-relaxed">
              Nous adressons une lettre ouverte au président de la République. Elle ne demande{' '}
              <strong className="font-semibold text-encre">
                ni compassion ni promesse : elle demande trois plans, et les recettes pour les
                financer.
              </strong>
            </p>
            <p className="leading-relaxed">
              <strong className="font-semibold text-encre">
                Trois Françaises et Français sur quatre
              </strong>{' '}
              veulent déjà que les entreprises fossiles paient davantage. Nous ne demandons rien
              d&apos;autre que ce que ce pays réclame.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article key={p.numero} className={`carte border-t-4 bg-fond ${teintes[p.accent].bord}`}>
              <p className={`titre text-5xl ${teintes[p.accent].texte} opacity-45`}>{p.numero}</p>
              <h2 className="titre mt-3 text-2xl text-encre">{p.titre}</h2>
              <p className="mt-4 text-sm leading-relaxed text-encre/75">
                <Accentue>{p.texte}</Accentue>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section fond="beige">
        <h2 className="titre max-w-4xl text-3xl text-encre sm:text-4xl">
          Pour payer ces trois plans, nous exigeons que contribuent celles et ceux qui en tirent
          profit.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {financements.map((f) => (
            <div key={f.titre} className="carte bg-fond">
              <h3 className="titre text-xl text-orange-lien">{f.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-encre/75">
                <Accentue>{f.texte}</Accentue>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/#signer" className="bouton-primaire">
            ✍ Je signe l&apos;appel
          </Link>
          <Link href="/appel/" className="bouton-secondaire">
            Lire l&apos;appel en entier
          </Link>
        </div>
      </Section>
    </>
  );
}
