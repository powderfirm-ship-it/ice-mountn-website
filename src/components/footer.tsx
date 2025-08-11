'use client';

import { Facebook, Instagram, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/images/brand/ice-mountn-tv-mounting-logo.webp"
                  alt="Ice Mount'n Logo"
                  width={32}
                  height={24}
                  priority
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Ice Mount'n</h3>
                <p className="text-xs text-gray-300">Elite TV & Home Audio Installations</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:(323) 863-8146" className="hover:text-blue-400 transition-colors">
                  (323) 863-8146
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:contact@icemountn.com" className="hover:text-blue-400 transition-colors">
                  contact@icemountn.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-blue-400 mt-0.5" />
                <div className="text-xs">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <span>Monday</span><span>8 AM – 8 PM</span>
                    <span>Tuesday</span><span>8 AM – 8 PM</span>
                    <span>Wednesday</span><span>Closed</span>
                    <span>Thursday</span><span>8 AM – 8 PM</span>
                    <span>Friday</span><span>8 AM – 8 PM</span>
                    <span>Saturday</span><span>8 AM – 8 PM</span>
                    <span>Sunday</span><span>8 AM – 8 PM</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/customer-reviews" className="hover:text-blue-400 transition-colors">Reviews</Link></li>
              <li><Link href="/#areas" className="hover:text-blue-400 transition-colors">Areas We Serve</Link></li>
              <li><Link href="/locations" className="hover:text-blue-400 transition-colors">Locations</Link></li>
              <li><Link href="/same-day-tv-mounting" className="hover:text-blue-400 transition-colors">Same-Day Service</Link></li>
              <li><Link href="/discounts" className="hover:text-blue-400 transition-colors">Discounts</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/trust-and-support" className="hover:text-blue-400 transition-colors">Trust & Support</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/standard-tv-mount" className="hover:text-blue-400 transition-colors">Standard TV Mounting</Link></li>
              <li><Link href="/services/over-fireplace-mount" className="hover:text-blue-400 transition-colors">Over-Fireplace Installation</Link></li>
              <li><Link href="/services/cable-concealment" className="hover:text-blue-400 transition-colors">Cable Concealment</Link></li>
              <li><Link href="/services/soundbar-mounting" className="hover:text-blue-400 transition-colors">Sound-bar Mounting</Link></li>
              <li><Link href="/services/samsung-frame" className="hover:text-blue-400 transition-colors">Samsung Frame Specialist</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Find Us</h4>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.6919229!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ice Mount'n Service Area - Los Angeles"
              />
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="https://facebook.com/icemountn" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ice Mount'n on Facebook (opens in a new tab)"
                title="Ice Mount'n on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Visit Ice Mount'n on Facebook</span>
              </a>
              <a 
                href="https://instagram.com/icemountn" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ice Mount'n on Instagram (opens in a new tab)"
                title="Ice Mount'n on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Visit Ice Mount'n on Instagram</span>
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-300">
                © 2025 Ice Mount'n. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-2 mt-1">
                <span className="text-xs text-gray-300">Powered by</span>
                <a href="https://housecallpro.com" className="text-xs text-gray-200 hover:text-white underline underline-offset-2">
                  Housecall Pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
