import Link from 'next/link';

const engagements = [
  {
    titre: 'Pour soutenir les mobilisations lycéennes',
    texte: 'Ravitaillement, cordons de protection, interpellation des élus…',
  },
  {
    titre: 'Pour se mobiliser massivement',
    texte:
      "Dès maintenant, le 17 octobre et le 14 novembre pour le climat et la journée des droits de l'enfance.",
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
            Nous parents, oncles et tantes, grands-parents et adultes, sommes révoltés par le sort
            réservé aux enfants et la jeunesse légitimement mobilisés.
          </p>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-fond sm:text-xl">
            Les enfants veulent vivre, pas survivre. Nous ferons tout pour qu&apos;ils et elles
            puissent faire entendre leurs voix&nbsp;!
          </p>

          <Link
            href="/signer/"
            className="bouton-primaire mt-8 !px-10 !py-5 !text-lg shadow-xl shadow-encre/40 sm:!text-xl"
          >
            ✍ Signer l&apos;appel
          </Link>

          <h2 className="titre mt-12 text-lg sm:text-xl">Pourquoi est-ce important de signer&nbsp;?</h2>

          <ul className="mx-auto mt-6 max-w-xl space-y-4 text-left">
            {engagements.map((e) => (
              <li key={e.titre} className="flex gap-3">
                <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange" />
                <p className="leading-relaxed text-fond/85">
                  <strong className="font-semibold text-fond">{e.titre}</strong> — {e.texte}
                </p>
              </li>
            ))}
          </ul>

          {/* Texte orange-lien et non orange : l'orange pur tombe à 2,4:1 sur fond clair */}
          <Link
            href="/manifeste/"
            className="bouton mt-10 bg-fond text-orange-lien hover:bg-fond2"
          >
            Lire le manifeste
          </Link>
        </div>
      </div>
    </section>
  );
}
