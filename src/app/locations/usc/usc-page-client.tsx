'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Clock, Shield, PhoneCall, MapPin, Home, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { openBooking } from "@/utils/housecall-pro";

export function USCPageClient() {
  const handleBookOnline = openBooking;

  const campusAreas = [
    "USC dormitories & residence halls",
    "University Park apartments",
    "Graduate student housing",
    "Off-campus student apartments",
    "USC family housing",
    "Fraternity & sorority houses"
  ];

  const landmarks = [
    "USC campus",
    "Los Angeles Memorial Coliseum",
    "Exposition Park",
    "USC Village",
    "Natural History Museum"
  ];

  const services = [
    "Dorm-safe TV mounting",
    "Apartment cable concealment",
    "Sound-bar installation",
    "Gaming setup mounting",
    "Renter-friendly solutions"
  ];

  const studentFeatures = [
    "Landlord and housing-approved methods",
    "Damage-free mounting for dorms",
    "Student-friendly pricing",
    "Same-day installation available"
  ];

  const faqs = [
    {
      question: "Can you mount TVs in USC dorms and residence halls?",
      answer: "Yes! We provide landlord-approved TV mounting for USC dorms using damage-free methods that comply with USC housing regulations. Our mounting solutions leave no permanent marks and can be easily removed without penalty."
    },
    {
      question: "Do you offer student discounts for USC TV mounting?",
      answer: "We offer student-friendly pricing for USC installations. Our standard rates are already competitive, and we provide the same professional service whether it's a dorm room or off-campus apartment."
    },
    {
      question: "Is this renter-friendly for USC student apartments?",
      answer: "Absolutely! Our renter-friendly mounting protects your security deposit in University Park apartments and student housing. We use landlord-approved mounting methods that won't damage walls or violate lease agreements."
    },
    {
      question: "Can you help with gaming setups and multiple screens for USC students?",
      answer: "Yes! We specialize in gaming setups, multiple monitor mounting, and entertainment systems perfect for USC student life. From single TVs to complete gaming centers, we can create the perfect setup."
    },
    {
      question: "Do you provide same-day service near USC campus?",
      answer: "Yes, same-day installation is available throughout the USC and University Park area during business hours (Mon-Sun 8 AM - 8 PM). Book before 2 PM for same-day arrival."
    },
    {
      question: "What about move-in and move-out TV mounting for USC students?",
      answer: "We offer flexible scheduling for USC move-in periods and can provide quick removal services for move-out. Our damage-free mounting ensures you get your full security deposit back."
    }
  ];

  // Enhanced JSON-LD Schema for USC Page
  const uscServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ice Mount'n TV Mounting USC",
    "description": "Professional TV mounting service for USC students in dorms, apartments, and student housing. Landlord-approved, renter-friendly installations near campus.",
    "telephone": "(323) 863-8146",
    "email": "contact@icemountn.com",
    "url": "https://icemountn.com/locations/usc",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "University Park",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "USC, University Park, Los Angeles"
      },
      {
        "@type": "Place",
        "name": "Exposition Park, Los Angeles"
      },
      {
        "@type": "Place",
        "name": "Downtown Los Angeles"
      }
    ],
    "openingHours": [
      "Mo 08:00-20:00",
      "Tu 08:00-20:00",
      "We 08:00-20:00",
      "Th 08:00-20:00",
      "Fr 08:00-20:00",
      "Sa 08:00-20:00",
      "Su 08:00-20:00"
    ],
    "sameAs": [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0224,
      "longitude": -118.2851
    },
    "priceRange": "$$"
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "USC Student TV Mounting Service",
    "description": "Professional TV mounting for USC students with student-friendly pricing",
    "price": "50",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-01-01",
    "availability": "https://schema.org/InStock",
    "eligibleRegion": {
      "@type": "Place",
      "name": "USC Campus Area"
    },
    "eligibleCustomerType": "Student",
    "itemOffered": {
      "@type": "Service",
      "name": "TV Mounting Installation",
      "description": "Professional TV mounting service for USC students"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "USC TV Mounting Service",
    "description": "Professional TV mounting service for USC students in dorms, apartments, and student housing. Landlord-approved, renter-friendly installations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ice Mount'n",
      "telephone": "(323) 863-8146"
    },
    "areaServed": {
      "@type": "Place",
      "name": "USC Campus Area"
    },
    "serviceType": "TV Mounting Installation",
    "category": "Home Services"
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uscServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      {/* Hero Section */}
      <main>
        <section className="bg-gradient-to-br from-red-50 via-yellow-50 to-red-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <GraduationCap className="h-4 w-4 mr-2" />
                USC Student Special
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                USC TV Mounting
                <span className="block text-red-600">Student Discount</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional TV mounting for USC students in dorms, apartments & off-campus housing. 
                Landlord-approved, renter-friendly installations starting at $50.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  onClick={handleBookOnline}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Book USC Installation
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold"
                >
                  <a href="tel:(323) 863-8146" aria-label="Call USC TV mounting service at (323) 863-8146">
                    <PhoneCall className="h-5 w-5 mr-2" />
                    Call (323) 863-8146
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-1">$50</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-1">Same Day</div>
                  <div className="text-sm text-gray-600">Service Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-1">Landlord</div>
                  <div className="text-sm text-gray-600">Approved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-1">USC Area</div>
                  <div className="text-sm text-gray-600">Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">USC Student Pricing</h2>
              
              {/* Single Pricing Card */}
              <div className="max-w-md mx-auto">
                <Card className="relative hover:shadow-lg transition-shadow duration-300 ring-2 ring-red-500">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white">Student Discount</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">📺</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Student TV Mounting</h3>
                    <div className="text-2xl font-bold text-red-600 mb-3">From $50</div>
                    <p className="text-gray-600 text-sm mb-4">Student discount pricing per TV installation</p>
                    <div className="text-sm text-gray-500 mb-4">Est. Time: 1-2 hours</div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Dorm-safe TV mounting
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Basic cable management
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Landlord-approved methods
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        Works with all TV sizes
                      </li>
                    </ul>

                    <Button 
                      asChild
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <a href="tel:(323) 863-8146" aria-label="Call USC TV mounting service at (323) 863-8146">
                        Call to Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg inline-block">
                  Valid student identification is required for eligibility. All pricing site-wide is subject to a standard <Link href="/trust-and-support" className="text-red-600 hover:text-red-700 underline">Trust & Support fee</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">USC Campus Areas We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Home className="h-5 w-5 mr-2 text-red-600" />
                    Student Housing
                  </h3>
                  <div className="space-y-2">
                    {campusAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-red-600" />
                    Campus Landmarks
                  </h3>
                  <div className="space-y-2">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">USC Student TV Mounting Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                          <p className="text-gray-600 text-sm">Perfect for USC students and campus life</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-red-600" />
                  Why USC Students Choose Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link 
                    href="/same-day-tv-mounting"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    Need same-day service for move-in? →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-red-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-white">
                  <div className="text-2xl font-bold mb-1">300+</div>
                  <div className="text-sm">USC installations</div>
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm">Student rating</div>
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold mb-1">0</div>
                  <div className="text-sm">Deposit penalties</div>
                </div>
                <div className="text-white">
                  <div className="text-2xl font-bold mb-1">Same Day</div>
                  <div className="text-sm">Service available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">USC TV Mounting FAQ</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
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
              <div className="text-center mt-8 space-y-4">
                <p className="text-gray-600">More questions about USC TV mounting?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/customer-reviews"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    Read student reviews →
                  </Link>
                  <Link 
                    href="/#areas"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    View all service areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready for USC TV Mounting?</h2>
              <p className="text-xl text-red-100 mb-8">
                Landlord-approved, renter-friendly installation for USC students. Same-day service available for move-in and urgent needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBookOnline}
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4"
                >
                  Book USC Installation
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white focus-visible:ring-white/70 font-semibold px-8 py-4"
                >
                  <a href="tel:(323) 863-8146" aria-label="Call USC TV mounting service at (323) 863-8146">
                    Call (323) 863-8146
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
