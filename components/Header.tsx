'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoLien } from './Logo';

const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Manifeste', href: '/manifeste/' },
];

export default function Header() {
  const chemin = usePathname();
  const actif = (href: string) =>
    href === '/' ? chemin === '/' : chemin?.replace(/\/?$/, '/') === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-trait bg-fond/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-contenu items-center justify-between gap-4 px-4 sm:px-6">
        <LogoLien largeur="clamp(6.5rem, 22vw, 8.5rem)" />

        <nav className="flex items-center gap-1" aria-label="Navigation principale">
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={actif(n.href) ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-fond2 hover:text-encre ${
                actif(n.href) ? 'text-encre' : 'text-encre/75'
              } ${n.href === '/' ? 'hidden sm:block' : ''}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/signer/" className="bouton-primaire ml-1 !px-4 !py-2.5 !text-xs sm:ml-2 sm:!px-5">
            Signer
          </Link>
        </nav>
      </div>
    </header>
  );
}
