'use client';

import { useState } from 'react';
import { appel } from '@/content/site';

export default function Appel() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-expanded={ouvert}
        aria-controls="texte-appel"
        className="group flex w-full items-center justify-between gap-4 rounded-xl border border-bordure bg-ardoise px-5 py-4 text-left transition hover:border-orange"
      >
        <span className="titre text-lg text-orange sm:text-xl">✍ Lire l&apos;appel #OnVeutVivre</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          aria-hidden
          className={`shrink-0 text-orange transition ${ouvert ? 'rotate-180' : ''}`}
        >
          <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {ouvert && (
        <div
          id="texte-appel"
          className="prose-oep animate-apparition mt-4 max-h-[65vh] overflow-y-auto rounded-xl border border-bordure bg-charbon p-6 text-sm sm:p-8 sm:text-base"
        >
          <p className="titre text-lg text-creme">{appel.ouverture}</p>
          {appel.paragraphes.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul>
            {appel.savaient.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h3>{appel.mobilises.titre}</h3>
          {appel.mobilises.paragraphes.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {appel.exigences.map((e) => (
            <div key={e.titre}>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
            </div>
          ))}

          <h3>{appel.financement.titre}</h3>
          <p>{appel.financement.intro}</p>
          <ul>
            {appel.financement.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p>{appel.financement.conclusion}</p>

          <h3>{appel.final.titre}</h3>
          {appel.final.paragraphes.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}
