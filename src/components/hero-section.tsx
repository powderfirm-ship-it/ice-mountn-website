import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone } from "lucide-react";
import { openHcp } from "@/lib/hcp";
import FeaturedProject from "./FeaturedProject";

export function HeroSection() {
  const handleBookOnline = openHcp;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left max-w-xl">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Top-Pro Rated
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                Same-Day Service
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                $ Lowest Pricing
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Same-Day
                <span className="block text-blue-600">TV Mounting</span>
                <span className="block">Across LA</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional, renter-friendly TV mounting and home theater installation service.
                Fast, reliable, and perfectly mounted every time with no wall damage.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
              >
                Book Online
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6"
                asChild
              >
                <a href="tel:(323) 863-8146" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Chat With Us
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1K+</div>
                <div className="text-sm text-gray-600">TVs Mounted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Same Day</div>
                <div className="text-sm text-gray-600">Service Available</div>
              </div>
            </div>
          </div>

          {/* Featured Project Hero */}
          <FeaturedProject />
        </div>
      </div>
    </section>
  );
}
