'use client';

import { SiteLayout } from "@/components/site-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";

export default function ContactPageClient() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free TV Mounting Quote
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to mount your TV? Contact us for a free estimate and same-day service availability.
              Our team is here to help with all your home theater needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help with all your TV mounting and home theater needs.
                  Choose the contact method that works best for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardHeader className="text-center pb-4">
                    <Phone className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <CardTitle className="text-lg">Call Now</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href="tel:(323) 863-8146"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      (323) 863-8146
                    </a>
                    <p className="text-gray-600 mt-2">
                      Speak directly with our team
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader className="text-center pb-4">
                    <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <CardTitle className="text-lg">Book Online</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button
                      className="bg-ice-blue hover:bg-blue-600 text-white w-full"
                      onClick={openBooking}
                    >
                      Schedule Service
                    </Button>
                    <p className="text-gray-600 mt-2">
                      Fast online scheduling
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:contact@icemountn.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      contact@icemountn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <div className="text-gray-600">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
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

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Greater Los Angeles Area</p>
                    <p className="text-gray-600">Same-day service available in most areas</p>
                  </div>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Same-day service available
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Free estimates and consultations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    100% satisfaction guarantee
                  </li>
                </ul>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Request Your Free Quote
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within an hour
                    with a personalized quote for your project.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Housecall Pro Lead Form */}
                  <div className="w-full">
                    <iframe
                      style={{border:"none", width:"100%", height:"600px"}}
                      src="https://book.housecallpro.com/lead-form/Ice-Mountn/0707424b592b49c29955ad0f0140dc15"
                      title="Ice Mount'n Lead Capture Form"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Emergency TV Mounting Service?
          </h2>
          <p className="text-gray-300 mb-6">
            We offer urgent and same-day TV mounting services throughout Los Angeles.
          </p>
          <a
            href="tel:(323) 863-8146"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Call Emergency Line: (323) 863-8146
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
