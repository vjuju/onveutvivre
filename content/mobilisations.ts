// Recensement des marches du 26 septembre 2026.
// Ajouter une entrée par mobilisation déclarée ; la carte et le compteur se
// mettent à jour automatiquement.

export type Mobilisation = {
  ville: string;
  codePostal: string;
  departement: string; // numéro, ex. « 76 »
  lieu: string;
  heure: string;
  boucle?: string; // lien Telegram / WhatsApp de la boucle locale
};

export const mobilisations: Mobilisation[] = [
  // Exemple de format, à remplacer par le recensement réel :
  // {
  //   ville: 'Rouen',
  //   codePostal: '76000',
  //   departement: '76',
  //   lieu: 'Place du Vieux-Marché',
  //   heure: '14h00',
  //   boucle: 'https://t.me/...',
  // },
];
