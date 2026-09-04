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
        className="group flex w-full items-center justify-between gap-4 rounded-xl border border-trait bg-fond px-5 py-4 text-left transition hover:border-orange"
      >
        <span className="titre text-lg text-orange-lien sm:text-xl">✍ Lire l&apos;appel #OnVeutVivre</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          aria-hidden
          className={`shrink-0 text-orange-lien transition ${ouvert ? 'rotate-180' : ''}`}
        >
          <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {ouvert && (
        <div
          id="texte-appel"
          className="animate-apparition mt-4 max-h-[65vh] overflow-y-auto rounded-xl border border-trait bg-fond p-6 text-left text-sm text-encre/85 sm:p-8 sm:text-base"
        >
          <p className="titre text-lg text-encre">{appel.ouverture}</p>
          {appel.paragraphes.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed">
              {p}
            </p>
          ))}

          <ul className="mt-4 list-disc space-y-2 pl-5">
            {appel.savaient.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h3 className="titre mb-3 mt-8 text-xl text-orange-lien">{appel.mobilises.titre}</h3>
          {appel.mobilises.paragraphes.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed">
              {p}
            </p>
          ))}

          {appel.exigences.map((e) => (
            <div key={e.titre}>
              <h3 className="titre mb-3 mt-8 text-xl text-orange-lien">{e.titre}</h3>
              <p className="leading-relaxed">{e.texte}</p>
            </div>
          ))}

          <h3 className="titre mb-3 mt-8 text-xl text-orange-lien">{appel.financement.titre}</h3>
          <p className="leading-relaxed">{appel.financement.intro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {appel.financement.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed">{appel.financement.conclusion}</p>

          <h3 className="titre mb-3 mt-8 text-xl text-orange-lien">{appel.final.titre}</h3>
          {appel.final.paragraphes.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
