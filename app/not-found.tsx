import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';

export default function NotFound() {
  return (
    <Section>
      <TitreSection surtitre="Erreur 404">
        Cette page n&apos;existe <span className="pastille pastille-rouge">pas.</span>
      </TitreSection>
      <p className="mt-6 max-w-xl text-lg text-creme/80">
        Le lien est peut-être ancien. La mobilisation, elle, est toujours là.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="bouton-primaire">
          Retour à l&apos;accueil
        </Link>
        <Link href="/#carte" className="bouton-secondaire">
          Trouver ma marche
        </Link>
      </div>
    </Section>
  );
}
