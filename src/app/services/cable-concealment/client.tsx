"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  Shield,
  PhoneCall,
} from "lucide-react";
import { openBooking } from "@/utils/housecall-pro";

export default function CableConcealmentClient() {
  const handleBookOnline = openBooking;

  const pricingOptions = [
    {
      title: "Basic Concealment",
      price: "$199",
      description: "Hide TV power + HDMI cables in wall.",
      features: [
        "Est. time: 2–3 hours",
        "Clean wall opening + wall plate",
        "Professional wall finishing",
      ],
    },
    {
      title: "Complete Concealment",
      price: "$299",
      description:
        "New recessed outlet behind TV + HDMI, power, and audio in‑wall.",
      features: [
        "Est. time: 3–4 hours",
        "Code‑compliant electrical work",
        "GFCI where required",
      ],
      popular: true,
    },
    {
      title: "Premium Install",
      price: "$399",
      description:
        "Multi‑device routing (soundbar, console, boxes) with clean finishing.",
      features: [
        "Est. time: 4–5 hours",
        "Outlet + cable management box",
        "Paint‑ready finish",
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Wall Assessment",
      description: "Locate studs, check fire blocking, and plan cable routing.",
    },
    {
      step: 2,
      title: "Outlet Install",
      description: "New recessed outlet behind TV (to local electrical code).",
    },
    {
      step: 3,
      title: "Cable Fishing + Management",
      description:
        "Route HDMI/power/audio through wall with tidy management to equipment area.",
    },
    {
      step: 4,
      title: "Clean Finish + Check",
      description:
        "Seal and detail wall openings, then verify device operation + signal.",
    },
  ];

  const benefits = [
    "Complete wire‑free appearance",
    "Code‑compliant electrical work",
    "Professional wall finishing",
    "Preserves wall aesthetics",
    "New electrical outlet behind TV",
    "Works with HDMI, power, and audio",
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              Premium Service
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              In‑Wall Cable Concealment
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Completely hide TV cables inside your wall for a clean, professional
              look. Includes new outlet behind the TV and code‑compliant electrical
              work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call (323) 863‑8146
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & insured
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                Code‑compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                Professional finish
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cable Concealment Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pricingOptions.map((opt, i) => (
                <Card
                  key={opt.title}
                  className={`relative ${opt.popular ? "ring-2 ring-green-500 shadow-lg" : ""}`}
                >
                  {opt.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-green-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opt.title}
                    </h3>
                    <div className="text-3xl font-bold text-green-600 mb-4">
                      {opt.price}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{opt.description}</p>
                    <ul className="space-y-2">
                      {opt.features.map((f) => (
                        <li key={f} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Electrical Work
              </h3>
              <p className="text-gray-600">
                All electrical work follows local code by qualified technicians. New outlets installed behind
                TVs with proper GFCI protection where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Installation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s) => (
                <Card key={s.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {s.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits of In‑Wall Cable Concealment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cable Concealment FAQ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is in‑wall cable routing safe and code‑compliant?
                  </h3>
                  <p className="text-gray-600">
                    Yes. All electrical work is performed to local code by qualified technicians.
                    We use proper in‑wall rated materials, and GFCI is installed where required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How long does cable concealment installation take?
                  </h3>
                  <p className="text-gray-600">
                    Installation typically takes 2–5 hours depending on complexity. Basic
                    concealment takes 2–3 hours, while complete installs with new outlets take 3–5 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you conceal cables in any type of wall?
                  </h3>
                  <p className="text-gray-600">
                    We can conceal cables in most wall types including drywall, concrete block, and wood frame construction.
                    Some limitations may apply with concrete or brick walls.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I need to access the cables later?
                  </h3>
                  <p className="text-gray-600">
                    We install access points and use proper cable management techniques to allow for future modifications.
                    Additional outlets can be added if needed for easy access.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center text-sm text-gray-600">
              Pair with{" "}
              <Link href="/services/standard-tv-mount" className="underline underline-offset-4">
                TV Mounting
              </Link>{" "}
              or{" "}
              <Link href="/services/soundbar-mounting" className="underline underline-offset-4">
                Sound‑bar Mounting
              </Link>{" "}
              for a seamless, wire‑free setup.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for a Completely Clean Look?
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Professional in‑wall cable concealment with code‑compliant electrical work.
              Book your installation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Book Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-green-700 border-white hover:bg-green-50 hover:text-green-700 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">Call (323) 863‑8146</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
