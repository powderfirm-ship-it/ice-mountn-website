import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import HomePageClient from "./home-page-client";

export const metadata: Metadata = {
  title: buildTitle("TV Mounting Los Angeles"),
  description: buildDescription(
    "Professional TV mounting and home theater installation services throughout Los Angeles. Same-day service, licensed technicians, renter-friendly mounting."
  ),
  alternates: {
    canonical: canonical("/"),
  },
  openGraph: {
    title: buildTitle("TV Mounting Los Angeles"),
    description: "Professional TV mounting and home theater installation services throughout Los Angeles. Same-day service, licensed technicians, renter-friendly mounting.",
    url: canonical("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("TV Mounting Los Angeles"),
    description: "Professional TV mounting and home theater installation services throughout Los Angeles. Same-day service, licensed technicians, renter-friendly mounting.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
