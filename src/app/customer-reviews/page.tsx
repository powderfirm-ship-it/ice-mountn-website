'use client';

import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { openBooking } from "@/utils/housecall-pro";
import Image from "next/image";
import { ReviewsSection } from "@/components/reviews-section";

export default function CustomerReviewsPage() {
  const handleBookOnline = openBooking;

  // Housecall Pro reviews URL
  const HCP_REVIEWS_URL = encodeURI("https://client.housecallpro.com/reviews/Ice-Mount'n/afef05b9-206d-471c-a01c-1a5944da15f0/");

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

      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        {/* Enhanced Header Section */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-16 lg:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Customer Reviews
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                See why Los Angeles homeowners trust Ice Mount'n for their TV mounting needs
              </p>
              
              {/* Rating Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full border border-blue-200">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600 font-medium">from 150+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content Stack */}
            <div className="space-y-8">
              {/* Hero Image with Enhanced Styling */}
              <div className="relative group">
                <Image
                  src="/images/reviews/review-01.webp"
                  alt="Happy customer review showcase"
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  width={1920}
                  height={1080}
                  className="rounded-2xl w-full h-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating Review Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah M.</p>
                      <p className="text-sm text-gray-600">Beverly Hills</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                    "Incredible service! They mounted my 75" TV above the fireplace and hid all the cables perfectly."
                  </p>
                </div>
              </div>

              {/* Trusted by Los Angeles Homeowners */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Trusted by Los Angeles Homeowners
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      With a 4.9-star rating from over 150 satisfied customers, Ice Mount'n has established itself as Los Angeles' premier TV mounting service. Our professional installations are backed by years of experience and a commitment to excellence that shows in every review.
                    </p>
                  </div>
                </div>
              </div>

              {/* Same-Day Service You Can Count On */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Same-Day Service You Can Count On
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Don't wait weeks for your TV mounting installation. Ice Mount'n offers same-day service throughout Greater Los Angeles, ensuring your entertainment setup is ready when you are. Our expert technicians arrive on time, work efficiently, and leave your space cleaner than they found it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Housecall Pro Reviews Iframe */}
            <div className="space-y-8">
              {/* Housecall Pro Reviews with Enhanced Header */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Verified Customer Reviews</h3>
                  <p className="text-blue-100">Real reviews from our Housecall Pro platform</p>
                </div>
                <div className="p-4">
                  <iframe
                    src={HCP_REVIEWS_URL}
                    title="Ice Mount'n verified customer reviews"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-lg"
                    style={{ aspectRatio: "3 / 5", minHeight: 560, border: 0 }}
                  />
                </div>
              </div>

              {/* Service Overview */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What's Included in Every Installation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Quick on-site assessment to confirm wall type and mounting hardware</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Tidy routing of power and A/V lines with cable concealment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Final level/safety check and cleanup</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Insured technicians with same-day availability</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Book Online Button */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Experience Our 5-Star Service?
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join hundreds of satisfied customers across Los Angeles
                </p>
                <Button
                  onClick={handleBookOnline}
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 text-lg rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
                >
                  Book Online - Same Day Service Available
                </Button>
                <p className="text-blue-200 mt-4 text-sm">
                  Or call <a href="tel:(323) 863-8146" className="text-white hover:underline font-semibold">(323) 863-8146</a> for immediate assistance
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced What Our Customers Say Section */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    What Our Customers Say
                  </h2>
                  <p className="text-xl text-gray-600">
                    Read authentic reviews from real customers across Los Angeles
                  </p>
                </div>
              </div>

              {/* Local Reviews Section */}
              <div className="relative">
                <ReviewsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
