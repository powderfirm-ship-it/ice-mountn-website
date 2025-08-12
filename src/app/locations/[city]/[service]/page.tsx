import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES } from "@/data/cities";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { CityServicePageClient } from "./city-service-page-client";

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

  return <CityServicePageClient city={city} service={service} />;
}
