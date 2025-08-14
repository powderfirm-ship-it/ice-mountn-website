'use client';

import { SiteLayout } from '@/components/site-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Star, Clock, Shield, Thermometer, PhoneCall, AlertTriangle } from 'lucide-react';
import { openHousecallProModal } from '@/utils/housecall-pro';
import SeoTextBlock from '@/components/seo-text-block';
import MasonryGallery from '@/components/MasonryGallery';
import { getServiceImages } from '@/lib/gallery';

import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJSONLD, serviceJSONLD } from "@/lib/schema";

export default function OverFireplaceMountClient() {
  const handleBookOnline = openHousecallProModal;

  const pricingOptions = [
    {
      title: "Basic Fireplace Mount",
      price: "$199",
      description: "Standard over-fireplace TV mounting",
      features: [
        "Est. time: 2-3 hours",
        "Heat-safe mounting bracket",
        "Basic cable management",
        "Safety clearance check"
      ]
    },
    {
      title: "Premium Fireplace Mount",
      price: "$299",
      description: "Enhanced mounting with pull-down bracket",
      features: [
        "Est. time: 3-4 hours",
        "Pull-down articulating mount",
        "Advanced cable concealment",
        "Heat sensor installation"
      ],
      popular: true
    },
    {
      title: "Ultra Fireplace Mount",
      price: "$399",
      description: "Professional mounting with full features",
      features: [
        "Est. time: 4-5 hours",
        "Premium articulating mount",
        "Complete cable concealment",
        "Professional heat management"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Heat Assessment",
      description: "Measure fireplace temperature and clearance requirements"
    },
    {
      step: 2,
      title: "Mount Selection",
      description: "Choose appropriate heat-resistant mounting bracket"
    },
    {
      step: 3,
      title: "Safe Installation",
      description: "Install with proper clearance and heat protection"
    },
    {
      step: 4,
      title: "Final Testing",
      description: "Test mount stability and heat safety measures"
    }
  ];

  const benefits = [
    "Heat-safe mounting solutions",
    "Professional clearance assessment",
    "Pull-down bracket options",
    "Heat-resistant hardware",
    "Safety-first installation",
    "Professional cable management"
  ];

  const safetyFeatures = [
    "Temperature monitoring during installation",
    "Proper clearance from heat sources",
    "Heat-resistant mounting materials",
    "Safety testing and verification",
    "Professional heat management"
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
          url: "https://www.icemountn.com/services/over-fireplace-mount",
          name: "Over‑Fireplace TV Mounting",
          description: "Heat‑aware, safe TV mounting above fireplaces with professional assessment.",
          areaName: "Los Angeles",
          providerUrl: "https://www.icemountn.com/"
        })}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
              Heat-Safe Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Over-Fireplace TV Mounting
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Heat-aware, safe TV mounting above fireplaces with professional assessment. 
              Our specialists ensure proper clearance and heat protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4"
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
                Heat-safe mounting
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Professional assessment
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Safety verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heat Notice */}
      <section className="py-8 bg-orange-100 border-l-4 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  Important Heat Safety Notice
                </h3>
                <p className="text-orange-700">
                  Over-fireplace TV mounting requires special consideration for heat management. 
                  Our technicians assess fireplace temperature, clearance requirements, and install 
                  appropriate heat-resistant mounting solutions to protect your TV.
                </p>
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
              Over-Fireplace Mounting Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pricingOptions.map((opt, i) => (
                <Card
                  key={opt.title}
                  className={`relative ${opt.popular ? "ring-2 ring-orange-500 shadow-lg" : ""}`}
                >
                  {opt.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opt.title}
                    </h3>
                    <div className="text-3xl font-bold text-orange-600 mb-4">
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
                Heat-Safe Installation
              </h3>
              <p className="text-gray-600">
                All over-fireplace installations include heat assessment, proper clearance measurement, 
                and heat-resistant mounting hardware. Safety is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <MasonryGallery
        title="Recent Installs"
        subtitle="A few examples from recent Ice Mount'n projects"
        images={getServiceImages("over-fireplace-mount")}
        cols={{ base: 2, sm: 2, md: 3, lg: 4 }}
      />

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Fireplace Mounting Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s) => (
                <Card key={s.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
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
              Why Choose Our Fireplace Mounting
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

      {/* Safety Features */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Heat Safety Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyFeatures.map((f) => (
                <div key={f} className="flex items-center space-x-3">
                  <Thermometer className="h-5 w-5 text-orange-600 shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Over-Fireplace Mounting FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is it safe to mount a TV above a fireplace?
                  </h3>
                  <p className="text-gray-600">
                    Yes, when done properly by professionals. We assess fireplace temperature, 
                    use heat-resistant mounting hardware, and ensure proper clearance to protect 
                    your TV from heat damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What clearance is needed above a fireplace?
                  </h3>
                  <p className="text-gray-600">
                    We recommend at least 12-18 inches above the fireplace opening, depending on 
                    your specific fireplace type and heat output. Our technicians measure and 
                    assess this during installation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you install pull-down brackets?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Pull-down brackets are excellent for over-fireplace installations as they 
                    allow you to lower the TV for comfortable viewing and raise it when not in use. 
                    We offer several pull-down options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do you protect the TV from heat?
                  </h3>
                  <p className="text-gray-600">
                    We use heat-resistant mounting materials, install proper clearance, and may 
                    add heat shields if needed. Our technicians also monitor temperature during 
                    installation to ensure safety.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center text-sm text-gray-600">
              Pair with{" "}
              <a href="/services/standard-tv-mount" className="underline underline-offset-4">
                Standard TV Mounting
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
                    We begin with a quick assessment of your space, wall type, and device compatibility to ensure a clean, secure over-fireplace mounting
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
                  How do you ensure heat safety for over-fireplace installations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  We measure fireplace temperature, install heat-resistant mounting hardware, and ensure proper clearance.
                  Pull-down brackets are available for better viewing angles while maintaining safety from heat exposure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <SeoTextBlock
        title="About Our Over-Fireplace Mount Service in Los Angeles"
        paragraphs={[
          "When you choose Ice Mount'n for over-fireplace TV mounting services in Los Angeles, you're selecting a team that understands the unique challenges of fireplace installations. Our technicians are familiar with local building codes, wall types, and heat safety requirements across all Los Angeles County areas, ensuring your installation meets all safety standards while maintaining the aesthetic appeal of your space.",
          "Our over-fireplace mounting service covers all residential properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic heat-safe mounting to enhanced installations with pull-down brackets and complete cable concealment, ensuring your TV is securely mounted with professional heat management.",
          "The installation process typically takes 2-4 hours depending on your setup complexity and fireplace type. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new fireplace TV setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Safe Fireplace TV Mounting?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Heat-safe over-fireplace mounting with professional assessment and heat protection. 
              Book your installation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-orange-700 border-white hover:bg-orange-50 hover:text-orange-700 font-semibold px-8 py-4"
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
