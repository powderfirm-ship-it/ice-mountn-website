export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.icemountn.com/#organization",
    "name": "Ice Mount'n",
    "alternateName": "Ice Mount'n TV Mounting & Home Theater Installation",
    "description": "Professional TV mounting and home theater installation service in Los Angeles. Same-day service, expert installation, and 100% satisfaction guarantee.",
    "url": "https://www.icemountn.com",
    "telephone": "(323) 863-8146",
    "email": "contact@icemountn.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Los Angeles",
        "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles"
      },
      {
        "@type": "City",
        "name": "Beverly Hills"
      },
      {
        "@type": "City",
        "name": "Santa Monica"
      },
      {
        "@type": "City",
        "name": "Hollywood"
      },
      {
        "@type": "City",
        "name": "Pasadena"
      }
    ],
    "openingHours": [
      "Mo 08:00-20:00",
      "Tu 08:00-20:00",
      "Th 08:00-20:00",
      "Fr 08:00-20:00",
      "Sa 08:00-20:00",
      "Su 08:00-20:00"
    ],
    "priceRange": "$$",
            "image": "https://www.icemountn.com/images/brand/ice-mountn-tv-mounting-logo.webp",
        "logo": "https://www.icemountn.com/images/brand/ice-mountn-tv-mounting-logo.webp",
    "sameAs": [
      "https://www.facebook.com/icemountn",
      "https://www.instagram.com/icemountn"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "TV Mounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard TV Mounting",
            "description": "Secure wall installation for any size TV with professional cable management",
            "provider": {
              "@id": "https://www.icemountn.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Over-Fireplace TV Mounting",
            "description": "Heat-safe TV installation above fireplaces with specialized mounting solutions",
            "provider": {
              "@id": "https://www.icemountn.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "In-Wall Cable Concealment",
            "description": "Professional in-wall cable routing and concealment for a clean appearance",
            "provider": {
              "@id": "https://www.icemountn.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sound-bar and Speaker Mounting",
            "description": "Professional speaker and sound-bar mounting with optimal positioning",
            "provider": {
              "@id": "https://www.icemountn.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Frame TV Installation",
            "description": "Expert installation of Samsung Frame TVs and art-display screens with zero-gap wall finish",
            "provider": {
              "@id": "https://www.icemountn.com/#organization"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Incredible service! They mounted my 75\" TV above the fireplace and hid all the cables perfectly. Same-day service and very professional."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Fast, affordable, and perfect work. My sound bar looks amazing and the TV mount is rock solid. Highly recommend Ice Mount'n!"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does TV mounting cost in Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our TV mounting services start at $149 for standard wall mounts up to 65\". Over-fireplace installations and in-wall cable concealment are priced separately. We offer free estimates and competitive pricing throughout Los Angeles."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide same-day TV mounting service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer same-day TV mounting service throughout most of Los Angeles. Call us before 2 PM and we can often schedule your installation for the same day, subject to availability."
        }
      },
      {
        "@type": "Question",
        "name": "What's included with TV mounting service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every TV mounting service includes: wall mount hardware, professional installation, basic cable management, tilt adjustment, and safety testing. We bring all necessary tools and equipment to complete your installation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you mount TVs above fireplaces safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in over-fireplace TV installations using heat-resistant mounts and proper clearances. We ensure your TV is safely positioned and protected from heat damage with pull-down bracket options available."
        }
      }
    ]
  };

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
        "name": "Services",
        "item": "https://www.icemountn.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://www.icemountn.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}
