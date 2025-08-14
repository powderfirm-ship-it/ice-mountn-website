import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import SameDayTVMountingClient from "./same-day-tv-mounting-client";

export const metadata: Metadata = {
  title: buildTitle("Same Day TV Mounting"),
  description: buildDescription(
    "Same-day TV mounting service available today throughout Los Angeles. Renter-friendly, licensed technicians with urgent installation."
  ),
  alternates: {
    canonical: canonical("/same-day-tv-mounting"),
  },
  openGraph: {
    title: buildTitle("Same Day TV Mounting"),
    description: "Same-day TV mounting service available today throughout Los Angeles. Renter-friendly, licensed technicians with urgent installation.",
    url: canonical("/same-day-tv-mounting"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Same Day TV Mounting"),
    description: "Same-day TV mounting service available today throughout Los Angeles. Renter-friendly, licensed technicians with urgent installation.",
  },
};

export default function SameDayTVMountingPage() {
  return <SameDayTVMountingClient />;
}
