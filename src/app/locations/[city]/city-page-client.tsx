'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Clock, Shield, Wrench, PhoneCall, MapPin, Home, Building, Users, Award, Zap } from "lucide-react";
import Link from "next/link";
import { openBooking } from "@/utils/housecall-pro";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { Tv, Flame, Cable, Speaker, Frame, Zap as Lightning } from "lucide-react";
import SeoTextBlock from "@/components/seo-text-block";
import MasonryGallery from "@/components/masonry-gallery";
import { getCityData } from "@/data/cities";
import Image from "next/image";

interface CityPageClientProps {
  cityName: string;
  citySlug: string;
  isCampus: boolean;
  services: ServiceSlug[];
  trustFeatures: string[];
  localFaqs: Array<{ question: string; answer: string }>;
  data: {
    name: string;
    neighborhoods?: string[];
    landmarks?: string[];
  };
}

// Icon mapping function
function getIcon(name: "tv" | "flame" | "cable" | "speaker" | "frame" | "lightning") {
  switch (name) {
    case "tv": return Tv;
    case "flame": return Flame;
    case "cable": return Cable;
    case "speaker": return Speaker;
    case "frame": return Frame;
    case "lightning": return Lightning;
    default: return Tv;
  }
}

const ORDER: ServiceSlug[] = ["standard-tv-mount", "over-fireplace-mount", "cable-concealment", "soundbar-mounting", "samsung-frame", "same-day-tv-mounting"];

