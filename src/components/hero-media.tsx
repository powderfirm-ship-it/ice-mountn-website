'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function HeroMedia() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: "/images/stock/hero-1.webp",
      alt: "Professional TV mounting service in Los Angeles - 65-inch TV wall-mounted above fireplace in Westwood apartment"
    },
    {
      src: "/images/stock/hero-2.webp",
      alt: "Stud-mounted TV with concealed cables in Santa Monica living room"
    },
    {
      src: "/images/stock/hero-3.webp",
      alt: "Soundbar and TV mounted on accent wall in Beverly Hills home"
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full md:w-auto flex justify-center">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-xl">
        <div className="relative w-full max-w-[600px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
          <Carousel
            setApi={setApi}
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="h-full">
              {images.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : undefined}
                      sizes="(max-width: 1024px) 90vw, 600px"
                      quality={70}
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === current ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>

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
  );
}
