'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Clock, Shield, Wrench, PhoneCall } from "lucide-react";
import { openHousecallProModal } from "@/utils/housecall-pro";
import SeoTextBlock from "@/components/seo-text-block";

// schema + urls
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";

export default function StandardTVMountClient() {
  const handleBookOnline = openHousecallProModal;

  const pricingOptions = [
    {
      title: "Basic Mount",
      price: "$149",
      description: "Standard wall mounting for TVs up to 65\"",
      features: [
        "Est. time: 1-2 hours",
        "Basic cable management",
        "Level adjustment",
        "Safety testing"
      ]
    },
    {
      title: "Premium Mount",
      price: "$199",
      description: "Enhanced mounting with cable concealment",
      features: [
        "Est. time: 2-3 hours",
        "Advanced cable management",
        "Tilt/swivel adjustment",
        "Professional finish"
      ],
      popular: true
    },
    {
      title: "Ultra Mount",
      price: "$299",
      description: "Professional mounting for 75\"+ TVs",
      features: [
        "Est. time: 3-4 hours",
        "Full cable concealment",
        "Articulating mount",
        "Premium hardware"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Wall Assessment",
      description: "Locate studs and check wall structure for secure mounting"
    },
    {
      step: 2,
      title: "Mount Installation",
      description: "Install heavy-duty mounting bracket with proper hardware"
    },
    {
      step: 3,
      title: "TV Attachment",
      description: "Safely attach TV to mount with secure connections"
    },
    {
      step: 4,
      title: "Final Adjustment",
      description: "Level, adjust tilt, and test all connections"
    }
  ];

  const benefits = [
    "Professional installation by licensed technicians",
    "Heavy-duty mounting hardware included",
    "Basic cable management and concealment",
    "Level and tilt adjustment",
    "Safety testing and verification",
    "Clean, damage-free installation"
  ];

  return (
    <SiteLayout>
      {/* JSON-LD (do not duplicate LocalBusiness on the same page) */}
      <JsonLd
        data={localBusinessJSONLD({
          url: "https://www.icemountn.com/",
          telephone: "+13238638146",
          logoUrl: "https://www.icemountn.com/favicon/site-icon-512.webp",
          address: { city: "Los Angeles", region: "CA", country: "US" }
        })}
      />
      <JsonLd
        data={serviceJSONLD({
          url: "https://www.icemountn.com/services/standard-tv-mount",
          name: "Standard TV Wall Mounting",
          description: "Professional wall mounting for large and cinematic flat-panel TVs with basic cable management.",
          areaName: "Los Angeles",
          providerUrl: "https://www.icemountn.com/"
        })}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Professional Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Standard TV Wall Mounting
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional wall mounting for large and cinematic flat-panel TVs. 
              Our licensed technicians ensure secure installation with basic cable management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book Installation
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

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Professional install
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Same-day available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              TV Mounting Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pricingOptions.map((opt, i) => (
                <Card
                  key={opt.title}
                  className={`relative ${opt.popular ? "ring-2 ring-blue-500 shadow-lg" : ""}`}
                >
                  {opt.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opt.title}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">
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
                Professional Installation
              </h3>
              <p className="text-gray-600">
                All installations include professional mounting hardware, basic cable management, 
                and thorough safety testing. We bring all necessary tools and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our TV Mounting
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              TV Mounting FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How much does TV mounting cost in Los Angeles?
                  </h3>
                  <p className="text-gray-600">
                    Our TV mounting services start at $149 for standard wall mounts up to 65". 
                    Over-fireplace installations and in-wall cable concealment are priced separately. 
                    We offer free estimates and competitive pricing throughout Los Angeles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you provide same-day TV mounting service?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We offer same-day TV mounting service throughout most of Los Angeles. 
                    Call us before 2 PM and we can often schedule your installation for the same day, 
                    subject to availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's included with TV mounting service?
                  </h3>
                  <p className="text-gray-600">
                    Every TV mounting service includes: wall mount hardware, professional installation, 
                    basic cable management, tilt adjustment, and safety testing. We bring all necessary 
                    tools and equipment to complete your installation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you mount TVs above fireplaces safely?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We specialize in over-fireplace TV installations using heat-resistant 
                    mounts and proper clearances. We ensure your TV is safely positioned and protected 
                    from heat damage with pull-down bracket options available.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center text-sm text-gray-600">
              Pair with{" "}
              <a href="/services/over-fireplace-mount" className="underline underline-offset-4">
                Over-Fireplace Mounting
              </a>{" "}
              or{" "}
              <a href="/services/cable-concealment" className="underline underline-offset-4">
                Cable Concealment
              </a>{" "}
              for a complete, professional setup.
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
                    We begin with a quick assessment of your space, wall type, and device compatibility to ensure a clean, secure standard TV mounting
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
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <SeoTextBlock
        title="About Our Standard TV Mount Service in Los Angeles"
        paragraphs={[
          "When you choose Ice Mount'n for standard TV mounting services in Los Angeles, you're selecting a team that understands the unique characteristics of Southern California homes and apartments. Our technicians are familiar with local building codes, wall types, and regulations across all Los Angeles County areas, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.",
          "Our standard TV mounting service covers all residential and commercial properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic mounting to enhanced installations with cable concealment, ensuring your TV is securely mounted with professional finishing touches.",
          "The installation process typically takes 1-3 hours depending on your setup complexity and TV size. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new TV setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Professional TV Mounting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional wall mounting with secure hardware and basic cable management. 
              Book your installation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-700 border-white hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">Call (323) 863-8146</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
