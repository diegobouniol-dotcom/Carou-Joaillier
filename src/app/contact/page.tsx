import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — atelier Carou Joaillier à Larmor-Plage",
  description:
    "Contactez l'atelier Carou Joaillier, place Notre Dame à Larmor-Plage. Prise de rendez-vous, projet sur-mesure, transformation de bijoux. 02 97 84 28 77.",
  alternates: { canonical: "/contact" },
};

const TYPES = [
  "Bague de fiançailles",
  "Alliance",
  "Création sur-mesure",
  "Transformation",
  "Restauration",
  "Estimation / conseil",
  "Autre",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-ivoire">
        {/* Hero */}
        <section className="bg-noir-velours pt-40 pb-20 md:pb-24">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
            <p className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-medium mb-6">
              Contact
            </p>
            <h1 className="font-display italic text-ivoire text-5xl md:text-7xl lg:text-[88px] leading-[0.98] mb-8">
              Pousser la porte de l&apos;atelier.
            </h1>
            <p className="text-gris-perle text-lg max-w-xl mx-auto leading-[1.6]">
              Du mardi au samedi, place Notre Dame. Sur rendez-vous pour les
              projets sur-mesure — en passant simplement pour les autres.
            </p>
          </div>
        </section>

        {/* Form + infos */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display italic text-noir-velours text-4xl mb-3">
                Nous écrire.
              </h2>
              <p className="text-noir-velours/65 mb-10 leading-[1.7]">
                Décrivez votre projet en quelques mots. Nous vous répondons
                sous 48h ouvrées.
              </p>

              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Nom & prénom" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Téléphone" name="phone" type="tel" />
                  <div>
                    <label className="block text-[11px] tracking-[0.22em] uppercase text-noir-velours/60 font-medium mb-2">
                      Type de projet
                    </label>
                    <select
                      name="type"
                      required
                      defaultValue=""
                      className="w-full bg-transparent border-b border-noir-velours/25 focus:border-or-rose outline-none py-3 text-noir-velours"
                    >
                      <option value="" disabled>
                        Choisir…
                      </option>
                      {TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.22em] uppercase text-noir-velours/60 font-medium mb-2">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-noir-velours/25 focus:border-or-rose outline-none py-3 text-noir-velours resize-none"
                    placeholder="Racontez-nous votre projet…"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-noir-velours/70 leading-[1.6]">
                  <input
                    type="checkbox"
                    name="rgpd"
                    required
                    className="mt-1 accent-or-rose"
                  />
                  <span>
                    J&apos;accepte que mes données soient utilisées pour
                    répondre à ma demande, conformément à la{" "}
                    <a
                      href="/politique-confidentialite"
                      className="underline hover:text-or-sombre"
                    >
                      politique de confidentialité
                    </a>
                    . Aucune donnée ne sera transmise à un tiers.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-noir-velours hover:bg-or-rose hover:text-noir-velours text-ivoire text-[12px] tracking-[0.22em] uppercase font-semibold px-10 py-4 transition-colors"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Coordonnées */}
            <aside className="lg:col-span-2 bg-noir-velours text-ivoire p-10 lg:p-12">
              <h2 className="font-display italic text-3xl mb-2">
                L&apos;atelier.
              </h2>
              <div className="divider-or w-16 mt-3 mb-8" />

              <div className="space-y-7 text-sm leading-[1.7]">
                <div>
                  <p className="text-or-rose text-[10px] tracking-[0.32em] uppercase font-medium mb-2">
                    Adresse
                  </p>
                  <p>
                    1 Place Notre Dame
                    <br />
                    56260 Larmor-Plage
                  </p>
                </div>

                <div>
                  <p className="text-or-rose text-[10px] tracking-[0.32em] uppercase font-medium mb-2">
                    Téléphone
                  </p>
                  <a
                    href="tel:+33297842877"
                    className="hover:text-or-rose transition-colors"
                  >
                    02 97 84 28 77
                  </a>
                </div>

                <div>
                  <p className="text-or-rose text-[10px] tracking-[0.32em] uppercase font-medium mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:carou.joillier@orange.fr"
                    className="hover:text-or-rose transition-colors break-all"
                  >
                    carou.joillier@orange.fr
                  </a>
                </div>

                <div>
                  <p className="text-or-rose text-[10px] tracking-[0.32em] uppercase font-medium mb-2">
                    Horaires
                  </p>
                  <ul className="space-y-1">
                    <li>Mardi — Vendredi · 9h30—12h · 14h—18h30</li>
                    <li>Samedi · 9h30—18h</li>
                    <li className="text-ivoire/50">
                      Dimanche & Lundi · Fermé
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-white/10">
                <iframe
                  title="Plan Carou Joaillier"
                  src="https://www.google.com/maps?q=1+Place+Notre+Dame+56260+Larmor-Plage&output=embed"
                  className="w-full h-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.22em] uppercase text-noir-velours/60 font-medium mb-2">
        {label}
        {required && <span className="text-or-sombre ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-noir-velours/25 focus:border-or-rose outline-none py-3 text-noir-velours"
      />
    </div>
  );
}
