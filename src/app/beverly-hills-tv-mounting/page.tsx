import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import BeverlyHillsTVMountingClient from "./beverly-hills-tv-mounting-client";

export const metadata: Metadata = {
  title: buildTitle("TV Mounting Beverly Hills"),
  description: buildDescription(
    "Professional TV mounting and home theater installation services in Beverly Hills, CA. Same-day service available for luxury homes."
  ),
  alternates: {
    canonical: canonical("/beverly-hills-tv-mounting"),
  },
  openGraph: {
    title: buildTitle("TV Mounting Beverly Hills"),
    description: "Professional TV mounting and home theater installation services in Beverly Hills, CA. Same-day service available for luxury homes.",
    url: canonical("/beverly-hills-tv-mounting"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("TV Mounting Beverly Hills"),
    description: "Professional TV mounting and home theater installation services in Beverly Hills, CA. Same-day service available for luxury homes.",
  },
};

export default function BeverlyHillsTVMountingPage() {
  return <BeverlyHillsTVMountingClient />;
}
