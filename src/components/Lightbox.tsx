"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Item = {
  src: string;
  badge: string;
  titre: string;
  description: string;
};

export default function Lightbox({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight")
        setOpen((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setOpen((i) =>
          i === null ? null : (i - 1 + items.length) % items.length
        );
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, items.length]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
        {items.map((item, i) => (
          <article
            key={item.titre}
            className="group w-full max-w-[380px] border border-or-rose/20 hover:border-or-rose/60 transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="block w-full text-left"
              aria-label={`Agrandir : ${item.titre}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-noir-profond">
                <Image
                  src={item.src}
                  alt={item.titre}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-or-rose text-noir-velours text-[10px] tracking-[0.28em] uppercase font-semibold px-3 py-1.5">
                  {item.badge}
                </div>
                <div className="absolute inset-0 bg-noir-velours/0 group-hover:bg-noir-velours/15 transition-colors" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-noir-velours/80 text-ivoire text-[10px] tracking-[0.28em] uppercase px-3 py-1.5">
                  Agrandir
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display italic text-noir-velours text-2xl mb-2 leading-tight">
                  {item.titre}
                </h3>
                <p className="text-noir-velours/65 text-sm leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-noir-velours/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-12"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(null);
            }}
            aria-label="Fermer"
            className="absolute top-6 right-6 text-ivoire hover:text-or-rose text-3xl leading-none w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(
                (i) => ((i ?? 0) - 1 + items.length) % items.length
              );
            }}
            aria-label="Précédent"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivoire hover:text-or-rose text-4xl px-3 py-2"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-5xl aspect-[3/4] md:aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[open].src}
              alt={items[open].titre}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="mt-6 text-center max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-or-rose text-[10px] tracking-[0.32em] uppercase font-medium mb-2">
              {items[open].badge}
            </p>
            <h3 className="font-display italic text-ivoire text-3xl mb-2">
              {items[open].titre}
            </h3>
            <p className="text-gris-perle text-sm leading-[1.6]">
              {items[open].description}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => ((i ?? 0) + 1) % items.length);
            }}
            aria-label="Suivant"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivoire hover:text-or-rose text-4xl px-3 py-2"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
