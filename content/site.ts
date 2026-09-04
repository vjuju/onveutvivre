// Contenu éditorial du site. Modifier ici plutôt que dans les composants.

export const site = {
  nom: 'On veut vivre',
  domaine: 'onveutvivre.fr',
  url: 'https://onveutvivre.fr',
  dateMarche: 'Samedi 26 septembre 2026',
  description:
    "Appel à mobilisation nationale pour le samedi 26 septembre 2026. Marchons partout en France pour le climat, le vivant, la paix et la justice sociale.",
};

export const liens = {
  signer: 'https://26septembre.org/#signer',
  signerOrganisation: 'https://26septembre.org/#signer',
  telegram: 'https://t.me/Infos_26_Septembre',
  instagram: 'https://www.instagram.com/m26septembre/',
  facebook: 'https://www.facebook.com/profile.php?id=61592712691495',
  linktree: 'https://linktr.ee/26Septembre',
  contact: 'mailto:contact@26septembre.org',
  presse: 'mailto:contact@26septembre.org?subject=Demande%20presse',
  declarerMobilisation: 'https://26septembre.org/',
  carteExterne: 'https://26septembre.org/',
  don: 'https://26septembre.org/',
};

/**
 * Module de signature.
 *
 * `envoiDirect: false` — le formulaire d'onveutvivre.fr renvoie vers celui de
 * 26septembre.org, qui tient le registre. Rien n'est écrit depuis ici.
 *
 * `envoiDirect: true` — soumission classique vers leur endpoint. Techniquement
 * possible sans CORS (une soumission de formulaire inter-domaines n'y est pas
 * soumise), mais cela écrit dans LEUR base et fait quitter notre domaine au
 * visiteur : à n'activer qu'avec l'accord explicite de l'équipe 26septembre.
 */
export const formulaire = {
  envoiDirect: false,
  endpoint: 'https://26septembre.org/api/signer',
};

export const compteur = {
  signataires: 25552,
  objectif: 50000,
  organisations: 200,
  volontaires: 250,
};

// ------------------------------------------------------------ Bandeau 1
export const chapo =
  "L'été a brûlé, et rien ne s'est arrêté. Plus de 7 300 personnes sont mortes de la canicule. La Gironde a brûlé plus fort qu'à aucun moment depuis cinquante ans. Nous adressons cette lettre ouverte au président de la République : un plan d'urgence, un plan d'adaptation, un plan d'atténuation, et de quoi les payer.";

