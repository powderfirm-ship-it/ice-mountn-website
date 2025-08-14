'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tv, Flame, Cable, Speaker, Image, Star, MapPin, Clock, Shield } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";

const localServices = [
  {
    icon: Tv,
    title: "Luxury TV Mounting",
    description: "Premium wall mounting for high-end Beverly Hills homes with designer finishes.",
    price: "Starting at $199"
  },
  {
    icon: Image,
    title: "Samsung Frame Installation",
    description: "Art-display TVs for Beverly Hills luxury homes with zero-gap wall integration.",
    price: "Starting at $299"
  },
  {
    icon: Flame,
    title: "Over-Fireplace Mounting",
    description: "Heat-safe installations above designer fireplaces in Beverly Hills mansions.",
    price: "Starting at $279"
  },
  {
    icon: Cable,
    title: "Invisible Cable Management",
    description: "Complete wire concealment for pristine Beverly Hills interior aesthetics.",
    price: "Starting at $249"
  }
];

const localTestimonials = [
  {
    name: "Sarah M.",
    location: "Beverly Hills",
    rating: 5,
    text: "Incredible service! They mounted my 75\" TV above the fireplace and hid all the cables perfectly. Same-day service and very professional.",
    service: "Over-Fireplace Mount"
  },
  {
    name: "David R.",
    location: "Beverly Hills Hills",
    rating: 5,
    text: "Outstanding work on our Samsung Frame installation. The zero-gap finish looks absolutely stunning in our living room.",
    service: "Samsung Frame Specialist"
  }
];

export default function BeverlyHillsTVMountingClient() {
  const handleBookOnline = openBooking;

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "TV Mounting Beverly Hills",
            "description": "Professional TV mounting and home theater installation services in Beverly Hills, CA. Same-day service available.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ice Mount'n",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Beverly Hills",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "telephone": "(323) 863-8146"
            },
            "areaServed": {
              "@type": "City",
              "name": "Beverly Hills",
              "sameAs": "https://en.wikipedia.org/wiki/Beverly_Hills,_California"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Beverly Hills TV Mounting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Luxury TV Mounting Beverly Hills"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <MapPin className="h-3 w-3 mr-1" />
                Beverly Hills Local Service
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium TV Mounting
              <span className="block text-blue-600">Beverly Hills</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional TV mounting and Samsung Frame installation for Beverly Hills luxury homes.
              Same-day service with designer-quality finishes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-ice-blue hover:bg-blue-600 text-white text-lg px-8 py-6"
              >
                Book Beverly Hills Service
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6"
                asChild
              >
                <a href="tel:(323) 863-8146">Call (323) 863-8146</a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-green-500 mr-2" />
                <span>Same-Day Available</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-blue-500 mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Beverly Hills TV Mounting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services for Beverly Hills luxury homes, designed to complement
              high-end interiors and designer aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {localServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      </div>
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    </div>
                    <CardDescription className="text-base mt-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={handleBookOnline}
              className="bg-ice-blue hover:bg-blue-600 text-white"
              size="lg"
            >
              Schedule Beverly Hills Installation
            </Button>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beverly Hills Customer Reviews
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9/5</span>
              <span className="text-gray-600">from Beverly Hills customers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {localTestimonials.map((review, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {review.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Beverly Hills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Beverly Hills Residents Choose Ice Mount'n
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Service</h3>
                <p className="text-gray-600 text-sm">White-glove service that meets Beverly Hills luxury standards</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600 text-sm">Available throughout Beverly Hills and surrounding areas</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">5-Star Rated</h3>
                <p className="text-gray-600 text-sm">Consistently top-rated by Beverly Hills homeowners</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Beverly Hills Home?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a free estimate for professional TV mounting in Beverly Hills. Same-day service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleBookOnline}
                  className="bg-ice-blue hover:bg-blue-600 text-white"
                  size="lg"
                >
                  Book Beverly Hills Service
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <a href="tel:(323) 863-8146">Call (323) 863-8146</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
