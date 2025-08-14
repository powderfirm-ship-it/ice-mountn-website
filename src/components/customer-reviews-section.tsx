'use client';

import { Star } from "lucide-react";
import AvatarInitials from "./AvatarInitials";

interface CustomerReview {
  customerName: string;
  reviewText: string;
  starRating: number;
}

interface CustomerReviewsSectionProps {
  cityName: string;
  reviews: CustomerReview[];
}

export default function CustomerReviewsSection({ cityName, reviews }: CustomerReviewsSectionProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our {cityName} Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real feedback from {cityName} residents who chose Ice Mount'n for their TV installation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <AvatarInitials name={review.customerName} size={48} />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {review.customerName}
                    </h3>
                    <div className="flex items-center mt-1">
                      {renderStars(review.starRating)}
                      <span className="ml-2 text-sm text-gray-600">
                        {review.starRating}/5
                      </span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{review.reviewText}"
                </blockquote>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Join hundreds of satisfied {cityName} customers
            </p>
            <div className="flex items-center justify-center space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-900">
                4.9/5 from {cityName} residents
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