export const appel = {
  ouverture: 'Monsieur le Président de la République,',
  paragraphes: [
    "Le 31 décembre 2022, vous demandiez dans vos vœux : « qui aurait pu prédire la crise climatique aux effets spectaculaires ? ». La Gironde avait brûlé quatre mois plus tôt. Elle vient de brûler encore, plus fort qu'à aucun moment depuis cinquante ans, et la fumée est montée jusqu'aux villages du Cher.",
    "Qui aurait pu prédire que plus de 7 300 personnes mourraient de la canicule cet été, sans que rien ne s'arrête ?",
    "Qui aurait pu prédire que celles et ceux qui mourraient d'abord seraient les habitantes et les habitants des quartiers populaires, les familles précaires dans des logements sans isolation, les personnes âgées ou en situation de handicap restées seules, celles et ceux qui travaillent dehors et celles et ceux qui dorment dans la rue ?",
    "Qui aurait pu prédire que les paysannes et les paysans perdraient entre 15 % et un tiers de leurs récoltes selon leurs productions ?",
    "Qui aurait pu prédire que des millions d'animaux d'élevage mourraient de chaud en quelques jours, les poules d'abord, entassées sous des toits de tôle, et qu'il faudrait rouvrir les fosses d'enfouissement de 2003 ?",
    "Qui aurait pu prédire que d'innombrables mammifères, oiseaux et insectes brûleraient vifs dans les incendies, sans qu'aucun décompte ne soit seulement tenté ?",
    "Qui aurait pu prédire que les coupes dans les services publics laisseraient les enfants dans des écoles surchauffées, les pompiers sans moyens et les hôpitaux à découvert au moment précis où nous en avions le plus besoin ?",
    "Qui aurait pu prédire que TotalEnergies encaisserait 5,4 milliards de dollars en un seul trimestre, 102 % de plus qu'il y a un an, sur la flambée du baril provoquée par les guerres pour l'accès aux ressources énergétiques et minières ?",
    "Personne ne pouvait l'ignorer, parce que tout était écrit.",
  ],
  savaient: [
    "Les compagnies pétrolières, elles, savaient dès 1971. Elles ont préféré payer pour qu'on en doute.",
    "Le GIEC (Groupe d'expertes et d'experts intergouvernemental sur l'évolution du climat) avait prédit, depuis 1990.",
    "À de nombreuses reprises, par voie de presse, de pétitions et même de manifestations, des milliers de scientifiques du monde entier ont tenté d'alerter les dirigeant·es politiques. Ils et elles ont été ignoré·es.",
  ],
  mobilises: {
    titre: 'Nous nous sommes mobilisé·es',
    paragraphes: [
      "Depuis que vous avez été élu, nous nous sommes mobilisé·es par centaines de milliers dans les grèves, marches et pétitions pour le climat.",
      "Sur les ronds-points, quand la question du prix du carburant a rendu évident que la fin du mois et la fin du monde sont le même combat, et que la nécessaire bifurcation écologique ne peut se faire au détriment des travailleurs et des travailleuses pauvres de notre pays.",
      "Aux côtés des exilé·es et déplacé·es, notamment à cause des dérèglements climatiques et des guerres économiques et militaires menées dans leur pays d'origine.",
      "Contre les méga-bassines, pour que l'eau reste un commun et non le privilège de quelques exploitations. À deux millions de signatures contre le retour d'un insecticide interdit, parce que les sols, les rivières et celles et ceux qui les travaillent ne sont pas une variable d'ajustement.",
      "Vous ne nous avez pas écouté·es. Vous avez dit que nous exagérions, puis que nous étions des radicaux, puis des écoterroristes. Pendant ce temps, vous avez ramené le Fonds vert de 2,5 milliards d'euros à 837 millions, quand il permet aux communes de se protéger. Vous avez ajouté 6,7 milliards au seul budget des armées en une année. Et toute notre sécurité civile tient sous le milliard, avec douze avions bombardiers d'eau.",
      "Nous ne venons pas vous demander de nous plaindre. Nous venons vous demander des comptes.",
    ],
  },
  exigences: [
    {
      titre: "Nous exigeons un plan d'urgence",
      texte:
        "Parce que l'été prochain sera plus chaud que celui-ci. Des lieux frais accessibles dans chaque bassin de vie, en commençant par les quartiers populaires et les communes rurales. Des écoles, des crèches, des hôpitaux et des EHPAD où l'on ne meure pas de chaud. La protection des travailleuses et des travailleurs de la chaleur inscrite dans la loi. Un toit pour chacune et chacun, parce qu'on ne s'adapte pas au climat quand on dort dehors. Des moyens humains et matériels réels pour les secours. Un fonds pour les paysannes et les paysans sinistrés, et le sauvetage de la faune inscrit dans les plans de catastrophe.",
    },
    {
      titre: "Nous exigeons un plan d'adaptation",
      texte:
        "Parce qu'aucune commune ne doit rester seule devant le feu et la soif. Le Fonds vert rétabli et l'ingénierie publique rendue aux territoires. La rénovation des logements engagée, des passoires thermiques et du parc social, pour que l'isolation cesse d'être un privilège. Des forêts protégées et restaurées, des sols restaurés, des haies replantées, des rivières et des nappes traitées comme des communs et non comme des stocks à privatiser.",
    },
    {
      titre: "Nous exigeons un plan d'atténuation",
      texte:
        "Parce qu'on ne s'adapte pas indéfiniment à une catastrophe qu'on continue d'alimenter. La fin de toutes les subventions aux énergies fossiles. L'interdiction pour toute entreprise française d'ouvrir de nouveaux projets fossiles, ici comme ailleurs. Des transports publics accessibles partout avant toute taxe qui pèserait sur les plus modestes. Une sortie du fossile qui soit aussi une sortie des guerres qu'il finance.",
    },
  ],
  financement: {
    titre: 'Pour payer ces trois plans',
    intro:
      "Nous exigeons que contribuent celles et ceux qui ont fabriqué la catastrophe et qui en tirent profit.",
    points: [
      'Les superprofits des énergies fossiles, taxés dès la loi de finances 2027.',
      "Les superprofits de l'armement, dont les carnets de commandes n'ont jamais été aussi pleins.",
      "Un impôt climatique sur les patrimoines des plus riches, qui rapporterait entre quinze et vingt-cinq milliards d'euros par an.",
    ],
    conclusion:
      "Trois Françaises et Français sur quatre veulent déjà que les entreprises fossiles paient davantage. Nous ne demandons rien d'autre que ce que ce pays réclame.",
  },
  final: {
    titre: 'Le samedi 26 septembre 2026',
    paragraphes: [
      "Partout en France, dans les métropoles et dans les bourgs de mille habitants, dans les centres-villes et dans les quartiers, nous serons dans la rue.",
      "Marchons pour le climat, pour le vivant, pour la paix, pour la justice sociale.",
      "Marchons pour la justice écologique et pour la justice sociale.",
      "Marchons pour les vivantes et les vivants, humains et non humains.",
      "Marchons pour qu'on suive enfin les scientifiques, et qu'un plan d'urgence, d'adaptation et d'atténuation soit engagé sans attendre un été de plus.",
    ],
  },
};

