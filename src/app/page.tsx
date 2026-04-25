import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

const STATS = [
  { value: "30+ ans", label: "d'expérience joaillière" },
  { value: "100%", label: "sur-mesure" },
  { value: "Place", label: "Notre Dame, Larmor" },
  { value: "Or & diamants", label: "certifiés" },
];

const SAVOIR_FAIRE = [
  {
    n: "01",
    title: "Création sur-mesure",
    body: "De l'esquisse à la pièce achevée. Bagues de fiançailles, alliances, pendentifs : chaque création naît d'un dialogue entre vous et l'atelier.",
  },
  {
    n: "02",
    title: "Transformation & restauration",
    body: "Donner une seconde vie aux bijoux de famille. Remontage de pierres, restauration de pièces anciennes, ajustements et réparations.",
  },
  {
    n: "03",
    title: "Conseil & estimation",
    body: "Expertise gemmologique, choix des matériaux, accompagnement dans l'investissement. Trente ans d'œil aiguisé à votre service.",
  },
];

const GALERIE = [
  {
    src: "/images/02-bague-pierres-creation-HD.jpg",
    badge: "Création",
    titre: "Bague multi-pierres",
    description:
      "Or rose, aigue-marine, améthyste, saphir, péridot, tourmaline rose",
  },
  {
    src: "/images/01-cartier-diamants-HD.jpg",
    badge: "Restauration",
    titre: "Montre Cartier sertie diamants",
    description: "Sertissage et restauration de pièce de haute horlogerie",
  },
  {
    src: "/images/03-mains-atelier-HD.jpg",
    badge: "L'atelier",
    titre: "Le geste de l'artisan",
    description:
      "Mesure et ajustement d'une bague à l'atelier de Larmor-Plage",
  },
];

const ETAPES = [
  {
    n: "01",
    title: "Le rendez-vous",
    body: "Vous venez en boutique partager votre projet : une occasion, une matière, une émotion. Nous écoutons.",
  },
  {
    n: "02",
    title: "Le dessin",
    body: "Plusieurs croquis vous sont proposés. Nous ajustons jusqu'à la silhouette parfaite, et choisissons ensemble les pierres.",
  },
  {
    n: "03",
    title: "L'atelier",
    body: "Le bijou prend forme à l'atelier. Selon la pièce, comptez de 4 à 8 semaines de fabrication artisanale.",
  },
  {
    n: "04",
    title: "La remise",
    body: "Vous repartez avec votre pièce, son écrin, et son certificat. Une création unique, à votre image.",
  },
];

const TEMOIGNAGES = [
  {
    body: "Une bague de fiançailles dessinée à quatre mains. Le résultat dépasse ce que j'avais osé imaginer — elle ne ressemble à aucune autre.",
    role: "Cliente, Lorient",
  },
  {
    body: "J'ai confié à monsieur Carou la transformation des bagues de ma grand-mère. Il a su préserver l'âme du bijou tout en le rendant portable au quotidien.",
    role: "Cliente, Quéven",
  },
  {
    body: "Travail d'orfèvre, écoute rare, et un œil qui voit ce que vous ne savez pas encore vouloir. On revient.",
    role: "Client, Larmor-Plage",
  },
];

