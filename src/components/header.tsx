'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { openBooking } from "@/utils/housecall-pro";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Areas We Serve', href: '/areas' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookOnline = openBooking;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-10 flex items-center justify-center">
              <Image
                src="/images/brand/ice-mountn-tv-mounting-logo.webp"
                alt="Ice Mount'n Logo"
                width={48}
                height={40}
                className="w-12 h-10 object-contain"
                priority
              />
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900">Ice Mount'n</h2>
              <p className="text-xs text-gray-600">Elite TV & Home Audio Installations</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col items-center">
              <Button
                onClick={handleBookOnline}
                className="bg-ice-blue hover:bg-blue-600 text-white"
                aria-haspopup="dialog"
                aria-controls="hcp-booking"
                data-analytics="hcp-book"
              >
                Book Now
              </Button>
              <div className="text-xs text-gray-500 mt-1 text-center">
                By booking, you agree to our <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>.
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    handleBookOnline();
                    setIsOpen(false);
                  }}
                  className="bg-ice-blue hover:bg-blue-600 text-white w-full mt-4"
                  aria-haspopup="dialog"
                  aria-controls="hcp-booking"
                  data-analytics="hcp-book"
                >
                  Book Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
