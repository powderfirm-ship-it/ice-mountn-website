import type { Metadata } from "next";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";
import { BASE } from "@/lib/urls";
import JsonLd from "@/components/seo/JsonLd";
import OverFireplaceMountClient from "./client";

export const metadata: Metadata = {
  title: buildTitle("Fireplace TV Mounting"),
  description: buildDescription("Professional over-fireplace TV mounting with heat-safe clearance and licensed installers"),
  alternates: {
    canonical: canonical("/services/over-fireplace-mount"),
  },
  openGraph: {
    title: buildTitle("Fireplace TV Mounting"),
    description: "Professional over-fireplace TV mounting with heat-safe clearance and licensed installers",
    url: canonical("/services/over-fireplace-mount"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Fireplace TV Mounting"),
    description: "Professional over-fireplace TV mounting with heat-safe clearance and licensed installers",
  },
};

export default function OverFireplaceMountPage() {
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
          url: canonical("/services/over-fireplace-mount"),
          name: "Fireplace TV Mounting",
          description: "Professional over-fireplace TV mounting with heat-safe clearance and licensed installers",
          areaName: "Los Angeles",
          providerUrl: canonical("/")
        })}
      />
      <OverFireplaceMountClient />
    </>
  );
}