export function CityPageClient({ 
  cityName, 
  citySlug,
  isCampus, 
  services, 
  trustFeatures, 
  localFaqs, 
  data 
}: CityPageClientProps) {
  const handleBookOnline = openBooking;
  const cityData = getCityData(citySlug);

  // Fallback data if city not in our database
  const neighborhoods = cityData?.neighborhoods || data.neighborhoods || ["Downtown", "Residential Areas"];
  const landmarks = cityData?.landmarks || data.landmarks || ["Local Landmarks"];
  const localChallenges = cityData?.localChallenges || ["local building codes", "parking regulations", "property requirements"];
  const localBenefits = cityData?.localBenefits || ["local expertise", "building knowledge", "community understanding"];
  const jobCount = cityData?.jobCount || 150;
  const averageRating = cityData?.averageRating || 4.8;
  const nearbyCities = cityData?.nearbyCities || ["Nearby Areas"];
  const heroImage = cityData?.heroImage || "tv-mounting-los-angeles-16.webp";
  const galleryImages = cityData?.galleryImages || [
    "tv-wall-installation-los-angeles-01.webp",
    "samsung-frame-installation-los-angeles-01.webp",
    "tv-mounting-los-angeles-07.webp",
    "tv-wall-installation-los-angeles-02.webp",
    "tv-mounting-los-angeles-08.webp",
    "samsung-frame-installation-los-angeles-02.webp"
  ];
  const enhancedLocalFaqs = cityData?.localFaqs || localFaqs;

  return (
    <>
      {/* Hero Section - Above the Fold */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src={`/images/gallery/${heroImage}`}
            alt={`TV Mounting in ${cityName}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              <Shield className="h-4 w-4 mr-1" />
              Licensed & Insured
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert TV Mounting in {cityName} – Secure, Same-Day, Renter-Friendly Installations
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Serving {cityName} neighborhoods from {neighborhoods.slice(0, 2).join(" to ")} with licensed & insured technicians.
              {isCampus ? ' Student housing and dorm installations with RA approval.' : ' Apartment and condo installations that protect your security deposit.'}
            </p>

            {/* Instant Quote Form - Above the Fold */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Instant Quote</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  onClick={handleBookOnline}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
                >
                  Get Quote Now
                </Button>
              </div>
            </div>

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

            {/* Trust Badges */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                {averageRating}/5 rating
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Same-day available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* City-specific intro paragraph */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                From {neighborhoods.slice(0, 2).join(" to ")} to {neighborhoods.slice(-1)[0]}, we provide tailored TV mounting solutions for every property type in {cityName}. 
                We know local parking, building access rules, and {localChallenges.slice(0, 2).join(", ")} — so your installation is smooth and compliant.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our {cityName} TV Mounting Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ORDER.filter(s => services.includes(s)).map((service) => {
                const serviceData = SERVICES[service];
                const Icon = getIcon(serviceData.icon);
                
                return (
                  <Link key={service} href={`/services/${service}`} className="group">
                    <Card className="border-gray-200 hover:shadow-lg transition-shadow group-hover:border-blue-300 h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{serviceData.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{serviceData.description}</p>
                        <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          Learn More →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in [City] */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Ice Mount'n in {cityName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Local Stats */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Experience</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">Over {jobCount}</p>
                <p className="text-gray-600">TVs mounted in {cityName} in 2024</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Rating</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">{averageRating}/5</p>
                <p className="text-gray-600">from {cityName} residents</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-3xl font-bold text-orange-600 mb-2">24hr</p>
                <p className="text-gray-600">response time in {cityName}</p>
              </div>
            </div>

            {/* Local Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {localBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Embedded Google Map */}
            <div className="mt-12 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Area in {cityName}</h3>
                <div className="w-80 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                  <span className="text-gray-500 ml-2">Map showing {cityName} location</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Serving all {cityName} neighborhoods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery - NO CAROUSEL */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recent {cityName} Installations
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              See examples of our work in {cityName} homes and apartments. Each installation is tailored to the unique characteristics of your property.
            </p>
            
            <MasonryGallery 
              items={galleryImages.map((img, index) => ({
                src: `/images/gallery/${img}`,
                alt: `${cityName} TV mounting installation ${index + 1} - professional wall mounting service`,
                width: 1200,
                height: 800
              }))}
            />
          </div>
        </div>
      </section>

      {/* Mini Customer Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How We Transformed a {cityName} Living Room in Just 2 Hours
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Samsung Frame TV Installation in {neighborhoods[0]}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This {cityName} family wanted their Samsung Frame TV to look like artwork when not in use. 
                    We installed it with zero-gap mounting and concealed all cables in-wall for a completely clean appearance.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The installation took just 2 hours, and the family was amazed at how seamlessly the TV integrated 
                    with their {cityName} home's aesthetic. No visible wires, perfect positioning, and Art Mode that 
                    makes it look like a gallery piece.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>5-star rating from {cityName} homeowner</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.slice(0, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={`/images/gallery/${img}`}
                        alt={`${cityName} TV installation example ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood-Specific FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {cityName} TV Mounting FAQ
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {enhancedLocalFaqs.map((faq, index) => (
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
          </div>
        </div>
      </section>

      {/* Localized "About Our Service" Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              About Our TV Mounting Service in {cityName}
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                When you choose Ice Mount'n for TV mounting services in {cityName}, you're selecting a team that understands 
                the unique characteristics of your neighborhood. From {neighborhoods.slice(0, 3).join(" to ")} and beyond, 
                our technicians are familiar with {cityName}'s building codes, wall types, and local regulations.
              </p>
              
              <p className="mb-6">
                We know the challenges of {localChallenges.slice(0, 2).join(" and ")}, and we've developed solutions that 
                work specifically for {cityName} properties. Whether you're in a {neighborhoods[0]} condo with strict building rules 
                or a {neighborhoods[1]} home with unique architectural features, our team adapts to your specific needs.
              </p>
              
              <p className="mb-6">
                Our {cityName} service area covers all residential and commercial properties, from historic homes near {landmarks[0]} 
                to modern apartments in {neighborhoods[2]}. We handle everything from basic mounting to complex installations 
                requiring custom solutions, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.
              </p>
              
              <p className="mb-8">
                The installation process in {cityName} typically takes 1-3 hours depending on your setup complexity. We arrive on time, 
                work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy 
                your new TV setup without waiting weeks for an appointment.
              </p>
            </div>
            
            <div className="text-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book Your {cityName} Installation Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Related Services & Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Related Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/standard-tv-mount" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Standard TV Mount
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/over-fireplace-mount" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Over-Fireplace Mount
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cable-concealment" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Cable Concealment
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/samsung-frame" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Samsung Frame Installation
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Nearby Cities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Areas</h3>
                <ul className="space-y-2">
                  {nearbyCities.slice(0, 3).map((city) => (
                    <li key={city}>
                      <Link href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-700 hover:underline">
                        TV Mounting in {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Additional Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">More Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/customer-reviews" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-blue-600 hover:text-blue-700 hover:underline">
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Service Areas
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MasonryGallery items={galleryImages.slice(0, 3).map((img, index) => ({
              src: `/images/gallery/${img}`,
              alt: `${cityName} TV mounting installation ${index + 1} - professional service`,
              width: 1200,
              height: 800
            }))} />
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <SeoTextBlock
        title={`TV Mounting in ${cityName}: What to Expect`}
        paragraphs={[
          `When you choose Ice Mount'n for TV mounting services in ${cityName}, you're selecting a team that understands the unique characteristics of your neighborhood. Our technicians are familiar with ${cityName}'s building codes, wall types, and local regulations, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.`,
          `Our ${cityName} service area covers all residential and commercial properties, from historic homes to modern apartments. We handle everything from basic mounting to complex installations requiring custom solutions. Whether you're in a ${cityName} condo with strict building rules or a private home with unique architectural features, our team adapts to your specific needs.`,
          `The installation process in ${cityName} typically takes 1-3 hours depending on your setup complexity. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new TV setup without waiting weeks for an appointment.`
        ]}
      />

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
                className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white focus-visible:ring-white/70 font-semibold px-8 py-4"
              >
                <a href="tel:(323) 863-8146">
                  Call (323) 863-8146
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Book Now Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          onClick={handleBookOnline}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
        >
          Book Now
        </Button>
      </div>
    </>
  );
}
