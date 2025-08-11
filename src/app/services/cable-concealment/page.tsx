'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Zap, PhoneCall, Cable } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";

export default function CableConcealmentPage() {
  const handleBookOnline = openBooking;

  const processSteps = [
    {
      step: 1,
      title: "Wall Assessment",
      description: "Locate studs, check for existing wiring, and plan cable routing path"
    },
    {
      step: 2,
      title: "Outlet Installation",
      description: "Install new power outlet behind TV location following electrical codes"
    },
    {
      step: 3,
      title: "Cable Fishing",
      description: "Fish all cables through wall from TV location to equipment area"
    },
    {
      step: 4,
      title: "Clean Finish",
      description: "Install outlet covers and test all connections for perfect operation"
    }
  ];

  const benefits = [
    "Complete wire-free appearance",
    "New electrical outlet behind TV",
    "Code-compliant electrical work",
    "HDMI, power, and data cable routing",
    "Professional wall finishing",
    "No visible cables or cord covers",
    "Preserves wall aesthetics",
    "Increases home value"
  ];

  const serviceOptions = [
    {
      type: "Basic Cable Concealment",
      price: "$199",
      description: "Hide TV power and HDMI cables in wall",
      features: ["Power cable in-wall routing", "1-2 HDMI cables", "Basic outlet installation", "Wall patching"],
      timeEstimate: "2-3 hours"
    },
    {
      type: "Complete Concealment",
      price: "$299",
      description: "Full cable management with new outlet installation",
      features: ["New recessed outlet behind TV", "Multiple HDMI/data cables", "Sound bar cables", "Professional finishing"],
      popular: true,
      timeEstimate: "3-4 hours"
    },
    {
      type: "Premium Installation",
      price: "$399",
      description: "Comprehensive solution with multiple outlets and cable management",
      features: ["Multiple new outlets", "Ethernet cable installation", "Component management box", "Premium finishing"],
      timeEstimate: "4-5 hours"
    }
  ];

  const technicalSpecs = [
    {
      title: "Electrical Work",
      items: ["Licensed electrical work", "Code-compliant installation", "GFCI protection when required", "Professional wire management"]
    },
    {
      title: "Cable Types",
      items: ["HDMI cables", "Power cables", "Ethernet/data cables", "Speaker wire", "Coaxial cables"]
    },
    {
      title: "Wall Types",
      items: ["Drywall construction", "Concrete block", "Wood frame", "Metal stud framing"]
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              Premium Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              In-Wall Cable Concealment
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Completely hide all TV cables inside your walls for a clean, professional appearance.
              Includes new outlet installation and code-compliant electrical work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call for Quote
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                Licensed electrical
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Code compliant
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Professional finish
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
              Cable Concealment Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {serviceOptions.map((option, index) => (
                <Card key={index} className={`relative ${option.popular ? 'ring-2 ring-green-500 shadow-lg' : ''}`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.type}</h3>
                    <div className="text-3xl font-bold text-green-600 mb-4">{option.price}</div>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Electrical Work</h3>
              <p className="text-gray-600">
                All electrical work performed by licensed technicians following local electrical codes.
                New outlets installed with proper GFCI protection when required.
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
              Our Installation Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
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

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Cable className="h-5 w-5 text-green-600 mr-2" />
                      {spec.title}
                    </h3>
                    <ul className="space-y-2">
                      {spec.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits of In-Wall Cable Concealment
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cable Concealment FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is in-wall cable routing safe and code-compliant?
                  </h3>
                  <p className="text-gray-600">
                    Yes, all electrical work is performed by licensed technicians following local electrical codes.
                    We use proper in-wall rated cables and install GFCI protection when required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How long does cable concealment installation take?
                  </h3>
                  <p className="text-gray-600">
                    Installation typically takes 2-5 hours depending on complexity. Basic concealment takes 2-3 hours,
                    while complete installations with new outlets take 3-5 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you conceal cables in any type of wall?
                  </h3>
                  <p className="text-gray-600">
                    We can conceal cables in most wall types including drywall, concrete block, and wood frame construction.
                    Some limitations may apply with concrete or brick walls.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I need to access the cables later?
                  </h3>
                  <p className="text-gray-600">
                    We install access points and use proper cable management techniques to allow for future modifications.
                    Additional outlets can be added if needed for easy access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for a Completely Clean Look?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Professional in-wall cable concealment with code-compliant electrical work.
              Book your installation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-green-600 border-white hover:bg-green-50 hover:text-green-700 font-semibold px-8 py-4"
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
