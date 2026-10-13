import type { Metadata } from 'next';
import { liens } from '@/content/site';

export const metadata: Metadata = {
  title: "Signer l'appel",
  description:
    "Signez l'appel « Les enfants veulent vivre » et rejoignez le réseau de solidarité avec les mobilisations lycéennes.",
};

export default function Signer() {
  return (
    <section className="bg-fond">
      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
        <h1 className="titre text-[1.75rem] text-encre sm:text-4xl">
          Je signe <span className="pastille">l&apos;appel</span>
        </h1>
      </div>
      <iframe
        src={liens.notion}
        title="Formulaire de signature de l'appel"
        className="mt-6 block h-[calc(100svh-4.5rem)] min-h-[600px] w-full border-0"
        allowFullScreen
      />
    </section>
  );
}
