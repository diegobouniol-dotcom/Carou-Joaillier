"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Créations", href: "/creations" },
  { label: "Sur-mesure", href: "/sur-mesure" },
  { label: "La Maison", href: "/#maison" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-noir-velours/95 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="wordmark text-ivoire text-3xl md:text-4xl tracking-[0.22em]">
            CAROU
          </span>
          <span className="text-or-rose text-[10px] md:text-[11px] mt-1 font-medium tracking-[0.32em] uppercase">
            Joaillier · Larmor-Plage
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ivoire/85 hover:text-or-rose text-[13px] tracking-[0.18em] uppercase font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-or-rose hover:bg-or-sombre text-noir-velours text-[12px] tracking-[0.22em] uppercase font-semibold px-5 py-3 transition-colors"
          >
            Prendre rendez-vous
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden p-2 text-ivoire"
          >
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className="block w-4 h-px bg-current ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-noir-velours border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-ivoire/85 hover:text-or-rose text-sm tracking-[0.18em] uppercase font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-or-rose text-noir-velours text-[12px] tracking-[0.22em] uppercase font-semibold px-5 py-3"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
