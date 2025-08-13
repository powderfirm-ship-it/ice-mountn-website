import type { Metadata } from "next";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";
import { BASE } from "@/lib/urls";
import JsonLd from "@/components/seo/JsonLd";
import SamsungFrameClient from "./client";

export const metadata: Metadata = {
  title: buildTitle("Samsung Frame TV"),
  description: buildDescription("Professional Samsung Frame TV installation with zero-gap mounting and Art Mode setup"),
  alternates: {
    canonical: canonical("/services/samsung-frame"),
  },
  openGraph: {
    title: buildTitle("Samsung Frame TV"),
    description: "Professional Samsung Frame TV installation with zero-gap mounting and Art Mode setup",
    url: canonical("/services/samsung-frame"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Samsung Frame TV"),
    description: "Professional Samsung Frame TV installation with zero-gap mounting and Art Mode setup",
  },
};

export default function SamsungFramePage() {
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
          url: canonical("/services/samsung-frame"),
          name: "Samsung Frame TV Installation",
          description: "Professional Samsung Frame TV installation with zero-gap mounting and Art Mode setup",
          areaName: "Los Angeles",
          providerUrl: canonical("/")
        })}
      />
      <SamsungFrameClient />
    </>
  );
}
