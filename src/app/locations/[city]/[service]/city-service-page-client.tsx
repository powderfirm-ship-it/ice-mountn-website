'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, MapPin, Star } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";
import { CITIES } from "@/data/cities";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { SiteLayout } from "@/components/site-layout";
import Image from "next/image";
import Link from "next/link";

// Icon mapping function
function getIcon(name: "tv" | "flame" | "cable" | "speaker" | "frame" | "lightning") {
  switch (name) {
    case "tv": return "📺";
    case "flame": return "🔥";
    case "cable": return "🔌";
    case "speaker": return "🔊";
    case "frame": return "🖼️";
    case "lightning": return "⚡";
    default: return "📺";
  }
}

interface CityServicePageClientProps {
  city: { slug: string; name: string };
  service: ServiceSlug;
}

export function CityServicePageClient({ city, service }: CityServicePageClientProps) {
  const serviceData = SERVICES[service];
  const handleBookOnline = openBooking;
  
  // Determine which image to use based on service
  const heroImage = service === "samsung-frame" ? "/images/stock/gallery-05.webp" : "/images/stock/gallery-04.webp";
  const heroAlt = service === "samsung-frame" 
    ? `Samsung Frame TV professionally wall-mounted with concealed wiring in ${city.name}`
    : `${serviceData.title} professionally wall-mounted with concealed wiring in ${city.name}`;

  return (
    <SiteLayout>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${serviceData.h1} in ${city.name}`,
            "description": serviceData.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ice Mount'n",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "City",
                "name": city.name,
                "containedInPlace": {
                  "@type": "City",
                  "name": "Los Angeles"
                }
              }
            },
            "serviceType": serviceData.title,
            "url": `https://icemountn.com/locations/${city.slug}/${service}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://icemountn.com/locations/${city.slug}/${service}`
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex justify-center mb-6 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span className="mx-2">→</span>
                <Link href="/locations" className="hover:text-blue-600">Locations</Link>
                <span className="mx-2">→</span>
                <Link href={`/locations/${city.slug}`} className="hover:text-blue-600">{city.name}</Link>
                <span className="mx-2">→</span>
                <span className="text-gray-900">{serviceData.title}</span>
              </nav>

              {/* Service Icon */}
              <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 grid place-items-center mb-6">
                <span className="text-3xl">{getIcon(serviceData.icon)}</span>
              </div>

              {/* Headlines */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {serviceData.h1}
                <span className="block text-blue-600">in {city.name}</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                {serviceData.description} Professional TV mounting service in {city.name}, Los Angeles.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleBookOnline}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                >
                  Book Online
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:(323) 863-8146" className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (323) 863-8146
                  </a>
                </Button>
              </div>

              {/* See Pricing Link - Updated styling to match "View more reviews →" */}
              <div className="mb-12 text-center">
                <Link
                  href={`/services/${service}`}
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors underline underline-offset-2"
                >
                  See Pricing ➜
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Top-Pro Rated
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  Same-Day Service
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                  $ Lowest Pricing
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                What's Included in {serviceData.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {serviceData.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Service Image - Updated to use appropriate image based on service */}
              <div className="relative mx-auto w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg mb-12">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  width={1280}
                  height={800}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Book your {serviceData.title.toLowerCase()} service in {city.name} today. 
                  Same-day installation available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleBookOnline}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                  >
                    Book Online Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
                    asChild
                  >
                    <a href={serviceData.canonicalPath}>
                      Learn More About {serviceData.title}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Serving {city.name} and Surrounding Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide professional TV mounting services throughout {city.name} and the greater Los Angeles area. 
                Our experienced technicians are familiar with local building codes and requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">Knowledge of {city.name} building codes and requirements</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Top-Rated Service</h3>
                  <p className="text-gray-600">4.9/5 customer rating in {city.name}</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Fast installation when you need it most</p>
                </div>
              </div>

              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                Book Your {serviceData.title} in {city.name}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
