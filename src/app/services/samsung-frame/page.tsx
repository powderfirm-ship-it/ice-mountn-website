import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import { SiteLayout } from "@/components/site-layout";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";
import { SamsungFrameClient } from "./samsung-frame-client";

export const metadata: Metadata = {
  title: buildTitle("Samsung Frame TV Installation"),
  description: buildDescription("Expert Samsung Frame TV installation with zero-gap mounting and Art Mode setup. Transform your space into an art gallery."),
  alternates: {
    canonical: canonical("/services/samsung-frame"),
  },
  openGraph: {
    title: buildTitle("Samsung Frame TV Installation"),
    description: "Expert Samsung Frame TV installation with zero-gap mounting and Art Mode setup. Transform your space into an art gallery.",
    url: canonical("/services/samsung-frame"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Samsung Frame TV Installation"),
    description: "Expert Samsung Frame TV installation with zero-gap mounting and Art Mode setup. Transform your space into an art gallery.",
  },
};

export default function SamsungFramePage() {
  return (
    <SiteLayout>
      {/* JSON-LD (do not duplicate LocalBusiness on the same page) */}
      <JsonLd
        data={localBusinessJSONLD({
          url: canonical("/"),
          telephone: "+13238638146",
          logoUrl: `${canonical("/")}/favicon/site-icon-512.webp`,
          address: { city: "Los Angeles", region: "CA", country: "US" }
        })}
      />
      <JsonLd
        data={serviceJSONLD({
          url: canonical("/services/samsung-frame"),
          name: "Samsung Frame TV Installation",
          description: "Zero‑gap mounting, One Connect Box concealment, and Art Mode optimization.",
          areaName: "Los Angeles",
          providerUrl: canonical("/")
        })}
      />

      <SamsungFrameClient />
    </SiteLayout>
  );
}
