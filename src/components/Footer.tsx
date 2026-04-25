import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-noir-profond text-ivoire/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex flex-col leading-none mb-6">
            <span className="wordmark text-ivoire text-3xl tracking-[0.22em]">
              CAROU
            </span>
            <span className="text-or-rose text-[10px] mt-1 font-medium tracking-[0.32em] uppercase">
              Joaillier · Larmor-Plage
            </span>
          </div>
          <address className="not-italic space-y-2 text-sm leading-relaxed">
            <p>1 Place Notre Dame</p>
            <p>56260 Larmor-Plage</p>
            <p className="pt-3">
              <a
                href="tel:+33297842877"
                className="hover:text-or-rose transition-colors"
              >
                02 97 84 28 77
              </a>
            </p>
            <p>
              <a
                href="mailto:carou.joillier@orange.fr"
                className="hover:text-or-rose transition-colors break-all"
              >
                carou.joillier@orange.fr
              </a>
            </p>
          </address>
        </div>

        <div>
          <h4 className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-semibold mb-6">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/creations" className="hover:text-or-rose transition-colors">Créations</Link></li>
            <li><Link href="/sur-mesure" className="hover:text-or-rose transition-colors">Sur-mesure</Link></li>
            <li><Link href="/#maison" className="hover:text-or-rose transition-colors">La Maison</Link></li>
            <li><Link href="/contact" className="hover:text-or-rose transition-colors">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-or-rose transition-colors">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-or-rose transition-colors">Politique de confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-or-rose text-[11px] tracking-[0.32em] uppercase font-semibold mb-6">
            Horaires & Accès
          </h4>
          <ul className="space-y-1.5 text-sm mb-6">
            <li className="flex justify-between gap-4"><span>Mardi — Vendredi</span><span>9h30 — 12h · 14h — 18h30</span></li>
            <li className="flex justify-between gap-4"><span>Samedi</span><span>9h30 — 18h</span></li>
            <li className="flex justify-between gap-4 text-ivoire/50"><span>Dimanche & Lundi</span><span>Fermé</span></li>
          </ul>
          <div className="aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10">
            <iframe
              title="Plan Carou Joaillier"
              src="https://www.google.com/maps?q=1+Place+Notre+Dame+56260+Larmor-Plage&output=embed"
              className="w-full h-full grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.18em] uppercase text-ivoire/50">
          <p>© 2026 Carou Joaillier — SIREN 342 664 752</p>
          <p>
            Site par{" "}
            <a
              href="https://kitello.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-or-rose transition-colors"
            >
              Kitello
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
