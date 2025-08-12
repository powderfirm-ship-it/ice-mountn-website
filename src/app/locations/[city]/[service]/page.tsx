import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES } from "@/data/cities";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { SiteLayout } from "@/components/site-layout";
import Image from "next/image";
import Link from "next/link";

// Icon mapping function
function getIcon(name: "tv" | "flame" | "cable" | "speaker" | "frame" | "lightning") {
  switch (name) {
    case "tv": return "📺";
    case "flame": return "🔥";
    case "cable": return "🔌";
    case "speaker": return "🔊";
    case "frame": return "🖼️";
    case "lightning": return "⚡";
    default: return "📺";
  }
}

// Generate static params for all city+service combinations
export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  
  CITIES.forEach((city) => {
    Object.keys(SERVICES).forEach((service) => {
      params.push({
        city: city.slug,
        service: service,
      });
    });
  });
  
  return params;
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = CITIES.find((c) => c.slug === resolvedParams.city);
  const service = SERVICES[resolvedParams.service as ServiceSlug];
  
  if (!city || !service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.h1} in ${city.name}, Los Angeles | Ice Mount'n`;
  const description = `${service.description} Professional TV mounting service in ${city.name}, Los Angeles. Same-day installation available. Call (323) 863-8146 for free estimate.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://icemountn.com/locations/${city.slug}/${resolvedParams.service}`,
      siteName: "Ice Mount'n",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://icemountn.com/locations/${city.slug}/${resolvedParams.service}`,
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const resolvedParams = await params;
  const city = CITIES.find((c) => c.slug === resolvedParams.city);
  const service = resolvedParams.service as ServiceSlug;
  
  if (!city || !SERVICES[service]) {
    notFound();
  }

  const serviceData = SERVICES[service];
  
  // Determine which image to use based on service
  const heroImage = service === "samsung-frame" ? "/images/stock/gallery-05.webp" : "/images/stock/gallery-04.webp";
  const heroAlt = service === "samsung-frame" 
    ? "Samsung Frame TV perfectly flush-mounted"
    : `${serviceData.title} professionally wall-mounted with concealed wiring in ${city.name}`;

  return (
    <SiteLayout>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${serviceData.h1} in ${city.name}`,
            "description": serviceData.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ice Mount'n",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "City",
                "name": city.name,
                "containedInPlace": {
                  "@type": "City",
                  "name": "Los Angeles"
                }
              }
            },
            "serviceType": serviceData.title,
            "url": `https://icemountn.com/locations/${city.slug}/${service}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://icemountn.com/locations/${city.slug}/${service}`
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-6 md:py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex justify-center mt-2 md:mt-3 mb-6 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span className="mx-2">→</span>
                <Link href="/locations" className="hover:text-blue-600">Locations</Link>
                <span className="mx-2">→</span>
                <Link href={`/locations/${city.slug}`} className="hover:text-blue-600">{city.name}</Link>
                <span className="mx-2">→</span>
                <span className="text-gray-900">{serviceData.title}</span>
              </nav>

              {/* Service Icon */}
              <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 grid place-items-center mb-6">
                <span className="text-3xl">{getIcon(serviceData.icon)}</span>
              </div>

              {/* Headlines */}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {serviceData.h1}
                <span className="block text-blue-600">in {city.name}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto lcp-safe">
                {serviceData.description} Professional TV mounting service in {city.name}, Los Angeles.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="#book" 
                  className="inline-flex items-center rounded-md px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Book Online
                </a>
                <a 
                  href="tel:+13238638146" 
                  className="inline-flex items-center rounded-md px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Call (323) 863-8146
                </a>
              </div>

              {/* See Pricing Link - Updated styling to match "View more reviews →" */}
              <div className="mb-12 text-center">
                <Link
                  href={serviceData.canonicalPath}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                >
                  See Pricing <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                  <span className="mr-1">⭐</span>
                  Top-Pro Rated
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  Same-Day Service
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
                  $ Lowest Pricing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1000px" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                What's Included in {serviceData.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {serviceData.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600">✓</span>
                    </div>
                    <p className="text-gray-700">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Service Image - Updated to use appropriate image based on service */}
              <div className="relative mx-auto w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg mb-12">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  placeholder="blur"
                  blurDataURL={heroImage}
                  loading="lazy"
                  priority={false}
                  className="rounded-lg shadow-sm"
                />
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Book your {serviceData.title.toLowerCase()} service in {city.name} today. 
                  Same-day installation available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#book" 
                    className="inline-flex items-center rounded-md px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Book Online Now
                  </a>
                  <a 
                    href={serviceData.canonicalPath}
                    className="inline-flex items-center rounded-md px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Learn More About {serviceData.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20 bg-gray-50" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 800px" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Serving {city.name} and Surrounding Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide professional TV mounting services throughout {city.name} and the greater Los Angeles area. 
                Our experienced technicians are familiar with local building codes and requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">Knowledge of {city.name} building codes and requirements</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">⭐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Top-Rated Service</h3>
                  <p className="text-gray-600">4.9/5 customer rating in {city.name}</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Fast installation when you need it most</p>
                </div>
              </div>

              <a 
                href="#book" 
                className="inline-flex items-center rounded-md px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Book Your {serviceData.title} in {city.name}
              </a>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
