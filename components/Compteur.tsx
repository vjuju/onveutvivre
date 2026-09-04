import { dateDuReleve, type Chiffres } from '@/lib/compteur';

const fmt = new Intl.NumberFormat('fr-FR');

export default function Compteur({
  chiffres,
  avecBoutons = true,
}: {
  chiffres: Chiffres;
  /** false quand le formulaire de signature est affiché juste en dessous */
  avecBoutons?: boolean;
}) {
  const pct = Math.min(100, Math.round((chiffres.signataires / chiffres.objectif) * 100));

  return (
    <div className="rounded-2xl border border-trait bg-fond p-6 shadow-lg shadow-encre/[0.06] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-lien">
        Appel à mobilisation nationale
        <span className="mx-1.5 text-encre2">·</span>
        Samedi 26 septembre 2026
      </p>

      <p className="titre mt-5 text-5xl text-encre sm:text-6xl">{fmt.format(chiffres.signataires)}</p>
      <p className="mt-1 text-sm text-encre2">
        signataires · <span className="font-semibold text-encre">{pct} %</span> de l&apos;objectif des{' '}
        {fmt.format(chiffres.objectif)}
      </p>

      <div
        className="mt-5 h-3 w-full overflow-hidden rounded-full bg-champ"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression vers l'objectif de signatures"
      >
        <div className="h-full rounded-full bg-orange transition-all" style={{ width: `${pct}%` }} />
      </div>

      {avecBoutons && (
        <div className="mt-7 space-y-3">
          <a href="#signer" className="bouton-primaire w-full">
            ✍ Je signe l&apos;appel
          </a>
          <a href="#signer" className="bouton-secondaire w-full">
            Je signe pour une organisation
          </a>
        </div>
      )}

      <p className="mt-5 text-xs leading-relaxed text-encre2">
        {fmt.format(chiffres.organisations)} organisations nationales et locales soutiennent déjà
        l&apos;appel.
        <br />
        <span className="text-encre2/80">Chiffres relevés le {dateDuReleve(chiffres)}.</span>
      </p>
    </div>
  );
}
