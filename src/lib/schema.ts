// src/lib/schema.ts
export type PostalBits = {
  street?: string;
  city: string;
  region: string;
  postalCode?: string;
  country: string;
};

export type LocalBizInput = {
  id?: string;                 // @id
  name?: string;
  url: string;
  telephone: string;           // +13238638146 format preferred
  email?: string;
  logoUrl: string;
  imageUrl?: string;
  sameAs?: string[];
  address: PostalBits;
  priceRange?: string;         // "$$"
  openingHours?: string[];     // ["Mo,Tu,Th,Fr,Sa,Su 08:00-20:00"]
};

export function localBusinessJSONLD(i: LocalBizInput) {
  // REQUIRED properties for LocalBusiness / HomeAndConstructionBusiness
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": i.id ?? `${i.url}#business`,
    name: i.name ?? "Ice Mount'n — TV & Home Audio Installations",
    url: i.url,
    telephone: i.telephone,
    email: i.email ?? "contact@icemountn.com",
    logo: i.logoUrl,
    image: i.imageUrl ?? i.logoUrl,
    priceRange: i.priceRange ?? "$$",
    sameAs: i.sameAs ?? [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: i.address.street ?? "",
      addressLocality: i.address.city,
      addressRegion: i.address.region,
      postalCode: i.address.postalCode ?? "",
      addressCountry: i.address.country
    },
    openingHours: i.openingHours ?? ["Mo,Tu,Th,Fr,Sa,Su 08:00-20:00"],
    areaServed: { "@type": "AdministrativeArea", name: "Los Angeles County" }
  };
}

// Use Service schema WITHOUT invalid 'serviceType' property.
// Put the service name into 'name' or 'category'.
export function serviceJSONLD(params: {
  id?: string;
  url: string;
  name: string;                  // e.g., "Samsung Frame TV Installation"
  description?: string;
  areaName?: string;             // e.g., "Santa Monica"
  providerUrl: string;           // business url
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": params.id ?? `${params.url}#service`,
    name: params.name,
    url: params.url,
    category: "TV Mounting",
    description: params.description ?? params.name,
    areaServed: params.areaName ? { "@type": "Place", name: params.areaName } : undefined,
    provider: { "@type": "Organization", name: "Ice Mount'n", url: params.providerUrl }
  };
}

export function faqPageJSONLD(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer }
    }))
  };
}

export function breadcrumbsJSONLD(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: entry.name,
      item: entry.item
    }))
  };
}
