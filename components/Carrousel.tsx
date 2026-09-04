'use client';

import { useEffect, useState } from 'react';
import { citations } from '@/content/site';

export default function Carrousel() {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const t = setInterval(() => setI((v) => (v + 1) % citations.length), 7000);
    return () => clearInterval(t);
  }, [pause]);

  const c = citations[i];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-trait bg-fond p-8 sm:p-12"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <span className="titre pointer-events-none absolute -left-2 -top-8 select-none text-[9rem] leading-none text-orange/20">
        “
      </span>

      <blockquote aria-live="polite" className="relative min-h-[9rem]">
        <p className="titre text-2xl leading-tight text-encre sm:text-3xl">{c.texte}</p>
        <footer className="mt-5 text-sm text-encre2">
          <span className="font-semibold text-orange-lien">{c.auteur}</span> · {c.source}
        </footer>
      </blockquote>

      <div className="mt-8 flex items-center gap-3">
        {citations.map((_, n) => (
          <button
            key={n}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Citation ${n + 1} sur ${citations.length}`}
            aria-current={n === i}
            className={`h-2 rounded-full transition-all ${
              n === i ? 'w-8 bg-orange-fonce' : 'w-2 bg-trait hover:bg-encre2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
