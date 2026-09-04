'use client';

import { useState } from 'react';
import { liens, formulaire } from '@/content/site';

/**
 * Formulaire de signature de l'appel.
 *
 * Les noms de champs reproduisent exactement ceux attendus par
 * `POST https://26septembre.org/api/signer` (relevés sur leur formulaire) :
 * site_web (piège à robots), type_signataire, organisation_nom, prenom, nom,
 * email, code_postal, telephone, organisation, fonction, signature_publique,
 * recontact, newsletter_bca.
 *
 * Deux modes, pilotés par `formulaire.envoiDirect` dans content/site.ts :
 *
 *  - false (défaut) — le bouton renvoie vers le formulaire de 26septembre.org.
 *    Rien n'est envoyé depuis ici.
 *  - true — soumission classique du formulaire vers leur endpoint. Une
 *    soumission de formulaire inter-domaines n'est pas soumise au CORS, donc
 *    cela fonctionne techniquement — mais le navigateur quitte onveutvivre.fr
 *    pour atterrir sur leur réponse, et surtout cela écrit dans LEUR base.
 *    À n'activer qu'avec leur accord explicite (voir CLAUDE.md).
 */

type Onglet = 'individu' | 'organisation';

export default function Formulaire() {
  const [onglet, setOnglet] = useState<Onglet>('individu');
  const [orgaOuverte, setOrgaOuverte] = useState(false);
  const direct = formulaire.envoiDirect;

  const champ =
    'w-full rounded-lg border border-trait bg-champ px-4 py-3 text-encre placeholder:text-encre2/70 focus:border-orange-lien focus:outline-none';
  const etiquette = 'mb-1.5 block text-xs font-bold uppercase tracking-wide text-encre2';

  return (
    <form
      action={direct ? formulaire.endpoint : undefined}
      method={direct ? 'post' : undefined}
      onSubmit={
        direct
          ? undefined
          : (e) => {
              e.preventDefault();
              window.open(liens.signer, '_blank', 'noopener,noreferrer');
            }
      }
      className="rounded-2xl border border-trait bg-fond p-6 text-left shadow-lg shadow-encre/[0.06] sm:p-8"
    >
      {/* Piège à robots : invisible pour les humains, rempli par les scripts. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="site_web">Ne pas remplir</label>
        <input id="site_web" type="text" name="site_web" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Bascule particulier / organisation */}
      <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-champ p-1" role="tablist">
        {(
          [
            ['individu', 'Je signe'],
            ['organisation', 'Je signe pour une organisation'],
          ] as const
        ).map(([cle, libelle]) => (
          <button
            key={cle}
            type="button"
            role="tab"
            aria-selected={onglet === cle}
            onClick={() => setOnglet(cle)}
            className={`rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wide transition ${
              onglet === cle ? 'bg-encre text-fond' : 'text-encre2 hover:text-encre'
            }`}
          >
            {libelle}
          </button>
        ))}
      </div>

      <input type="hidden" name="type_signataire" value={onglet} />

      {onglet === 'organisation' && (
        <div className="mb-4">
          <label className={etiquette} htmlFor="organisation_nom">
            Nom de l&apos;organisation
          </label>
          <input
            id="organisation_nom"
            name="organisation_nom"
            type="text"
            required
            placeholder="Association, syndicat, collectif…"
            className={champ}
          />
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={etiquette} htmlFor="prenom">
            Prénom
          </label>
          <input id="prenom" name="prenom" type="text" required placeholder="Camille" className={champ} />
        </div>
        <div>
          <label className={etiquette} htmlFor="nom">
            Nom
          </label>
          <input id="nom" name="nom" type="text" required placeholder="Dupont" className={champ} />
        </div>
      </div>

      <div className="mt-4">
        <label className={etiquette} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="camille@exemple.fr"
          className={champ}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={etiquette} htmlFor="code_postal">
            Code postal
          </label>
          <input
            id="code_postal"
            name="code_postal"
            type="text"
            required
            inputMode="numeric"
            pattern="[0-9]{5}"
            placeholder="75011"
            className={champ}
          />
        </div>
        <div>
          <label className={etiquette} htmlFor="telephone">
            Téléphone <span className="font-normal normal-case">— facultatif</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="06 12 34 56 78"
            className={champ}
          />
        </div>
      </div>

      {onglet === 'individu' && (
        <div className="mt-4">
          <label className={etiquette} htmlFor="organisation">
            Organisation / engagement <span className="font-normal normal-case">— facultatif</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Association, syndicat, collectif…"
            className={champ}
            onChange={(e) => setOrgaOuverte(e.target.value.trim().length > 0)}
          />
        </div>
      )}

      {(onglet === 'organisation' || orgaOuverte) && (
        <div className="mt-4">
          <label className={etiquette} htmlFor="fonction">
            Fonction dans l&apos;organisation <span className="font-normal normal-case">— facultatif</span>
          </label>
          <input
            id="fonction"
            name="fonction"
            type="text"
            placeholder="Présidente, secrétaire général, porte-parole…"
            className={champ}
          />
        </div>
      )}

      <div className="mt-6 space-y-3">
        {[
          ['signature_publique', "J'accepte que ma signature soit rendue publique."],
          ['recontact', "J'accepte d'être recontacté·e pour les suites de la mobilisation."],
          [
            'newsletter_bca',
            "J'accepte de m'inscrire à la newsletter. (Désinscription possible à tout moment.)",
          ],
        ].map(([nom, texte]) => (
          <label
            key={nom}
            className="flex cursor-pointer items-start gap-3 rounded-lg border border-trait bg-fond2 p-3 text-sm text-encre/85 transition hover:border-encre2/40"
          >
            <input
              type="checkbox"
              name={nom}
              className="mt-0.5 h-4 w-4 shrink-0 accent-orange-fonce"
            />
            <span>{texte}</span>
          </label>
        ))}
      </div>

      <button type="submit" className="bouton-primaire mt-6 w-full">
        ✍ Je signe l&apos;appel
      </button>

      <p className="mt-4 text-xs leading-relaxed text-encre2">
        {direct ? (
          <>
            Vos données sont hébergées en Europe et ne sont jamais cédées à des tiers. Voir la{' '}
            <a href="/confidentialite/" className="lien-souligne">
              politique de confidentialité
            </a>
            .
          </>
        ) : (
          <>
            La signature se fait sur 26septembre.org, qui tient le registre des signataires — le
            bouton vous y emmène. Voir la{' '}
            <a href="/confidentialite/" className="lien-souligne">
              politique de confidentialité
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
