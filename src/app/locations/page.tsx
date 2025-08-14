import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import LocationsPageClient from "./locations-page-client";

export const metadata: Metadata = {
  title: buildTitle("TV Mounting Areas"),
  description: buildDescription("Professional TV mounting services throughout Los Angeles County"),
  alternates: {
    canonical: canonical("/locations"),
  },
  openGraph: {
    title: buildTitle("TV Mounting Areas"),
    description: "Professional TV mounting services throughout Los Angeles County",
    url: canonical("/locations"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("TV Mounting Areas"),
    description: "Professional TV mounting services throughout Los Angeles County",
  },
};

export default function LocationsPage() {
  return <LocationsPageClient />;
}
