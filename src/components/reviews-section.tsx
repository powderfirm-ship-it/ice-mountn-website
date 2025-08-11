'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import { openHousecallProModal } from "@/utils/housecall-pro";

const reviews = [
  {
    name: "Sarah M.",
    location: "Beverly Hills",
    rating: 5,
    text: "Incredible service! They mounted my 75\" TV above the fireplace and hid all the cables perfectly. Same-day service and very professional.",
    service: "Over-Fireplace Mount"
  },
  {
    name: "Mike R.",
    location: "Santa Monica",
    rating: 5,
    text: "Fast, affordable, and perfect work. My sound bar looks amazing and the TV mount is rock solid. Highly recommend Ice Mount'n!",
    service: "TV + Sound Bar Mount"
  },
  {
    name: "Jessica L.",
    location: "Downtown LA",
    rating: 5,
    text: "Best decision ever! They transformed my living room with a clean wall mount installation. No visible wires anywhere. Amazing work!",
    service: "Cable Concealment"
  },
  {
    name: "David K.",
    location: "Pasadena",
    rating: 5,
    text: "Professional team that arrived on time and completed the job perfectly. Great pricing and excellent customer service throughout.",
    service: "Standard TV Mount"
  }
];

export function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Los Angeles homeowners
            have to say about our TV mounting services.
          </p>

          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 150+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-600">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {review.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="mb-6">
            <Link
              href="/customer-reviews"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              View more reviews ➜
            </Link>
          </div>

          <p className="text-gray-600 mb-6">
            Ready to join our satisfied customers?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(323) 863-8146"
              className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Free Estimate
            </a>
            <button
              onClick={openHousecallProModal}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
