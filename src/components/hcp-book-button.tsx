'use client';

import { Button } from "@/components/ui/button";
import { openBooking } from "@/utils/housecall-pro";

export default function HcpBookButton() {
  return (
    <Button
      onClick={openBooking}
      size="lg"
      className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
      aria-label="Book online"
    >
      Book Online
    </Button>
  );
}
