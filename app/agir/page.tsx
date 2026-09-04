import type { Metadata } from 'next';
import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';
import { Accentue } from '@/components/RichText';
import { actions, enFairePlus, quiSommesNous, liens } from '@/content/site';

export const metadata: Metadata = {
  title: 'Agir avec nous',
  description:
    "Partager l'appel, organiser une marche près de chez vous, devenir volontaire, faire signer une organisation.",
};

const teintes = {
  vert: { texte: 'text-vert-texte', bord: 'border-vert' },
  bleu: { texte: 'text-bleu-texte', bord: 'border-bleu' },
  rouge: { texte: 'text-rouge-texte', bord: 'border-rouge' },
  orange: { texte: 'text-orange-lien', bord: 'border-orange' },
} as const;

export default function PageAgir() {
  return (
    <>
      <Section>
        <TitreSection surtitre="Signer ne suffit pas">
          Signez.
          <br />
          Puis <span className="pastille">marchez.</span>
        </TitreSection>
        <p className="mt-6 max-w-2xl text-lg text-encre/75">
          <strong className="font-semibold text-encre">La suite se joue près de chez vous.</strong>{' '}
          Une marche ne se décrète pas : elle s&apos;organise, à quelques dizaines de mains.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {actions.map((a) => (
            <article key={a.titre} className={`carte border-t-4 ${teintes[a.accent].bord}`}>
              <h2 className={`titre text-2xl ${teintes[a.accent].texte}`}>{a.titre}</h2>
              <p className="mt-4 text-sm text-encre/80">{a.intro}</p>
              <ul className="mt-4 space-y-2.5">
                {a.items.map((i) => (
                  <li key={i.texte}>
                    <a
                      href={i.href}
                      target={i.href.startsWith('http') ? '_blank' : undefined}
                      rel={i.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="lien-souligne text-sm font-medium"
                    >
                      {i.texte}
                    </a>
                    {i.detail && <span className="ml-2 text-xs text-encre2">{i.detail}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section fond="beige">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 className="titre text-3xl text-encre sm:text-4xl">Vous voulez en faire plus ?</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {enFairePlus.map((b) => (
              <div key={b.titre}>
                <h3 className="titre text-xl text-orange-lien">{b.titre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-encre/80">
                  <Accentue>{b.texte}</Accentue>
                </p>
                <a
                  href={b.lien.href}
                  target={b.lien.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="lien-souligne mt-3 inline-block text-sm font-medium"
                >
                  {b.lien.texte} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="qui">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <TitreSection surtitre="Qui sommes-nous ?">
            Un mouvement né
            <br />
            cet <span className="pastille pastille-vert">été.</span>
          </TitreSection>
          <div className="space-y-4 text-encre/80 lg:pt-4">
            <p className="leading-relaxed">
              <strong className="font-semibold text-encre">
                Pas une organisation, pas un parti, pas une marque
              </strong>{' '}
              : un collectif de personnes qui ont refusé que cet été passe sans conséquence.
              Autogéré, auto-organisé, ouvert à qui veut en être.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quiSommesNous.map((b) => (
            <article key={b.titre} className="carte">
              <p className="text-2xl" aria-hidden>
                {b.emoji}
              </p>
              <h3 className="titre mt-3 text-xl text-orange-lien">{b.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-encre/75">
                <Accentue>{b.texte}</Accentue>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="bouton-primaire">
            Rejoignez-nous
          </a>
          <Link href="/#carte" className="bouton-secondaire">
            Trouver ma marche
          </Link>
        </div>
      </Section>
    </>
  );
}
