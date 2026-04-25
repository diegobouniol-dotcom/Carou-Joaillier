import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "Créations — bagues, alliances, pièces sur-mesure",
  description:
    "Découvrez les créations de l'atelier Carou Joaillier à Larmor-Plage : bagues, restaurations, sertissage et savoir-faire artisanal.",
  alternates: { canonical: "/creations" },
};

const PIECES = [
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

export default function CreationsPage() {
  return (
    <>
      <Header />
      <main className="bg-ivoire">
        {/* Hero */}
        <section className="relative bg-noir-velours pt-40 pb-24 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/02-bague-pierres-creation-HD.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-noir-velours/60 via-noir-velours/80 to-noir-velours" />
          <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-6">
              Créations
            </p>
            <h1 className="font-display italic text-ivoire text-6xl md:text-7xl lg:text-[88px] leading-[0.98] mb-8">
              Une signature par pièce.
            </h1>
            <p className="font-display italic text-gris-perle text-2xl md:text-[24px] max-w-2xl mx-auto leading-[1.5]">
              Une sélection de réalisations récentes. D&apos;autres pièces
              sont à découvrir en boutique, place Notre Dame.
            </p>
          </div>
        </section>

        {/* Galerie + lightbox */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Lightbox items={PIECES} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-noir-velours">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
            <h2 className="font-display italic text-ivoire text-5xl md:text-6xl leading-[1.05] mb-8">
              Et la vôtre ?
            </h2>
            <p className="text-gris-perle text-lg max-w-xl mx-auto mb-12 leading-[1.6]">
              Aucune pièce n&apos;est conçue deux fois. Toutes naissent du
              même geste : écouter, dessiner, exécuter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sur-mesure"
                className="inline-flex items-center justify-center bg-or-rose hover:bg-or-sombre text-noir-velours text-[12px] tracking-[0.22em] uppercase font-semibold px-8 py-4 transition-colors"
              >
                Le sur-mesure
              </Link>
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
