import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import OverFireplaceMountClient from "./over-fireplace-mount-client";

export const metadata: Metadata = {
  title: buildTitle("Over-Fireplace TV Mounting"),
  description: buildDescription(
    "Expert over-fireplace TV mounting with heat-safe installation and pull-down brackets. Professional assessment included."
  ),
  alternates: {
    canonical: canonical("/services/over-fireplace-mount"),
  },
  openGraph: {
    title: buildTitle("Over-Fireplace TV Mounting"),
    description: "Expert over-fireplace TV mounting with heat-safe installation and pull-down brackets. Professional assessment included.",
    url: canonical("/services/over-fireplace-mount"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Over-Fireplace TV Mounting"),
    description: "Expert over-fireplace TV mounting with heat-safe installation and pull-down brackets. Professional assessment included.",
  },
};

export default function OverFireplaceMountPage() {
  return <OverFireplaceMountClient />;
}
