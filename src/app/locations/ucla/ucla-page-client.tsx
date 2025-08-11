'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Clock, Shield, PhoneCall, MapPin, Home, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { openBooking } from "@/utils/housecall-pro";

export function UCLAPageClient() {
  const handleBookOnline = openBooking;

  const campusAreas = [
    "UCLA dormitories & residence halls",
    "Westwood Village apartments",
    "Graduate student housing",
    "Off-campus student apartments",
    "UCLA family housing",
    "Fraternity & sorority houses"
  ];

  const landmarks = [
    "UCLA campus",
    "Westwood Village",
    "Hammer Museum",
    "UCLA Medical Center",
    "Westwood Recreation Center"
  ];

  const services = [
    "Dorm-safe TV mounting",
    "Apartment cable concealment",
    "Sound-bar installation",
    "Gaming setup mounting",
    "Renter-friendly solutions"
  ];

  const studentFeatures = [
    "RA and housing-approved methods",
    "Damage-free mounting for dorms",
    "Student-friendly pricing",
    "Same-day installation available"
  ];

  const faqs = [
    {
      question: "Can you mount TVs in UCLA dorms and residence halls?",
      answer: "Yes! We provide RA-approved TV mounting for UCLA dorms using damage-free methods that comply with UCLA housing regulations. Our mounting solutions leave no permanent marks and can be easily removed without penalty."
    },
    {
      question: "Do you offer student discounts for UCLA TV mounting?",
      answer: "We offer student-friendly pricing for UCLA installations. Our standard rates are already competitive, and we provide the same professional service whether it's a dorm room or off-campus apartment."
    },
    {
      question: "Is this renter-friendly for UCLA student apartments?",
      answer: "Absolutely! Our renter-friendly mounting protects your security deposit in Westwood apartments and student housing. We use landlord-approved mounting methods that won't damage walls or violate lease agreements."
    },
    {
      question: "Can you help with gaming setups and multiple screens for UCLA students?",
      answer: "Yes! We specialize in gaming setups, multiple monitor mounting, and entertainment systems perfect for UCLA student life. From single TVs to complete gaming centers, we can create the perfect setup."
    },
    {
      question: "Do you provide same-day service near UCLA campus?",
      answer: "Yes, same-day installation is available throughout the UCLA and Westwood area during business hours (Mon, Tue, Thu-Sun 8 AM - 8 PM). Book before 2 PM for same-day arrival."
    },
    {
      question: "What about move-in and move-out TV mounting for UCLA students?",
      answer: "We offer flexible scheduling for UCLA move-in periods and can provide quick removal services for move-out. Our damage-free mounting ensures you get your full security deposit back."
    }
  ];

  // Enhanced JSON-LD Schema for UCLA Page
  const uclaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ice Mount'n TV Mounting UCLA",
    "description": "Professional TV mounting service for UCLA students in dorms, apartments, and student housing. RA-approved, renter-friendly installations near campus.",
    "telephone": "(323) 863-8146",
    "email": "contact@icemountn.com",
    "url": "https://icemountn.com/locations/ucla",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Westwood",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "UCLA, Westwood, Los Angeles"
      }
    ],
    "openingHours": [
      "Mo 08:00-20:00",
      "Tu 08:00-20:00",
      "Th 08:00-20:00",
      "Fr 08:00-20:00",
      "Sa 08:00-20:00",
      "Su 08:00-20:00"
    ],
    "sameAs": [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://icemountn.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://icemountn.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "UCLA TV Mounting",
        "item": "https://icemountn.com/locations/ucla"
      }
    ]
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Student TV Mounting Discount",
    "description": "As low as $50 per TV with customer-provided mount. Pricing subject to change; ask us for accurate pricing. Valid student ID required.",
    "price": 50,
    "priceCurrency": "USD",
    "priceValidUntil": "2026-01-01",
    "availability": "https://schema.org/InStock",
    "itemOffered": {
      "@type": "Service",
      "name": "TV Mounting Installation",
      "description": "Professional TV mounting service for UCLA students",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ice Mount'n",
        "telephone": "(323) 863-8146"
      }
    }
  };

  return (
    <SiteLayout>
      {/* Enhanced JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uclaServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              <GraduationCap className="h-4 w-4 mr-1" />
              UCLA Campus Area
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UCLA TV Mounting
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional TV mounting for UCLA students in dorms, apartments, and graduate housing near campus.
              Our RA-approved, renter-friendly installation service provides damage-free mounting that protects
              your security deposit and complies with UCLA housing regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book UCLA Installation
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
                Same-day available
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                RA-approved methods
              </div>
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Renter-friendly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Pricing Badge */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">UCLA Student Pricing</h2>
            
            {/* Single Pricing Card */}
            <div className="max-w-md mx-auto">
              <Card className="relative hover:shadow-lg transition-shadow duration-300 ring-2 ring-blue-500">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Student Discount</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">📺</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Student TV Mounting</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-3">From $50</div>
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
                      RA-approved methods
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Works with all TV sizes
                    </li>
                  </ul>

                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href="tel:(323) 863-8146" aria-label="Call UCLA TV mounting service at (323) 863-8146">
                      Call to Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg inline-block">
                Valid student identification is required for eligibility. All pricing site-wide is subject to a standard <Link href="/trust-and-support" className="text-blue-600 hover:text-blue-700 underline">Trust & Support fee</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Areas & Landmarks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              UCLA Campus Areas We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Student Housing & Dorms
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
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
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

      {/* Student-Focused Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              UCLA Student TV Mounting Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                        <p className="text-gray-600 text-sm">
                          Perfect for UCLA students and campus life
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                Why UCLA Students Choose Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/same-day-tv-mounting"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Need same-day service for move-in? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm">UCLA installations</div>
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

      {/* UCLA-Specific FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              UCLA TV Mounting FAQ
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8 space-y-4">
              <p className="text-gray-600">
                More questions about UCLA TV mounting?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/customer-reviews"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read student reviews →
                </Link>
                <Link
                  href="/#areas"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for UCLA TV Mounting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              RA-approved, renter-friendly installation for UCLA students.
              Same-day service available for move-in and urgent needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book UCLA Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-blue-600 text-white border-white hover:bg-blue-700 hover:text-white font-semibold px-8 py-4"
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
  );
}
