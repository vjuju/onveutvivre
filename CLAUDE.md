# onveutvivre.fr

Site de l'appel à mobilisation nationale du **samedi 26 septembre 2026**.
Refonte simplifiée de `26septembre.org`.

## Infrastructure

| Élément | Valeur |
|---|---|
| Registrar du domaine | **Infomaniak** |
| DNS | **Cloudflare** (zone `onveutvivre.fr`) |
| Hébergement | **Cloudflare Pages**, projet `onveutvivre` |
| Dépôt | GitHub `Vjuju/onveutvivre`, branche `main` |
| CI | GitHub Actions → `cloudflare/wrangler-action@v3` |

### ⚠️ Ne jamais supprimer les enregistrements mail de la zone Cloudflare

La messagerie du domaine reste chez Infomaniak. Les enregistrements suivants
doivent rester **non proxifiés** et intacts, sous peine de couper les mails :

- `MX` de l'apex → `mta-gw.infomaniak.ch`
- `TXT` SPF de l'apex → `v=spf1 include:spf.infomaniak.ch -all`
- `TXT` `_dmarc`
- `NS` sur `_domainkey` → `ns11.infomaniak.ch` / `ns12.infomaniak.ch` (DKIM délégué en sous-zone)
- `CNAME` `autoconfig` et `autodiscover` → `infomaniak.com`

Seuls les `CNAME` de l'apex et de `www` vers `onveutvivre.pages.dev` sont proxifiés.

## Stack

- Next.js 14, `output: 'export'` (site 100 % statique, aucun serveur)
- Tailwind CSS 3
- TypeScript
- Polices **auto-hébergées** dans `public/fonts` (Rubik + Rubik Dirt, SIL OFL,
  sous-ensemble latin/français en woff2). Aucun appel à Google Fonts : c'est
  volontaire, pour ne pas exposer les IP des visiteurs à un tiers.

## Commandes

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # génère out/
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un texte, un chiffre, une date, un lien | `content/site.ts` |
| Le nombre de signataires affiché | `content/site.ts` → `compteur` |
| Les marches affichées sur la carte | `content/mobilisations.ts` |
| Les couleurs, la typo | `tailwind.config.ts` + `app/globals.css` |
| Le logo | `components/Logo.tsx` (CSS) et `public/logos/` (PNG/SVG) |
| Le menu ou le pied-de-page | `components/Header.tsx` / `components/Footer.tsx` |

Le contenu éditorial est centralisé dans `content/site.ts` : on ne devrait
presque jamais avoir à toucher aux composants pour une mise à jour de texte.

## Charte

| Jeton | Valeur | Usage |
|---|---|---|
| `fond` | `#FFFCF5` | fond général |
| `fond2` | `#FAF4E9` | cartes, blocs, bandeaux alternés |
| `champ` | `#F0E8D6` | champs de formulaire |
| `encre` | `#19120B` | textes |
| `encre2` | `#6E6154` | textes secondaires |
| `trait` | `#E6DCC9` | filets, bordures |
| `orange` | `#FF751F` | **aplats** — pastilles, logo, **fond des boutons** |
| `orange-fonce` | `#E35F0D` | survol des boutons |
| `orange-lien` | `#A8480F` | liens et petits textes (5,7:1 sur le crème) |

Toutes ces valeurs sont **relevées au pixel sur les fichiers du logo**.

L'orange ne monte qu'à **2,4:1** en texte sur le crème : il est illisible ainsi.
Les boutons l'utilisent donc en **aplat, avec du texte encre** — 6,9:1, très
au-dessus du minimum ; du texte crème dessus tomberait à 2,6:1. Pour les liens
et les petits textes accentués, `orange-lien` prend le relais.

Accents du logo : vert `#7ED957`, rouge `#FF3131`, bleu `#38B6FF` — en aplat
seulement, chacun avec sa variante `-texte` assombrie.

Un titre « accentué » se fait avec la **pastille** (aplat orange + texte crème),
jamais avec du texte orange — c'est le procédé de la marque elle-même.

### Typographies

- **Titres : Rubik Mono One** (SIL OFL), dans `public/fonts/titres.woff2`.
  C'est une grasse **très large** : un titre y tient nettement moins de
  caractères par ligne qu'ailleurs. D'où, dans `globals.css`, un interlettrage
  négatif (`-0.03em`) et des tailles volontairement contenues — un cran plus bas
  que ce qu'on mettrait avec une police d'affiche ordinaire. Avant d'agrandir un
  titre, vérifier les plus longs (« Pour payer ces trois plans… », les intitulés
  du pied-de-page).
- **Texte : Poppins** (SIL OFL), en 400/500/600/700.

Pour changer la police des titres : déposer le woff2 sous `public/fonts/titres.woff2`
et reprendre les tailles. Rien d'autre à toucher — le logo est une image, il ne
dépend plus de la police.

Les deux sont **auto-hébergées** dans `public/fonts` : aucun appel à Google
Fonts, donc aucune IP de visiteur envoyée à un tiers.

### Le logo

Ce sont les **fichiers officiels** fournis par l'équipe, dans `public/logos/`.
Le logo n'est plus reconstruit en CSS : `components/Logo.tsx` affiche l'image.

Chaque logo existe en deux tailles : `<nom>-web.png` (760 px de côté max,
affiché sur le site) et `<nom>.png` (1600 px, proposé au téléchargement sur
`/kits`). Tous ont un **fond transparent** — le blanc d'origine a été détouré
depuis les bords, ce qui préserve la réserve blanche du mot VIVRE.

