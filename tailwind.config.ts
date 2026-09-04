import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fond noir (demande client) — déclinaison chaude
        noir: '#0C0A09',
        charbon: '#16130F',
        ardoise: '#1F1B16',
        champ: '#262119',
        bordure: '#332C24',
        // Palette de marque (brief tech)
        orange: {
          DEFAULT: '#EE7D3A',
          fonce: '#D5702E',
        },
        creme: '#FFFCF5',
        cremeSourde: '#B9AEA0',
        vert: '#6BC24A',
        bleu: '#4BA9F0',
        rouge: '#EE3B3B',
      },
      fontFamily: {
        titre: ['var(--font-titre)', 'Impact', 'sans-serif'],
        corps: ['var(--font-corps)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        contenu: '1200px',
      },
      keyframes: {
        apparition: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        apparition: 'apparition .5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
