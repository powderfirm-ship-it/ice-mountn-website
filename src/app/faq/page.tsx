'use client';

import { SiteLayout } from "@/components/site-layout";
import { FAQSection } from "@/components/faq-section";

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
