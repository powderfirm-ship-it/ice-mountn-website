import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES } from "@/data/cities";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, MapPin, Star } from "lucide-react";
import { CITIES as CITIES_DATA } from "@/data/cities";
import { SERVICES as SERVICES_DATA, type ServiceSlug as ServiceSlugType } from "@/data/services";
import SiteLayoutServer from "@/components/site-layout-server";
import Image from "next/image";
import Link from "next/link";
import HcpBookButton from "@/components/hcp-book-button";

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

// Generate static params for all city+service combinations
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  
  CITIES.forEach((city) => {
    Object.keys(SERVICES).forEach((service) => {
      params.push({
        city: city.slug,
        service: service,
      });
    });
  });
  
  return params;
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = CITIES.find((c) => c.slug === resolvedParams.city);
  const service = SERVICES[resolvedParams.service as ServiceSlug];
  
  if (!city || !service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.h1} in ${city.name}, Los Angeles | Ice Mount'n`;
  const description = `${service.description} Professional TV mounting service in ${city.name}, Los Angeles. Same-day installation available. Call (323) 863-8146 for free estimate.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://icemountn.com/locations/${city.slug}/${resolvedParams.service}`,
      siteName: "Ice Mount'n",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://icemountn.com/locations/${city.slug}/${resolvedParams.service}`,
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const resolvedParams = await params;
  const city = CITIES.find((c) => c.slug === resolvedParams.city);
  const service = resolvedParams.service as ServiceSlug;
  
  if (!city || !SERVICES[service]) {
    notFound();
  }

  const serviceData = SERVICES[service];
  
  // Determine which image to use based on service
  const heroImage = service === "samsung-frame" ? "/images/stock/gallery-05.webp" : "/images/stock/gallery-04.webp";
  const heroAlt = service === "samsung-frame" 
    ? `Samsung Frame TV professionally wall-mounted with concealed wiring in ${city.name}`
    : `${serviceData.title} professionally wall-mounted with concealed wiring in ${city.name}`;

  return (
    <SiteLayoutServer>
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
        {/* Hero Section - Fully Server Rendered */}
        <section className="relative py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex justify-center mt-3 sm:mt-4 mb-6 text-sm text-gray-600">
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

              {/* Headlines - Server Rendered */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {serviceData.h1}
                <span className="block text-blue-600">in {city.name}</span>
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto antialiased lcp-safe">
                {serviceData.description} Professional TV mounting service in {city.name}, Los Angeles.
              </p>

              {/* CTAs - Only HCP button is client component */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <HcpBookButton />
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

              {/* See Pricing Link */}
              <div className="mb-12 text-center">
                <Link
                  href={serviceData.canonicalPath}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  See Pricing <span aria-hidden="true" className="ml-1">→</span>
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
        <section className="py-20 bg-white" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1000px" }}>
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

              {/* Service Image */}
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
                  Same-day installation available throughout Los Angeles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HcpBookButton />
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
              </div>
            </div>
          </div>
        </section>

        {/* Details & What to Expect (SEO augmentation — minimal UI) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Details &amp; What to Expect</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Our Approach</h3>
                    <p className="text-gray-600 text-sm">
                      We begin with a quick assessment of your space, wall type, and device compatibility to ensure a clean, secure {serviceData.title.toLowerCase()} in {city.name}
                      that meets building and manufacturer guidelines. Our technicians confirm placement, routing options, and finishing details
                      before any drilling occurs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Standards</h3>
                    <p className="text-gray-600 text-sm">
                      Every project follows a documented checklist: appropriate anchors/studs, torque and level checks, protected cable paths,
                      and final testing with your equipment. We prioritize safety, longevity, and a tidy finish you'll be proud to show.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Preparation &amp; Timing</h3>
                    <p className="text-gray-600 text-sm">
                      Typical appointments run 45–120 minutes depending on wall materials and cable routing needs. Please clear the immediate
                      area around the mounting location and have your devices and remotes available for testing after installation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Aftercare &amp; Support</h3>
                    <p className="text-gray-600 text-sm">
                      We verify signal integrity, tidy cables, and walk you through basic use. If you need adjustments later, we're available
                      for tune‑ups and upgrades. Our goal is a reliable, renter‑friendly result that looks great and works flawlessly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional FAQ (SEO augmentation — minimal UI) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional FAQ</h2>

              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="q1" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    How do you protect walls and finishes during installation?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    We use clean drop protection and the correct anchors for your wall type, verify stud placement when applicable,
                    and minimize hole count by planning cable routes first. At completion, we wipe surfaces and remove debris.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    Will the setup be renter‑friendly and reversible?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    Yes. We prioritize landlord‑approved methods and provide guidance for safe removal if needed.
                    Ask us about surface patch options and how to preserve your security deposit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    Do you handle device connection and quick testing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    We connect your sources (streamers, consoles, soundbars) and confirm power, video, and audio. If you need
                    advanced calibration or smart‑home integration, we can schedule an extended service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    What if I'm not sure about placement or height?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    We help you choose a height and location based on seating distance, room layout, and glare. For over‑fireplace
                    projects, we also consider heat exposure and viewing angles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    How do you handle {city.name} parking and building access?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    Our technicians are familiar with {city.name} parking regulations and building access procedures. We handle
                    permit parking, navigate narrow streets, and coordinate with building management for smooth service delivery.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20 bg-gray-50" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 800px" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                TV Mounting Service in {city.name}, Los Angeles
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional {serviceData.title.toLowerCase()} installation with same-day service available. 
                Licensed and insured technicians serving {city.name} and surrounding areas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Service</h3>
                  <p className="text-gray-600">Serving {city.name} and surrounding Los Angeles areas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Top-Rated</h3>
                  <p className="text-gray-600">4.9-star rating from 150+ satisfied customers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day</h3>
                  <p className="text-gray-600">Professional installation available today</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayoutServer>
  );
}
