'use client';

import { Button } from "@/components/ui/button";
import { Zap, X } from "lucide-react";
import { useState } from "react";
import { openBooking } from "@/utils/housecall-pro";

interface DiscountBannerProps {
  cityName: string;
}

export function DiscountBanner({ cityName }: DiscountBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Zap className="h-6 w-6 text-yellow-200 animate-pulse" />
            <div>
              <p className="font-bold text-lg">
                Get 10% OFF when you book directly through our website or over the phone!
              </p>
              <p className="text-sm text-yellow-100">
                Limited time offer for {cityName} residents
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={openBooking}
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 py-2 whitespace-nowrap"
            >
              Book Now & Save
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-yellow-200 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
