'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LogoLien } from './Logo';
import { liens } from '@/content/site';

const sousMenuMarche = [
  { label: 'La carte des mobilisations', href: '/#carte' },
  { label: 'Kits et documents', href: '/kits/' },
  { label: 'Les signataires', href: '/signataires/' },
];

const navigation = [
  { label: "L'appel", href: '/#appel' },
  { label: 'Nos trois plans', href: '/#trois-plans' },
  { label: 'Agir avec nous', href: '/#agir' },
];

export default function Header() {
  const [ouvertMobile, setOuvertMobile] = useState(false);
  const [ouvertMarche, setOuvertMarche] = useState(false);
  const refMarche = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function surClic(e: MouseEvent) {
      if (refMarche.current && !refMarche.current.contains(e.target as Node)) {
        setOuvertMarche(false);
      }
    }
    function surEchap(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOuvertMarche(false);
        setOuvertMobile(false);
      }
    }
    document.addEventListener('mousedown', surClic);
    document.addEventListener('keydown', surEchap);
    return () => {
      document.removeEventListener('mousedown', surClic);
      document.removeEventListener('keydown', surEchap);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-trait bg-fond/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-contenu items-center justify-between gap-4 px-4 sm:px-6">
        <LogoLien largeur="2.9rem" />

        {/* Menu central — bureau */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-encre/75 transition hover:bg-fond2 hover:text-encre"
            >
              {n.label}
            </Link>
          ))}

          <div ref={refMarche} className="relative">
            <button
              type="button"
              onClick={() => setOuvertMarche((v) => !v)}
              aria-expanded={ouvertMarche}
              aria-haspopup="true"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-encre/75 transition hover:bg-fond2 hover:text-encre"
            >
              La marche du 26
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                aria-hidden
                className={`transition ${ouvertMarche ? 'rotate-180' : ''}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            {ouvertMarche && (
              <div className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-trait bg-fond shadow-xl shadow-encre/10">
                {sousMenuMarche.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOuvertMarche(false)}
                    className="block px-4 py-3 text-sm text-encre/80 transition hover:bg-fond2 hover:text-orange-lien"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#calendrier"
            className="rounded-lg px-3 py-2 text-sm font-medium text-encre/75 transition hover:bg-fond2 hover:text-encre"
          >
            Actualités
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={liens.signer}
            target="_blank"
            rel="noopener noreferrer"
            className="bouton-primaire hidden !px-5 !py-2.5 !text-xs sm:inline-flex"
          >
            Signer l&apos;appel
          </a>
          <button
            type="button"
            onClick={() => setOuvertMobile((v) => !v)}
            aria-expanded={ouvertMobile}
            aria-label="Ouvrir le menu"
            className="rounded-lg border border-encre/20 p-2.5 text-encre lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
              {ouvertMobile ? (
                <path d="M2 2l14 10M16 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {ouvertMobile && (
        <nav className="border-t border-trait bg-fond2 px-4 pb-6 pt-2 lg:hidden" aria-label="Navigation mobile">
          {[...navigation, { label: 'Actualités', href: '/#calendrier' }].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOuvertMobile(false)}
              className="block border-b border-trait py-3 text-encre/85"
            >
              {n.label}
            </Link>
          ))}
          <p className="pt-4 text-xs uppercase tracking-widest text-encre2">La marche du 26</p>
          {sousMenuMarche.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOuvertMobile(false)}
              className="block border-b border-trait py-3 pl-3 text-encre/85"
            >
              {s.label}
            </Link>
          ))}
          <a href={liens.signer} target="_blank" rel="noopener noreferrer" className="bouton-primaire mt-5 w-full">
            Signer l&apos;appel
          </a>
        </nav>
      )}
    </header>
  );
}
