import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-trait bg-fond2">
      <div className="mx-auto flex max-w-contenu flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-5 text-xs text-encre2 sm:px-6">
        <Link href="/presse/" className="transition hover:text-orange-lien">
          Presse
        </Link>
        <Link href="/mentions-legales/" className="transition hover:text-orange-lien">
          Mentions légales
        </Link>
        <Link href="/confidentialite/" className="transition hover:text-orange-lien">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}
