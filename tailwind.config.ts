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
          // L'orange pétant de la charte : réservé aux APLATS (pastilles, logo,
          // bandeaux). Sur fond crème il ne monte qu'à 2,4:1 — jamais en texte.
          DEFAULT: '#FF751F',
          // Assombri jusqu'à 4,8:1 avec du texte crème dessus : fond des boutons.
          fonce: '#BB5210',
          // Assombri jusqu'à 5,7:1 sur le crème : liens et petits textes accentués.
          lien: '#A8480F',
        },
        // Accents : version vive pour les aplats, version sourde pour le texte
        vert: { DEFAULT: '#6BC24A', texte: '#3E8E28' },
        bleu: { DEFAULT: '#4BA9F0', texte: '#1668B0' },
        rouge: { DEFAULT: '#EE3B3B', texte: '#C81E1E' },
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
