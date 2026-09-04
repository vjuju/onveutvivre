import Link from 'next/link';
import Section, { TitreSection } from '@/components/Section';
import { Marque } from '@/components/Logo';
import Appel from '@/components/Appel';
import Compteur from '@/components/Compteur';
import Carrousel from '@/components/Carrousel';
import Carte from '@/components/Carte';
import {
  actions,
  calendrier,
  chapo,
  chiffres,
  enFairePlus,
  financements,
  liens,
  plans,
  quiSommesNous,
} from '@/content/site';

const teintes = {
  vert: { texte: 'text-vert-texte', bord: 'border-vert' },
  bleu: { texte: 'text-bleu-texte', bord: 'border-bleu' },
  rouge: { texte: 'text-rouge-texte', bord: 'border-rouge' },
  orange: { texte: 'text-orange-lien', bord: 'border-orange' },
} as const;

export default function Accueil() {
  return (
    <>
      {/* ─────────────────────────────── Bandeau 1 · Signer l'appel
          Seul bandeau sur fond sombre (#19120B), comme prévu au brief. */}
      <section id="appel" className="relative overflow-hidden bg-encre">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-orange/15 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-contenu gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Colonne gauche */}
          <div>
            <Marque largeur="clamp(15rem, 34vw, 22rem)" ton="clair" />

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-orange sm:text-base">
              Appel à mobilisation nationale
              <span className="mx-2 text-fond/40">·</span>
              Samedi 26 septembre 2026
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fond/85 sm:text-xl">{chapo}</p>

            <Appel />

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#agir" className="bouton-sombre-secondaire">
                Passer à l&apos;action
              </Link>
              <Link href="#carte" className="bouton-sombre-secondaire">
                Trouver ma marche
              </Link>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="lg:pt-6">
            <div id="signer" className="scroll-mt-28">
              <Compteur />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── Bandeau 2 · Passer à l'action */}
      <Section id="agir">
        <TitreSection surtitre="Signer ne suffit pas">
          Signez.
          <br />
          Puis <span className="pastille">marchez.</span>
        </TitreSection>
        <p className="mt-6 max-w-2xl text-lg text-encre/75">La suite se joue près de chez vous.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {actions.map((a) => (
            <article key={a.titre} className={`carte border-t-4 ${teintes[a.accent].bord}`}>
              <h3 className={`titre text-2xl ${teintes[a.accent].texte}`}>{a.titre}</h3>
              <p className="mt-4 text-sm text-encre/80">{a.intro}</p>
              <ul className="mt-4 space-y-2.5">
                {a.items.map((i) => (
                  <li key={i.texte}>
                    <a
                      href={i.href}
                      target={i.href.startsWith('http') ? '_blank' : undefined}
                      rel={i.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="lien-souligne text-sm font-medium"
                    >
                      {i.texte}
                    </a>
                    {i.detail && <span className="ml-2 text-xs text-encre2">{i.detail}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h3 className="titre text-3xl text-encre sm:text-4xl">Vous voulez en faire plus ?</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {enFairePlus.map((b) => (
              <div key={b.titre}>
                <h4 className="titre text-xl text-orange-lien">{b.titre}</h4>
                <p className="mt-3 text-sm leading-relaxed text-encre/80">{b.texte}</p>
                <a
                  href={b.lien.href}
                  target={b.lien.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="lien-souligne mt-3 inline-block text-sm font-medium"
                >
                  {b.lien.texte} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────── Bandeau 3 · Carte des mobilisations */}
      <Section id="carte" fond="beige">
        <TitreSection surtitre="La marche du 26">
          La carte des <span className="pastille">mobilisations</span>
        </TitreSection>
        <div className="mt-12">
          <Carte />
        </div>
      </Section>

      {/* ─────────────────────────────── Bandeau 4 · Pourquoi maintenant */}
      <Section id="pourquoi">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <TitreSection surtitre="Pourquoi maintenant ?">
            L&apos;été a brûlé,
            <br />
            et rien ne s&apos;est <span className="pastille pastille-rouge">arrêté.</span>
          </TitreSection>
          <div className="space-y-4 text-encre/80 lg:pt-4">
            <p className="leading-relaxed">
              Personne ne pouvait l&apos;ignorer, parce que tout était écrit. Les compagnies
              pétrolières savaient dès 1971 — elles ont préféré payer pour qu&apos;on en doute. Le
              GIEC l&apos;avait prédit depuis 1990.
            </p>
            <p className="leading-relaxed">
              Pendant ce temps, le Fonds vert est passé de 2,5 milliards d&apos;euros à 837 millions,
              quand il permet aux communes de se protéger. 6,7 milliards ont été ajoutés au seul
              budget des armées en une année. Toute notre sécurité civile tient sous le milliard,
              avec douze avions bombardiers d&apos;eau.
            </p>
            <p className="font-medium leading-relaxed text-encre">
              Nous ne venons pas demander qu&apos;on nous plaigne. Nous venons demander des comptes.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chiffres.map((c) => (
            <div key={c.valeur} className="carte">
              <p className="titre text-4xl text-orange-lien sm:text-5xl">{c.valeur}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-encre2">{c.unite}</p>
              <p className="mt-4 text-sm leading-relaxed text-encre/75">{c.texte}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Carrousel />
        </div>
      </Section>

      {/* ─────────────────────────────── Bandeau 5 · Nos trois plans */}
      <Section id="trois-plans" fond="beige">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <TitreSection surtitre="Ce que nous demandons">
            Trois plans,
            <br />
            et de quoi les <span className="pastille">payer.</span>
          </TitreSection>
          <div className="space-y-4 text-encre/80 lg:pt-4">
            <p className="leading-relaxed">
              Nous adressons une lettre ouverte au président de la République. Elle ne demande ni
              compassion ni promesse : elle demande trois plans, et les recettes pour les financer.
            </p>
            <p className="leading-relaxed">
              Trois Françaises et Français sur quatre veulent déjà que les entreprises fossiles
              paient davantage. Nous ne demandons rien d&apos;autre que ce que ce pays réclame.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article key={p.numero} className={`carte border-t-4 bg-fond ${teintes[p.accent].bord}`}>
              <p className={`titre text-5xl ${teintes[p.accent].texte} opacity-45`}>{p.numero}</p>
              <h3 className="titre mt-3 text-2xl text-encre">{p.titre}</h3>
              <p className="mt-4 text-sm leading-relaxed text-encre/75">{p.texte}</p>
            </article>
          ))}
        </div>

        <h3 className="titre mt-16 max-w-4xl text-3xl text-encre sm:text-4xl">
          Pour payer ces trois plans, nous exigeons que contribuent celles et ceux qui en tirent
          profit.
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {financements.map((f) => (
            <div key={f.titre} className="carte bg-fond">
              <h4 className="titre text-xl text-orange-lien">{f.titre}</h4>
              <p className="mt-3 text-sm leading-relaxed text-encre/75">{f.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────── Bandeau 6 · Qui sommes-nous */}
      <Section id="qui">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <TitreSection surtitre="Qui sommes-nous ?">
            Un mouvement né
            <br />
            cet <span className="pastille pastille-vert">été.</span>
          </TitreSection>
          <div className="space-y-4 text-encre/80 lg:pt-4">
            <p className="leading-relaxed">
              Pas une organisation, pas un parti, pas une marque : un collectif de personnes qui ont
              refusé que cet été passe sans conséquence. Autogéré, auto-organisé, ouvert à qui veut
              en être.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quiSommesNous.map((b) => (
            <article key={b.titre} className="carte">
              <p className="text-2xl" aria-hidden>
                {b.emoji}
              </p>
              <h3 className="titre mt-3 text-xl text-orange-lien">{b.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-encre/75">{b.texte}</p>
            </article>
          ))}
        </div>

        <a href={liens.telegram} target="_blank" rel="noopener noreferrer" className="bouton-primaire mt-10">
          Rejoignez-nous
        </a>
      </Section>

      {/* ─────────────────────────────── Bandeau 7 · Calendrier */}
      <Section id="calendrier" fond="beige">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <TitreSection surtitre="Actualités">
              Sept rendez-vous
              <br />à ne pas <span className="pastille pastille-bleu">manquer.</span>
            </TitreSection>
            <p className="mt-6 text-encre/75">
              Le 26 septembre n&apos;est pas un point de départ ni un point d&apos;arrivée : c&apos;est
              le moment où tout converge. Voici les dates qui l&apos;encadrent.
            </p>
          </div>

          <ol className="space-y-3">
            {calendrier.map((e) => (
              <li
                key={e.date + e.titre}
                className={`flex gap-5 rounded-xl border p-5 transition ${
                  e.phare ? 'border-orange bg-orange/10' : 'border-trait bg-fond hover:border-encre2/40'
                }`}
              >
                <span className={`titre w-24 shrink-0 text-lg ${e.phare ? 'text-orange-lien' : 'text-encre2'}`}>
                  {e.date}
                </span>
                <span>
                  <span className={`block font-bold ${e.phare ? 'text-orange-lien' : 'text-encre'}`}>
                    {e.titre}
                  </span>
                  <span className="mt-1 block text-sm text-encre/70">{e.texte}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ─────────────────────────────── Rappel final */}
      <section className="border-t border-trait bg-orange">
        <div className="mx-auto max-w-contenu px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="titre text-4xl text-encre sm:text-6xl">Samedi 26 septembre 2026</p>
          <p className="mt-4 text-lg font-medium text-encre/80">
            Partout en France. Pour le climat, le vivant, la paix et la justice sociale.
          </p>
          <a
            href={liens.signer}
            target="_blank"
            rel="noopener noreferrer"
            className="bouton mt-8 bg-encre text-fond hover:bg-[#2c2115]"
          >
            ✍ Je signe l&apos;appel
          </a>
        </div>
      </section>
    </>
  );
}
