'use client';

import { SiteLayout } from '@/components/site-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { locations, campusLocations } from '@/data/locations';
import { openBooking } from '@/utils/housecall-pro';
import SeoTextBlock from '@/components/seo-text-block';
import MasonryGallery from '@/components/MasonryGallery';
import { getLocationImages } from '@/lib/gallery';

export default function LocationsPageClient() {
  const handleBookOnline = openBooking;

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TV Mounting Service Near Me in Greater LA
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional, renter-friendly TV mounting services throughout Los Angeles County.
              From beachside condos in Santa Monica to downtown lofts in DTLA, we provide damage-free installations
              that protect your security deposit while creating the perfect entertainment setup. Same-day service available.
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

      {/* Enhanced Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Professional TV Mounting Throughout Los Angeles County
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                Ice Mount'n provides comprehensive TV mounting services across all neighborhoods in Los Angeles County. 
                Our licensed technicians specialize in damage-free installations that preserve your walls and security deposits, 
                making us the preferred choice for renters and homeowners alike.
              </p>
              <p className="mb-6">
                From modern apartments in Santa Monica and Beverly Hills to historic homes in Pasadena and Silver Lake, 
                we understand the unique challenges of each area's architecture and building codes. Our same-day service 
                availability ensures minimal disruption to your schedule, while our transparent pricing eliminates surprise costs.
              </p>
              <p className="mb-6">
                We serve both residential and commercial clients, offering specialized solutions for over-fireplace mounting, 
                in-wall cable concealment, and Samsung Frame TV installations. Our commitment to quality extends beyond 
                the initial installation with comprehensive cable management and professional finishing touches.
              </p>
            </div>
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
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose Ice Mount'n for licensed, renter-friendly TV mounting throughout Los Angeles County. 
                We protect your walls and security deposit with clean, damage-free methods, tidy cable management, 
                and precise alignment. Same-day service is available throughout Los Angeles County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Internal Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Complete TV Mounting Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional installation for every TV mounting need across Los Angeles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/standard-tv-mount" className="group">
                <Card className="border-gray-200 hover:shadow-lg transition-shadow group-hover:border-blue-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard TV Mount</h3>
                    <p className="text-gray-600 text-sm">Professional wall mounting for all TV sizes</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/over-fireplace-mount" className="group">
                <Card className="border-gray-200 hover:shadow-lg transition-shadow group-hover:border-blue-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Over-Fireplace Mount</h3>
                    <p className="text-sm text-gray-600">Heat-safe installations above fireplaces</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/cable-concealment" className="group">
                <Card className="border-gray-200 hover:shadow-lg transition-shadow group-hover:border-blue-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cable Concealment</h3>
                    <p className="text-sm text-gray-600">In-wall cable hiding for clean aesthetics</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="mt-8">
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <MasonryGallery
        title="Recent Installs Across Los Angeles"
        subtitle="A few examples from recent Ice Mount'n projects throughout LA"
        images={getLocationImages("los-angeles", "Los Angeles")}
        cols={{ base: 2, sm: 2, md: 3, lg: 4 }}
      />

      {/* SEO Text Block */}
      <SeoTextBlock
        title="TV Mounting Service Areas in Los Angeles: What to Expect"
        paragraphs={[
          "When you choose Ice Mount'n for TV mounting services in Los Angeles, you're selecting a team that understands the unique characteristics of each neighborhood. Our technicians are familiar with local building codes, wall types, and regulations across all Los Angeles County areas, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.",
          "Our service area covers all residential and commercial properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic mounting to complex installations requiring custom solutions. Whether you're in a Beverly Hills condo with strict building rules or a Silver Lake home with unique architectural features, our team adapts to your specific needs.",
          "The installation process typically takes 1-3 hours depending on your setup complexity. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new TV setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />

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
