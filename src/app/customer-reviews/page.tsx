'use client';

import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { openBooking } from "@/utils/housecall-pro";
import Image from "next/image";
import { ReviewsSection } from "@/components/reviews-section";

export default function CustomerReviewsPage() {
  const handleBookOnline = openBooking;

  // Aggregate Rating JSON-LD Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ice Mount'n",
    "description": "Professional TV mounting and home theater installation service in Los Angeles",
    "url": "https://www.icemountn.com",
    "telephone": "(323) 863-8146",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Ice Mount'n did an amazing job mounting our 65-inch TV in our Beverly Hills apartment. Completely renter-friendly and no damage to our walls!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael K."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Same-day service in Santa Monica! Professional installation and perfect cable concealment. Highly recommend for anyone in West LA."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent service for our UCLA student housing. The technician was respectful of our dorm policies and the installation looks perfect."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn",
      "https://www.yelp.com/biz/ice-mountn"
    ]
  };

  return (
    <SiteLayout>
      {/* Aggregate Rating JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema)
        }}
      />

      <div className="bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center">
              Ice Mount'n Customer Reviews
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Content Stack */}
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative">
                <Image
                  src="/images/reviews/hero.jpg"
                  alt="Home theater projection in living room"
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  width={1920}
                  height={1080}
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              {/* Trusted by Los Angeles Homeowners */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Trusted by Los Angeles Homeowners
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With a 4.9-star rating from over 150 satisfied customers, Ice Mount'n has established itself as Los Angeles' premier TV mounting service. Our professional installations are backed by years of experience and a commitment to excellence that shows in every review. From Beverly Hills to Santa Monica, homeowners trust us for clean, secure installations that transform their living spaces.
                </p>
              </div>

              {/* Same-Day Service You Can Count On */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Same-Day Service You Can Count On
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Don't wait weeks for your TV mounting installation. Ice Mount'n offers same-day service throughout Greater Los Angeles, ensuring your entertainment setup is ready when you are. Our expert technicians arrive on time, work efficiently, and leave your space cleaner than they found it. Experience the difference that professional, prompt service makes.
                </p>
              </div>

              {/* What Our Customers Say - Internal Review Cards */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b bg-gray-50">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    What Our Customers Say
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Read authentic reviews from real customers
                  </p>
                </div>

                {/* Local Reviews Section */}
                <div className="relative">
                  <ReviewsSection />
                </div>
              </div>
            </div>

            {/* Right Column - Housecall Pro Reviews Iframe */}
            <div className="space-y-6">
              {/* Housecall Pro Reviews */}
              <div className="rounded-lg overflow-hidden border bg-white">
                <iframe
                  src="https://client.housecallpro.com/reviews/Ice-Mount%27n/afef05b9-206d-471c-a01c-1a5944da15f0/"
                  title="Ice Mount'n verified customer reviews"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  style={{ aspectRatio: "3 / 5", minHeight: 560, border: 0 }}
                />
              </div>

              {/* Service Overview */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Service Overview
                </h3>
                <p className="text-gray-700">
                  Ice Mount'n provides professional TV mounting and home theater installation in Los Angeles, focused on safe installation, clean cable management,
                  and a reliable finish that looks great in everyday use. Every job includes a quick on-site assessment to confirm wall
                  type and mounting hardware, tidy routing of power and A/V lines, and a final level/safety check. If your setup needs
                  extras—like soundbar brackets, in-wall routing, or device concealment—we'll explain options and pricing before we start.
                  Our goal is a crisp, secure installation that fits your space, preserves manufacturer guidelines, and avoids damage to
                  walls or equipment. Customers choose us for same-day availability in much of Los Angeles, insured technicians, and clear,
                  upfront communication from booking to cleanup. If you're comparing services or planning a new TV layout, this page covers
                  what's included and common questions so you can schedule with confidence.
                </p>
              </div>

              {/* Book Online Button */}
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Ready to Experience Our 5-Star Service?
                </h3>
                <Button
                  onClick={handleBookOnline}
                  className="w-full bg-ice-blue hover:bg-blue-700 text-white font-semibold py-4 text-lg rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  Book Online - Same Day Service Available
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  Or call <a href="tel:(323) 863-8146" className="text-blue-600 hover:underline font-semibold">(323) 863-8146</a> for immediate assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
