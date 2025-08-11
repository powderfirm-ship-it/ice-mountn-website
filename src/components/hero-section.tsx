'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { openHousecallProModal } from "@/utils/housecall-pro";
import Image from "next/image";

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  // Working stock-image list from the initial upload (updated second slide to JPG)
  const images = [
    { src: "/images/stock/hero-1.webp", alt: "65-inch TV wall-mounted above fireplace in Westwood apartment" },
    { src: "/images/stock/hero-2.jpg", alt: "Stud-mounted TV with concealed cables in Santa Monica living room" },
    { src: "/images/stock/hero-3.webp", alt: "Soundbar and TV mounted on accent wall in Beverly Hills home" },
  ];

  const handleBookOnline = openHousecallProModal;

  const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    const id = setInterval(() => setCurrentImage((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);

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
                className="bg-ice-blue hover:bg-blue-600 text-white text-lg px-8 py-6"
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

          {/* Gallery Carousel */}
          <div className="relative w-full md:w-auto flex justify-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-xl">
              <div className="relative w-full max-w-[380px] h-[510px] rounded-lg overflow-hidden shadow-lg group mx-auto">
                {/* Main Image */}
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  width={900}
                  height={1200}
                  priority={currentImage === 0}
                  fetchPriority={currentImage === 0 ? "high" : undefined}
                  sizes="(max-width:768px) 100vw, 420px"
                  className="w-full h-full object-cover rounded-lg"
                  aria-label={images[currentImage].alt}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentImage ? 'bg-white' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating tools */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="text-2xl">🔧</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                <div className="text-2xl">📏</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
