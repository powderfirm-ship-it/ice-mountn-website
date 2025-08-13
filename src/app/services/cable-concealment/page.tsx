import type { Metadata } from "next";
import Script from "next/script";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import CableConcealmentClient from "./client";

export const metadata: Metadata = {
  title: buildTitle("Cable Concealment"),
  description: buildDescription(
    "Hide TV cables in-wall with new outlet behind TV. Code-compliant work and professional finish."
  ),
  alternates: {
    canonical: canonical("/services/cable-concealment"),
  },
  openGraph: {
    title: buildTitle("Cable Concealment"),
    description:
      "Hide TV cables in-wall with new outlet behind TV. Code-compliant work and professional finish.",
    url: canonical("/services/cable-concealment"),
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Cable Concealment"),
    description:
      "Code-compliant in-wall cable routing with new outlet behind TV and professional finish.",
  },
};

function jsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cable Concealment",
    provider: {
      "@type": "LocalBusiness",
      name: "Ice Mount'n",
      url: canonical("/"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US"
      },
      telephone: "+1-323-863-8146",
    },
    description: "Professional in-wall cable concealment with new outlet installation behind TV for a completely wire-free look.",
    areaServed: [
      { "@type": "City", name: "Santa Monica" },
      { "@type": "City", name: "West Hollywood" },
      { "@type": "City", name: "Beverly Hills" },
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Culver City" },
      { "@type": "City", name: "Glendale" }
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonical("/services/cable-concealment"),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        name: "From $199",
        price: "199",
        priceCurrency: "USD"
      },
    },
  };
  return JSON.stringify(data);
}

export default function Page() {
  return (
    <>
      {/* JSON‑LD for SEO (no hydration cost) */}
      <Script
        id="ld-cable-concealment"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd() }}
      />
      <CableConcealmentClient />
    </>
  );
}
