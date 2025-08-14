import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import ServicesPageClient from "./services-page-client";

export const metadata: Metadata = {
  title: buildTitle("TV Mounting Services"),
  description: buildDescription(
    "Complete TV mounting and home theater installation services throughout Los Angeles. From basic mounting to specialized installations."
  ),
  alternates: {
    canonical: canonical("/services"),
  },
  openGraph: {
    title: buildTitle("TV Mounting Services"),
    description: "Complete TV mounting and home theater installation services throughout Los Angeles. From basic mounting to specialized installations.",
    url: canonical("/services"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("TV Mounting Services"),
    description: "Complete TV mounting and home theater installation services throughout Los Angeles. From basic mounting to specialized installations.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
