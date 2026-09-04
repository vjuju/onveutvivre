import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'On veut vivre — Marche nationale du 26 septembre 2026',
    template: '%s — On veut vivre',
  },
  description: site.description,
  openGraph: {
    title: 'On veut vivre — Marche nationale du 26 septembre 2026',
    description: site.description,
    url: site.url,
    siteName: site.nom,
    locale: 'fr_FR',
    type: 'website',
    images: ['/logos/logo-empile-couleur.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On veut vivre — Marche nationale du 26 septembre 2026',
    description: site.description,
    images: ['/logos/logo-empile-couleur.png'],
  },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FFFCF5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/titres.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-fond antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-encre"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="pt-[4.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
