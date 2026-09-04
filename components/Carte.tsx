'use client';

import { useMemo, useState } from 'react';
import { mobilisations } from '@/content/mobilisations';
import { liens } from '@/content/site';

export default function Carte() {
  const [q, setQ] = useState('');

  const departements = useMemo(
    () => new Set(mobilisations.map((m) => m.departement)),
    []
  );

  const resultats = useMemo(() => {
    const terme = q.trim().toLowerCase();
    if (!terme) return mobilisations;
    return mobilisations.filter(
      (m) =>
        m.ville.toLowerCase().includes(terme) ||
        m.codePostal.startsWith(terme) ||
        m.departement === terme
    );
  }, [q]);

  const vide = mobilisations.length === 0;

  return (
    <div>
      {/* Compteur + déclaration */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg text-creme">
          <span className="titre text-2xl text-orange">{mobilisations.length}</span> mobilisation
          {mobilisations.length > 1 ? 's' : ''} déclarée{mobilisations.length > 1 ? 's' : ''} dans{' '}
          <span className="titre text-2xl text-orange">{departements.size}</span> département
          {departements.size > 1 ? 's' : ''}.
        </p>
        <a
          href={liens.declarerMobilisation}
          target="_blank"
          rel="noopener noreferrer"
          className="bouton-primaire shrink-0"
        >
          Déclarer ma mobilisation
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        {/* Colonne recherche */}
        <div className="carte flex flex-col bg-charbon">
          <label htmlFor="recherche-marche" className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-orange">
            Trouver ma marche
          </label>
          <input
            id="recherche-marche"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ville ou code postal"
            className="w-full rounded-lg border border-bordure bg-champ px-4 py-3 text-creme placeholder:text-cremeSourde/70 focus:border-orange focus:outline-none"
          />

          <div className="mt-5 max-h-[26rem] space-y-3 overflow-y-auto pr-1">
            {vide && (
              <p className="text-sm leading-relaxed text-cremeSourde">
                Le recensement des marches est en cours. Les points de rendez-vous s&apos;afficheront
                ici au fur et à mesure des déclarations. En attendant, rejoignez la boucle Telegram
                pour trouver ou lancer la marche près de chez vous.
              </p>
            )}

            {!vide && resultats.length === 0 && (
              <p className="text-sm text-cremeSourde">
                Aucune marche trouvée pour « {q} ». Vous pouvez en lancer une :{' '}
                <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="lien-souligne">
                  rejoignez le Telegram
                </a>
                .
              </p>
            )}

            {resultats.map((m) => (
              <article key={`${m.codePostal}-${m.ville}-${m.lieu}`} className="rounded-lg border border-bordure bg-ardoise p-4">
                <h3 className="titre text-lg text-creme">
                  {m.ville} <span className="text-cremeSourde">({m.departement})</span>
                </h3>
                <p className="mt-1 text-sm text-creme/80">{m.lieu}</p>
                <p className="text-sm text-orange">{m.heure}</p>
                {m.boucle && (
                  <a href={m.boucle} target="_blank" rel="noopener noreferrer" className="lien-souligne mt-2 inline-block text-sm">
                    Boucle locale
                  </a>
                )}
              </article>
            ))}
          </div>

          {vide && (
            <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="bouton-secondaire mt-5 w-full">
              Rejoindre la boucle Telegram
            </a>
          )}
        </div>

        {/* Zone carte */}
        <div className="carte relative flex min-h-[26rem] items-center justify-center overflow-hidden bg-charbon p-0">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#EE7D3A 1px, transparent 1px), linear-gradient(90deg, #EE7D3A 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-sm px-6 py-12 text-center">
            <p className="titre text-3xl text-orange">Partout en France</p>
            <p className="mt-4 text-sm leading-relaxed text-cremeSourde">
              Dans les métropoles et dans les bourgs de mille habitants, dans les centres-villes et
              dans les quartiers. La carte interactive des points de rendez-vous s&apos;affiche ici
              dès que le recensement est publié.
            </p>
            <a
              href={liens.carteExterne}
              target="_blank"
              rel="noopener noreferrer"
              className="bouton-secondaire mt-6"
            >
              Voir la carte actuelle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