Le **favicon** (`public/favicon.ico`, `favicon.png`, `icone-192.png`,
`icone-180.png`) est le bloc ON VEUT VIVRE sur fond blanc, recadré avec une
marge régulière. À 16 px il se lit comme une tache orange plus que comme un
mot : c'est le prix d'un logo à trois lignes dans un onglet.

Quatre variantes exposées par le composant :

| `variante` | Fichier | Usage |
|---|---|---|
| `complet` | `ovv-complet-couleur` | bandeau d'appel |
| `principal` | `ovv-orange` | usage courant |
| `horizontal` | `ovv-horizontal` | entête, pied-de-page |
| `vivre` | `ovv-vivre` | pastille seule, favicon |

Ne jamais déformer ni recolorier le logo : utiliser la variante prévue pour le
fond. Les déclinaisons rouge, verte, bleue et monochrome sont dans le même
dossier.

### Accentuations dans les textes

Les textes de `content/site.ts` acceptent `**du gras**`. Le rendu passe par
`components/RichText.tsx` (`<Accentue>`, `<Paragraphe>`, `<Liste>`). C'est
volontairement minimal : juste ce qu'il faut pour qu'un texte long reste lisible
en diagonale, sans embarquer un moteur Markdown.

## Architecture des pages

La page d'accueil **s'arrête à la carte des mobilisations**. Le reste vit dans de
vraies pages, avec de vraies URLs pour la navigation :

| URL | Contenu |
|---|---|
| `/` | lockup + compteur, formulaire de signature, carte |
| `/appel/` | pourquoi maintenant, chiffres clés, citations, texte intégral |
| `/nos-trois-plans/` | les trois plans et leur financement |
| `/agir/` | les trois façons d'agir, en faire plus, qui sommes-nous |
| `/actualites/` | le calendrier des rendez-vous |
| `/kits/` | affiches et flyers, logos, charte |
| `/signataires/` | compteur, organisations, témoignages |

## Ce qu'on a relevé de 26septembre.org (4 sept. 2026)

Leur site est un **Astro en SSR** derrière leur propre domaine. Supabase est
appelé **côté serveur uniquement** : aucune clé Supabase ne circule dans le
navigateur, et il n'y a rien à « brancher » côté client.

| Ce qu'ils exposent | Forme |
|---|---|
| `GET /api/compteur` | `{ signataires, organisations, objectif }` |
| `POST /api/signer` | soumission du formulaire de signature |
| `/carte` | marqueurs **rendus dans le HTML**, pas d'API |

**Aucun de ces endpoints n'envoie d'en-tête CORS.** Vérifié depuis
`https://onveutvivre.fr` : `fetch()` échoue en `TypeError: Failed to fetch` sur
les trois. Rien ne peut donc être consommé depuis le navigateur d'un visiteur.

### Ce qu'on en fait

- **Compteur** : relevé **à la construction** par `scripts/maj-chiffres.mjs`
  (le CORS ne s'applique pas au serveur), figé dans `content/chiffres.json`.
  Redéployer suffit à rafraîchir les chiffres. Aucun visiteur ne tape sur leur
  serveur.
- **Formulaire** : `components/Formulaire.tsx` reproduit **exactement** leurs
  noms de champs, piège à robots `site_web` compris. Piloté par
  `formulaire.envoiDirect` dans `content/site.ts` :
  - `false` (défaut) — renvoie vers leur formulaire, rien n'est écrit d'ici ;
  - `true` — soumission classique vers `POST /api/signer`. Techniquement
    possible sans CORS (une soumission de formulaire inter-domaines n'y est pas
    soumise), **mais cela écrit dans leur base** et fait quitter notre domaine
    au visiteur. À n'activer qu'avec leur accord explicite.
- **Carte** : leurs données ne sont exposées nulle part en JSON. On n'aspire pas
  leur HTML — c'est fragile et ce n'est pas à nous de dupliquer leur base.
  `components/Carte.tsx` lit `content/mobilisations.ts` et attend soit ce
  fichier rempli, soit un endpoint de leur part (voir `docs/endpoint-carte.md`).

## Points d'attention

- `public/_redirects` ne fait **pas** de correspondance sur le nom d'hôte chez
  Cloudflare Pages : une ligne `https://www.…/*` y est acceptée sans erreur et ne
  s'applique jamais. Ce fichier ne sert qu'aux redirections de **chemin**.
- La redirection `www` → apex est une **Page Rule** Cloudflare
  (`www.onveutvivre.fr/*` → 301 `https://onveutvivre.fr/$1`), et non un Single
  Redirect. Raison : le phase ruleset `http_request_dynamic_redirect` exige la
  permission de token « Zone · Dynamic Redirect », distincte de « Zone · Config
  Rules » ; les Page Rules passent avec les permissions déjà en place et rendent
  le même service. À reprendre en Single Redirect le jour où la permission est
  ajoutée — les Page Rules sont une fonctionnalité en fin de vie chez Cloudflare.
- Les pages `mentions-legales` et `confidentialite` contiennent des encadrés
  « à compléter » : identité juridique de la structure éditrice et responsable de
  traitement. À renseigner avant toute communication large.
- Le formulaire de signature pointe pour l'instant vers `26septembre.org` afin de
  ne pas dupliquer la base de signataires (`liens.signer` dans `content/site.ts`).
