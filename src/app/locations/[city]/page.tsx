import { SiteLayout } from "@/components/site-layout";
import { locations, getLocationBySlug, getCampusLocationBySlug } from "@/data/locations";
import { notFound } from "next/navigation";
import { CityPageClient } from "./city-page-client";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { buildTitle, buildDescription, canonical } from "@/lib/seo";
import { Metadata } from "next";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.city);
  const campus = getCampusLocationBySlug(resolvedParams.city);
  
  const data = location || campus;
  if (!data) return { title: "Not Found" };
  
  const cityName = data.name;
  
  return {
    title: buildTitle("TV Mounting", cityName),
    description: buildDescription("Professional TV mounting services", cityName),
    alternates: {
      canonical: canonical(`/locations/${resolvedParams.city}`)
    },
    openGraph: {
      title: buildTitle("TV Mounting", cityName),
      description: buildDescription("Professional TV mounting services", cityName),
      url: canonical(`/locations/${resolvedParams.city}`),
      type: "website",
    },
    twitter: {
      title: buildTitle("TV Mounting", cityName),
      description: buildDescription("Professional TV mounting services", cityName),
    }
  };
}

// Dynamic routes handle all cities and campuses at runtime
export default async function CityPage({ params }: CityPageProps) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.city);
  const campus = getCampusLocationBySlug(resolvedParams.city);

  const data = location || campus;

  if (!data) {
    notFound();
  }

  const isCampus = !!campus;
  const cityName = data.name;

  const services = Object.keys(SERVICES) as ServiceSlug[];

  const trustFeatures = [
    "Licensed & insured technicians",
    "Same-day service available",
    "100% renter-friendly mounting",
    "4.9/5 star customer rating"
  ];

  const localFaqs = [
    {
      question: `Do you offer TV mounting in ${cityName} apartments and condos?`,
      answer: `Yes! We specialize in ${cityName} apartment and condo TV mounting with renter-friendly solutions. Our damage-free mounting options protect your security deposit while creating the perfect entertainment setup. We offer same-day TV mounting and can handle standard wall mounts, over-fireplace installations, and in-wall cable concealment.`
    },
    {
      question: `Is parking available for TV mounting appointments in ${cityName}?`,
      answer: `Our technicians are familiar with ${cityName} parking regulations and will find appropriate parking for service calls. We handle permit parking and bring compact equipment to navigate narrow ${cityName} streets. Same-day service is available throughout Los Angeles County.`
    },
    {
      question: `Can you work with older buildings and walls in ${cityName}?`,
      answer: `Absolutely! ${cityName} has many historic and older buildings with unique wall types. Our experienced technicians are skilled in mounting on plaster, concrete, brick, and other materials common in ${cityName} architecture. We use damage-free methods that protect your walls and security deposit.`
    },
    ...(isCampus ? [
      {
        question: `Do you provide ${cityName} student housing and dorm TV mounting?`,
        answer: `Yes! We specialize in student-friendly TV mounting for ${cityName} dorms, apartments, and student housing. Our RA-approved and landlord-safe mounting options comply with housing regulations. We offer same-day TV mounting with clean, damage-free installations.`
      }
    ] : [
      {
        question: `Do you handle condo association rules for TV mounting in ${cityName}?`,
        answer: `Yes, we're experienced with ${cityName} condo and HOA regulations. We can provide documentation for association approval and use mounting methods that comply with building guidelines. Our over-fireplace TV mounting and in-wall cable concealment services meet all building code requirements.`
      }
    ])
  ];

  // Enhanced JSON-LD Schema for City Page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.icemountn.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.icemountn.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `TV Mounting in ${cityName}`,
        "item": `https://www.icemountn.com/locations/${resolvedParams.city}`
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ice Mount'n",
    url: canonical(`/locations/${resolvedParams.city}`),
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.icemountn.com"}/images/brand/ice-mountn-tv-mounting-logo.webp`,
    telephone: "+13238638146",
    areaServed: [
      { "@type": "City", name: cityName },
      { "@type": "AdministrativeArea", name: "Los Angeles County" }
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn"
    ],
    serviceType: "TV mounting services",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `TV Mounting in ${cityName}`,
    provider: { "@type": "LocalBusiness", name: "Ice Mount'n" },
    areaServed: cityName,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TV Mounting Services",
      itemListElement: [
        { "@type": "Offer", name: "Standard TV Mount" },
        { "@type": "Offer", name: "Over-Fireplace Mount" },
        { "@type": "Offer", name: "In-Wall Cable Concealment" },
        { "@type": "Offer", name: "Samsung Frame TV Installation" },
        { "@type": "Offer", name: "Sound-bar / Speaker Mounting" }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const structuredData = [breadcrumbSchema, localBusinessSchema, serviceSchema, faqSchema];

  return (
    <SiteLayout>
      {/* Enhanced JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CityPageClient
        cityName={cityName}
        citySlug={resolvedParams.city}
        isCampus={isCampus}
        services={services}
        trustFeatures={trustFeatures}
        localFaqs={localFaqs}
        data={data}
      />
    </SiteLayout>
  );
}
