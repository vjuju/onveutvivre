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
| `encre` | `#19120B` | textes, **et fond du bandeau d'appel** |
| `encre2` | `#6E6154` | textes secondaires |
| `trait` | `#E6DCC9` | filets, bordures |
| `orange` | `#EE7D3A` | aplats, pastilles, logo |
| `orange-fonce` | `#D5702E` | fond des boutons |
| `orange-lien` | `#B0521C` | liens et petits textes accentués |

Accents : vert `#6BC24A`, bleu `#4BA9F0`, rouge `#EE3B3B` — en **aplat** uniquement.
Pour du texte, utiliser les variantes sourdes `vert-texte`, `bleu-texte`, `rouge-texte` :
les vives ne passent pas le contraste AA sur fond clair.

Même logique pour l'orange : `#EE7D3A` ne descend qu'à 2,7:1 sur le crème. Un titre
« accentué » se fait donc avec la **pastille** (aplat orange + texte crème), pas avec
du texte orange — c'est le procédé de la marque elle-même.

Le seul bandeau sur fond sombre est le **bandeau d'appel** (`bg-encre`), conformément
à la ligne « textes, fond du bandeau d'appel » du brief.

### Le logo

Titres en **Rubik Dirt**, capitales, via la classe `.titre`.

Règle de construction du logo : **chaque mot occupe exactement la même largeur**.
C'est la taille du mot qui varie selon son nombre de lettres, jamais sa proportion —
on ne déforme jamais horizontalement. Les coefficients sont dans `globals.css`
(`.mot-*`) et se calculent ainsi : `taille = largeur_du_bloc ÷ chasse_du_mot_à_1em`.
Si un mot change, recalculer sa chasse dans Rubik Dirt plutôt que d'ajuster à l'œil.

Deux variantes, dans `components/Logo.tsx` :
- `complet` — six lignes, avec canicules / incendies / empoisonnements ;
- `compact` — ON / VEUT / [VIVRE], pour l'entête et le pied-de-page.

## Points d'attention

- `public/_redirects` ne fait **pas** de correspondance sur le nom d'hôte chez
  Cloudflare Pages. La redirection `www` → apex se fait par un **Single Redirect**
  dans la zone Cloudflare, pas dans ce fichier.
- Les pages `mentions-legales` et `confidentialite` contiennent des encadrés
  « à compléter » : identité juridique de la structure éditrice et responsable de
  traitement. À renseigner avant toute communication large.
- Le formulaire de signature pointe pour l'instant vers `26septembre.org` afin de
  ne pas dupliquer la base de signataires (`liens.signer` dans `content/site.ts`).
