/**
 * Logos des réseaux sociaux, en SVG inline.
 *
 * Inline plutôt que chargés depuis un CDN d'icônes : aucune requête tierce, donc
 * aucune IP de visiteur envoyée ailleurs — même logique que les polices
 * auto-hébergées. Les tracés reprennent les marques officielles, à l'échelle 24.
 */

type Props = { className?: string };

export function Instagram({ className = 'h-5 w-5' }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.71-2.13 1.38C1.34 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C21.32 1.34 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
      <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      <circle cx="18.41" cy="5.59" r="1.44" />
    </svg>
  );
}

export function Facebook({ className = 'h-5 w-5' }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function Telegram({ className = 'h-5 w-5' }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.23-1.86 8.77c-.14.62-.51.78-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.58.28l.21-2.94 5.35-4.83c.23-.21-.05-.32-.36-.12l-6.61 4.16-2.85-.89c-.62-.19-.63-.62.13-.92l11.13-4.29c.52-.19.97.12.8.91z" />
    </svg>
  );
}

/** Linktree n'a pas de glyphe officiel simple : on utilise son motif d'arbre. */
export function Linktree({ className = 'h-5 w-5' }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d="M10.67 1.67h2.66v5.4l3.82-3.86 1.88 1.9-4.03 3.98h5.53v2.68h-5.55l4.05 4.03-1.88 1.88-5.15-5.19-5.15 5.19-1.88-1.88 4.05-4.03H3.47V9.09H9L4.97 5.11l1.88-1.9 3.82 3.86v-5.4zm0 14.2h2.66v6.46h-2.66v-6.46z" />
    </svg>
  );
}

export const reseaux = [
  { nom: 'Instagram', Icone: Instagram },
  { nom: 'Facebook', Icone: Facebook },
  { nom: 'Telegram', Icone: Telegram },
  { nom: 'Linktree', Icone: Linktree },
] as const;