export default function HomePage() {
  return (
    <>
      <Schema />
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen w-full bg-noir-velours overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
          {/* Texte */}
          <div className="md:col-span-7 flex items-center order-2 md:order-1 px-6 lg:px-16 xl:px-24 pt-12 md:pt-32 pb-20 md:pb-20">
            <div className="max-w-2xl">
              <p className="text-or-rose text-[11px] md:text-[12px] tracking-[0.32em] uppercase font-medium mb-8 animate-fade-in-up">
                Joaillier à Larmor-Plage — depuis 1992
              </p>
              <h1 className="font-display italic text-ivoire text-[56px] sm:text-[72px] md:text-[80px] lg:text-[104px] xl:text-[120px] leading-[0.95] tracking-tight mb-8 animate-fade-in-up">
                L&apos;art de l&apos;unique.
              </h1>
              <p className="text-gris-perle text-[17px] md:text-[19px] leading-[1.65] max-w-md mb-10 animate-fade-in-up">
                Création de bijoux sur-mesure, pièces d&apos;exception,
                transformation et restauration. Place Notre Dame.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <Link
                  href="/creations"
                  className="inline-flex items-center justify-center bg-or-rose hover:bg-or-sombre text-noir-velours text-[12px] tracking-[0.22em] uppercase font-semibold px-8 py-4 transition-colors"
                >
                  Découvrir nos créations
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-or-rose/60 hover:border-or-rose text-ivoire text-[12px] tracking-[0.22em] uppercase font-semibold px-8 py-4 transition-colors"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="md:col-span-5 relative flex items-center justify-center order-1 md:order-2 px-6 md:px-10 lg:px-14 pt-32 md:pt-32 pb-10 md:pb-20">
            {/* Halo lumineux discret */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(200,168,120,0.18) 0%, rgba(200,168,120,0.05) 35%, transparent 65%)",
              }}
            />
            <div className="relative w-full max-w-[400px] md:max-w-[520px] lg:max-w-[600px] aspect-square border border-or-rose/20 bg-noir-profond/40 p-4 md:p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/02-bague-pierres-creation-HD.jpg"
                  alt="Bague or rose multi-pierres précieuses, création Carou Joaillier"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  placeholder="empty"
                  className="object-contain"
                />
              </div>
              {/* Coins or-rose */}
              <span className="absolute -top-px -left-px w-6 h-6 border-t border-l border-or-rose" />
              <span className="absolute -top-px -right-px w-6 h-6 border-t border-r border-or-rose" />
              <span className="absolute -bottom-px -left-px w-6 h-6 border-b border-l border-or-rose" />
              <span className="absolute -bottom-px -right-px w-6 h-6 border-b border-r border-or-rose" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivoire/60 text-[10px] tracking-[0.4em] uppercase hidden md:block">
          ↓ Découvrir
        </div>
      </section>

      {/* BANDEAU CHIFFRES */}
      <section className="bg-noir-velours border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-20">
          <h2 className="font-display italic text-ivoire text-3xl md:text-4xl mb-12 text-center">
            <span className="text-or-rose">30+ ans</span> d&apos;art joaillier
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="text-center lg:border-l lg:border-or-rose/30 lg:first:border-l-0 lg:px-4"
              >
                <div className="font-display italic text-or-rose text-4xl md:text-5xl mb-3">
                  {s.value}
                </div>
                <div className="text-gris-perle text-[11px] md:text-[12px] tracking-[0.22em] uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TROIS SAVOIR-FAIRE */}
      <section className="bg-ivoire">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
              Savoir-faire
            </p>
            <h2 className="font-display italic text-noir-velours text-5xl md:text-6xl leading-[1.05]">
              L&apos;atelier d&apos;un joaillier.
            </h2>
            <div className="divider-or w-32 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-noir-velours/10">
            {SAVOIR_FAIRE.map((s) => (
              <div
                key={s.n}
                className="bg-ivoire p-10 lg:p-12 group hover:bg-white transition-colors"
              >
                <div className="font-display italic text-or-rose text-5xl mb-6">
                  {s.n}
                </div>
                <h3 className="font-display italic text-noir-velours text-3xl mb-5 leading-tight">
                  {s.title}
                </h3>
                <p className="text-noir-velours/70 leading-[1.7] text-[15px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="bg-noir-velours">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
              Galerie d&apos;exception
            </p>
            <h2 className="font-display italic text-ivoire text-5xl md:text-6xl leading-[1.05]">
              Quelques créations.
            </h2>
            <div className="divider-or w-32 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
            {GALERIE.map((img) => (
              <article
                key={img.titre}
                className="group w-full max-w-[380px] border border-or-rose/20 hover:border-or-rose/50 bg-noir-profond/40 transition-colors"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-noir-profond">
                  <Image
                    src={img.src}
                    alt={img.titre}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-or-rose text-noir-velours text-[10px] tracking-[0.28em] uppercase font-semibold px-3 py-1.5">
                    {img.badge}
                  </div>
                  <div className="absolute inset-0 bg-or-rose/0 group-hover:bg-or-rose/10 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display italic text-ivoire text-2xl mb-2 leading-tight">
                    {img.titre}
                  </h3>
                  <p className="text-gris-perle text-sm leading-[1.6]">
                    {img.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/creations"
              className="inline-flex items-center gap-3 text-or-rose hover:text-ivoire text-[12px] tracking-[0.32em] uppercase font-medium transition-colors border-b border-or-rose/40 hover:border-ivoire pb-2"
            >
              Voir toutes nos créations →
            </Link>
          </div>
        </div>
      </section>

      {/* SUR-MESURE PROCESS */}
      <section className="bg-ivoire">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
              Le sur-mesure
            </p>
            <h2 className="font-display italic text-noir-velours text-5xl md:text-6xl leading-[1.05]">
              Du croquis à la pièce.
            </h2>
            <div className="divider-or w-32 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-or-rose/30" />
            {ETAPES.map((e) => (
              <div key={e.n} className="text-center relative">
                <div className="relative inline-flex items-center justify-center w-14 h-14 mb-6 bg-ivoire">
                  <span className="absolute inset-0 border border-or-rose rounded-full" />
                  <span className="font-display italic text-or-rose text-xl">
                    {e.n}
                  </span>
                </div>
                <h3 className="font-display italic text-noir-velours text-2xl mb-4">
                  {e.title}
                </h3>
                <p className="text-noir-velours/70 text-[14px] leading-[1.7] px-2">
                  {e.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/sur-mesure"
              className="inline-flex items-center gap-3 text-or-sombre hover:text-noir-velours text-[12px] tracking-[0.32em] uppercase font-medium transition-colors border-b border-or-sombre/40 hover:border-noir-velours pb-2"
            >
              Découvrir le process complet →
            </Link>
          </div>
        </div>
      </section>

      {/* LA MAISON */}
      <section id="maison" className="bg-noir-velours">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-[700px]">
            <Image
              src="/images/03-mains-atelier-HD.jpg"
              alt="Mains de Jean-Marc Carou mesurant une bague à l'atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-noir-velours/10" />
          </div>

          <div className="px-6 lg:px-16 py-20 lg:py-32 flex flex-col justify-center">
            <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-6">
              La Maison
            </p>
            <h2 className="font-display italic text-ivoire text-4xl md:text-5xl lg:text-[56px] leading-[1.05] mb-10">
              Place Notre Dame, depuis 1992.
            </h2>
            <div className="space-y-6 text-ivoire/85 text-[16px] leading-[1.8] mb-10">
              <p>
                Installé sur la place de l&apos;église de Larmor-Plage depuis
                plus de trente ans, Jean-Marc Carou perpétue un art rare :
                celui de la création joaillière artisanale, à l&apos;écoute de
                chaque histoire.
              </p>
              <p>
                Chaque pierre est sélectionnée à la main. Chaque monture est
                dessinée puis exécutée à l&apos;atelier. Aucun bijou ne quitte
                la maison sans avoir été pensé, façonné, et signé.
              </p>
            </div>
            <blockquote className="border-l-2 border-or-rose pl-6">
              <p className="font-display italic text-or-rose text-2xl leading-[1.4]">
                « Un bijou, c&apos;est une histoire qu&apos;on porte à fleur de
                peau. »
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="bg-ivoire">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
              Mots de clients
            </p>
            <h2 className="font-display italic text-noir-velours text-5xl md:text-6xl leading-[1.05]">
              Confiance.
            </h2>
            <div className="divider-or w-32 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {TEMOIGNAGES.map((t, i) => (
              <figure key={i} className="text-center">
                <div className="text-or-rose font-display text-6xl leading-none mb-4">
                  &ldquo;
                </div>
                <blockquote className="font-display italic text-noir-velours text-[22px] leading-[1.45] mb-6">
                  {t.body}
                </blockquote>
                <figcaption className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium">
                  — {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-noir-velours">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-32 md:py-44 text-center">
          <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-8">
            Un projet ?
          </p>
          <h2 className="font-display italic text-ivoire text-6xl md:text-7xl lg:text-[80px] leading-[0.98] mb-10">
            Venez nous rencontrer.
          </h2>
          <p className="text-gris-perle text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mb-14">
            La meilleure manière de commencer une création, c&apos;est de
            pousser la porte de l&apos;atelier. Nous vous y attendons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33297842877"
              className="inline-flex items-center justify-center bg-or-rose hover:bg-or-sombre text-noir-velours text-[13px] tracking-[0.22em] uppercase font-semibold px-10 py-5 transition-colors"
            >
              02 97 84 28 77
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-or-rose/60 hover:border-or-rose text-ivoire text-[13px] tracking-[0.22em] uppercase font-semibold px-10 py-5 transition-colors"
            >
              Nous écrire
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
