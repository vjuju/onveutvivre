import type { Metadata } from 'next';
import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';
import Carrousel from '@/components/Carrousel';
import { Accentue, Paragraphe, Liste } from '@/components/RichText';
import { appel, chapo, chiffres } from '@/content/site';

export const metadata: Metadata = {
  title: "L'appel du 26 septembre",
  description:
    "Lettre ouverte au président de la République : un plan d'urgence, un plan d'adaptation, un plan d'atténuation, et de quoi les payer.",
};

export default function PageAppel() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <TitreSection surtitre="Lettre ouverte au président de la République">
            L&apos;appel du <span className="pastille">26 septembre.</span>
          </TitreSection>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            <Accentue>{chapo}</Accentue>
          </p>
        </div>
      </Section>

      {/* Pourquoi maintenant — les chiffres, avant le texte long */}
      <Section fond="beige">
        <TitreSection surtitre="Pourquoi maintenant ?">
          L&apos;été a brûlé,
          <br />
          et rien ne s&apos;est <span className="pastille pastille-rouge">arrêté.</span>
        </TitreSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chiffres.map((c) => (
            <div key={c.valeur} className="carte bg-fond">
              <p className="titre text-4xl text-orange-lien sm:text-5xl">{c.valeur}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-encre2">
                {c.unite}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-encre/75">
                <Accentue>{c.texte}</Accentue>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Carrousel />
        </div>
      </Section>

      {/* Le texte intégral */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="titre text-3xl text-encre sm:text-4xl">Le texte intégral</h2>

          <div className="mt-8 space-y-4">
            <p className="titre text-xl text-encre">{appel.ouverture}</p>
            {appel.paragraphes.map((p, i) => (
              <Paragraphe key={i}>{p}</Paragraphe>
            ))}

            <Liste items={appel.savaient} className="!mt-6" />

            <h3 className="titre !mt-12 text-2xl text-orange-lien">{appel.mobilises.titre}</h3>
            {appel.mobilises.paragraphes.map((p, i) => (
              <Paragraphe key={i}>{p}</Paragraphe>
            ))}

            {appel.exigences.map((e) => (
              <div key={e.titre} className="space-y-4">
                <h3 className="titre !mt-12 text-2xl text-orange-lien">{e.titre}</h3>
                <Paragraphe>{e.texte}</Paragraphe>
              </div>
            ))}

            <h3 className="titre !mt-12 text-2xl text-orange-lien">{appel.financement.titre}</h3>
            <Paragraphe>{appel.financement.intro}</Paragraphe>
            <Liste items={appel.financement.points} />
            <Paragraphe>{appel.financement.conclusion}</Paragraphe>

            <h3 className="titre !mt-12 text-2xl text-orange-lien">{appel.final.titre}</h3>
            {appel.final.paragraphes.map((p, i) => (
              <Paragraphe key={i}>{p}</Paragraphe>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/#signer" className="bouton-primaire">
              ✍ Je signe l&apos;appel
            </Link>
            <Link href="/nos-trois-plans/" className="bouton-secondaire">
              Nos trois plans
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
