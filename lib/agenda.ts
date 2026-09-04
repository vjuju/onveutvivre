/**
 * Génération de fichiers .ics pour « Ajoutez cette marche à votre agenda ».
 *
 * Les heures saisies dans `content/mobilisations.ts` sont locales (Europe/Paris).
 * Le 26 septembre 2026, Paris est en heure d'été : UTC+2. On convertit donc en
 * UTC plutôt que d'émettre un TZID sans bloc VTIMEZONE, que plusieurs agendas
 * interprètent mal.
 */

const DECALAGE_PARIS_SEPTEMBRE = 2; // CEST
const JOUR = { annee: 2026, mois: 9, jour: 26 };
const DUREE_HEURES = 3;

/** « 14h00 », « 14 h 30 », « 14:00 » → { h, m }. Par défaut 14h00. */
export function lireHeure(txt: string | undefined): { h: number; m: number } {
  if (!txt) return { h: 14, m: 0 };
  const m = txt.match(/(\d{1,2})\s*[h:]\s*(\d{2})?/i);
  if (!m) return { h: 14, m: 0 };
  return { h: Math.min(23, parseInt(m[1], 10)), m: m[2] ? parseInt(m[2], 10) : 0 };
}

function versUtc(h: number, min: number, ajoutHeures = 0) {
  const d = new Date(
    Date.UTC(JOUR.annee, JOUR.mois - 1, JOUR.jour, h - DECALAGE_PARIS_SEPTEMBRE + ajoutHeures, min)
  );
  const p = (n: number) => String(n).padStart(2, '0');
  return (
    `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}` +
    `T${p(d.getUTCHours())}${p(d.getUTCMinutes())}00Z`
  );
}

/** Échappe les caractères réservés du format iCalendar. */
function esc(s: string) {
  return s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

/** Replie les lignes à 75 octets, comme l'exige la RFC 5545. */
function plier(ligne: string) {
  if (ligne.length <= 75) return ligne;
  const morceaux = [ligne.slice(0, 75)];
  let reste = ligne.slice(75);
  while (reste.length > 74) {
    morceaux.push(' ' + reste.slice(0, 74));
    reste = reste.slice(74);
  }
  if (reste) morceaux.push(' ' + reste);
  return morceaux.join('\r\n');
}

export type EvenementMarche = {
  titre: string;
  lieu?: string;
  heure?: string;
  description?: string;
};

export function construireIcs({ titre, lieu, heure, description }: EvenementMarche): string {
  const { h, m } = lireHeure(heure);
  const uid = `${JOUR.annee}${JOUR.mois}${JOUR.jour}-${(lieu || titre)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 40)}@onveutvivre.fr`;

  const lignes = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//On veut vivre//Marche du 26 septembre 2026//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${versUtc(h, m)}`,
    `DTSTART:${versUtc(h, m)}`,
    `DTEND:${versUtc(h, m, DUREE_HEURES)}`,
    `SUMMARY:${esc(titre)}`,
    lieu ? `LOCATION:${esc(lieu)}` : '',
    `DESCRIPTION:${esc(
      description ||
        "Marche nationale pour le climat, le vivant, la paix et la justice sociale. Toutes les informations sur onveutvivre.fr"
    )}`,
    'URL:https://onveutvivre.fr',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);

  return lignes.map(plier).join('\r\n') + '\r\n';
}

/** Déclenche le téléchargement du .ics dans le navigateur. */
export function telechargerIcs(evenement: EvenementMarche, nomFichier = 'marche-26-septembre.ics') {
  const blob = new Blob([construireIcs(evenement)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nomFichier;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
