import type { Metadata } from 'next';
import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';
import BoutonAgenda from '@/components/BoutonAgenda';
import { calendrier } from '@/content/site';

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    'Les rendez-vous qui encadrent la marche du 26 septembre 2026 : grèves, actions, convergences.',
};

export default function PageActualites() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <TitreSection surtitre="Actualités">
            Les rendez-vous
            <br />à ne pas <span className="pastille pastille-bleu">manquer.</span>
          </TitreSection>
          <p className="mt-6 text-encre/75">
            <strong className="font-semibold text-encre">
              Le 26 septembre n&apos;est ni un point de départ ni un point d&apos;arrivée
            </strong>{' '}
            : c&apos;est le moment où tout converge. Voici les dates qui l&apos;encadrent.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <BoutonAgenda
              variante="primaire"
              evenement={{
                titre: 'Marche du 26 septembre — On veut vivre',
                lieu: 'Partout en France',
                heure: '14h00',
              }}
            >
              Ajouter le 26 à mon agenda
            </BoutonAgenda>
            <Link href="/#carte" className="bouton-secondaire">
              Trouver ma marche
            </Link>
          </div>
        </div>

        <ol className="space-y-3">
          {calendrier.map((e) => (
            <li
              key={e.date + e.titre}
              className={`flex gap-5 rounded-xl border p-5 transition ${
                e.phare ? 'border-orange bg-orange/10' : 'border-trait bg-fond2 hover:border-encre2/40'
              }`}
            >
              <span
                className={`titre w-24 shrink-0 text-lg ${e.phare ? 'text-orange-lien' : 'text-encre2'}`}
              >
                {e.date}
              </span>
              <span>
                <span className={`block font-semibold ${e.phare ? 'text-orange-lien' : 'text-encre'}`}>
                  {e.titre}
                </span>
                <span className="mt-1 block text-sm text-encre/70">{e.texte}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
