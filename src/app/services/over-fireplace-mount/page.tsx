'use client';

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Thermometer, PhoneCall, AlertTriangle } from "lucide-react";
import { openHousecallProModal } from "@/utils/housecall-pro";

export default function OverFireplaceMountPage() {
  const handleBookOnline = openHousecallProModal;

  const processSteps = [
    {
      step: 1,
      title: "Heat Assessment",
      description: "We measure fireplace heat output and determine safe mounting position"
    },
    {
      step: 2,
      title: "Specialized Installation",
      description: "Heat-resistant mounting with proper clearance and pull-down bracket option"
    },
    {
      step: 3,
      title: "Cable Management",
      description: "In-wall cable routing to avoid heat exposure and maintain clean look"
    },
    {
      step: 4,
      title: "Safety Testing",
      description: "Temperature monitoring and adjustment verification for safe operation"
    }
  ];

  const benefits = [
    "Heat-resistant mounting solutions",
    "Pull-down and tilting bracket options",
    "Proper clearance from heat source",
    "In-wall cable management included",
    "Temperature safety assessment",
    "Works with gas and electric fireplaces",
    "Professional heat shielding when needed",
    "Lifetime installation warranty"
  ];

  const pricingOptions = [
    {
      type: "Fixed Mount",
      price: "$249",
      description: "Heat-resistant fixed position mount with proper clearance",
      features: ["Heat-resistant hardware", "Proper clearance spacing", "Cable management", "Safety assessment"]
    },
    {
      type: "Pull-Down Mount",
      price: "$349",
      description: "Premium pull-down bracket for optimal viewing angle",
      features: ["Pull-down mechanism", "Heat protection", "Cable management", "Viewing angle optimization"],
      popular: true
    },
    {
      type: "Full Motion Mount",
      price: "$399",
      description: "Ultimate flexibility with tilt, swivel, and extend capabilities",
      features: ["Full articulation", "Heat shielding", "Premium hardware", "Professional assessment"]
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
              Specialty Installation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Over-Fireplace TV Mounting
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert installation above fireplaces with heat-resistant mounting solutions.
              Safe, secure, and professionally installed with proper clearance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call for Assessment
                </a>
              </Button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center text-yellow-800">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span className="font-medium">Professional assessment required for all over-fireplace installations</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Thermometer className="h-4 w-4 mr-1" />
                Heat-safe installation
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Fully insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Specialty expertise
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
              Specialized Mounting Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pricingOptions.map((option, index) => (
                <Card key={index} className={`relative ${option.popular ? 'ring-2 ring-orange-500 shadow-lg' : ''}`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-orange-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.type}</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-4">{option.price}</div>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Heat Safety Guarantee</h3>
              <p className="text-gray-600">
                All over-fireplace installations include professional heat assessment,
                proper clearance, and temperature-resistant mounting hardware
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
              Our Specialized Installation Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Over-Fireplace Mounting
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

      {/* Safety Information */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Heat Safety & Best Practices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Thermometer className="h-6 w-6 text-orange-600 mr-2" />
                    Temperature Considerations
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maximum safe temperature: 100°F (38°C)</li>
                    <li>• Minimum clearance: 12 inches from fireplace top</li>
                    <li>• Heat-resistant mounting hardware required</li>
                    <li>• Professional heat assessment included</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-orange-600 mr-2" />
                    Safety Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pull-down brackets for better viewing angle</li>
                    <li>• Heat shielding when necessary</li>
                    <li>• Cable protection from heat exposure</li>
                    <li>• Manufacturer warranty maintained</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Over-Fireplace Mounting FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is it safe to mount a TV above a fireplace?
                  </h3>
                  <p className="text-gray-600">
                    Yes, when installed properly by professionals. We assess heat output, maintain proper clearance,
                    and use heat-resistant mounting hardware to ensure safe operation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's the ideal height for a TV above a fireplace?
                  </h3>
                  <p className="text-gray-600">
                    The bottom of the TV should be at least 12 inches above the fireplace opening.
                    We recommend pull-down mounts for comfortable viewing at this height.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you install above gas fireplaces?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we install above both gas and electric fireplaces. Each installation includes
                    a heat assessment to ensure safe operation and proper clearance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer pull-down mounts?
                  </h3>
                  <p className="text-gray-600">
                    Yes, pull-down mounts are highly recommended for over-fireplace installations.
                    They allow you to lower the TV to eye level for comfortable viewing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Safe Over-Fireplace Installation?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Professional heat assessment and specialized mounting solutions.
              Book your consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-orange-600 border-white hover:bg-orange-50 hover:text-orange-700 font-semibold px-8 py-4"
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
