'use client';

import { useMemo, useState } from 'react';
import { mobilisations } from '@/content/mobilisations';
import { liens } from '@/content/site';
import BoutonAgenda from './BoutonAgenda';

export default function Carte() {
  const [q, setQ] = useState('');

  const departements = useMemo(() => new Set(mobilisations.map((m) => m.departement)), []);

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
        <p className="text-lg text-encre">
          <span className="titre text-2xl text-orange-lien">{mobilisations.length}</span> mobilisation
          {mobilisations.length > 1 ? 's' : ''} déclarée{mobilisations.length > 1 ? 's' : ''} dans{' '}
          <span className="titre text-2xl text-orange-lien">{departements.size}</span> département
          {departements.size > 1 ? 's' : ''}.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <BoutonAgenda
            evenement={{
              titre: 'Marche du 26 septembre — On veut vivre',
              lieu: 'Partout en France',
              heure: '14h00',
            }}
          >
            Ne pas la louper
          </BoutonAgenda>
          <a
            href={liens.declarerMobilisation}
            target="_blank"
            rel="noopener noreferrer"
            className="bouton-primaire"
          >
            Déclarer ma mobilisation
          </a>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        {/* Colonne recherche */}
        <div className="carte flex flex-col">
          <label
            htmlFor="recherche-marche"
            className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-lien"
          >
            Trouver ma marche
          </label>
          <input
            id="recherche-marche"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ville ou code postal"
            className="w-full rounded-lg border border-trait bg-champ px-4 py-3 text-encre placeholder:text-encre2/80 focus:border-orange-lien focus:outline-none"
          />

          <div className="mt-5 max-h-[26rem] space-y-3 overflow-y-auto pr-1">
            {vide && (
              <p className="text-sm leading-relaxed text-encre2">
                Le recensement des marches est en cours. Les points de rendez-vous s&apos;afficheront
                ici au fur et à mesure des déclarations. En attendant, rejoignez la boucle Telegram
                pour trouver ou lancer la marche près de chez vous.
              </p>
            )}

            {!vide && resultats.length === 0 && (
              <p className="text-sm text-encre2">
                Aucune marche trouvée pour « {q} ». Vous pouvez en lancer une :{' '}
                <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="lien-souligne">
                  rejoignez le Telegram
                </a>
                .
              </p>
            )}

            {resultats.map((m) => (
              <article
                key={`${m.codePostal}-${m.ville}-${m.lieu}`}
                className="rounded-lg border border-trait bg-fond p-4"
              >
                <h3 className="titre text-lg text-encre">
                  {m.ville} <span className="text-encre2">({m.departement})</span>
                </h3>
                <p className="mt-1 text-sm text-encre/80">{m.lieu}</p>
                <p className="text-sm font-semibold text-orange-lien">{m.heure}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <BoutonAgenda
                    variante="discret"
                    evenement={{
                      titre: `Marche du 26 septembre — ${m.ville}`,
                      lieu: `${m.lieu}, ${m.codePostal} ${m.ville}`,
                      heure: m.heure,
                    }}
                    nomFichier={`marche-26-septembre-${m.ville.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`}
                  >
                    Ajouter à mon agenda
                  </BoutonAgenda>
                  {m.boucle && (
                    <a
                      href={m.boucle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lien-souligne text-sm"
                    >
                      Boucle locale
                    </a>
                  )}
                </div>
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
        <div className="relative flex min-h-[26rem] items-center justify-center overflow-hidden rounded-2xl border border-trait bg-fond2">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'linear-gradient(#EE7D3A 1px, transparent 1px), linear-gradient(90deg, #EE7D3A 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-sm px-6 py-12 text-center">
            <p className="titre text-3xl text-encre">Partout en France</p>
            <p className="mt-4 text-sm leading-relaxed text-encre2">
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
