import Link from 'next/link';

/**
 * Logo « ON VEUT VIVRE ».
 *
 * Ce sont les fichiers officiels fournis par l'équipe (dossier « Logos OVV »),
 * détourés et redimensionnés pour le web dans `public/logos/`. Le logo n'est
 * plus reconstruit en CSS : on affiche l'image, seule version qui fait foi.
 *
 * Les dimensions sont déclarées sur chaque `<img>` pour réserver la place et
 * éviter que la page ne saute au chargement.
 */

type Variante = 'complet' | 'principal' | 'horizontal' | 'vivre';

const fichiers: Record<Variante, { src: string; l: number; h: number; alt: string }> = {
  // Bloc complet : canicules / incendies / empoisonnements + ON VEUT VIVRE
  complet: {
    src: '/logos/ovv-complet-couleur-web.png',
    l: 422,
    h: 760,
    alt: 'Face aux canicules, incendies, empoisonnements : on veut vivre',
  },
  // ON VEUT + pastille VIVRE, en orange
  principal: { src: '/logos/ovv-orange-web.png', l: 593, h: 760, alt: 'On veut vivre' },
  // Une seule ligne — pour l'entête et le pied-de-page
  horizontal: { src: '/logos/ovv-horizontal-web.png', l: 760, h: 147, alt: 'On veut vivre' },
  // La pastille VIVRE seule
  vivre: { src: '/logos/ovv-vivre-web.png', l: 760, h: 318, alt: 'Vivre' },
};

type Props = {
  variante?: Variante;
  /** Largeur d'affichage — n'importe quelle longueur CSS (rem, px, clamp…) */
  largeur?: string;
  className?: string;
  priorite?: boolean;
};

export function Marque({
  variante = 'complet',
  largeur = '16rem',
  className = '',
  priorite = false,
}: Props) {
  const f = fichiers[variante];
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={f.src}
      alt={f.alt}
      width={f.l}
      height={f.h}
      loading={priorite ? 'eager' : 'lazy'}
      fetchPriority={priorite ? 'high' : undefined}
      decoding="async"
      className={`h-auto ${className}`}
      style={{ width: largeur }}
    />
  );
}

export function LogoLien({ largeur = '9rem' }: { largeur?: string }) {
  return (
    <Link
      href="/"
      className="block shrink-0 transition hover:opacity-75"
      aria-label="On veut vivre — accueil"
    >
      <Marque variante="horizontal" largeur={largeur} priorite />
    </Link>
  );
}
