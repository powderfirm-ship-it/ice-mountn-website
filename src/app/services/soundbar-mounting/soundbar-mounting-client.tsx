'use client';

import { SiteLayout } from '@/components/site-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Star, Clock, Shield, Volume2, PhoneCall, Speaker } from 'lucide-react';
import { openBooking } from '@/utils/housecall-pro';
import SeoTextBlock from '@/components/seo-text-block';

export default function SoundbarMountingClient() {
  const handleBookOnline = openBooking;

  const processSteps = [
    {
      step: 1,
      title: "Audio Assessment",
      description: "Evaluate room acoustics and determine optimal speaker placement"
    },
    {
      step: 2,
      title: "Precise Mounting",
      description: "Install speakers/soundbar at ideal height and angle for best audio"
    },
    {
      step: 3,
      title: "Cable Management",
      description: "Route audio cables cleanly and connect to your audio system"
    },
    {
      step: 4,
      title: "Audio Calibration",
      description: "Test and optimize speaker positioning for room acoustics"
    }
  ];

  const benefits = [
    "Optimal speaker positioning for room acoustics",
    "Clean cable management for audio equipment",
    "Soundbar mounting below or above TV",
    "Surround speaker installation",
    "Subwoofer placement optimization",
    "Wire concealment for clean appearance",
    "Professional audio calibration",
    "Compatible with all major brands"
  ];

  const serviceOptions = [
    {
      type: "Soundbar Only",
      price: "$129",
      description: "Mount soundbar below or above TV with cable management",
      features: ["Soundbar wall mounting", "Cable management", "Optimal positioning", "Connection testing"],
      timeEstimate: "1-2 hours"
    },
    {
      type: "Soundbar + Subwoofer",
      price: "$179",
      description: "Complete 2.1 system setup with optimal placement",
      features: ["Soundbar mounting", "Subwoofer positioning", "Cable management", "System calibration"],
      popular: true,
      timeEstimate: "2-3 hours"
    },
    {
      type: "Surround Sound Setup",
      price: "$299",
      description: "Full surround speaker installation and calibration",
      features: ["Multiple speaker mounting", "Surround positioning", "Complete wiring", "Professional calibration"],
      timeEstimate: "3-4 hours"
    }
  ];

  const supportedBrands = [
    "Sonos", "Samsung", "LG", "Sony", "Bose", "JBL", "Yamaha", "Klipsch", "Polk Audio", "KEF", "Definitive Technology", "Harman Kardon"
  ];

  const audioTips = [
    {
      title: "Soundbar Placement",
      description: "Position soundbar at ear level when seated, typically 2-3 feet below TV center"
    },
    {
      title: "Room Acoustics",
      description: "Consider room size, furniture placement, and wall materials for optimal sound"
    },
    {
      title: "Cable Quality",
      description: "Use high-quality HDMI ARC or optical cables for best audio transmission"
    },
    {
      title: "Calibration",
      description: "Proper calibration ensures balanced sound across all listening positions"
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4">
              Audio Specialist
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Soundbar & Speaker Mounting
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional audio equipment mounting and calibration. From simple soundbars
              to complete surround sound systems - optimized for your room's acoustics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4"
              >
                Book Audio Setup
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call for Consultation
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Volume2 className="h-4 w-4 mr-1" />
                Audio optimization
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                All brands supported
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Professional calibration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Audio Mounting Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {serviceOptions.map((option, index) => (
                <Card key={index} className={`relative ${option.popular ? 'ring-2 ring-purple-500 shadow-lg' : ''}`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.type}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-4">{option.price}</div>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <div className="text-sm text-gray-500 mb-4">Est. Time: {option.timeEstimate}</div>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Audio Calibration</h3>
              <p className="text-gray-600">
                All installations include professional audio calibration to optimize sound quality
                for your specific room acoustics and listening preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Audio Installation Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Compatible with All Major Brands
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {supportedBrands.map((brand, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-gray-700 font-medium">{brand}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600">
              Don't see your brand? We work with all audio equipment manufacturers.
              Call us to discuss your specific audio setup needs.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Professional Audio Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audioTips.map((tip, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Speaker className="h-5 w-5 text-purple-600 mr-2" />
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Professional Audio Mounting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Audio Mounting FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Where should I mount my soundbar?
                  </h3>
                  <p className="text-gray-600">
                    Soundbars should be positioned at ear level when seated, typically 2-3 feet below the TV center.
                    We can mount above or below the TV depending on your room layout and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you install surround sound speakers?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we install complete surround sound systems including rear speakers, side speakers,
                    and overhead speakers for Dolby Atmos setups. All wiring is professionally concealed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you provide audio calibration?
                  </h3>
                  <p className="text-gray-600">
                    Yes, all installations include basic audio calibration to optimize sound quality for your room.
                    We adjust speaker levels, distances, and EQ settings for balanced audio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What cables do you recommend for audio connections?
                  </h3>
                  <p className="text-gray-600">
                    We recommend HDMI ARC/eARC for soundbars with your TV, and high-quality speaker wire
                    for traditional speakers. Optical cables are used when HDMI is not available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Details & What to Expect (SEO augmentation — minimal UI) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Details &amp; What to Expect</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Approach</h3>
                  <p className="text-gray-600 text-sm">
                    We begin with a quick assessment of your space, wall type, and device compatibility to ensure a clean, secure soundbar mounting
                    that meets building and manufacturer guidelines. Our technicians confirm placement, routing options, and finishing details
                    before any drilling occurs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Standards</h3>
                  <p className="text-gray-600 text-sm">
                    Every project follows a documented checklist: appropriate anchors/studs, torque and level checks, protected cable paths,
                    and final testing with your equipment. We prioritize safety, longevity, and a tidy finish you'll be proud to show.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Preparation &amp; Timing</h3>
                  <p className="text-gray-600 text-sm">
                    Typical appointments run 45–120 minutes depending on wall materials and cable routing needs. Please clear the immediate
                    area around the mounting location and have your devices and remotes available for testing after installation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Aftercare &amp; Support</h3>
                  <p className="text-gray-600 text-sm">
                    We verify signal integrity, tidy cables, and walk you through basic use. If you need adjustments later, we're available
                    for tune‑ups and upgrades. Our goal is a reliable, renter‑friendly result that looks great and works flawlessly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional FAQ (SEO augmentation — minimal UI) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional FAQ</h2>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="q1" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  How do you protect walls and finishes during installation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  We use clean drop protection and the correct anchors for your wall type, verify stud placement when applicable,
                  and minimize hole count by planning cable routes first. At completion, we wipe surfaces and remove debris.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Will the setup be renter‑friendly and reversible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  Yes. We prioritize landlord‑approved methods and provide guidance for safe removal if needed.
                  Ask us about surface patch options and how to preserve your security deposit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  Do you handle device connection and quick testing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  We connect your sources (streamers, consoles, soundbars) and confirm power, video, and audio. If you need
                  advanced calibration or smart‑home integration, we can schedule an extended service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  What if I'm not sure about placement or height?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  We help you choose a height and location based on seating distance, room layout, and glare. For over‑fireplace
                  projects, we also consider heat exposure and viewing angles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  How do you optimize audio positioning and calibration?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm">
                  We position speakers at optimal heights and angles for your room layout, then calibrate audio levels,
                  distances, and EQ settings to ensure balanced sound quality throughout your listening area.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <SeoTextBlock
        title="About Our Soundbar Mounting Service in Los Angeles"
        paragraphs={[
          "When you choose Ice Mount'n for soundbar and speaker mounting services in Los Angeles, you're selecting a team that understands the unique challenges of audio installations. Our technicians are familiar with local building codes, wall types, and acoustic requirements across all Los Angeles County areas, ensuring your installation meets all requirements while optimizing sound quality for your space.",
          "Our soundbar mounting service covers all residential properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic soundbar mounting to complete surround sound setups with optimal positioning, ensuring your audio equipment is professionally installed with clean cable management.",
          "The installation process typically takes 1-3 hours depending on your setup complexity and number of speakers. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new audio setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Upgrade Your Audio Experience?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Professional audio equipment mounting and calibration.
              Transform your entertainment experience today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Audio Setup
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-purple-600 border-white hover:bg-purple-50 hover:text-purple-700 font-semibold px-8 py-4"
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
