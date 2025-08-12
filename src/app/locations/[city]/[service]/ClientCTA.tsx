'use client';

import { openBooking } from "@/utils/housecall-pro";

export default function ClientCTA() {
  const handleBookOnline = () => {
    openBooking();
  };

  return (
    <div id="book" className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleBookOnline}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        Book Now
      </button>
    </div>
  );
}
