"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle,
  Star,
  Shield,
  PhoneCall,
} from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";
import MasonryGallery from "@/components/masonry-gallery";
import { getGallery } from "@/lib/gallery-map";
import SeoTextBlock from "@/components/seo-text-block";

export default function CableConcealmentClient() {
  const handleBookOnline = openBooking;

  const pricingOptions = [
    {
      title: "Basic Concealment",
      price: "$199",
      description: "Hide TV power + HDMI cables in wall.",
      features: [
        "Est. time: 2–3 hours",
        "Clean wall opening + wall plate",
        "Professional wall finishing",
      ],
    },
    {
      title: "Complete Concealment",
      price: "$299",
      description:
        "New recessed outlet behind TV + HDMI, power, and audio in‑wall.",
      features: [
        "Est. time: 3–4 hours",
        "Code‑compliant electrical work",
        "GFCI where required",
      ],
      popular: true,
    },
    {
      title: "Premium Install",
      price: "$399",
      description:
        "Multi‑device routing (soundbar, console, boxes) with clean finishing.",
      features: [
        "Est. time: 4–5 hours",
        "Outlet + cable management box",
        "Paint‑ready finish",
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Wall Assessment",
      description: "Locate studs, check fire blocking, and plan cable routing.",
    },
    {
      step: 2,
      title: "Outlet Install",
      description: "New recessed outlet behind TV (to local electrical code).",
    },
    {
      step: 3,
      title: "Cable Fishing + Management",
      description:
        "Route HDMI/power/audio through wall with tidy management to equipment area.",
    },
    {
      step: 4,
      title: "Clean Finish + Check",
      description:
        "Seal and detail wall openings, then verify device operation + signal.",
    },
  ];

  const benefits = [
    "Complete wire‑free appearance",
    "Code‑compliant electrical work",
    "Professional wall finishing",
    "Preserves wall aesthetics",
    "New electrical outlet behind TV",
    "Works with HDMI, power, and audio",
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              Premium Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              In‑Wall Cable Concealment
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Completely hide TV cables inside your wall for a clean, professional
              look. Includes new outlet behind the TV and code‑compliant electrical
              work. Our licensed technicians ensure all installations meet local building codes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call (323) 863‑8146
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Code‑compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Professional finish
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Professional In-Wall Cable Concealment in Los Angeles
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                Ice Mount'n specializes in professional in-wall cable concealment services throughout Los Angeles County. 
                Our licensed electricians and technicians understand the unique challenges of working with different wall 
                types, from modern drywall construction to historic plaster walls found in older LA homes.
              </p>
              <p className="mb-6">
                We provide comprehensive solutions that go beyond simple cable hiding. Each installation includes proper 
                electrical work, including new outlet installation behind your TV where needed, GFCI protection where 
                required by code, and professional wall finishing that preserves your home's aesthetic appeal.
              </p>
              <p className="mb-6">
                Our service areas include Santa Monica, Beverly Hills, West Hollywood, Downtown LA, Culver City, 
                and surrounding neighborhoods. We offer same-day service availability and transparent pricing with 
                no hidden costs or surprise fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cable Concealment Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pricingOptions.map((opt, i) => (
                <Card
                  key={opt.title}
                  className={`relative ${opt.popular ? "ring-2 ring-green-500 shadow-lg" : ""}`}
                >
                  {opt.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-green-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opt.title}
                    </h3>
                    <div className="text-3xl font-bold text-green-600 mb-4">
                      {opt.price}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{opt.description}</p>
                    <ul className="space-y-2">
                      {opt.features.map((f) => (
                        <li key={f} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Electrical Work
              </h3>
              <p className="text-gray-600">
                All electrical work follows local code by qualified technicians. New outlets installed behind
                TVs with proper GFCI protection where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MasonryGallery items={getGallery("generic", { limit: 6, context: "Cable Concealment — Los Angeles" })} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Installation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s) => (
                <Card key={s.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {s.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits of In‑Wall Cable Concealment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cable Concealment FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is in‑wall cable routing safe and code‑compliant?
                  </h3>
                  <p className="text-gray-600">
                    Yes. All electrical work is performed to local code by qualified technicians.
                    We use proper in‑wall rated materials, and GFCI is installed where required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How long does cable concealment installation take?
                  </h3>
                  <p className="text-gray-600">
                    Installation typically takes 2–5 hours depending on complexity. Basic
                    concealment takes 2–3 hours, while complete installs with new outlets take 3–5 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you conceal cables in any type of wall?
                  </h3>
                  <p className="text-gray-600">
                    We can conceal cables in most wall types including drywall, concrete block, and wood frame construction.
                    Some limitations may apply with concrete or brick walls.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I need to access the cables later?
                  </h3>
                  <p className="text-gray-600">
                    We install access points and use proper cable management techniques to allow for future modifications.
                    Additional outlets can be added if needed for easy access.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center text-sm text-gray-600">
              Pair with{" "}
              <Link href="/services/standard-tv-mount" className="underline underline-offset-4">
                TV Mounting
              </Link>{" "}
              or{" "}
              <Link href="/services/soundbar-mounting" className="underline underline-offset-4">
                Sound‑bar Mounting
              </Link>{" "}
              for a seamless, wire‑free setup.
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Popular service areas:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/locations/santa-monica" className="text-blue-600 hover:text-blue-700 underline">
                  Santa Monica
                </Link>
                <Link href="/locations/beverly-hills" className="text-blue-600 hover:text-blue-700 underline">
                  Beverly Hills
                </Link>
                <Link href="/locations/west-hollywood" className="text-blue-600 hover:text-blue-700 underline">
                  West Hollywood
                </Link>
                <Link href="/locations/culver-city" className="text-blue-600 hover:text-blue-700 underline">
                  Culver City
                </Link>
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
                    We begin with a quick assessment of your space, wall type, and device compatibility to ensure a clean, secure in-wall cable concealment
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
                  How do you ensure code compliance for electrical work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  All electrical installations follow local building codes with proper GFCI protection, in-wall rated materials,
                  and qualified technicians. We obtain permits when required and ensure your installation meets safety standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <SeoTextBlock
        title="About Our Cable Concealment Service in Los Angeles"
        paragraphs={[
          "When you choose Ice Mount'n for in-wall cable concealment services in Los Angeles, you're selecting a team that understands the unique challenges of electrical and cable installations. Our technicians are familiar with local building codes, wall types, and electrical requirements across all Los Angeles County areas, ensuring your installation meets all safety standards while creating a completely wire-free appearance.",
          "Our cable concealment service covers all residential properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic cable hiding to complete in-wall routing with new electrical outlets, ensuring your installation is code-compliant with professional finishing touches.",
          "The installation process typically takes 2-4 hours depending on your setup complexity and wall structure. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your clean, wire-free setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for a Completely Clean Look?
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Professional in‑wall cable concealment with code‑compliant electrical work.
              Book your installation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-green-700 border-white hover:bg-green-50 hover:text-green-700 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">Call (323) 863‑8146</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
