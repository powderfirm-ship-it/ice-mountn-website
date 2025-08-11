'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tv, Flame, Cable, Speaker, Image } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";

const services = [
  {
    icon: Tv,
    title: "Standard TV Mount",
    description: "Secure wall installation for any size TV. We mount large flat-panel screens (≤ 60″) and cinematic flat-panel screens (> 60″) with pro cable management.",
    features: ["Stud mounting", "Basic cable hiding", "Tilt / swivel adjustment", "Works for all TV sizes"]
  },
  {
    icon: Flame,
    title: "Over-Fireplace Mount",
    description: "Heat-safe installs above any mantle. Specialized mounting solutions for above-fireplace installations.",
    features: ["Heat-resistant mounting", "Pull-down brackets", "Cable concealment", "Safety certified"]
  },
  {
    icon: Cable,
    title: "In-Wall Cable Concealment",
    description: "Hide every wire for a clean look. Professional in-wall cable routing and concealment services.",
    features: ["In-wall fishing", "Outlet installation", "Power & data lines", "Code compliant"]
  },
  {
    icon: Speaker,
    title: "Sound-bar / Speaker Mounting",
    description: "Perfect audio positioning made easy. Professional speaker and sound-bar mounting services.",
    features: ["Sound-bar mounting", "Surround speakers", "Optimal positioning", "Wire management"]
  },
  {
    icon: Image,
    title: "Samsung Frame Specialist",
    description: "Expert installation of art-display TVs with seamless wall integration for the ultimate aesthetic finish.",
    features: ["Samsung Frame mounting", "Recessed box installation", "Hisense Canvas alternative", "Zero-gap wall finish"]
  }
];

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From basic TV mounting to complete home theater installations,
            we provide renter-friendly professional services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We handle all types of TV and speaker installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(323) 863-8146"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </a>
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              aria-haspopup="dialog"
              aria-controls="hcp-booking"
              data-analytics="hcp-book"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
