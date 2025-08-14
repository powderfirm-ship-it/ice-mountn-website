import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: buildTitle("Contact"),
  description: buildDescription(
    "Get your free TV mounting quote. Contact us for same-day service availability and professional installation."
  ),
  alternates: {
    canonical: canonical("/contact"),
  },
  openGraph: {
    title: buildTitle("Contact"),
    description: "Get your free TV mounting quote. Contact us for same-day service availability and professional installation.",
    url: canonical("/contact"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("Contact"),
    description: "Get your free TV mounting quote. Contact us for same-day service availability and professional installation.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
