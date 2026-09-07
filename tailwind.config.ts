import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Charte du brief tech
        fond: '#FFFCF5',        // fond général
        fond2: '#FAF4E9',       // cartes, blocs
        champ: '#F0E8D6',       // champs de formulaire
        encre: '#19120B',       // textes, fond du bandeau d'appel
        encre2: '#6E6154',      // textes secondaires (contraste AA sur fond)
        trait: '#E6DCC9',       // filets et bordures

        orange: {
          // L'orange du logo, relevé au pixel sur les fichiers officiels.
          // Fond des boutons et des aplats — avec du texte ENCRE dessus (6,9:1).
          // En texte sur le crème il ne monte qu'à 2,4:1 : jamais en texte.
          DEFAULT: '#FF751F',
          // Survol des boutons.
          fonce: '#E35F0D',
          // Assombri jusqu'à 5,7:1 sur le crème : liens et petits textes accentués.
          lien: '#A8480F',
        },
        // Accents du logo : version vive pour les aplats, sourde pour le texte
        vert: { DEFAULT: '#7ED957', texte: '#3E8E28' },
        bleu: { DEFAULT: '#38B6FF', texte: '#1668B0' },
        rouge: { DEFAULT: '#FF3131', texte: '#C81E1E' },
      },
      fontFamily: {
        titre: ['var(--font-titre)', 'Impact', 'sans-serif'],
        corps: ['var(--font-corps)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { contenu: '1200px' },
      keyframes: {
        apparition: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { apparition: 'apparition .5s ease-out both' },
    },
  },
  plugins: [],
};

export default config;
