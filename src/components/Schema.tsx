export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Carou Joaillier",
    image: "https://carou-joaillier.fr/og.jpg",
    "@id": "https://carou-joaillier.fr",
    url: "https://carou-joaillier.fr",
    telephone: "+33 2 97 84 28 77",
    email: "carou.joillier@orange.fr",
    priceRange: "€€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Place Notre Dame",
      addressLocality: "Larmor-Plage",
      postalCode: "56260",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.7064,
      longitude: -3.3786,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Jean-Marc Carou",
      jobTitle: "Maître joaillier",
    },
    foundingDate: "1992",
    areaServed: ["Larmor-Plage", "Lorient", "Morbihan", "Bretagne"],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
