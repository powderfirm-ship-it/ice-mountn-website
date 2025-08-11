'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Wrench, PhoneCall, Calendar, Home, Zap } from "lucide-react";
import { openHousecallProModal } from "@/utils/housecall-pro";

export default function SameDayTVMountingPage() {
  const handleBookOnline = openHousecallProModal;

  const urgentFeatures = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Arrives Today",
      description: "Same-day service available when you book before 2 PM on business days"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Licensed & Insured",
      description: "Fully licensed technicians with liability insurance for urgent installations"
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-600" />,
      title: "Clean Installation",
      description: "Professional wiring and cable management, even on rushed same-day jobs"
    },
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "Renter-Friendly",
      description: "Landlord-safe mounting options that won't damage walls or violate lease terms"
    }
  ];

  const sameDayServices = [
    "Standard TV Wall Mounting (all sizes)",
    "Over-Fireplace Installation",
    "In-Wall Cable Concealment",
    "Sound-bar & Speaker Mounting",
    "Samsung Frame TV Installation"
  ];

  const faqs = [
    {
      question: "How quickly can you install my TV today?",
      answer: "If you book before 2 PM on business days (Mon, Tue, Thu, Fri, Sat, Sun), we can typically arrive the same day within 2-4 hours. Wednesday we're closed, but Tuesday and Thursday bookings get priority scheduling."
    },
    {
      question: "Is same-day TV mounting safe and reliable?",
      answer: "Absolutely! Our same-day service maintains the same quality standards as scheduled appointments. We use proper wall anchors, locate studs, and ensure secure mounting regardless of timeline urgency."
    },
    {
      question: "What if I'm renting? Can you mount my TV today without wall damage?",
      answer: "Yes! We specialize in renter-friendly mounting solutions including damage-free options, removable mounts, and landlord-approved hardware. Same-day installations can be completely renter-safe."
    },
    {
      question: "Do you provide emergency TV mounting on weekends?",
      answer: "Yes, we offer same-day service Monday, Tuesday, Thursday through Sunday during business hours (8 AM - 8 PM). Wednesday we're closed for emergency appointments."
    },
    {
      question: "What's included with urgent same-day TV mounting?",
      answer: "Every same-day installation includes: wall mount hardware, professional installation, basic cable management, safety testing, and cleanup - the same full service as scheduled appointments."
    },
    {
      question: "How much does same-day TV mounting cost?",
      answer: "Same-day pricing matches our standard rates: Large Flat-Panel Screens (≤60\") start at $149, Cinematic Flat-Panel Screens (>60\") start at $179. No rush fees for urgent installations."
    }
  ];

  // JSON-LD Schema for Same-Day Service
  const sameDayServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Same-Day TV Mounting Los Angeles",
    "description": "Urgent and emergency TV mounting service available today throughout Los Angeles. Renter-friendly, licensed technicians with same-day installation.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ice Mount'n",
      "telephone": "(323) 863-8146",
      "email": "contact@icemountn.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "openingHours": [
        "Mo 08:00-20:00",
        "Tu 08:00-20:00",
        "Th 08:00-20:00",
        "Fr 08:00-20:00",
        "Sa 08:00-20:00",
        "Su 08:00-20:00"
      ]
    },
    "areaServed": "Los Angeles, CA",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://icemountn.com/same-day-tv-mounting",
      "serviceSmsNumber": "(323) 863-8146"
    }
  };

  return (
    <SiteLayout>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sameDayServiceSchema)
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-100 text-red-800 border-red-200 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              Same-Day Available
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Same-Day TV Mounting in Los Angeles
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Need urgent TV installation today? Our licensed technicians provide emergency
              and same-day TV mounting throughout LA with renter-friendly, damage-free mounting options.
              Book online now and we'll arrive within hours!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Same-Day Service Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 font-semibold px-8 py-4"
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
                <Zap className="h-4 w-4 mr-1 text-red-500" />
                Arrives today
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & insured
              </div>
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Renter-friendly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Urgent Installs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us for Urgent TV Installation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {urgentFeatures.map((feature, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {feature.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Renter-Friendly Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Renter-Friendly Mounting Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Urgent doesn't mean damaging! Our same-day TV mounting uses landlord-safe options
              that protect your security deposit while getting your TV mounted today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">No Wall Damage</h3>
                <p className="text-gray-600 text-sm">Specialized mounting techniques that leave no permanent marks or holes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Landlord-Safe Options</h3>
                <p className="text-gray-600 text-sm">Mounting solutions that comply with rental agreements and lease terms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Removable Systems</h3>
                <p className="text-gray-600 text-sm">Easy-to-remove mounts that restore walls to original condition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Can Install Same-Day
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {sameDayServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-600" />
                  Service Window
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Same-day installation available during business hours:
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Monday, Tuesday: 8 AM - 8 PM</div>
                  <div>Wednesday: <span className="font-semibold">Closed</span></div>
                  <div>Thursday - Sunday: 8 AM - 8 PM</div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Book before 2 PM for same-day arrival
                </p>
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
              Same-Day TV Mounting FAQ
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need TV Mounting Today?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Emergency and same-day installation available throughout Los Angeles.
              Book online now or call for immediate scheduling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Same-Day Service
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-red-600 text-white border-white hover:bg-red-700 hover:text-white font-semibold px-8 py-4"
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
