import type { ReactNode } from 'react';

type Props = {
  id?: string;
  children: ReactNode;
  /** Fond alterné pour séparer les bandeaux */
  fond?: 'clair' | 'beige';
  className?: string;
};

export default function Section({ id, children, fond = 'clair', className = '' }: Props) {
  return (
    <section
      id={id}
      className={`${fond === 'beige' ? 'bg-fond2' : 'bg-fond'} border-t border-trait ${className}`}
    >
      <div className="mx-auto max-w-contenu px-4 py-20 sm:px-6 sm:py-24">{children}</div>
    </section>
  );
}

export function TitreSection({
  surtitre,
  children,
  className = '',
}: {
  surtitre?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {surtitre && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-lien">{surtitre}</p>
      )}
      <h2 className="titre text-4xl text-encre sm:text-5xl lg:text-6xl">{children}</h2>
    </div>
  );
}
