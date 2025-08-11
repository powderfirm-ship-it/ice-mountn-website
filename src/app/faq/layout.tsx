import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Ice Mount'n - TV Mounting Questions & Answers Los Angeles",
  description: "Get answers to frequently asked questions about TV mounting, pricing, same-day service, and installation process. Professional TV mounting services throughout Los Angeles.",
  keywords: "TV mounting FAQ, Los Angeles TV installation questions, mounting service pricing, same day TV mounting, professional installation questions",
  openGraph: {
    title: "Ice Mount'n FAQ - TV Mounting Questions Answered",
    description: "Find answers to common questions about our professional TV mounting services in Los Angeles. Same-day installation available.",
            images: ["/images/brand/ice-mountn-tv-mounting-logo.webp"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
