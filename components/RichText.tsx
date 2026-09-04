import type { ReactNode } from 'react';

/**
 * Rendu d'un texte éditorial avec accentuations.
 *
 * Les textes de `content/site.ts` peuvent contenir des passages entre
 * doubles astérisques : `**comme ceci**`. Ils sont rendus en gras.
 * C'est délibérément minimal — juste ce qu'il faut pour qu'un texte long
 * reste lisible en diagonale, sans introduire un moteur Markdown complet.
 */
export function Accentue({ children }: { children: string }) {
  const morceaux = children.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {morceaux.map((m, i) =>
        m.startsWith('**') && m.endsWith('**') ? (
          <strong key={i} className="font-semibold text-encre">
            {m.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{m}</span>
        )
      )}
    </>
  );
}

/** Un paragraphe accentué, avec les classes habituelles. */
export function Paragraphe({
  children,
  className = '',
}: {
  children: string;
  className?: string;
}) {
  return (
    <p className={`leading-relaxed text-encre/80 ${className}`}>
      <Accentue>{children}</Accentue>
    </p>
  );
}

export function Liste({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`list-disc space-y-2 pl-5 text-encre/80 ${className}`}>
      {items.map((t, i) => (
        <li key={i}>
          <Accentue>{t}</Accentue>
        </li>
      ))}
    </ul>
  );
}

export function Enveloppe({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
