import type { Metadata } from "next";
import Script from "next/script";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import CableConcealmentClient from "./client";

export const metadata: Metadata = {
  title: buildTitle("In‑Wall Cable Concealment"),
  description: buildDescription(
    "Completely hide TV cables inside your wall with a code‑compliant new outlet behind the TV and a clean, professional finish."
  ),
  alternates: {
    canonical: canonical("/services/cable-concealment"),
  },
  openGraph: {
    title: buildTitle("In‑Wall Cable Concealment"),
    description:
      "Hide TV power/HDMI in‑wall with a new outlet behind the TV. Code‑compliant work and a professional, paint‑ready finish.",
    url: canonical("/services/cable-concealment"),
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("In‑Wall Cable Concealment"),
    description:
      "Code‑compliant in‑wall cable routing with a new outlet behind your TV and a clean, professional finish.",
  },
};

function jsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "In‑Wall Cable Concealment",
    provider: {
      "@type": "LocalBusiness",
      name: "Ice Mount'n — Elite TV & Home Audio Installations",
      url: canonical("/"),
      areaServed: "Los Angeles, CA",
      telephone: "+1-323-863-8146",
    },
    serviceType: "TV Cable Concealment / Electrical Outlet Behind TV",
    areaServed: [
      "Santa Monica, CA",
      "West Hollywood, CA",
      "Beverly Hills, CA",
      "Downtown LA, CA",
      "Culver City, CA",
      "Glendale, CA",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonical("/services/cable-concealment"),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        name: "From $199",
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
