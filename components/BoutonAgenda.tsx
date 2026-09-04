'use client';

import { telechargerIcs, type EvenementMarche } from '@/lib/agenda';

type Props = {
  evenement: EvenementMarche;
  nomFichier?: string;
  variante?: 'primaire' | 'secondaire' | 'discret';
  children?: React.ReactNode;
  className?: string;
};

export default function BoutonAgenda({
  evenement,
  nomFichier,
  variante = 'secondaire',
  children,
  className = '',
}: Props) {
  const classes =
    variante === 'primaire'
      ? 'bouton-primaire'
      : variante === 'discret'
        ? 'inline-flex items-center gap-1.5 text-sm font-medium text-orange-lien underline decoration-orange-lien/40 underline-offset-4 transition hover:decoration-orange-lien'
        : 'bouton-secondaire';

  return (
    <button
      type="button"
      onClick={() => telechargerIcs(evenement, nomFichier)}
      className={`${classes} ${className}`}
    >
      <span aria-hidden>📅</span>
      {children || 'Ajouter à mon agenda'}
    </button>
  );
}
