/**
 * Chiffres de la mobilisation, relevés sur `26septembre.org/api/compteur`
 * par `scripts/maj-chiffres.mjs` avant chaque build (voir l'en-tête du script
 * pour la raison : leur API n'envoie pas d'en-tête CORS).
 *
 * Pour rafraîchir les chiffres du site, il suffit de redéployer : relancer le
 * workflow GitHub Actions à la main (`workflow_dispatch`) ou laisser tourner la
 * reconstruction quotidienne planifiée dans `.github/workflows/deploy.yml`.
 */

import brut from '@/content/chiffres.json';

export type Chiffres = {
  signataires: number;
  organisations: number;
  objectif: number;
  releveLe: string;
  source: string;
};

export const chiffresMobilisation: Chiffres = brut;

/** Date du relevé, en toutes lettres — pour l'afficher sous le compteur. */
export function dateDuReleve(c: Chiffres = chiffresMobilisation): string {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(c.releveLe)
  );
}
