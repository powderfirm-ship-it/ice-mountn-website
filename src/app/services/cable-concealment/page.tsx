import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";
import { BASE } from "@/lib/urls";
import JsonLd from "@/components/seo/JsonLd";
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



export default function Page() {
  return (
    <>
      {/* JSON-LD Schema */}
      <JsonLd
        data={localBusinessJSONLD({
          url: canonical("/"),
          telephone: "+13238638146",
          logoUrl: `${BASE}/images/brand/ice-mountn-tv-mounting-logo.webp`,
          address: { city: "Los Angeles", region: "CA", country: "US" }
        })}
      />
      <JsonLd
        data={serviceJSONLD({
          url: canonical("/services/cable-concealment"),
          name: "Cable Concealment",
          description: "Professional in-wall cable concealment with new outlet installation behind TV for a completely wire-free look.",
          areaName: "Los Angeles",
          providerUrl: canonical("/")
        })}
      />
      <CableConcealmentClient />
    </>
  );
}
