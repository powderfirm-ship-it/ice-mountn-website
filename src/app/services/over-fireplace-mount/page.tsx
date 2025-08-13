'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Thermometer, PhoneCall, AlertTriangle } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import Head from "next/head";
import Link from "next/link";

export default function OverFireplaceMountPage() {
  const handleBookOnline = openBooking;

  // SEO metadata
  const title = buildTitle("Over-Fireplace TV Mounting");
  const description = buildDescription("Professional over-fireplace TV mounting with heat-safe clearance and licensed installers");
  const canonicalUrl = canonical("/services/over-fireplace-mount");

  const processSteps = [
    {
      step: 1,
      title: "Free Assessment",
      description: "We measure fireplace heat output and determine safe mounting position"
    },
    {
      step: 2,
      title: "Precision Install",
      description: "Heat-resistant mounting with proper clearance and pull-down bracket option"
    },
    {
      step: 3,
      title: "Cable Management",
      description: "In-wall cable routing to avoid heat exposure and maintain clean look"
    },
    {
      step: 4,
      title: "Safety Test",
      description: "Temperature monitoring and adjustment verification for safe operation"
    }
  ];

  const benefits = [
    "Heat-resistant mounting solutions",
    "Pull-down and tilting bracket options",
    "Proper clearance from heat source",
    "In-wall cable management included",
    "Temperature safety assessment",
    "Works with gas and electric fireplaces",
    "Professional heat shielding when needed",
    "Lifetime installation warranty"
  ];

  const pricingOptions = [
    {
      type: "Fixed Mount",
      price: "$249",
      description: "Heat-resistant fixed position mount with proper clearance",
      features: ["Heat-resistant hardware", "Proper clearance spacing", "Cable management", "Safety assessment"]
    },
    {
      type: "Pull-Down Mount",
      price: "$349",
      description: "Premium pull-down bracket for optimal viewing angle",
      features: ["Pull-down mechanism", "Heat protection", "Cable management", "Viewing angle optimization"],
      popular: true
    },
    {
      type: "Full Motion Mount",
      price: "$399",
      description: "Ultimate flexibility with tilt, swivel, and extend capabilities",
      features: ["Full articulation", "Heat shielding", "Premium hardware", "Professional assessment"]
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Over-Fireplace TV Mounting",
              provider: { "@type": "LocalBusiness", name: "Ice Mount'n" },
              areaServed: "Los Angeles",
              description: "Professional over-fireplace TV mounting with heat-safe clearance and licensed installers",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Over-Fireplace TV Mounting Services",
                itemListElement: [
                  { "@type": "Offer", name: "Fixed Mount", price: "$249" },
                  { "@type": "Offer", name: "Pull-Down Mount", price: "$349" },
                  { "@type": "Offer", name: "Full Motion Mount", price: "$399" }
                ]
              }
            })
          }}
        />
      </Head>

      <SiteLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
                Specialty Installation
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Over-Fireplace TV Mounting
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get professional, renter-friendly over-fireplace TV mounting across Los Angeles. Our licensed technicians deliver clean results with precise alignment, heat-safe clearance, and damage-free methods—often available the same day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleBookOnline}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4"
                  asChild
                >
                  <a href="tel:(323) 863-8146">
                    <PhoneCall className="h-5 w-5 mr-2" />
                    Call for Assessment
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Same-day available
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Fully insured
                </div>
                <div className="flex items-center">
                  <Thermometer className="h-4 w-4 mr-1" />
                  Heat-safe clearance
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingOptions.map((option, index) => (
                  <Card key={index} className={`relative ${option.popular ? 'ring-2 ring-orange-500' : ''}`}>
                    {option.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h3>
                      <div className="text-3xl font-bold text-orange-600 mb-4">{option.price}</div>
                      <p className="text-sm text-gray-600 mb-6">{option.description}</p>
                      <ul className="text-sm text-gray-600 space-y-2 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={handleBookOnline}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      >
                        Book {option.type}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-orange-600">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Safety & Quality Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Areas Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Popular for over-fireplace TV mounting in: <Link href="/locations/santa-monica" className="text-blue-600 hover:text-blue-700 underline">Santa Monica</Link>, <Link href="/locations/west-hollywood" className="text-blue-600 hover:text-blue-700 underline">West Hollywood</Link>, <Link href="/locations/beverly-hills" className="text-blue-600 hover:text-blue-700 underline">Beverly Hills</Link>
              </p>
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
                      Yes, when installed properly by professionals. We assess heat output, maintain proper clearance,
                      and use heat-resistant mounting hardware to ensure safe operation. Our same-day TV mounting service includes temperature safety verification.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What's the ideal height for a TV above a fireplace?
                    </h3>
                    <p className="text-gray-600">
                      The bottom of the TV should be at least 12 inches above the fireplace opening.
                      We recommend pull-down mounts for comfortable viewing at this height. Our <Link href="/services/standard-tv-mount" className="text-blue-600 hover:text-blue-700 underline">standard TV mounting</Link> service can also be adapted for fireplace installations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can you install above gas fireplaces?
                    </h3>
                    <p className="text-gray-600">
                      Yes, we install above both gas and electric fireplaces. Each installation includes
                      a heat assessment to ensure safe operation and proper clearance. We use damage-free methods that protect your walls and security deposit.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Do you offer pull-down mounts?
                    </h3>
                    <p className="text-gray-600">
                      Yes, pull-down mounts are highly recommended for over-fireplace installations.
                      They allow you to lower the TV to eye level for comfortable viewing. For complete cable concealment, consider our <Link href="/services/cable-concealment" className="text-blue-600 hover:text-blue-700 underline">in-wall cable concealment</Link> service.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready for Safe Over-Fireplace Installation?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Professional heat assessment and specialized mounting solutions.
                Book your consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleBookOnline}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-orange-600 border-white hover:bg-orange-50 hover:text-orange-700 font-semibold px-8 py-4"
                  asChild
                >
                  <a href="tel:(323) 863-8146">
                    Call (323) 863-8146
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
