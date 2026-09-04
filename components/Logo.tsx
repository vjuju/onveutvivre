import Link from 'next/link';

type Props = {
  /** Taille du texte du logo (classe Tailwind) */
  taille?: string;
  /** Version empilée avec le bloc « canicules / incendies / empoisonnements » */
  empile?: boolean;
  /** Couleur du « ON VEUT » */
  couleur?: 'creme' | 'orange';
  className?: string;
};

export function Marque({ taille = 'text-2xl', empile = false, couleur = 'creme', className = '' }: Props) {
  const teinteOn = couleur === 'orange' ? 'text-orange' : 'text-creme';

  if (empile) {
    return (
      <span className={`inline-block ${className}`} aria-label="Face aux canicules, incendies, empoisonnements : on veut vivre">
        <span className="titre block text-[0.34em] normal-case leading-[1.05] tracking-tight" aria-hidden>
          <span className="block text-vert">canicules</span>
          <span className="block text-rouge">incendies</span>
          <span className="block text-bleu">empoisonnements</span>
        </span>
        <span className={`titre mt-[0.12em] block ${teinteOn}`} aria-hidden>
          <span className="block">ON</span>
          <span className="block">VEUT</span>
        </span>
        <span className="pastille titre mt-[0.06em] inline-block" aria-hidden>
          VIVRE
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-[0.28em] ${taille} ${className}`} aria-label="On veut vivre">
      <span className={`titre ${teinteOn}`} aria-hidden>
        ON VEUT
      </span>
      <span className="pastille titre" aria-hidden>
        VIVRE
      </span>
    </span>
  );
}

export function LogoLien({ taille = 'text-2xl' }: { taille?: string }) {
  return (
    <Link href="/" className="shrink-0 transition hover:opacity-80" aria-label="On veut vivre — accueil">
      <Marque taille={taille} />
    </Link>
  );
}
