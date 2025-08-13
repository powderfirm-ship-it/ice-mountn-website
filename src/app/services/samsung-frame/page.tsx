'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Monitor, PhoneCall, Image } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import Head from "next/head";

export default function SamsungFramePage() {
  const handleBookOnline = openBooking;

  // SEO metadata
  const title = buildTitle("Samsung Frame TV");
  const description = buildDescription("Professional Samsung Frame TV installation with zero-gap mounting and Art Mode setup");
  const canonicalUrl = canonical("/services/samsung-frame");

  const processSteps = [
    {
      step: 1,
      title: "Frame Assessment",
      description: "Evaluate wall space and plan the perfect artwork positioning"
    },
    {
      step: 2,
      title: "Precision Installation",
      description: "Mount Frame TV flush to wall with zero-gap finish"
    },
    {
      step: 3,
      title: "Cable Concealment",
      description: "Route One Connect Box and cables for completely invisible setup"
    },
    {
      step: 4,
      title: "Art Mode Setup",
      description: "Configure Art Mode and customize display settings"
    }
  ];

  const benefits = [
    "Zero-gap wall mounting for artwork appearance",
    "Complete cable concealment with One Connect Box",
    "Art Mode optimization and setup",
    "Custom frame bezel installation",
    "Ambient light sensor calibration",
    "Artwork subscription activation",
    "Professional wall finishing",
    "Samsung Frame TV expertise"
  ];

  const frameServices = [
    {
      type: "Basic Frame Installation",
      price: "$199",
      description: "Frame TV mounting with basic cable management",
      features: ["Frame TV wall mounting", "Basic cable management", "Art Mode setup", "Level adjustment"],
      timeEstimate: "2-3 hours"
    },
    {
      type: "Complete Frame Setup",
      price: "$299",
      description: "Full installation with One Connect Box concealment",
      features: ["Zero-gap wall mounting", "One Connect Box hiding", "Complete cable concealment", "Art Mode optimization"],
      popular: true,
      timeEstimate: "3-4 hours"
    },
    {
      type: "Premium Frame Experience",
      price: "$399",
      description: "Ultimate Frame installation with custom bezels",
      features: ["Premium mounting", "Custom bezel installation", "In-wall One Connect routing", "Professional calibration"],
      timeEstimate: "4-5 hours"
    }
  ];

  const frameFeatures = [
    {
      title: "Art Mode Display",
      description: "Seamlessly switch between TV and artwork with motion sensor activation"
    },
    {
      title: "One Connect Box",
      description: "Single cable connection eliminates multiple cords for clean installation"
    },
    {
      title: "Anti-Reflection Screen",
      description: "Matte display finish reduces glare and enhances artwork appearance"
    },
    {
      title: "Customizable Bezels",
      description: "Choose from multiple bezel styles to match your home décor"
    }
  ];

  const frameSizes = [
    { size: "32\"", model: "LS03T/LS03B", price: "From $199" },
    { size: "43\"", model: "LS03T/LS03B", price: "From $199" },
    { size: "50\"", model: "LS03T/LS03B", price: "From $229" },
    { size: "55\"", model: "LS03T/LS03B", price: "From $229" },
    { size: "65\"", model: "LS03T/LS03B", price: "From $259" },
    { size: "75\"", model: "LS03T/LS03B", price: "From $289" }
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
        <meta property="twitter:description" content={description} />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Samsung Frame TV",
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
              description: "Professional Samsung Frame TV installation with zero-gap mounting and Art Mode setup",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Samsung Frame TV Services",
                itemListElement: [
                  { "@type": "Offer", name: "Basic Frame Installation", price: "$199" },
                  { "@type": "Offer", name: "Complete Frame Setup", price: "$299" },
                  { "@type": "Offer", name: "Premium Frame Experience", price: "$399" }
                ]
              }
            })
          }}
        />
      </Head>
      <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 mb-4">
              Samsung Certified Specialist
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Samsung Frame TV Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert installation of Samsung Frame TVs with perfect artwork presentation.
              Zero-gap mounting, complete cable concealment, and Art Mode optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4"
              >
                Book Frame Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call Specialist
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Image className="h-4 w-4 mr-1" />
                Art Mode expert
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Samsung certified
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Zero-gap mounting
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
              Samsung Frame Installation Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {frameServices.map((service, index) => (
                <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-indigo-500 shadow-lg' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-indigo-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.type}</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-4">{service.price}</div>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="text-sm text-gray-500 mb-4">Est. Time: {service.timeEstimate}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {frameSizes.map((frame, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{frame.size}</h4>
                    <p className="text-xs text-gray-600 mb-2">{frame.model}</p>
                    <p className="text-sm font-medium text-indigo-600">{frame.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Samsung Frame TV Specialist</h3>
              <p className="text-gray-600">
                Certified in Samsung Frame TV installation with expertise in Art Mode setup,
                One Connect Box concealment, and zero-gap wall mounting.
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
              Our Frame TV Installation Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frame Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Samsung Frame TV Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frameFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Monitor className="h-5 w-5 text-indigo-600 mr-2" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Frame TV Installation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Perfect Frame TV Installations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Samsung Frame TVs transform your living space into an art gallery
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Living Room Frame Install</span>
              </div>
              <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Bedroom Art Mode Display</span>
              </div>
              <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Zero-Gap Wall Mount</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Samsung Frame TV FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What makes Frame TV installation different?
                  </h3>
                  <p className="text-gray-600">
                    Frame TVs require specialized zero-gap mounting to achieve the artwork appearance.
                    The One Connect Box must be hidden, and Art Mode needs proper calibration for the best experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you hide the One Connect Box completely?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we specialize in concealing the One Connect Box either in a nearby cabinet,
                    behind the wall, or in a media closet with the single cable routed invisibly to the TV.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you install custom bezels?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we install Samsung's custom bezels in various styles and colors to match your décor.
                    Bezels are sold separately by Samsung and can be ordered to match your installation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do you set up Art Mode?
                  </h3>
                  <p className="text-gray-600">
                    We configure Art Mode with optimal brightness, color settings, and motion sensor sensitivity.
                    We can also help set up the Samsung Art Store subscription for access to premium artwork.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Your Space with Samsung Frame TV
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Expert Frame TV installation with zero-gap mounting and complete cable concealment.
              Book your specialized installation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Frame Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-indigo-600 border-white hover:bg-indigo-50 hover:text-indigo-700 font-semibold px-8 py-4"
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
