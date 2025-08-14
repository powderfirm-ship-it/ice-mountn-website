import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import StandardTVMountClient from "./standard-tv-mount-client";

export const metadata: Metadata = {
  title: buildTitle("Standard TV Mount"),
  description: buildDescription(
    "Professional TV wall mounting service starting at $149. Same-day installation available throughout Los Angeles County."
  ),
  alternates: {
    canonical: canonical("/services/standard-tv-mount"),
  },
  openGraph: {
    title: buildTitle("Standard TV Mount"),
    description: "Professional TV wall mounting service starting at $149. Same-day installation available throughout Los Angeles County.",
    url: canonical("/services/standard-tv-mount"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Standard TV Mount"),
    description: "Professional TV wall mounting service starting at $149. Same-day installation available throughout Los Angeles County.",
  },
};

export default function StandardTVMountPage() {
  return <StandardTVMountClient />;
}
