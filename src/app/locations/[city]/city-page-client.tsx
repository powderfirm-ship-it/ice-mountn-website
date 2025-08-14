'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Clock, Shield, Wrench, PhoneCall, MapPin, Home, Building } from "lucide-react";
import Link from "next/link";
import { openBooking } from "@/utils/housecall-pro";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { Tv, Flame, Cable, Speaker, Frame, Zap } from "lucide-react";
import SeoTextBlock from "@/components/seo-text-block";

interface CityPageClientProps {
  cityName: string;
  citySlug: string;
  isCampus: boolean;
  services: ServiceSlug[];
  trustFeatures: string[];
  localFaqs: Array<{ question: string; answer: string }>;
  data: {
    name: string;
    neighborhoods?: string[];
    landmarks?: string[];
  };
}

// Icon mapping function
function getIcon(name: "tv" | "flame" | "cable" | "speaker" | "frame" | "lightning") {
  switch (name) {
    case "tv": return Tv;
    case "flame": return Flame;
    case "cable": return Cable;
    case "speaker": return Speaker;
    case "frame": return Frame;
    case "lightning": return Zap;
    default: return Tv;
  }
}

const ORDER: ServiceSlug[] = ["standard-tv-mount", "over-fireplace-mount", "cable-concealment", "soundbar-mounting", "samsung-frame", "same-day-tv-mounting"];

export function CityPageClient({ 
  cityName, 
  citySlug,
  isCampus, 
  services, 
  trustFeatures, 
  localFaqs, 
  data 
}: CityPageClientProps) {
  const handleBookOnline = openBooking;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TV Mounting in {cityName}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional, renter-friendly TV mounting services in {cityName}. 
              {isCampus ? ' Student housing and dorm installations with RA approval.' : ' Apartment and condo installations that protect your security deposit.'}
              Same-day service available throughout Los Angeles County.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book {cityName} Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call (323) 863-8146
                </a>
              </Button>
            </div>

            <p className="text-gray-600">
              Same-day service available • Licensed & insured • 100% renter-friendly
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              TV Mounting Services in {cityName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ORDER.map((slug) => {
                const svc = SERVICES[slug];
                const Icon = getIcon(svc.icon);
                return (
                  <a
                    key={slug}
                    href={`/locations/${citySlug}/${slug}`}
                    className="block rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white"
                    aria-label={`${svc.h1} in ${cityName}`}
                  >
                    <div className="mx-auto h-10 w-10 rounded-full bg-blue-50 grid place-items-center mb-4">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 text-center">{svc.title}</h3>
                    <p className="text-sm text-gray-600 text-center mt-1">Professional installation in {cityName}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Ice Mount'n in {cityName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose Ice Mount'n for licensed, renter-friendly TV mounting in {cityName}. 
                We protect your walls and security deposit with clean, damage-free methods, tidy cable management, 
                and precise alignment. Same-day service is available throughout Los Angeles County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              We serve {cityName} neighborhoods including {data.landmarks?.slice(0, 3).join(', ') || 'downtown areas'}, 
              with quick arrivals to nearby areas. See all service areas on our <Link href="/locations" className="text-blue-600 hover:text-blue-700 underline">locations page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              Nearby areas: <Link href="/locations/santa-monica" className="text-blue-600 hover:text-blue-700 underline">Santa Monica</Link>, <Link href="/locations/west-hollywood" className="text-blue-600 hover:text-blue-700 underline">West Hollywood</Link>, <Link href="/locations/beverly-hills" className="text-blue-600 hover:text-blue-700 underline">Beverly Hills</Link>, <Link href="/locations/culver-city" className="text-blue-600 hover:text-blue-700 underline">Culver City</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {cityName} TV Mounting FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {localFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                    We begin with a quick assessment of your space, wall type, and device compatibility to ensure a clean, secure TV mounting in {cityName}
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
                  How do you handle {cityName} parking and building access?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  Our technicians are familiar with {cityName} parking regulations and building access procedures. We handle
                  permit parking, navigate narrow streets, and coordinate with building management for smooth service delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <SeoTextBlock
        title={`TV Mounting in ${cityName}: What to Expect`}
        paragraphs={[
          `When you choose Ice Mount'n for TV mounting services in ${cityName}, you're selecting a team that understands the unique characteristics of your neighborhood. Our technicians are familiar with ${cityName}'s building codes, wall types, and local regulations, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.`,
          `Our ${cityName} service area covers all residential and commercial properties, from historic homes to modern apartments. We handle everything from basic mounting to complex installations requiring custom solutions. Whether you're in a ${cityName} condo with strict building rules or a private home with unique architectural features, our team adapts to your specific needs.`,
          `The installation process in ${cityName} typically takes 1-3 hours depending on your setup complexity. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new TV setup without waiting weeks for an appointment.`
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for {cityName} TV Mounting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional installation that protects your property and creates the perfect entertainment setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookOnline}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book {cityName} Installation
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white focus-visible:ring-white/70 font-semibold px-8 py-4"
              >
                <a href="tel:(323) 863-8146">
                  Call (323) 863-8146
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