// ------------------------------------------------------------ Bandeau 2
export const actions = [
  {
    titre: "J'agis maintenant",
    intro: 'Je partage autour de moi :',
    items: [
      { texte: "L'appel à signer", detail: 'onveutvivre.fr', href: liens.signer },
      { texte: "L'affiche", detail: 'à partager et à enregistrer', href: '/kits/' },
      { texte: 'La carte des mobilisations', detail: '', href: '#carte' },
    ],
    accent: 'vert' as const,
  },
  {
    titre: "Je m'investis dans ma région",
    intro: "J'aide à organiser une marche près de chez moi :",
    items: [
      { texte: 'Rejoindre la communauté', detail: 'Telegram', href: liens.telegram },
    ],
    accent: 'bleu' as const,
  },
  {
    titre: 'Je me mobilise le 26 septembre',
    intro: 'Ce jour-là, nous serons dans la rue partout en France.',
    items: [{ texte: 'Trouver ma marche', detail: 'sur la carte', href: '#carte' }],
    accent: 'orange' as const,
  },
];

export const enFairePlus = [
  {
    titre: 'Devenir volontaire',
    texte:
      "Tracts, affichage, logistique, accueil le jour J, relations avec les mairies : chaque marche tient sur des dizaines de mains. Rejoignez la boucle Telegram, dites ce que vous savez faire et le temps dont vous disposez.",
    lien: { texte: 'Rejoindre le Telegram', href: liens.telegram },
  },
  {
    titre: 'Faire signer une organisation',
    texte:
      "Association, syndicat, collectif, entreprise, collectivité : plus de 200 organisations soutiennent déjà l'appel. Une signature d'organisation pèse dans la balance et entraîne ses adhérent·es.",
    lien: { texte: 'Faire signer mon organisation', href: liens.signerOrganisation },
  },
];

// ------------------------------------------------------------ Bandeau 4
export const chiffres = [
  { valeur: '7 300', unite: 'morts', texte: "Personnes mortes de la canicule en France cet été." },
  { valeur: '837 M€', unite: 'de Fonds vert', texte: "Contre 2,5 milliards en 2024, quand il permet aux communes de se protéger." },
  { valeur: '+6,7 Md€', unite: 'aux armées', texte: "Ajoutés en une seule année, quand toute la sécurité civile tient sous le milliard." },
  { valeur: '5,4 Md$', unite: 'pour TotalEnergies', texte: "Encaissés en un seul trimestre, 102 % de plus qu'il y a un an." },
];

export const citations = [
  {
    texte: "Qui aurait pu prédire la crise climatique aux effets spectaculaires ?",
    auteur: 'Emmanuel Macron',
    source: 'Vœux du 31 décembre 2022',
  },
  {
    texte:
      "Les compagnies pétrolières savaient dès 1971. Elles ont préféré payer pour qu'on en doute.",
    auteur: "Extrait de l'appel",
    source: '#OnVeutVivre',
  },
  {
    texte:
      "Celles et ceux qui meurent d'abord sont les habitantes et les habitants des quartiers populaires, les familles précaires, les personnes âgées restées seules, celles et ceux qui travaillent dehors.",
    auteur: "Extrait de l'appel",
    source: '#OnVeutVivre',
  },
  {
    texte: "Nous ne venons pas vous demander de nous plaindre. Nous venons vous demander des comptes.",
    auteur: "Extrait de l'appel",
    source: '#OnVeutVivre',
  },
];

