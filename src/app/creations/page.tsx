import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Créations — bagues, alliances, pièces sur-mesure",
  description:
    "Découvrez les créations de l'atelier Carou Joaillier à Larmor-Plage : bagues de fiançailles, alliances, pendentifs, bracelets — pièces uniques façonnées à la main.",
  alternates: { canonical: "/creations" },
};

const PIECES = [
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=85",
    titre: "Solitaire « Marée »",
    cat: "Bague de fiançailles",
    detail: "Diamant taille brillant 0,75 ct, monture or blanc 18 carats.",
  },
  {
    src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=85",
    titre: "Alliance « Sillage »",
    cat: "Alliance",
    detail: "Or jaune 18 carats, finition mate brossée à la main.",
  },
  {
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=85",
    titre: "Pendentif « Bois sacré »",
    cat: "Pendentif",
    detail: "Émeraude de Colombie, pavage diamants, or rose 18 carats.",
  },
  {
    src: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1400&q=85",
    titre: "Collier « Estran »",
    cat: "Collier",
    detail: "Perles de culture Akoya, fermoir or blanc poli miroir.",
  },
  {
    src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=85",
    titre: "Bague « Atlantique »",
    cat: "Bague d'apparat",
    detail: "Saphir bleu de Ceylan taille coussin, double rang de diamants.",
  },
  {
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=85",
    titre: "Bracelet « Ker »",
    cat: "Bracelet",
    detail: "Maille tressée or jaune 18 carats, fermoir invisible signé.",
  },
  {
    src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=85",
    titre: "Chevalière « Larmor »",
    cat: "Chevalière",
    detail: "Or jaune 18 carats, plateau gravé d'armoiries familiales.",
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85",
    titre: "Boucles « Goémon »",
    cat: "Boucles d'oreilles",
    detail: "Diamants pavage croissant, or blanc 18 carats.",
  },
  {
    src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1400&q=85",
    titre: "Solitaire « Plein-vent »",
    cat: "Bague de fiançailles",
    detail: "Diamant taille princesse 1,02 ct, monture invisible or blanc.",
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
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-noir-velours/50 via-noir-velours/70 to-noir-velours" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-6">
              Créations
            </p>
            <h1 className="font-display italic text-ivoire text-6xl md:text-7xl lg:text-[88px] leading-[0.98] mb-8">
              Une signature par pièce.
            </h1>
            <p className="text-gris-perle text-lg max-w-2xl mx-auto leading-[1.6]">
              Chaque création présentée ici a été pensée, dessinée et exécutée
              à l&apos;atelier. Un aperçu de notre langage : sobriété,
              matières nobles, équilibre.
            </p>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {PIECES.map((p) => (
                <article key={p.titre} className="group">
                  <div className="relative aspect-square overflow-hidden bg-noir-profond mb-5">
                    <Image
                      src={p.src}
                      alt={p.titre}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-or-rose/0 group-hover:bg-or-rose/15 transition-colors duration-500" />
                  </div>
                  <p className="text-or-sombre text-[10px] tracking-[0.32em] uppercase font-medium mb-2">
                    {p.cat}
                  </p>
                  <h3 className="font-display italic text-noir-velours text-2xl mb-2">
                    {p.titre}
                  </h3>
                  <p className="text-noir-velours/65 text-sm leading-[1.6]">
                    {p.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-noir-velours">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
            <h2 className="font-display italic text-ivoire text-5xl md:text-6xl leading-[1.05] mb-8">
              Et la vôtre ?
            </h2>
            <p className="text-gris-perle text-lg max-w-xl mx-auto mb-12 leading-[1.6]">
              Aucune des pièces présentées n&apos;a été conçue deux fois.
              Toutes naissent du même geste : écouter, dessiner, exécuter.
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
