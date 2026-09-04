#!/usr/bin/env node
/**
 * Rafraîchit `content/chiffres.json` avant chaque build.
 *
 * 26septembre.org expose `GET /api/compteur` mais **sans en-tête CORS** : le
 * navigateur d'un visiteur d'onveutvivre.fr ne peut pas l'appeler (vérifié :
 * `TypeError: Failed to fetch`). On le lit donc ici, côté serveur, où le CORS
 * ne s'applique pas, et on fige le résultat dans le HTML statique.
 *
 * Ce script tourne en `prebuild`, hors du cycle de rendu de Next : pas de
 * sémantique de cache à contourner, et un échec réseau ne casse jamais le build
 * — on garde simplement les chiffres du déploiement précédent.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ICI = dirname(fileURLToPath(import.meta.url));
const CIBLE = join(ICI, '..', 'content', 'chiffres.json');
const SOURCE = 'https://26septembre.org/api/compteur';

const entierValide = (v) => typeof v === 'number' && Number.isFinite(v) && v > 0;

async function precedent() {
  try {
    return JSON.parse(await readFile(CIBLE, 'utf8'));
  } catch {
    return null;
  }
}

const anterieur = await precedent();

try {
  const r = await fetch(SOURCE, {
    headers: { accept: 'application/json' },
    signal: AbortSignal.timeout(10000),
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);

  const d = await r.json();
  if (!entierValide(d.signataires) || !entierValide(d.objectif)) {
    throw new Error(`réponse inattendue : ${JSON.stringify(d).slice(0, 120)}`);
  }

  const chiffres = {
    signataires: Math.round(d.signataires),
    organisations: entierValide(d.organisations)
      ? Math.round(d.organisations)
      : (anterieur?.organisations ?? 0),
    objectif: Math.round(d.objectif),
    releveLe: new Date().toISOString(),
    source: SOURCE,
  };

  await writeFile(CIBLE, JSON.stringify(chiffres, null, 2) + '\n');
  console.log(
    `chiffres : ${chiffres.signataires} signataires, ${chiffres.organisations} organisations` +
      (anterieur ? ` (précédemment ${anterieur.signataires})` : '')
  );
} catch (e) {
  if (anterieur) {
    console.warn(`chiffres : relevé impossible (${e.message}) — on garde ceux du dernier build.`);
  } else {
    console.error(`chiffres : relevé impossible (${e.message}) et aucun relevé antérieur.`);
    process.exitCode = 1;
  }
}
