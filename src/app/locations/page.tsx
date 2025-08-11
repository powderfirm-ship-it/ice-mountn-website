'use client';

import { SiteLayout } from "@/components/site-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { locations, campusLocations } from "@/data/locations";
import { openBooking } from "@/utils/housecall-pro";

export default function LocationsPage() {
  const handleBookOnline = openBooking;

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TV Mounting Near You in Greater LA
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional, renter-friendly TV mounting services throughout Los Angeles County.
              From beachside condos to downtown lofts, we provide damage-free installations
              that protect your security deposit while creating the perfect entertainment setup.
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
                  <Phone className="h-5 w-5 mr-2" />
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

      {/* City Locations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Service Areas Throughout Los Angeles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {locations.map((location) => (
                <Card key={location.slug} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                      <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    </div>

                    {location.landmarks.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Popular areas:</p>
                        <div className="flex flex-wrap gap-1">
                          {location.landmarks.slice(0, 2).map((landmark, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {location.description}
                    </p>

                    <Link
                      href={`/locations/${location.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View {location.name} Details →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Campus Locations */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                College Campus Areas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {campusLocations.map((campus) => (
                  <Card key={campus.slug} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{campus.fullName}</h4>
                          <p className="text-sm text-blue-600">{campus.name} Area</p>
                        </div>
                        <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {campus.description}
                      </p>

                      <Link
                        href={`/locations/${campus.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View {campus.name} Details →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose Us in Your Neighborhood
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  We know LA neighborhoods - from old apartments in Silver Lake to new condos in DTLA
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Renter-Friendly</h3>
                <p className="text-gray-600 text-sm">
                  Damage-free mounting that protects your security deposit in any LA rental
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Same-Day Available</h3>
                <p className="text-gray-600 text-sm">
                  Quick response times throughout Greater LA with same-day installation options
                </p>
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
              Ready for TV Mounting in Your Area?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional installation throughout Los Angeles County.
              Book online or call for your neighborhood.
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
                className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white focus-visible:ring-white/70 font-semibold px-8 py-4"
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
