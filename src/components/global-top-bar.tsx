'use client';

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";

export function GlobalTopBar() {
  const handleBookOnline = openBooking;

  return (
    <div className="bg-slate-900 text-white py-2 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a
            href="tel:(323) 863-8146"
            className="font-semibold text-lg hover:text-blue-300 transition-colors"
          >
            (323) 863-8146
          </a>
        </div>
        <Button
          onClick={handleBookOnline}
          className="bg-ice-blue hover:bg-blue-600 text-white font-medium"
          aria-haspopup="dialog"
          aria-controls="hcp-booking"
          data-analytics="hcp-book"
        >
          Book Online
        </Button>
      </div>
    </div>
  );
}
