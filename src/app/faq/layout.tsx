import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: buildTitle("FAQ"),
  description: buildDescription("Get answers to frequently asked questions about TV mounting, pricing, same-day service, and installation process."),
  keywords: "TV mounting FAQ, Los Angeles TV installation questions, mounting service pricing, same day TV mounting, professional installation questions",
  alternates: {
    canonical: canonical("/faq"),
  },
  openGraph: {
    title: buildTitle("FAQ"),
    description: "Find answers to common questions about our professional TV mounting services in Los Angeles. Same-day installation available.",
    url: canonical("/faq"),
    type: "website",
    images: [canonical("/images/brand/ice-mountn-tv-mounting-logo.webp")],
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("FAQ"),
    description: "Find answers to common questions about our professional TV mounting services in Los Angeles. Same-day installation available.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
