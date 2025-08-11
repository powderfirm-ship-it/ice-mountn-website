'use client';

import { MapPin, GraduationCap } from "lucide-react";
import { openHousecallProModal } from "@/utils/housecall-pro";
import Link from "next/link";

const areas = [
  // Central LA
  "Downtown LA", "Hollywood", "West Hollywood", "Beverly Hills", "Miracle Mile", "Koreatown",

  // West Side
  "Santa Monica", "Venice", "Marina del Rey", "Culver City", "Westwood", "Brentwood", "Pacific Palisades",

  // South Bay
  "Manhattan Beach", "Hermosa Beach", "Redondo Beach", "Torrance", "El Segundo", "Hawthorne",

  // San Fernando Valley
  "Studio City", "Sherman Oaks", "Encino", "Tarzana", "Woodland Hills", "Canoga Park", "North Hollywood",

  // East LA
  "Silver Lake", "Los Feliz", "Echo Park", "Highland Park", "Eagle Rock", "Pasadena", "Glendale",

  // South LA
  "Mid-City", "Pico-Union", "Westlake", "South Park", "Exposition Park", "University Park"
];

const campusAreas = [
  {
    name: "UCLA",
    slug: "ucla",
    description: "Student discount pricing"
  },
  {
    name: "USC",
    slug: "usc", 
    description: "Student discount pricing"
  }
];

export function AreasSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Greater Los Angeles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional TV mounting and home theater installation services
            throughout Los Angeles County. Same-day service available in most areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>

        {/* Campus Areas Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            College Campus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {campusAreas.map((campus) => (
              <Link
                key={campus.slug}
                href={`/locations/${campus.slug}`}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500"
              >
                <GraduationCap className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">{campus.name}</div>
                  <div className="text-sm text-blue-600">{campus.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See Your Area?
              </h3>
              <p className="text-gray-600 mb-6">
                We're constantly expanding our service area throughout Southern California.
                Give us a call to check if we can service your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(323) 863-8146"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Call Now
                </a>
                <button
                  onClick={openHousecallProModal}
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Schedule Service
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Service Guarantee
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Same-day service available in most areas.
                    Professional installation with 100% satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
