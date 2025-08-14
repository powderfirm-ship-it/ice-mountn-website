import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import DiscountsPageClient from "./discounts-page-client";

export const metadata: Metadata = {
  title: buildTitle("Discounts & Special Offers"),
  description: buildDescription(
    "Special pricing for students, military, and veterans. TV mounting discounts and promotions available throughout Los Angeles."
  ),
  alternates: {
    canonical: canonical("/discounts"),
  },
  openGraph: {
    title: buildTitle("Discounts & Special Offers"),
    description: "Special pricing for students, military, and veterans. TV mounting discounts and promotions available throughout Los Angeles.",
    url: canonical("/discounts"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Discounts & Special Offers"),
    description: "Special pricing for students, military, and veterans. TV mounting discounts and promotions available throughout Los Angeles.",
  },
};

export default function DiscountsPage() {
  return <DiscountsPageClient />;
}
