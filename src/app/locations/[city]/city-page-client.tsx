'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Clock, Shield, Wrench, PhoneCall, MapPin, Home, Building } from "lucide-react";
import Link from "next/link";
import { openHousecallProModal } from "@/utils/housecall-pro";

interface CityPageClientProps {
  cityName: string;
  isCampus: boolean;
  services: string[];
  trustFeatures: string[];
  localFaqs: Array<{ question: string; answer: string }>;
  data: {
    name: string;
    neighborhoods?: string[];
    landmarks?: string[];
  };
}

export function CityPageClient({ 
  cityName, 
  isCampus, 
  services, 
  trustFeatures, 
  localFaqs, 
  data 
}: CityPageClientProps) {
  const handleBookOnline = openHousecallProModal;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TV Mounting in {cityName}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional, renter-friendly TV mounting services in {cityName}. 
              {isCampus ? ' Student housing and dorm installations with RA approval.' : ' Apartment and condo installations that protect your security deposit.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book {cityName} Installation
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

            <p className="text-gray-600">
              Same-day service available • Licensed & insured • 100% renter-friendly
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              TV Mounting Services in {cityName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">📺</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">
                      Professional installation with damage-free mounting options
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Ice Mount'n in {cityName}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
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
              {cityName} TV Mounting FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {localFaqs.map((faq, index) => (
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for {cityName} TV Mounting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional installation that protects your property and creates the perfect entertainment setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookOnline}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book {cityName} Installation
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-blue-700 hover:text-white font-semibold px-8 py-4"
              >
                <a href="tel:(323) 863-8146">
                  Call (323) 863-8146
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