// ------------------------------------------------------------ Bandeau 5
export const plans = [
  {
    numero: '01',
    titre: "Un plan d'urgence",
    texte:
      "Des lieux frais dans chaque bassin de vie. Des écoles, des crèches, des hôpitaux et des EHPAD où l'on ne meure pas de chaud. La protection des travailleuses et travailleurs de la chaleur inscrite dans la loi. Un toit pour chacune et chacun. Des moyens réels pour les secours.",
    accent: 'rouge' as const,
  },
  {
    numero: '02',
    titre: "Un plan d'adaptation",
    texte:
      "Le Fonds vert rétabli et l'ingénierie publique rendue aux territoires. La rénovation des passoires thermiques et du parc social. Des forêts et des sols restaurés, des haies replantées, des rivières et des nappes traitées comme des communs.",
    accent: 'vert' as const,
  },
  {
    numero: '03',
    titre: "Un plan d'atténuation",
    texte:
      "La fin des subventions aux énergies fossiles. L'interdiction pour toute entreprise française d'ouvrir de nouveaux projets fossiles. Des transports publics accessibles partout avant toute taxe qui pèserait sur les plus modestes.",
    accent: 'bleu' as const,
  },
];

export const financements = [
  {
    titre: 'Taxer les superprofits fossiles',
    texte: "Dès la loi de finances 2027. TotalEnergies a encaissé 5,4 milliards de dollars en un trimestre.",
  },
  {
    titre: "Taxer les superprofits de l'armement",
    texte: "Leurs carnets de commandes n'ont jamais été aussi pleins.",
  },
  {
    titre: 'Un impôt climatique sur les grandes fortunes',
    texte: "Entre quinze et vingt-cinq milliards d'euros par an sur les patrimoines des plus riches.",
  },
];

// ------------------------------------------------------------ Bandeau 6
export const quiSommesNous = [
  {
    emoji: '🤝',
    titre: 'Le groupe de départ',
    texte:
      "Benjamin Ball, Julien Kien, Julien Lucy, Mehdi Bounaas, Mattia Geonget, Mathis François Ball et Kim Vo Dinh. La plupart avaient déjà participé à des mobilisations pour le climat et l'environnement. Quatre d'entre elles font aussi partie de Bio Consom'acteurs, mais s'impliquent ici hors du cadre de cette association.",
  },
  {
    emoji: '📈',
    titre: 'Où nous en sommes',
    texte:
      "Plus de 250 volontaires inscrit·es, des milliers de personnes dans les groupes Telegram et WhatsApp, et le soutien de plus de 200 organisations nationales et locales.",
  },
  {
    emoji: '📍',
    titre: 'Ce que nous voulons être',
    texte:
      "Un mouvement autogéré et auto-organisé, avec des assemblées locales dans toute la France.",
  },
];

// ------------------------------------------------------------ Bandeau 7
export const calendrier = [
  { date: '13 août', titre: 'Grève nationale des sapeurs-pompiers', texte: "Les premiers exposés à la catastrophe, les premiers privés de moyens." },
  { date: '15 sept.', titre: "Action devant le ministère de l'Économie", texte: '19h30 – 21h. Là où se décide qui paie.' },
  { date: '20 sept.', titre: 'Contre le permis de tuer', texte: 'Mobilisation contre le retour des insecticides interdits.' },
  { date: '26 sept.', titre: 'Marche nationale', texte: 'Partout en France. Le rendez-vous.', phare: true },
  { date: '27–29 sept.', titre: 'Mobilisation des pompiers', texte: 'Champ de Mars, Paris.' },
  { date: '29 sept.', titre: 'Grève de la fonction publique', texte: 'Services publics : la première ligne face aux canicules.' },
  { date: '3 oct.', titre: 'Convergence à Saint-Pierre-la-Garenne', texte: 'Devant le site Syngenta.' },
  { date: '10–11 oct.', titre: "Contre l'Omnibus pesticides", texte: 'Mobilisation européenne.' },
];

export const contact = {
  email: 'contact@26septembre.org',
  presse: 'contact@26septembre.org',
  adresse: '27 rue de Paradis, 95100 Argenteuil',
};
