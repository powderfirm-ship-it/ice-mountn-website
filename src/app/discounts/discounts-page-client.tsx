'use client';

import { SiteLayout } from '@/components/site-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Shield, PhoneCall, Percent } from 'lucide-react';
import { openBooking } from '@/utils/housecall-pro';
import Link from 'next/link';

export default function DiscountsPageClient() {
  const handleBookOnline = openBooking;

  // Offer JSON-LD Schema for Discounts
  const offersSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Student TV Mounting Discount",
      "description": "Special pricing for students - TV mounting as low as $50 per TV with customer-provided mount",
      "price": "50",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "50",
        "priceCurrency": "USD",
        "minPrice": "50",
        "description": "Per TV installation with customer-provided mount. Pricing subject to change. Valid student ID required."
      },
      "eligibleCustomerType": {
        "@type": "BusinessEntityType",
        "name": "Students"
      },
      "validFrom": "2024-01-01",
      "validThrough": "2025-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "TV Mounting Installation",
        "description": "Professional TV mounting service for students",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ice Mount'n",
          "telephone": "(323) 863-8146"
        }
      },
      "availability": "https://schema.org/InStock",
      "eligibilityToWorkStatus": "Must provide valid student ID"
    },
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Military TV Mounting Discount",
      "description": "10% off labor for active duty military, veterans, and military families",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "description": "10% discount on labor costs. ID required. Discount applies to labor only and cannot be combined with other offers."
      },
      "eligibleCustomerType": [
        {
          "@type": "BusinessEntityType",
          "name": "Military"
        },
        {
          "@type": "BusinessEntityType",
          "name": "Veterans"
        }
      ],
      "validFrom": "2024-01-01",
      "validThrough": "2025-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "TV Mounting Installation",
        "description": "Professional TV mounting service for military and veterans",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Ice Mount'n",
          "telephone": "(323) 863-8146"
        }
      },
      "availability": "https://schema.org/InStock",
      "eligibilityToWorkStatus": "Must provide valid military ID or veteran documentation"
    }
  ];

  return (
    <SiteLayout>
      {/* Offer JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offersSchema)
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              <Percent className="h-4 w-4 mr-1" />
              Special Offers
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TV Mounting Discounts & Specials
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Save on professional TV mounting with our special discounts for students,
              military members, and veterans. Same professional quality, better pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Discounts Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Student Discount */}
              <Card className="border-green-200 bg-green-50 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-700">
                    Student Discount
                  </CardTitle>
                  <div className="text-4xl font-bold text-green-800 mt-2">
                    As Low As $50
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-6">
                      $50 pricing is per TV installation with customer-provided mount.
                      Pricing subject to change—contact us for current rates.
                      Valid student ID required to receive special.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Perfect for:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• College dorm rooms</li>
                      <li>• Student apartments</li>
                      <li>• Graduate housing</li>
                      <li>• Off-campus living</li>
                    </ul>
                    
                    <div className="pt-3 border-t border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Popular Campus Areas:</h5>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href="/locations/ucla"
                          className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full hover:bg-green-200 transition-colors"
                        >
                          UCLA
                        </Link>
                        <Link
                          href="/locations/usc"
                          className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full hover:bg-green-200 transition-colors"
                        >
                          USC
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handleBookOnline}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                    >
                      Book Online
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3"
                      asChild
                    >
                      <a href="tel:(323) 863-8146">
                        <PhoneCall className="h-5 w-5 mr-2" />
                        Call (323) 863-8146
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Military Discount */}
              <Card className="border-blue-200 bg-blue-50 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-700">
                    Military Discount
                  </CardTitle>
                  <div className="text-4xl font-bold text-blue-800 mt-2">
                    10% Off Labor
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-6">
                      ID required. Discount applies to labor only and cannot be combined
                      with other offers. Pricing subject to change.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Available for:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Active duty military</li>
                      <li>• Military veterans</li>
                      <li>• Military families</li>
                      <li>• All service branches</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handleBookOnline}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                    >
                      Book Online
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3"
                      asChild
                    >
                      <a href="tel:(323) 863-8146">
                        <PhoneCall className="h-5 w-5 mr-2" />
                        Call (323) 863-8146
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Important Discount Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Discount Requirements:</h4>
                    <ul className="space-y-1">
                      <li>• Valid ID required at time of service</li>
                      <li>• Discounts cannot be combined</li>
                      <li>• Subject to verification</li>
                      <li>• One discount per customer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Service Details:</h4>
                    <ul className="space-y-1">
                      <li>• Professional installation included</li>
                      <li>• Same quality standards apply</li>
                      <li>• Licensed and insured technicians</li>
                      <li>• 100% satisfaction guarantee</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Save on TV Mounting?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact us today to take advantage of these special discounts.
              Professional installation at student and military-friendly prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Installation Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4"
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
