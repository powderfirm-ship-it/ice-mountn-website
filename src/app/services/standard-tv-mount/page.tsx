import type { Metadata } from "next";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";
import { BASE } from "@/lib/urls";
import JsonLd from "@/components/seo/JsonLd";
import StandardTVMountClient from "./client";

export const metadata: Metadata = {
  title: buildTitle("Standard TV Mounting"),
  description: buildDescription("Professional standard TV wall mounting with licensed, renter-friendly installers"),
  alternates: {
    canonical: canonical("/services/standard-tv-mount"),
  },
  openGraph: {
    title: buildTitle("Standard TV Mounting"),
    description: "Professional standard TV wall mounting with licensed, renter-friendly installers",
    url: canonical("/services/standard-tv-mount"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Standard TV Mounting"),
    description: "Professional standard TV wall mounting with licensed, renter-friendly installers",
  },
};

export default function StandardTVMountPage() {
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
          url: canonical("/services/standard-tv-mount"),
          name: "Standard TV Mounting",
          description: "Professional standard TV wall mounting with licensed, renter-friendly installers",
          areaName: "Los Angeles",
          providerUrl: canonical("/")
        })}
      />
      <StandardTVMountClient />
    </>
  );
}
