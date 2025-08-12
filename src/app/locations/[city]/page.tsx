import { SiteLayout } from "@/components/site-layout";
import { locations, getLocationBySlug, getCampusLocationBySlug } from "@/data/locations";
import { notFound } from "next/navigation";
import { CityPageClient } from "./city-page-client";
import { SERVICES, type ServiceSlug } from "@/data/services";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
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
      answer: `Yes! We specialize in ${cityName} apartment and condo TV mounting with renter-friendly solutions. Our damage-free mounting options protect your security deposit while creating the perfect entertainment setup.`
    },
    {
      question: `Is parking available for TV mounting appointments in ${cityName}?`,
      answer: `Our technicians are familiar with ${cityName} parking regulations and will find appropriate parking for service calls. We handle permit parking and bring compact equipment to navigate narrow ${cityName} streets.`
    },
    {
      question: `Can you work with older buildings and walls in ${cityName}?`,
      answer: `Absolutely! ${cityName} has many historic and older buildings with unique wall types. Our experienced technicians are skilled in mounting on plaster, concrete, brick, and other materials common in ${cityName} architecture.`
    },
    ...(isCampus ? [
      {
        question: `Do you provide ${cityName} student housing and dorm TV mounting?`,
        answer: `Yes! We specialize in student-friendly TV mounting for ${cityName} dorms, apartments, and student housing. Our RA-approved and landlord-safe mounting options comply with housing regulations.`
      }
    ] : [
      {
        question: `Do you handle condo association rules for TV mounting in ${cityName}?`,
        answer: `Yes, we're experienced with ${cityName} condo and HOA regulations. We can provide documentation for association approval and use mounting methods that comply with building guidelines.`
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
        "item": "https://icemountn.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://icemountn.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `TV Mounting in ${cityName}`,
        "item": `https://icemountn.com/locations/${resolvedParams.city}`
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Ice Mount'n TV Mounting ${cityName}`,
    "description": `Professional TV mounting service in ${cityName}, Los Angeles. Renter-friendly installations for apartments, condos, and homes.`,
    "url": `https://icemountn.com/locations/${resolvedParams.city}`,
    "telephone": "(323) 863-8146",
    "email": "contact@icemountn.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": "CA",
      "addressCountry": "US",
      "postalCode": "90210"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": cityName,
        "sameAs": `https://en.wikipedia.org/wiki/${cityName.replace(' ', '_')}`
      },
      {
        "@type": "State",
        "name": "California"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "sameAs": [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn",
      "https://www.yelp.com/biz/ice-mountn-los-angeles"
    ]
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

  const structuredData = [breadcrumbSchema, localBusinessSchema, faqSchema];

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
