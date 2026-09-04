# Ce qu'il faut demander à l'équipe 26septembre

Pour qu'onveutvivre.fr affiche la carte et le compteur comme leur site, il manque
**une seule chose** : un endpoint JSON en lecture, avec un en-tête CORS.

Le reste est déjà en place de notre côté.

---

## Pourquoi c'est nécessaire

Leur site est un Astro en SSR. Supabase n'est appelé que côté serveur — il n'y a
donc aucune clé à partager, et rien à ouvrir côté base. En revanche, leurs deux
routes publiques (`/api/compteur` et `/api/signer`) **n'envoient pas d'en-tête
CORS**, et les marqueurs de `/carte` sont rendus directement dans le HTML sans
API derrière.

Résultat, mesuré depuis `https://onveutvivre.fr` :

```js
await fetch('https://26septembre.org/api/compteur')
// TypeError: Failed to fetch
```

Le compteur, on s'en sort : on le relève **à la construction du site**, côté
serveur, où le CORS ne s'applique pas. Les chiffres sont figés dans le HTML à
chaque déploiement, et aucun visiteur ne tape sur leur serveur.

La carte, non : il n'existe aucune source de données à lire.

---

## Ce qu'il y a à faire, côté 26septembre

### 1. Une route `/api/carte`

Un fichier `src/pages/api/carte.ts` dans leur projet Astro. Ils ont déjà la
requête Supabase — c'est celle qui alimente `/carte`, à réutiliser telle quelle :

```ts
import type { APIRoute } from 'astro';

const ORIGINES_AUTORISEES = new Set([
  'https://onveutvivre.fr',
  'https://www.onveutvivre.fr',
]);

export const GET: APIRoute = async ({ request }) => {
  const origine = request.headers.get('origin') ?? '';

  // … la même requête Supabase que celle qui alimente /carte …
  const mobilisations = await chargerMobilisations();

  return new Response(JSON.stringify({ mobilisations }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // 10 min de cache : la carte n'a pas besoin d'être à la seconde
      'cache-control': 'public, max-age=600',
      ...(ORIGINES_AUTORISEES.has(origine)
        ? { 'access-control-allow-origin': origine, vary: 'Origin' }
        : {}),
    },
  });
};
```

Une liste blanche d'origines plutôt qu'un `*` : ça reste sous leur contrôle, et
ils peuvent nous retirer d'un mot.

### 2. La forme des données

Ce que la carte d'onveutvivre.fr sait consommer, par mobilisation :

| Champ | Obligatoire | Exemple |
|---|---|---|
| `ville` | oui | `"Rouen"` |
| `code_postal` | oui | `"76000"` |
| `departement` | oui | `"76"` |
| `lat` / `lon` | oui | `49.4432` / `1.0999` |
| `statut` | oui | `"confirmee"` \| `"en_cours"` \| `"a_recenser"` |
| `lieu` | si confirmée | `"Place du Vieux-Marché"` |
| `heure` | si confirmée | `"14h00"` |
| `boucle` | non | lien Telegram du département |

S'ils préfèrent ne pas exposer `lat`/`lon`, on s'en passe : on géocode nous-mêmes
à partir de `ville` + `code_postal` via l'API publique
`adresse.data.gouv.fr`, au moment de la construction du site.

### 3. Le même geste pour `/api/compteur`, si possible

Trois lignes d'en-têtes sur la route qui existe déjà. Ça nous permettrait
d'afficher les chiffres **en direct** plutôt qu'à la date du dernier
déploiement. Ce n'est pas bloquant — c'est du confort.

---

## Le formulaire : une question à trancher, pas un réglage

Techniquement, une soumission de formulaire inter-domaines n'est pas soumise au
CORS : `components/Formulaire.tsx` reproduit déjà exactement leurs noms de champs
et peut poster vers `https://26septembre.org/api/signer` en changeant un booléen
(`formulaire.envoiDirect` dans `content/site.ts`).

Mais ça écrit dans **leur** base, depuis un domaine qu'ils ne contrôlent pas.
Trois points à régler avec eux avant de basculer le booléen :

1. **Une colonne `source`**, pour distinguer les signatures venues
   d'onveutvivre.fr. Sinon personne ne saura ce que le second site apporte.
2. **L'anti-abus.** Leur piège à robots (`site_web`) est reproduit, mais si leur
   protection réelle est ailleurs (vérification d'origine, limite de débit par
   IP, captcha), un second domaine double la surface exposée.
3. **Le retour visiteur.** Une soumission classique fait quitter onveutvivre.fr :
   l'internaute atterrit sur leur réponse. Soit ils redirigent vers une page de
   remerciement chez nous, soit on garde le renvoi actuel.

Tant que ces trois points ne sont pas réglés, le formulaire d'onveutvivre.fr
renvoie vers le leur. C'est le comportement par défaut.
