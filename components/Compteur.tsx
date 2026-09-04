import { compteur, liens } from '@/content/site';

const fmt = new Intl.NumberFormat('fr-FR');

export default function Compteur() {
  const pct = Math.min(100, Math.round((compteur.signataires / compteur.objectif) * 100));

  return (
    <div className="rounded-2xl border border-trait bg-fond p-6 shadow-xl shadow-black/10 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-lien">
        Lettre ouverte au président de la République
      </p>

      <p className="titre mt-5 text-5xl text-encre sm:text-6xl">{fmt.format(compteur.signataires)}</p>
      <p className="mt-1 text-sm text-encre2">
        signataires · <span className="font-semibold text-encre">{pct} %</span> de l&apos;objectif des{' '}
        {fmt.format(compteur.objectif)}
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

      <div className="mt-7 space-y-3">
        <a href={liens.signer} target="_blank" rel="noopener noreferrer" className="bouton-primaire w-full">
          ✍ Je signe l&apos;appel
        </a>
        <a
          href={liens.signerOrganisation}
          target="_blank"
          rel="noopener noreferrer"
          className="bouton-secondaire w-full"
        >
          Je signe pour une organisation
        </a>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-encre2">
        Plus de {compteur.organisations} organisations nationales et locales soutiennent déjà
        l&apos;appel, et {compteur.volontaires} volontaires organisent les marches.
      </p>
    </div>
  );
}
