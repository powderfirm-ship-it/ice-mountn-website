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

export default function StandardTVMountPage() {
  const handleBookOnline = openBooking;

  // SEO metadata
  const title = buildTitle("Standard TV Mounting");
  const description = buildDescription("Professional standard TV wall mounting with licensed, renter-friendly installers");
  const canonicalUrl = canonical("/services/standard-tv-mount");

  const processSteps = [
    {
      step: 1,
      title: "Free Assessment",
      description: "We assess your wall type, TV size, and optimal viewing position"
    },
    {
      step: 2,
      title: "Precision Install",
      description: "Secure mounting with proper stud attachment and safety testing"
    },
    {
      step: 3,
      title: "Cable Management",
      description: "Basic cable organization and cord concealment behind TV"
    },
    {
      step: 4,
      title: "Final Adjustment",
      description: "Tilt and swivel adjustment for perfect viewing angle"
    }
  ];

  const benefits = [
    "Professional stud mounting for maximum security",
    "Works with Large Flat-Panel Screens (≤60\") and Cinematic Flat-Panel Screens (>60\")",
    "Basic cable management included",
    "Tilt and swivel adjustment available",
    "Same-day service in most LA areas",
    "100% satisfaction guarantee",
    "Licensed and insured technicians",
    "Clean-up and debris removal included"
  ];

  const pricingTiers = [
    {
      size: "Large Flat-Panel Screens (≤60\")",
      price: "$149",
      popular: false
    },
    {
      size: "Cinematic Flat-Panel Screens (>60\")",
      price: "$179",
      popular: true
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
              name: "Standard TV Mounting",
              provider: { 
                "@type": "LocalBusiness", 
                name: "Ice Mount'n",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Los Angeles",
                  addressRegion: "CA",
                  addressCountry: "US"
                },
                telephone: "+1-323-863-8146"
              },
              areaServed: [
                { "@type": "City", name: "Los Angeles" },
                { "@type": "City", name: "Santa Monica" },
                { "@type": "City", name: "Beverly Hills" }
              ],
              description: "Professional standard TV wall mounting with licensed, renter-friendly installers",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Standard TV Mounting Services",
                itemListElement: [
                  { "@type": "Offer", name: "Large Flat-Panel Screens (≤60\")", price: "$149" },
                  { "@type": "Offer", name: "Cinematic Flat-Panel Screens (>60\")", price: "$179" }
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
                Most Popular Service
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Standard TV Wall Mounting
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get professional, renter-friendly standard TV wall mounting across Los Angeles. Our licensed technicians deliver clean results with precise alignment, damage-free methods, and tidy cable management—often available the same day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleBookOnline}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
                >
                  Book Installation Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
                  asChild
                >
                  <a href="tel:(323) 863-8146">
                    <PhoneCall className="h-5 w-5 mr-2" />
                    Call for Quote
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
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.9/5 rating
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <li className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Professional installation
                        </li>
                        <li className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Wall mount included
                        </li>
                        <li className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Basic cable management
                        </li>
                        <li className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Clean wall finish
                        </li>
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
                Why Choose Our Standard TV Mounting?
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
                Popular for standard TV mounting in: <Link href="/locations/santa-monica" className="text-blue-600 hover:text-blue-700 underline">Santa Monica</Link>, <Link href="/locations/west-hollywood" className="text-blue-600 hover:text-blue-700 underline">West Hollywood</Link>, <Link href="/locations/beverly-hills" className="text-blue-600 hover:text-blue-700 underline">Beverly Hills</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Standard TV Mount FAQ
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What wall types can support TV mounting?
                    </h3>
                    <p className="text-gray-600">
                      We can mount on drywall with studs, concrete, brick, and wood panel walls.
                      Our technicians will assess your wall type and use appropriate hardware for secure installation.
                      We use damage-free methods that protect your walls and security deposit.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How long does a standard TV mount installation take?
                    </h3>
                    <p className="text-gray-600">
                      Most standard TV mounting installations take 30-60 minutes, depending on wall type
                      and cable management requirements. Same-day TV mounting is available throughout Los Angeles County.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Do you provide the wall mount bracket?
                    </h3>
                    <p className="text-gray-600">
                      Yes, we provide a high-quality tilting wall mount bracket rated for your TV's size and weight,
                      along with all necessary mounting hardware. Our standard service includes clean wall finish with zero-gap mounting.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What if I need to hide all cables completely?
                    </h3>
                    <p className="text-gray-600">
                      Our standard service includes basic cable management. For complete cable concealment,
                      consider our <a href="/services/cable-concealment" className="text-blue-600 hover:text-blue-700 underline">In-Wall Cable Concealment</a> service for a completely wire-free look.
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
                Ready for Professional TV Mounting?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Same-day service available throughout Los Angeles.
                Book your installation now or call for a free quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleBookOnline}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
                >
                  Book Installation Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-4"
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
