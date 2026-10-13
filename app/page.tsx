import Link from 'next/link';

const engagements = [
  {
    titre: 'Soutenir les mobilisations lycéennes',
    texte: 'Ravitaillement, cordons de protection, interpellation des élus…',
  },
  {
    titre: 'Se mobiliser massivement',
    texte:
      "Dès maintenant, et le 14 novembre pour le climat et la journée des droits de l'enfance.",
  },
];

export default function Accueil() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
      {/* La photo en pleine page, telle quelle : c'est le bloc de texte qui porte le voile */}
      <img
        src="/images/manifestation-republique.v1.jpg"
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_70%]"
      />

      <div className="mx-auto w-full max-w-contenu px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl bg-encre/70 px-6 py-10 text-center text-fond shadow-2xl shadow-encre/40 backdrop-blur-sm sm:px-12 sm:py-12">
          <h1 className="titre text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl">
            Les enfants veulent <span className="pastille">vivre</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-fond/90 sm:text-xl">
            <strong className="font-semibold text-fond">
              Parents, oncles et tantes, grands-parents, adultes&nbsp;:
            </strong>{' '}
            signez l&apos;appel et rejoignez le réseau de solidarité avec la jeunesse.
          </p>

          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {engagements.map((e) => (
              <li key={e.titre} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange" />
                <p className="leading-relaxed text-fond/85">
                  <strong className="font-semibold text-fond">{e.titre}</strong> — {e.texte}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/signer/"
              className="bouton-primaire !px-10 !py-5 !text-lg shadow-xl shadow-encre/40 sm:!text-xl"
            >
              ✍ Signer l&apos;appel
            </Link>
            <Link
              href="/manifeste/"
              className="text-sm font-medium text-fond/85 underline underline-offset-4 transition hover:text-fond"
            >
              Lire le manifeste
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
