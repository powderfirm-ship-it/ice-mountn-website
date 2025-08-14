import type { Metadata } from "next";
import { canonical, buildTitle, buildDescription } from "@/lib/seo";
import { SiteLayout } from "@/components/site-layout";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: buildTitle("FAQ"),
  description: buildDescription(
    "Get comprehensive answers to common questions about our professional TV mounting and home theater installation services in Los Angeles."
  ),
  alternates: {
    canonical: canonical("/faq"),
  },
  openGraph: {
    title: buildTitle("FAQ"),
    description: "Get comprehensive answers to common questions about our professional TV mounting and home theater installation services in Los Angeles.",
    url: canonical("/faq"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle("FAQ"),
    description: "Get comprehensive answers to common questions about our professional TV mounting and home theater installation services in Los Angeles.",
  },
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <div className="bg-white pt-8">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Get comprehensive answers to common questions about our professional TV mounting and home theater installation services in Los Angeles.
          </p>
        </div>
      </div>
      <FAQSection />
    </SiteLayout>
  );
}
