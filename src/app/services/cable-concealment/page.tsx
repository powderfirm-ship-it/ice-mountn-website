'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Wrench, PhoneCall } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import Head from "next/head";
import Link from "next/link";

export default function CableConcealmentPage() {
  const handleBookOnline = openBooking;

  // SEO metadata
  const title = buildTitle("In-Wall Cable Concealment");
  const description = buildDescription("Completely hide TV cables inside your wall with a code-compliant new outlet behind the TV and a clean, professional finish");
  const canonicalUrl = canonical("/services/cable-concealment");

  const processSteps = [
    {
      step: 1,
      title: "Wall Assessment",
      description: "We assess studs, blocking, and route planning"
    },
    {
      step: 2,
      title: "Outlet Install",
      description: "Code-compliant outlet installation behind TV"
    },
    {
      step: 3,
      title: "Cable Fishing",
      description: "Cable fishing and management through wall"
    },
    {
      step: 4,
      title: "Clean Finish",
      description: "Clean finish and operation verification"
    }
  ];

  const benefits = [
    "Clean, wire-free appearance",
    "Code-compliant electrical work",
    "Professional wall finishing",
    "Preserves wall aesthetics",
    "New outlet behind TV",
    "Increases home value"
  ];

  const pricingTiers = [
    {
      size: "Basic Concealment",
      price: "$199",
      popular: false
    },
    {
      size: "Complete Concealment",
      price: "$299",
      popular: true
    },
    {
      size: "Premium Install",
      price: "$399",
      popular: false
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
              name: "In-Wall Cable Concealment",
              provider: { "@type": "LocalBusiness", name: "Ice Mount'n" },
              areaServed: "Los Angeles",
              description: "Completely hide TV cables inside your wall with a code-compliant new outlet behind the TV and a clean, professional finish",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cable Concealment Services",
                itemListElement: [
                  { "@type": "Offer", name: "Basic Concealment", price: "$199" },
                  { "@type": "Offer", name: "Complete Concealment", price: "$299" },
                  { "@type": "Offer", name: "Premium Install", price: "$399" }
                ]
              }
            })
          }}
        />
      </Head>

      <SiteLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
                Premium Service
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                In-Wall Cable Concealment
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Completely hide TV cables inside your wall for a clean, professional look. Includes new outlet behind the TV and code-compliant electrical work.
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
                  <Clock className="h-4 w-4 mr-1" />
                  Licensed & insured
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Code-compliant
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  Professional finish
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    {tier.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tier.size}</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</div>
                      <ul className="text-sm text-gray-600 space-y-2 mb-6">
                        {tier.size === "Basic Concealment" && (
                          <>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Est. time: 2-3 hours
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Hide TV power + HDMI in wall
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Clean wall opening + wall plate
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Professional wall finishing
                            </li>
                          </>
                        )}
                        {tier.size === "Complete Concealment" && (
                          <>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Est. time: 3-4 hours
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              New recessed outlet behind TV
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Code-compliant electrical work
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              GFCI where required
                            </li>
                          </>
                        )}
                        {tier.size === "Premium Install" && (
                          <>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Est. time: 4-5 hours
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Multi-device routing (soundbar, console, boxes)
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Outlet + cable management box
                            </li>
                            <li className="flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              Paint-ready finish
                            </li>
                          </>
                        )}
                      </ul>
                      <Button
                        onClick={handleBookOnline}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Book {tier.size}
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
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
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
                Why Choose Our Cable Concealment?
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
                Popular for in-wall cable concealment in: <Link href="/locations/santa-monica" className="text-blue-600 hover:text-blue-700 underline">Santa Monica</Link>, <Link href="/locations/west-hollywood" className="text-blue-600 hover:text-blue-700 underline">West Hollywood</Link>, <Link href="/locations/beverly-hills" className="text-blue-600 hover:text-blue-700 underline">Beverly Hills</Link>, <Link href="/locations/dtla" className="text-blue-600 hover:text-blue-700 underline">DTLA</Link>, <Link href="/locations/culver-city" className="text-blue-600 hover:text-blue-700 underline">Culver City</Link>, <Link href="/locations/glendale" className="text-blue-600 hover:text-blue-700 underline">Glendale</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                      Is it safe and code-compliant?
                    </h3>
                    <p className="text-gray-600">
                      Yes. Electrical work is performed to local code by qualified technicians. GFCI is used where required.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Works with all wall types?
                    </h3>
                    <p className="text-gray-600">
                      Drywall and wood stud are typical. We can often accommodate plaster or concrete with proper tools and methods.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Need everything hidden?
                    </h3>
                    <p className="text-gray-600">
                      Pair with our <Link href="/services/standard-tv-mount" className="text-blue-600 hover:text-blue-700 underline">TV Mounting</Link> or <Link href="/services/soundbar-mounting" className="text-blue-600 hover:text-blue-700 underline">Sound-bar Mounting</Link> for a seamless setup.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready for a completely clean look?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Book your in-wall cable concealment today.
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
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-4"
                  asChild
                >
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
