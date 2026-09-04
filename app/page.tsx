import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';
import { Marque } from '@/components/Logo';
import Compteur from '@/components/Compteur';
import Carte from '@/components/Carte';
import Formulaire from '@/components/Formulaire';
import { Accentue } from '@/components/RichText';
import { chiffresMobilisation } from '@/lib/compteur';
import { chapo } from '@/content/site';

export default function Accueil() {
  return (
    <>
      {/* ─────────────────────────────── Bandeau 1 · L'appel */}
      <section id="appel" className="relative overflow-hidden bg-fond2">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-orange/20 blur-[130px]"
        />
        <div className="relative mx-auto max-w-contenu px-4 py-10 sm:px-6 sm:py-14">
          {/* Ligne 1 — le lockup et le bandeau de signature : deux colonnes de
              même hauteur, chacun centré dans la sienne. */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex justify-center">
              <Marque largeur="clamp(9rem, 19vw, 12.5rem)" />
            </div>

            <div className="mx-auto w-full max-w-md">
              <Compteur chiffres={chiffresMobilisation} />
            </div>
          </div>

          {/* Ligne 2 — l'appel, la description et les boutons, en bloc centré. */}
          <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-lien">
              Lettre ouverte au président de la République
            </p>

            <p className="mt-4 leading-relaxed text-encre/80 sm:text-lg">
              <Accentue>{chapo}</Accentue>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/appel/" className="bouton-primaire">
                ✍ Lire l&apos;appel du 26 septembre
              </Link>
              <Link href="/agir/" className="bouton-secondaire">
                Passer à l&apos;action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── Signer l'appel */}
      <Section id="signer">
        <div className="mx-auto max-w-xl">
          <TitreSection surtitre="Appel à mobilisation nationale · Samedi 26 septembre 2026" className="text-center">
            Je signe <span className="pastille">l&apos;appel.</span>
          </TitreSection>
          <p className="mx-auto mt-5 max-w-lg text-center text-encre/75">
            Votre signature rejoint le registre du 26 septembre.{' '}
            <strong className="font-semibold text-encre">
              Le prénom, le nom, l&apos;email et le code postal suffisent.
            </strong>
          </p>
          <div className="mt-8">
            <Formulaire />
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────── La carte — dernier bandeau de la page */}
      <Section id="carte" fond="beige">
        <TitreSection surtitre="La marche du 26">
          La carte des <span className="pastille">mobilisations</span>
        </TitreSection>
        <p className="mt-6 max-w-2xl text-lg text-encre/75">
          <strong className="font-semibold text-encre">La suite se joue près de chez vous.</strong>{' '}
          Trouvez la marche la plus proche, ou lancez la vôtre.
        </p>
        <div className="mt-12">
          <Carte />
        </div>
      </Section>
    </>
  );
}
