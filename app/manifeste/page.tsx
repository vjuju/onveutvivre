import type { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Manifeste — Les enfants veulent vivre',
  description:
    'Organisons la solidarité et rentrons en action pour elles et eux. Le manifeste des parents, oncles et tantes, grands-parents et adultes.',
};

export default function Manifeste() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <h1 className="titre text-[1.75rem] text-encre sm:text-4xl lg:text-5xl">
          Les enfants veulent <span className="pastille">vivre</span>
        </h1>
        <p className="mt-5 text-lg font-semibold text-orange-lien">
          Organisons la solidarité et rentrons en action pour elles et eux
        </p>

        <div className="prose-oep mt-10 sm:text-lg">
          <p>
            Nous parents, oncles et tantes, grands-parents et adultes sommes profondément indignés,
            révoltés, choqués, ulcérés du sort réservé aux enfants et à la jeunesse actuellement.
          </p>

          <h3>On récapitule.</h3>
          <p>
            Après des années de casse méthodique de l&apos;éducation nationale, des enfants mineurs,
            empêchés d&apos;étudier dans des conditions décentes, demandent ce qui devrait être le
            strict minimum&nbsp;:
          </p>
          <ul>
            <li>des bâtiments et du matériel fonctionnels&nbsp;;</li>
            <li>des effectifs de profs adaptés au nombre d&apos;élèves&nbsp;;</li>
            <li>des conditions de travail permettant aux profs d&apos;enseigner sereinement&nbsp;;</li>
            <li>des emplois du temps moins saturés&nbsp;;</li>
            <li>
              de ne plus dépendre d&apos;un algorithme opaque et insécurisant pour déterminer leur
              avenir.
            </li>
          </ul>
          <p>
            <strong>Des enfants demandent à vivre, pas à survivre.</strong> Des enfants demandent à
            être rassurés.
          </p>
          <p>
            En réponse&nbsp;? Ils sont méprisés par les dirigeants politiques de ce pays qui — et
            c&apos;est innommable — font le choix d&apos;une violence inouïe à leur endroit.
          </p>

          <h3>Nous assistons actuellement à un carnage.</h3>
          <ul>
            <li>À Tours, un lycéen de 16 ans a été éborgné, probablement par un tir de LBD.</li>
            <li>
              À Tours encore, un autre jeune de 14 ans a été victime d&apos;un tir illégal qui
              l&apos;a grièvement blessé au visage. Il a perdu une grande partie de ses dents.
            </li>
            <li>À Lens, un adolescent a eu la main arrachée.</li>
            <li>
              En tout, ce sont <strong>6&nbsp;000 mineurs et jeunes</strong> qui ont subi une garde
              à vue, parfois dans des conditions atroces.
            </li>
          </ul>

          <h3>Nous ressentons une immense colère.</h3>
          <p>
            Ce que subissent nos enfants est une <strong>maltraitance étatique protéiforme</strong>.
            Car au-delà d&apos;une éducation nationale à bout de souffle, nous constatons que la
            lutte contre les agressions sexuelles est toujours le cadet des soucis de ce
            gouvernement.
          </p>
          <p>Par ailleurs… Souvenons-nous de l&apos;été dernier.</p>
          <p>
            Les écoles, les collèges, les lycées, les facs transformées en fournaises. Les enfants
            victimes de malaises, celles et ceux en train de vomir, d&apos;autres qui se plaignaient
            de maux de tête. Les tout-petits privés de sieste par des profs des écoles inquiets de
            les voir mourir étouffés par la chaleur pendant ce temps dédié au repos.
          </p>
          <p>
            <strong>Nous ne supportons plus cette maltraitance froide.</strong>
          </p>
          <p>
            Nous ne supportons plus l&apos;indifférence des gouvernements actuels, qui revendiquent
            l&apos;inaction et l&apos;abandon de la jeunesse sous prétexte de coupes budgétaires.
          </p>
          <p>
            Début septembre encore,{' '}
            <a
              className="lien-souligne"
              href="https://www.politico.eu/article/canicule-le-gouvernement-a-coupe-40-millions-deuros-du-plan-durgence-pour-les-ecoles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              on apprenait via Politico
            </a>{' '}
            que l&apos;enveloppe annoncée par le gouvernement au début de l&apos;été pour rafraîchir
            des milliers d&apos;écoles a finalement été divisée par cinq&nbsp;: 40 millions en moins.
          </p>
          <p>
            En bref, le futur de nos enfants, l&apos;avenir de ce pays, leur est toujours nié.
            C&apos;est ainsi qu&apos;à notre colère s&apos;associe une immense inquiétude. Les
            enfants sont le futur de toute société. Le sort que réserve ce gouvernement aux mineurs
            dit son mépris profond du vivant.
          </p>
          <p>
            Nous, parents mobilisés pendant les canicules, sommes donc{' '}
            <strong>solidaires des enfants qui manifestent aujourd&apos;hui</strong>. Nous ferons
            tout pour qu&apos;ils puissent faire entendre leurs voix.
          </p>
          <p>
            C&apos;est à nous, parents, oncles et tantes, grands-parents et adultes d&apos;être à la
            hauteur de leurs demandes et de nous mobiliser massivement. Dans les mobilisations
            actuelles par tous les moyens possibles, via des cordons de protection, des tribunes sur
            les réseaux, des interpellations aux élus, mais aussi au gouvernement.
          </p>

          <h3>Nous appelons</h3>
          <ul>
            <li>
              à l&apos;organisation d&apos;un <strong>réseau de solidarité et d&apos;action
              active</strong> pour protéger les lycéens partout où cela sera nécessaire&nbsp;;
            </li>
            <li>
              d&apos;urgence le ministre de l&apos;Intérieur à donner de véritables consignes de
              retenue aux forces de l&apos;ordre&nbsp;;
            </li>
            <li>
              d&apos;urgence le gouvernement à écouter les revendications des lycéens et à les mettre
              en œuvre concrètement.
            </li>
          </ul>
          <p>
            Enfin, d&apos;ores et déjà nous appelons à une{' '}
            <strong>mobilisation massive dans le cadre de la journée des droits de l&apos;enfance
            le 14 novembre</strong>.
          </p>
          <p>
            Étudier dans des conditions dignes est un droit fondamental, une nécessité pour une
            société qui se veut juste et libre.
          </p>
        </div>

        <p className="titre mt-12 text-xl text-encre sm:text-2xl">
          Les enfants veulent vivre, pas survivre. <span className="pastille">Écoutez-les.</span>
        </p>
      </article>
    </Section>
  );
}
