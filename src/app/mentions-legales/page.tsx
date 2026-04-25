import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site carou-joaillier.fr — informations sur l'éditeur, l'hébergeur et la propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-ivoire pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
            Informations légales
          </p>
          <h1 className="font-display italic text-noir-velours text-5xl md:text-6xl leading-[1.05] mb-12">
            Mentions légales.
          </h1>

          <div className="prose-content space-y-10 text-noir-velours/85 leading-[1.8]">
            <Section title="Éditeur du site">
              <p>
                <strong>Carou Joaillier</strong>
                <br />
                Entreprise individuelle exploitée par Jean-Marc Carou
                <br />
                1 Place Notre Dame — 56260 Larmor-Plage
                <br />
                Téléphone : 02 97 84 28 77
                <br />
                Email : carou.joillier@orange.fr
                <br />
                SIREN : 342 664 752
              </p>
              <p>
                Directeur de la publication : Jean-Marc Carou.
              </p>
            </Section>

            <Section title="Hébergement">
              <p>
                Le site carou-joaillier.fr est hébergé par Vercel Inc.,
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
                <br />
                Site : vercel.com
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur le site
                (textes, photographies, dessins, logos, signes distinctifs,
                bases de données) est la propriété exclusive de Carou Joaillier
                ou de ses ayants droit. Toute reproduction, représentation,
                modification, publication, transmission ou exploitation, totale
                ou partielle, sous quelque forme que ce soit, est strictement
                interdite sans autorisation écrite préalable.
              </p>
              <p>
                Les photographies d&apos;ambiance utilisées en illustration sont
                fournies par Unsplash sous licence libre (Unsplash License).
              </p>
            </Section>

            <Section title="Liens externes">
              <p>
                Le site peut contenir des liens vers des sites tiers.
                Carou Joaillier ne saurait être tenu responsable du contenu
                de ces sites ni de leur politique en matière de protection
                des données personnelles.
              </p>
            </Section>

            <Section title="Conception & réalisation">
              <p>
                Site conçu et développé par{" "}
                <a
                  href="https://kitello.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-or-sombre hover:text-noir-velours underline"
                >
                  Kitello
                </a>
                .
              </p>
            </Section>

            <Section title="Droit applicable">
              <p>
                Le présent site est soumis au droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display italic text-noir-velours text-2xl md:text-3xl mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-[15px]">{children}</div>
    </section>
  );
}
