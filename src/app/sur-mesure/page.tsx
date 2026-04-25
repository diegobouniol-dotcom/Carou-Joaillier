import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sur-mesure — création joaillière personnalisée",
  description:
    "Le process sur-mesure de l'atelier Carou Joaillier : du premier rendez-vous à la remise de votre pièce unique. Bagues de fiançailles, alliances, transformations.",
  alternates: { canonical: "/sur-mesure" },
};

const ETAPES_DETAILLEES = [
  {
    n: "01",
    title: "Le rendez-vous",
    chapeau: "Écouter d'abord.",
    body: "Vous venez à l'atelier place Notre Dame nous parler de votre projet. Une demande en mariage, une renaissance, un anniversaire de vie. Nous prenons le temps : vos goûts, votre main, votre histoire, votre budget. Aucune pression, aucun catalogue à dérouler — juste un dialogue.",
  },
  {
    n: "02",
    title: "Le dessin",
    chapeau: "Donner forme à l'idée.",
    body: "Quelques jours plus tard, nous vous présentons deux à trois propositions dessinées à la main. Nous ajustons les proportions, les volumes, la silhouette. Nous choisissons ensemble les pierres : provenance, taille, couleur, certification. Rien n'est commandé tant que vous n'êtes pas pleinement convaincu.",
  },
  {
    n: "03",
    title: "L'atelier",
    chapeau: "Le geste prend le relais.",
    body: "La cire est sculptée, le métal coulé, la monture limée, les pierres serties. Selon la complexité, comptez quatre à huit semaines. Vous êtes invité, si vous le souhaitez, à venir voir la pièce à mi-parcours — beaucoup de nos clients aiment ce moment, suspendu, où le bijou commence à exister.",
  },
  {
    n: "04",
    title: "La remise",
    chapeau: "Le bijou vous rejoint.",
    body: "Le jour venu, votre pièce vous est remise à l'atelier, dans son écrin et accompagnée de son certificat. Nous la portons à votre main, ajustons une dernière fois si besoin. Vous repartez avec quelque chose qui n'existe nulle part ailleurs — et qui vous appartient.",
  },
];

const TYPOLOGIES = [
  "Bague de fiançailles",
  "Alliance",
  "Pendentif & collier",
  "Bracelet",
  "Boucles d'oreilles",
  "Chevalière",
  "Transformation d'un bijou de famille",
  "Restauration de pièce ancienne",
];

export default function SurMesurePage() {
  return (
    <>
      <Header />
      <main className="bg-ivoire">
        {/* Hero */}
        <section className="relative bg-noir-velours pt-40 pb-24 md:pb-28 overflow-hidden">
          <Image
            src="/images/03-mains-atelier-HD.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir-velours/40 via-noir-velours/70 to-noir-velours" />
          <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-6">
              Sur-mesure
            </p>
            <h1 className="font-display italic text-ivoire text-6xl md:text-7xl lg:text-[96px] leading-[0.98] mb-8">
              Une pièce, une histoire.
            </h1>
            <p className="text-gris-perle text-lg md:text-xl max-w-2xl mx-auto leading-[1.6]">
              Le sur-mesure n&apos;est pas une option chez Carou Joaillier :
              c&apos;est notre métier. Voici comment naît, pas à pas, un bijou
              qui n&apos;appartient qu&apos;à vous.
            </p>
          </div>
        </section>

        {/* Etapes détaillées */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
            <div className="space-y-20 md:space-y-28">
              {ETAPES_DETAILLEES.map((e) => (
                <div
                  key={e.n}
                  className="grid grid-cols-12 gap-6 md:gap-12 items-start"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-display italic text-or-rose text-7xl md:text-8xl leading-none">
                      {e.n}
                    </div>
                    <div className="divider-or w-20 mt-4" />
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-3">
                      {e.title}
                    </p>
                    <h2 className="font-display italic text-noir-velours text-4xl md:text-5xl leading-[1.05] mb-6">
                      {e.chapeau}
                    </h2>
                    <p className="text-noir-velours/75 text-[16px] leading-[1.85]">
                      {e.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typologies */}
        <section className="bg-noir-velours">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
                Que créer ensemble ?
              </p>
              <h2 className="font-display italic text-ivoire text-5xl md:text-6xl leading-[1.05]">
                Tout ce qui se porte.
              </h2>
              <div className="divider-or w-32 mx-auto mt-8" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 max-w-5xl mx-auto">
              {TYPOLOGIES.map((t) => (
                <li
                  key={t}
                  className="bg-noir-velours px-6 py-8 text-center text-ivoire/85 font-display italic text-xl"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Citation */}
        <section className="bg-ivoire">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
            <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-8">
              L&apos;atelier
            </p>
            <blockquote className="font-display italic text-noir-velours text-3xl md:text-4xl leading-[1.3] mb-8">
              « Je ne crée jamais deux fois le même bijou. Et c&apos;est très
              bien ainsi : ce que vous portez, personne d&apos;autre ne le
              porte. »
            </blockquote>
            <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase">
              — Jean-Marc Carou
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-noir-velours">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
            <h2 className="font-display italic text-ivoire text-5xl md:text-6xl leading-[1.05] mb-8">
              Commencer.
            </h2>
            <p className="text-gris-perle text-lg max-w-xl mx-auto mb-12 leading-[1.6]">
              Le premier rendez-vous est gratuit, sans engagement, et ne
              dure jamais moins d&apos;une heure. Prenez le temps de venir
              nous rencontrer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33297842877"
                className="inline-flex items-center justify-center bg-or-rose hover:bg-or-sombre text-noir-velours text-[12px] tracking-[0.22em] uppercase font-semibold px-8 py-4 transition-colors"
              >
                02 97 84 28 77
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-or-rose/60 hover:border-or-rose text-ivoire text-[12px] tracking-[0.22em] uppercase font-semibold px-8 py-4 transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
