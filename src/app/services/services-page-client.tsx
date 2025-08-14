'use client';

import { SiteLayout } from '@/components/site-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Clock, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { openBooking } from '@/utils/housecall-pro';
import SeoTextBlock from '@/components/seo-text-block';
import MasonryGallery from '@/components/MasonryGallery';
import { getServiceImages } from '@/lib/gallery';

export default function ServicesPageClient() {
  const handleBookOnline = openBooking;

  const services = [
    {
      title: "Standard TV Mount",
      price: "From $149",
      description: "Professional wall mounting for TVs up to 85\". Includes basic cable management and tilt adjustment.",
      features: ["Stud mounting", "Basic cable hiding", "Tilt adjustment", "Works with all TV sizes"],
      href: "/services/standard-tv-mount",
      popular: true,
      timeEstimate: "1-2 hours",
      icon: "📺"
    },
    {
      title: "Over-Fireplace Mount",
      price: "From $249",
      description: "Heat-safe installation above fireplaces with specialized mounting solutions and pull-down brackets.",
      features: ["Heat-resistant mounting", "Pull-down brackets", "Cable concealment", "Safety certified"],
      href: "/services/over-fireplace-mount",
      timeEstimate: "2-3 hours",
      icon: "🔥"
    },
    {
      title: "In-Wall Cable Concealment",
      price: "From $199",
      description: "Complete cable hiding inside walls with new outlet installation for a completely wire-free look.",
      features: ["In-wall fishing", "Outlet installation", "Power & data lines", "Code compliant"],
      href: "/services/cable-concealment",
      timeEstimate: "2-4 hours",
      icon: "🔌"
    },
    {
      title: "Soundbar / Speaker Mounting",
      price: "From $129",
      description: "Professional audio equipment mounting with optimal positioning and calibration.",
      features: ["Sound-bar mounting", "Surround speakers", "Optimal positioning", "Wire management"],
      href: "/services/soundbar-mounting",
      timeEstimate: "1-3 hours",
      icon: "🔊"
    },
    {
      title: "Samsung Frame Specialist",
      price: "From $199",
      description: "Expert installation of Samsung Frame TVs with zero-gap mounting and Art Mode optimization.",
      features: ["Samsung Frame mounting", "Recessed box installation", "Zero-gap wall finish", "Art Mode setup"],
      href: "/services/samsung-frame",
      specialty: true,
      timeEstimate: "2-4 hours",
      icon: "🖼️"
    }
  ];

  const whyChooseUs = [
    "Same-day service available throughout LA",
    "Licensed and insured professional technicians",
    "100% satisfaction guarantee on all work",
    "Premium mounting hardware included",
    "Free consultation and assessment",
    "Clean-up and debris removal included",
    "All TV sizes and brands supported",
    "Competitive transparent pricing"
  ];

  const serviceAreas = [
    "Beverly Hills", "Santa Monica", "Hollywood", "Downtown LA", "Pasadena", "Venice",
    "West Hollywood", "Miracle Mile", "Koreatown", "Silver Lake", "Echo Park", "Los Feliz"
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional TV Mounting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete TV mounting and home theater installation services throughout Los Angeles.
              From basic mounting to specialized installations - we do it all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book Service Online
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
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
                Licensed & insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                4.9/5 rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our TV Mounting Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${
                  service.popular ? 'ring-2 ring-blue-500' : service.specialty ? 'ring-2 ring-purple-500' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  {service.specialty && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Specialty Service</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="text-sm text-gray-500 mb-4">Est. Time: {service.timeEstimate}</div>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={service.href}>
                      <Button
                        variant="outline"
                        className="w-full group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Ice Mount'n
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Serving Greater Los Angeles
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Professional TV mounting services throughout Los Angeles County with same-day availability in most areas.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600">
              Don't see your area? We're constantly expanding throughout Southern California.
              <a href="tel:(323) 863-8146" className="text-blue-600 hover:underline ml-1">Call us</a> to check availability.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Online</h3>
                <p className="text-gray-600 text-sm">Choose your service and schedule a convenient time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Assessment</h3>
                <p className="text-gray-600 text-sm">We evaluate your space and provide a detailed quote</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Install</h3>
                <p className="text-gray-600 text-sm">Expert installation with premium hardware included</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Results</h3>
                <p className="text-gray-600 text-sm">Enjoy your perfectly mounted TV with clean finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <MasonryGallery
        title="Recent Installs"
        subtitle="A few examples from recent Ice Mount'n projects"
        images={getServiceImages("standard-tv-mount").slice(0, 6)}
        cols={{ base: 2, sm: 2, md: 3, lg: 4 }}
      />

      {/* SEO Text Block */}
      <SeoTextBlock
        title="About Our TV Mounting Services in Los Angeles"
        paragraphs={[
          "When you choose Ice Mount'n for TV mounting services in Los Angeles, you're selecting a team that understands the unique characteristics of Southern California homes and apartments. Our technicians are familiar with local building codes, wall types, and regulations across all Los Angeles County areas, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.",
          "Our comprehensive service area covers all residential and commercial properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic mounting to complex installations requiring custom solutions, including over-fireplace mounting, in-wall cable concealment, and specialized Samsung Frame TV installations.",
          "The installation process typically takes 1-4 hours depending on your setup complexity and service type. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new TV setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Mount Your TV?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional installation with same-day service available throughout Los Angeles.
              Book your service today or call for a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Service Online
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
  );
}
