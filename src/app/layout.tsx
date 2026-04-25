import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carou-joaillier.fr"),
  title: {
    default: "Carou Joaillier — Atelier de joaillerie sur-mesure à Larmor-Plage",
    template: "%s | Carou Joaillier",
  },
  description:
    "Atelier de joaillerie indépendant à Larmor-Plage, place Notre Dame. Création sur-mesure, transformation et restauration de bijoux par Jean-Marc Carou, maître joaillier depuis 1992.",
  keywords: [
    "joaillier Larmor-Plage",
    "bijoutier Larmor",
    "bague de fiançailles sur-mesure Morbihan",
    "alliance Lorient",
    "transformation bijou ancien Bretagne",
    "atelier joaillerie Bretagne Sud",
    "Carou Joaillier",
  ],
  authors: [{ name: "Jean-Marc Carou" }],
  creator: "Carou Joaillier",
  publisher: "Carou Joaillier",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Carou Joaillier",
    title: "Carou Joaillier — Joaillier à Larmor-Plage depuis 1992",
    description:
      "Création joaillière sur-mesure, transformation et restauration. Place Notre Dame, Larmor-Plage.",
    url: "https://carou-joaillier.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carou Joaillier — Larmor-Plage",
    description:
      "Atelier de joaillerie sur-mesure depuis 1992. Place Notre Dame, Larmor-Plage.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivoire text-noir-velours">
        {children}
      </body>
    </html>
  );
}
