import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des données personnelles — site carou-joaillier.fr.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-ivoire pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-or-sombre text-[11px] tracking-[0.32em] uppercase font-medium mb-5">
            RGPD
          </p>
          <h1 className="font-display italic text-noir-velours text-5xl md:text-6xl leading-[1.05] mb-12">
            Politique de confidentialité.
          </h1>

          <div className="space-y-10 text-noir-velours/85 leading-[1.8]">
            <Section title="Responsable de traitement">
              <p>
                Le responsable du traitement des données collectées via le
                site carou-joaillier.fr est <strong>Carou Joaillier</strong>,
                1 Place Notre Dame, 56260 Larmor-Plage. SIREN 342 664 752.
                Contact : carou.joillier@orange.fr — 02 97 84 28 77.
              </p>
            </Section>

            <Section title="Données collectées">
              <p>
                Nous collectons uniquement les données que vous nous transmettez
                volontairement via le formulaire de contact :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[15px]">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Type de projet</li>
                <li>Contenu de votre message</li>
              </ul>
              <p>
                Aucune donnée bancaire n&apos;est collectée par le site.
                Aucun cookie de mesure d&apos;audience ou publicitaire n&apos;est
                déposé.
              </p>
            </Section>

            <Section title="Finalités du traitement">
              <p>Vos données sont utilisées uniquement pour :</p>
              <ul className="list-disc pl-6 space-y-1 text-[15px]">
                <li>répondre à votre demande et organiser un rendez-vous,</li>
                <li>
                  assurer le suivi de votre projet de création joaillière le
                  cas échéant,
                </li>
                <li>respecter nos obligations légales et comptables.</li>
              </ul>
            </Section>

            <Section title="Base légale">
              <p>
                Le traitement repose sur votre consentement (formulaire de
                contact) et sur l&apos;exécution de mesures précontractuelles
                ou contractuelles dans le cadre d&apos;un projet de création.
              </p>
            </Section>

            <Section title="Durée de conservation">
              <p>
                Les messages reçus sont conservés trois ans à compter du
                dernier contact. Les données contractuelles (devis, factures)
                sont conservées dix ans conformément aux obligations
                comptables.
              </p>
            </Section>

            <Section title="Destinataires">
              <p>
                Vos données sont strictement réservées à Carou Joaillier. Elles
                ne sont jamais cédées, louées ni revendues à des tiers. Le
                formulaire est traité via Formspree, sous-traitant technique
                hébergé aux États-Unis et engagé par contrat de
                sous-traitance RGPD.
              </p>
            </Section>

            <Section title="Vos droits">
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés,
                vous disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement, de limitation, d&apos;opposition et de
                portabilité de vos données. Pour les exercer, écrivez-nous à{" "}
                <a
                  href="mailto:carou.joillier@orange.fr"
                  className="text-or-sombre hover:text-noir-velours underline"
                >
                  carou.joillier@orange.fr
                </a>
                . Vous pouvez également introduire une réclamation auprès de
                la CNIL (cnil.fr).
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Le site n&apos;utilise aucun cookie de suivi, de mesure
                d&apos;audience ou de publicité. Seuls des cookies techniques
                strictement nécessaires au fonctionnement du site peuvent être
                déposés ; ils ne nécessitent pas de consentement préalable.
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
