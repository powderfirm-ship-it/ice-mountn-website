import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import SoundbarMountingClient from "./soundbar-mounting-client";

export const metadata: Metadata = {
  title: buildTitle("Soundbar Mounting"),
  description: buildDescription("Professional soundbar and speaker mounting with optimal audio positioning"),
  alternates: {
    canonical: canonical("/services/soundbar-mounting"),
  },
  openGraph: {
    title: buildTitle("Soundbar Mounting"),
    description: "Professional soundbar and speaker mounting with optimal audio positioning",
    url: canonical("/services/soundbar-mounting"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Soundbar Mounting"),
    description: "Professional soundbar and speaker mounting with optimal audio positioning",
  },
};

export default function SoundbarMountingPage() {
  return <SoundbarMountingClient />;
}
