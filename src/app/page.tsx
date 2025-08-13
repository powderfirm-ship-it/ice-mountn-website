'use client';

import { SiteLayout } from "@/components/site-layout";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { ReviewsSection } from "@/components/reviews-section";
import { AreasSection } from "@/components/areas-section";
import { openBooking } from "@/utils/housecall-pro";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <div id="services">
        <ServicesGrid />
      </div>
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="areas">
        <AreasSection />
      </div>
      <div id="gallery">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            <p className="text-gray-600 mb-8">See our professional TV mounting and home theater installations</p>
            <div className="max-w-4xl mx-auto [column-count:1] md:[column-count:2] lg:[column-count:3] gap-6 [column-gap:1.5rem]">
              {[
                {
                  src: "/images/stock/gallery-01.webp",
                  alt: "55-inch TV mounted on drywall, wire concealment, Hollywood"
                },
                {
                  src: "/images/stock/gallery-02.webp",
                  alt: "Over-fireplace TV mount with mantel clearance, Pasadena"
                },
                {
                  src: "/images/stock/gallery-03.webp",
                  alt: "TV with floating shelf install, Culver City"
                },
                {
                  src: "/images/stock/gallery-04.webp",
                  alt: "75-inch TV mount with tilt bracket, Downtown LA"
                },
                {
                  src: "/images/stock/gallery-05.webp",
                  alt: "Bedroom TV wall mount with in-wall cable pass-through, Venice"
                },
                {
                  src: "/images/stock/gallery-06.webp",
                  alt: "Slim mount installation in condo living room, Koreatown"
                }
              ].map((img, idx) => (
                <div key={idx} className="mb-6 break-inside-avoid rounded-2xl overflow-hidden group">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Popular service areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Popular service areas</h2>
          <p className="text-gray-600 mb-6 text-center">Quick links to our most requested city + service pages in Los Angeles.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
            <li><a href="https://icemountn-website.vercel.app/locations/beverly-hills/in-wall-cable" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">In-Wall Cable in Beverly Hills</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/beverly-hills/over-fireplace" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Over-Fireplace in Beverly Hills</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/beverly-hills/same-day" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Same-Day in Beverly Hills</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/beverly-hills/samsung-frame" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Samsung Frame in Beverly Hills</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/beverly-hills/soundbar-speaker" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Soundbar & Speaker in Beverly Hills</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/beverly-hills/standard-tv" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Standard TV in Beverly Hills</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/culver-city/in-wall-cable" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">In-Wall Cable in Culver City</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/culver-city/over-fireplace" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Over-Fireplace in Culver City</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/culver-city/same-day" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Same-Day in Culver City</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/culver-city/samsung-frame" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Samsung Frame in Culver City</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/culver-city/soundbar-speaker" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Soundbar & Speaker in Culver City</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/culver-city/standard-tv" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Standard TV in Culver City</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/santa-monica/in-wall-cable" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">In-Wall Cable in Santa Monica</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/santa-monica/over-fireplace" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Over-Fireplace in Santa Monica</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/santa-monica/same-day" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Same-Day in Santa Monica</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/santa-monica/samsung-frame" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Samsung Frame in Santa Monica</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/santa-monica/soundbar-speaker" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Soundbar & Speaker in Santa Monica</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/santa-monica/standard-tv" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Standard TV in Santa Monica</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/west-hollywood/in-wall-cable" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">In-Wall Cable in West Hollywood</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/west-hollywood/same-day" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Same-Day in West Hollywood</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/west-hollywood/samsung-frame" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Samsung Frame in West Hollywood</a></li>
            <li><a href="https://icemountn-website.vercel.app/locations/west-hollywood/soundbar-speaker" className="text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline">Soundbar & Speaker in West Hollywood</a></li>
          </ul>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"ItemList",
            "itemListElement": [
              { "@type":"ListItem", "position":1, "url":"https://icemountn-website.vercel.app/locations/beverly-hills/in-wall-cable" },
              { "@type":"ListItem", "position":2, "url":"https://icemountn-website.vercel.app/locations/beverly-hills/over-fireplace" },
              { "@type":"ListItem", "position":3, "url":"https://icemountn-website.vercel.app/locations/beverly-hills/same-day" },
              { "@type":"ListItem", "position":4, "url":"https://icemountn-website.vercel.app/locations/beverly-hills/samsung-frame" },
              { "@type":"ListItem", "position":5, "url":"https://icemountn-website.vercel.app/locations/beverly-hills/soundbar-speaker" },
              { "@type":"ListItem", "position":6, "url":"https://icemountn-website.vercel.app/locations/beverly-hills/standard-tv" },
              { "@type":"ListItem", "position":7, "url":"https://icemountn-website.vercel.app/locations/culver-city/in-wall-cable" },
              { "@type":"ListItem", "position":8, "url":"https://icemountn-website.vercel.app/locations/culver-city/over-fireplace" },
              { "@type":"ListItem", "position":9, "url":"https://icemountn-website.vercel.app/locations/culver-city/same-day" },
              { "@type":"ListItem", "position":10, "url":"https://icemountn-website.vercel.app/locations/culver-city/samsung-frame" },
              { "@type":"ListItem", "position":11, "url":"https://icemountn-website.vercel.app/locations/culver-city/soundbar-speaker" },
              { "@type":"ListItem", "position":12, "url":"https://icemountn-website.vercel.app/locations/culver-city/standard-tv" },
              { "@type":"ListItem", "position":13, "url":"https://icemountn-website.vercel.app/locations/santa-monica/in-wall-cable" },
              { "@type":"ListItem", "position":14, "url":"https://icemountn-website.vercel.app/locations/santa-monica/over-fireplace" },
              { "@type":"ListItem", "position":15, "url":"https://icemountn-website.vercel.app/locations/santa-monica/same-day" },
              { "@type":"ListItem", "position":16, "url":"https://icemountn-website.vercel.app/locations/santa-monica/samsung-frame" },
              { "@type":"ListItem", "position":17, "url":"https://icemountn-website.vercel.app/locations/santa-monica/soundbar-speaker" },
              { "@type":"ListItem", "position":18, "url":"https://icemountn-website.vercel.app/locations/santa-monica/standard-tv" },
              { "@type":"ListItem", "position":19, "url":"https://icemountn-website.vercel.app/locations/west-hollywood/in-wall-cable" },
              { "@type":"ListItem", "position":20, "url":"https://icemountn-website.vercel.app/locations/west-hollywood/same-day" },
              { "@type":"ListItem", "position":21, "url":"https://icemountn-website.vercel.app/locations/west-hollywood/samsung-frame" },
              { "@type":"ListItem", "position":22, "url":"https://icemountn-website.vercel.app/locations/west-hollywood/soundbar-speaker" }
            ]
          })}}
        />
      </section>
      {/* Contact CTA */}
      <section aria-labelledby="contact-heading" className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-600">
            Ready to get started? Contact us for a free estimate.
          </p>

          {/* BUTTON ROW */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <a href="tel:(323) 863-8146">Call (323) 863-8146</a>
            </Button>

            <Button
              onClick={openBooking}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-gray-50"
              aria-haspopup="dialog"
              aria-controls="hcp-booking"
              data-analytics="hcp-book"
            >
              Book Online
            </Button>
          </div>

          {/* LEGAL LINE */}
          <p className="mt-3 text-xs text-gray-500">
            By booking, you agree to our <a className="underline" href="/terms">Terms &amp; Conditions</a> and <a className="underline" href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
