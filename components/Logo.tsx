import Link from 'next/link';

/**
 * Logo « ON VEUT VIVRE ».
 *
 * Principe de la marque : chaque mot est dimensionné pour occuper exactement
 * la même largeur, quel que soit son nombre de lettres. C'est la taille du
 * mot qui varie, jamais sa proportion — voir les coefficients dans globals.css.
 *
 *  - variante « complet » : le bloc à six lignes, avec canicules / incendies /
 *    empoisonnements en tête ;
 *  - variante « compact » : ON / VEUT / [VIVRE], pour l'entête et le pied-de-page.
 */

type Ton = 'clair' | 'sombre';

type Props = {
  /** Largeur du bloc — n'importe quelle longueur CSS (rem, px, clamp…) */
  largeur?: string;
  variante?: 'complet' | 'compact';
  /** « sombre » = posé sur fond clair (texte encre) ; « clair » = sur fond sombre */
  ton?: Ton;
  /** Colorise les trois premiers mots en vert / rouge / bleu */
  polychrome?: boolean;
  className?: string;
};

export function Marque({
  largeur = '16rem',
  variante = 'complet',
  ton = 'sombre',
  polychrome = true,
  className = '',
}: Props) {
  const couleurMots = ton === 'clair' ? 'text-orange' : 'text-encre';
  const trio = polychrome
    ? ['text-vert-texte', 'text-rouge-texte', 'text-bleu-texte']
    : [couleurMots, couleurMots, couleurMots];
  const trioClair = polychrome ? ['text-vert', 'text-rouge', 'text-bleu'] : [couleurMots, couleurMots, couleurMots];
  const teintesTrio = ton === 'clair' ? trioClair : trio;

  const libelle =
    variante === 'complet'
      ? 'Face aux canicules, incendies, empoisonnements : on veut vivre'
      : 'On veut vivre';

  return (
    <span
      className={`lockup ${className}`}
      style={{ ['--l' as string]: largeur }}
      role="img"
      aria-label={libelle}
    >
      {variante === 'complet' && (
        <>
          <span className={`mot-canicules ${teintesTrio[0]}`} aria-hidden>
            canicules
          </span>
          <span className={`mot-incendies ${teintesTrio[1]}`} aria-hidden>
            incendies
          </span>
          <span className={`mot-empoisonnements ${teintesTrio[2]}`} aria-hidden>
            empoisonnements
          </span>
        </>
      )}
      <span className={`mot-on ${couleurMots}`} aria-hidden>
        ON
      </span>
      <span className={`mot-veut ${couleurMots}`} aria-hidden>
        VEUT
      </span>
      <span className="badge-vivre bg-orange text-fond" aria-hidden>
        VIVRE
      </span>
    </span>
  );
}

export function LogoLien({ largeur = '5.2rem' }: { largeur?: string }) {
  return (
    <Link
      href="/"
      className="block shrink-0 transition hover:opacity-75"
      aria-label="On veut vivre — accueil"
    >
      <Marque largeur={largeur} variante="compact" />
    </Link>
  );
}
