'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { openBooking } from "@/utils/housecall-pro";

// Navigation data
const services = [
  { name: 'Standard TV Mount', href: '/services/standard-tv-mount' },
  { name: 'Over-Fireplace Mount', href: '/services/over-fireplace-mount' },
  { name: 'In-Wall Cable Concealment', href: '/services/cable-concealment' },
  { name: 'Sound-bar / Speaker Mounting', href: '/services/soundbar-mounting' },
  { name: 'Samsung Frame Specialist', href: '/services/samsung-frame' },
  { name: 'Same-Day Service', href: '/same-day-tv-mounting' },
];

const aboutUs = [
  { name: 'Areas We Serve', href: '/#areas' },
  { name: 'Locations', href: '/locations' },
  { name: 'Discounts & Specials', href: '/discounts' },
  { name: 'Frequently Asked Questions', href: '/faq' },
];

const mainNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/services', dropdown: services },
  { name: 'About Us', href: '/#about', dropdown: aboutUs },
  { name: 'Reviews', href: '/customer-reviews' },
  { name: 'Contact Us', href: '/contact' },
];

export function NewHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock for mobile drawer
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const handleMobileNavClick = () => {
    setIsMobileOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <>
      {/* Global Top Bar */}
      <div className="bg-slate-900 text-white sticky top-0 z-50 h-12 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <span className="text-sm">
              📞 Call (323) 863-8146 now — <span className="font-semibold">Same-day TV mounting available!</span>
            </span>
          </div>
          <Button
            onClick={openBooking}
            className="bg-ice-blue hover:bg-blue-600 text-white font-medium h-8 px-4 text-sm rounded shadow"
            aria-haspopup="dialog"
            aria-controls="hcp-booking"
            data-analytics="hcp-book"
          >
            Book Online
          </Button>
        </div>
      </div>

      {/* Desktop Header */}
      <header className={`bg-white shadow-sm border-b transition-all duration-300 ${
        isScrolled ? 'sticky top-12 z-40' : 'relative'
      } hidden lg:block`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center" style={{ height: '96px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-11 h-9 flex items-center justify-center">
                <img
                  src="https://ugc.same-assets.com/Onbu0mW7YRwn21SfyRUUEI4-QbLjh4M-.png"
                  alt="Ice Mount'n Logo"
                  className="w-11 h-9 object-contain"
                  style={{ maxHeight: '48px' }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA0NCAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDQiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjMTE5MUZGIi8+CiAgPHRleHQgeD0iMjIiIHk9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjciIGZvbnQtd2VpZ2h0PSJib2xkIj5MT0dPPC90ZXh0PgogIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIzOCIgaGVpZ2h0PSIzMCIgcng9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==';
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Ice Mount'n</h1>
                <p className="text-xs text-gray-600">Elite TV & Home Audio Installations</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8 h-full">
              {mainNavigation.map((item) => (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 text-gray-700 hover:text-ice-blue hover:underline font-medium transition-all duration-200 text-xl h-full ${
                      activeDropdown === item.name ? 'text-ice-blue' : ''
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-150 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 pointer-events-auto">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Tablet Header */}
      <header className={`bg-white shadow-sm border-b transition-all duration-300 ${
        isScrolled ? 'sticky top-12 z-40' : 'relative'
      } hidden md:block lg:hidden`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center" style={{ height: '88px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-8 flex items-center justify-center">
                <img
                  src="https://ugc.same-assets.com/Onbu0mW7YRwn21SfyRUUEI4-QbLjh4M-.png"
                  alt="Ice Mount'n Logo"
                  className="w-10 h-8 object-contain"
                  style={{ maxHeight: '48px' }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0MCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHJ4PSIzIiBmaWxsPSIjMTE5MUZGIi8+CiAgPHRleHQgeD0iMjAiIHk9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjYiIGZvbnQtd2VpZ2h0PSJib2xkIj5MT0dPPC90ZXh0PgogIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIzNCIgaGVpZ2h0PSIyNiIgcng9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ci8+Cjwvc3ZnPg==';
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">Ice Mount'n</h1>
                <p className="text-xs text-gray-600">Elite TV & Home Audio Installations</p>
              </div>
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-blue-600"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-sm border-b h-16 md:hidden sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Phone Icon */}
            <a href="tel:+13238638146" className="text-blue-600">
              <Phone className="h-6 w-6" />
            </a>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="https://ugc.same-assets.com/O6-mhhw9ENglHvOSLP_R5yNao_1cfEBe.png"
                alt="Ice Mount'n Logo"
                className="w-10 h-8 object-contain max-h-10"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0MCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHJ4PSIzIiBmaWxsPSIjMTE5MUZGIi8+CiAgPHRleHQgeD0iMjAiIHk9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjYiIGZvbnQtd2VpZ2h0PSJib2xkIj5MT0dPPC90ZXh0PgogIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIzNCIgaGVpZ2h0PSIyNiIgcng9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==';
                }}
              />
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-blue-600"
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-white lg:hidden overflow-y-auto overscroll-contain">
          <div className="flex flex-col min-h-full">
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div></div>
              <span className="font-semibold text-xl text-gray-900">Ice Mount'n</span>
              <div></div>
            </div>

            {/* Drawer Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {mainNavigation.map((item, index) => (
                <div key={item.name} className="animate-in fade-in slide-in-from-left duration-200" style={{ animationDelay: `${index * 50}ms` }}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveMobileDropdown(
                          activeMobileDropdown === item.name ? null : item.name
                        )}
                        className="flex items-center justify-between w-full text-left text-xl font-medium text-blue-600 py-3"
                        aria-expanded={activeMobileDropdown === item.name}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                          activeMobileDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {activeMobileDropdown === item.name && (
                        <div className="pl-4 space-y-2 animate-in fade-in slide-in-from-top duration-200">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleMobileNavClick}
                              className="block text-lg text-gray-700 py-2 hover:text-blue-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleMobileNavClick}
                      className="block text-xl font-medium text-blue-600 py-3 hover:text-blue-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="sticky bottom-0 bg-gray-100 px-4 py-4 border-t space-y-3">
              <a
                href="tel:+13238638146"
                className="block text-center text-xl font-bold text-blue-600"
              >
                (323) 863-8146
              </a>
              <Button
                onClick={() => {
                  openBooking();
                  setIsMobileOpen(false);
                }}
                className="w-full bg-ice-blue hover:bg-blue-600 text-white font-medium py-3 text-lg rounded shadow"
              >
                Book Online
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
