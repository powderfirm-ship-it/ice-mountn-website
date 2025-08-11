# Ice Mount'n - Templates & Snippets

## **Copy-Paste Ready Implementation Guide**

This document contains all the templates, code snippets, and implementation examples needed to execute the technical and SEO audit recommendations.

---

## **1. Title & Meta Templates**

### **Homepage Template**
```typescript:src/app/page.tsx
export const metadata: Metadata = {
  title: "TV Mounting Los Angeles | Ice Mount'n - Same Day Service",
  description: "Professional TV mounting and home theater installation in Los Angeles. Samsung Frame specialist, over-fireplace mounting, cable concealment. Same-day service, top-rated pros. Call (323) 863-8146 for free estimate.",
  keywords: "tv mounting los angeles, tv wall mounting service los angeles, tv installation los angeles, home theater installation, cable concealment, samsung frame installer los angeles, over fireplace tv mounting, sound bar installation",
  alternates: {
    canonical: "https://icemountn.com"
  }
}
```

### **Service Page Template**
```typescript:src/app/services/[service]/page.tsx
export const metadata: Metadata = {
  title: "[Service Name] Los Angeles | [Price]+ | Ice Mount'n",
  description: "Professional [service name] in Los Angeles starting at [price]. Same-day service, [key features]. Call (323) 863-8146 for free estimate.",
  keywords: "[service name] los angeles, [service name] ca, [related services] los angeles, tv mounting [service type]",
  alternates: {
    canonical: "https://icemountn.com/services/[service]"
  }
}

// Example for Standard TV Mount:
export const metadata: Metadata = {
  title: "Standard TV Mounting Los Angeles | $149+ | Ice Mount'n",
  description: "Professional standard TV mounting in Los Angeles starting at $149. Same-day service, stud mounting, cable management. Call (323) 863-8146 for free estimate.",
  keywords: "standard tv mounting los angeles, tv wall mount los angeles, tv installation ca, stud mounting los angeles",
  alternates: {
    canonical: "https://icemountn.com/services/standard-tv-mount"
  }
}
```

### **City Page Template**
```typescript:src/app/locations/[city]/page.tsx
export const metadata: Metadata = {
  title: "TV Mounting [City] | Same Day Service | Ice Mount'n",
  description: "Professional TV mounting in [City], CA. Same-day service, over-fireplace mounting, cable concealment. Call (323) 863-8146 for free estimate.",
  keywords: "tv mounting [city], tv installation [city] ca, samsung frame [city], over fireplace tv mount [city], cable concealment [city]",
  alternates: {
    canonical: "https://icemountn.com/locations/[city]"
  }
}

// Example for Pasadena:
export const metadata: Metadata = {
  title: "TV Mounting Pasadena | Same Day Service | Ice Mount'n",
  description: "Professional TV mounting in Pasadena, CA. Same-day service, over-fireplace mounting, cable concealment. Call (323) 863-8146 for free estimate.",
  keywords: "tv mounting pasadena, tv installation pasadena ca, samsung frame pasadena, over fireplace tv mount pasadena, cable concealment pasadena",
  alternates: {
    canonical: "https://icemountn.com/locations/pasadena"
  }
}
```

### **Reviews Page Template**
```typescript:src/app/customer-reviews/page.tsx
export const metadata: Metadata = {
  title: "Customer Reviews | TV Mounting Los Angeles | Ice Mount'n",
  description: "Read real customer reviews for Ice Mount'n TV mounting services in Los Angeles. 4.9/5 stars from 150+ satisfied customers. Same-day service, professional installation.",
  keywords: "tv mounting reviews los angeles, ice mountn reviews, tv installation customer reviews, los angeles tv mounting testimonials",
  alternates: {
    canonical: "https://icemountn.com/customer-reviews"
  }
}
```

### **FAQ Page Template**
```typescript:src/app/faq/page.tsx
export const metadata: Metadata = {
  title: "TV Mounting FAQ | Common Questions | Ice Mount'n",
  description: "Frequently asked questions about TV mounting services in Los Angeles. Pricing, installation process, same-day service, renter-friendly options. Get answers from the experts.",
  keywords: "tv mounting faq los angeles, tv installation questions, tv mounting cost los angeles, same day tv mounting",
  alternates: {
    canonical: "https://icemountn.com/faq"
  }
}
```

---

## **2. JSON-LD Schema Templates**

### **Enhanced LocalBusiness Schema**
```typescript:src/components/schema-markup.tsx
export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://icemountn.com/#business",
    "name": "Ice Mount'n",
    "description": "Professional TV mounting and home theater installation in Los Angeles",
    "url": "https://icemountn.com",
    "telephone": "(323) 863-8146",
    "email": "contact@icemountn.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Los Angeles County"
      },
      {
        "@type": "Place",
        "name": "UCLA, Westwood"
      },
      {
        "@type": "Place",
        "name": "USC, University Park"
      },
      {
        "@type": "Place",
        "name": "Pasadena"
      },
      {
        "@type": "Place",
        "name": "Beverly Hills"
      },
      {
        "@type": "Place",
        "name": "Inglewood"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps?cid=YOUR_GOOGLE_CID",
      "https://www.yelp.com/biz/ice-mountn-los-angeles",
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
            "description": "Professional wall mounting for TVs up to 65 inches"
          },
          "price": "149",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Frame Installation",
            "description": "Expert Samsung Frame TV mounting with recessed box"
          },
          "price": "299",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Over-Fireplace Mounting",
            "description": "Heat-safe TV mounting above fireplaces"
          },
          "price": "199",
          "priceCurrency": "USD"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Incredible service! They mounted my 75\" TV above the fireplace and hid all the cables perfectly. Same-day service and very professional.",
        "itemReviewed": {
          "@type": "Service",
          "name": "Over-Fireplace TV Mounting"
        }
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
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  );
}
```

### **Service Schema Template**
```typescript:src/components/service-schema.tsx
export function ServiceSchema({ service }: { service: ServiceData }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ice Mount'n",
      "telephone": "(323) 863-8146"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Los Angeles County"
    },
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema)
      }}
    />
  );
}
```

### **FAQ Schema Template**
```typescript:src/components/faq-schema.tsx
export function FAQSchema({ faqs }: { faqs: FAQData[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
}
```

### **Breadcrumb Schema Template**
```typescript:src/components/breadcrumb-schema.tsx
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
}
```

---

## **3. Internal Linking Plan**

### **Hub-Spoke Architecture Implementation**
```typescript:src/components/services-grid.tsx
// Add location-specific CTAs to each service card
export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
            {/* Existing service content */}
            
            {/* Add location-specific CTAs */}
            <div className="mt-4 space-y-2">
              <Link 
                href="/locations/ucla" 
                className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                UCLA Student Discount →
              </Link>
              <Link 
                href="/locations/usc" 
                className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                USC Student Discount →
              </Link>
              <Link 
                href="/locations/pasadena" 
                className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Pasadena Service Area →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

### **Cross-Linking in City Pages**
```typescript:src/app/locations/[city]/city-page-client.tsx
// Add service cross-references to city pages
export function CityPageClient({ city }: { city: CityData }) {
  return (
    <div>
      {/* Existing city content */}
      
      {/* Service Cross-References */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/services/standard-tv-mount"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Standard TV Mounting</h3>
              <p className="text-gray-600 text-sm">Professional wall mounting starting at $149</p>
            </Link>
            
            <Link 
              href="/services/samsung-frame"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Samsung Frame Installation</h3>
              <p className="text-gray-600 text-sm">Expert art-display TV mounting</p>
            </Link>
            
            <Link 
              href="/services/cable-concealment"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Cable Concealment</h3>
              <p className="text-gray-600 text-sm">In-wall cable hiding for clean look</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## **4. Image & Alt Text Conventions**

### **Hero Image Optimization**
```typescript:src/components/hero-section.tsx
// Single optimized hero image (no carousel for LCP)
export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left max-w-xl">
            {/* Trust badges and headlines */}
          </div>

          {/* Single Hero Image */}
          <div className="relative w-full md:w-auto flex justify-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-xl">
              <div className="relative w-full max-w-[480px] aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/stock/hero-1.webp"
                  alt="Professional TV mounting service in Los Angeles - 65-inch TV wall-mounted above fireplace in Westwood apartment"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 480px"
                  quality={70}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### **Gallery Image Optimization**
```typescript:src/components/gallery-section.tsx
export function GallerySection() {
  const galleryImages = [
    {
      src: "/images/stock/gallery-01.jpg",
      alt: "TV mounted above fireplace with concealed cables in Beverly Hills home theater",
      caption: "Over-fireplace mounting with cable concealment"
    },
    {
      src: "/images/stock/gallery-02.jpg", 
      alt: "Samsung Frame TV installation with zero-gap wall finish in Santa Monica living room",
      caption: "Samsung Frame art-display installation"
    },
    {
      src: "/images/stock/gallery-03.webp",
      alt: "Professional soundbar mounting with TV in Westwood apartment setup",
      caption: "TV and soundbar mounting service"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Recent Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600 text-center">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### **Review Image Optimization**
```typescript:src/components/reviews-section.tsx
// Fixed aspect ratio containers for review images
export function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              {/* Review content */}
              
              {/* Profile image with fixed aspect ratio */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={`/images/stock/review-${String(index + 1).padStart(2, '0')}.jpg`}
                      alt={`Customer review from ${review.location} - ${review.service}`}
                      fill
                      sizes="40px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

---

## **5. Next-Gen Image Formats & Sizes**

### **Image Optimization Strategy**
```typescript:src/utils/image-optimization.ts
// Image optimization utilities
export const imageConfig = {
  hero: {
    format: 'webp',
    quality: 70,
    sizes: '(max-width: 768px) 100vw, 1200px',
    priority: true,
    fetchPriority: 'high' as const
  },
  gallery: {
    format: 'webp',
    quality: 80,
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    priority: false,
    loading: 'lazy' as const
  },
  reviews: {
    format: 'webp',
    quality: 85,
    sizes: '40px',
    priority: false,
    loading: 'lazy' as const
  }
};

// Responsive image sizes for different viewports
export const responsiveSizes = {
  mobile: '100vw',
  tablet: '50vw', 
  desktop: '33vw',
  hero: '(max-width: 768px) 100vw, 1200px'
};
```

### **WebP Conversion Script**
```bash:scripts/convert-images.sh
#!/bin/bash
# Convert images to WebP format for better performance

# Install WebP converter if not already installed
# brew install webp (macOS) or apt-get install webp (Ubuntu)

# Convert hero images
cwebp -q 70 public/images/stock/hero-1.jpg -o public/images/stock/hero-1.webp
cwebp -q 70 public/images/stock/hero-2.jpg -o public/images/stock/hero-2.webp
cwebp -q 70 public/images/stock/hero-3.jpg -o public/images/stock/hero-3.webp

# Convert gallery images
cwebp -q 80 public/images/stock/gallery-01.jpg -o public/images/stock/gallery-01.webp
cwebp -q 80 public/images/stock/gallery-02.jpg -o public/images/stock/gallery-02.webp
cwebp -q 80 public/images/stock/gallery-03.jpg -o public/images/stock/gallery-03.webp

# Convert review images
cwebp -q 85 public/images/stock/review-01.jpg -o public/images/stock/review-01.webp

echo "Image conversion complete!"
```

---

## **6. Content Outlines for Top Pages**

### **UCLA Page Content Structure**
```typescript:src/app/locations/ucla/ucla-page-client.tsx
export function UCLAPageClient() {
  const contentSections = [
    {
      title: "UCLA TV Mounting Services",
      content: "Professional TV mounting for UCLA students in dorms, apartments, and graduate housing. RA-approved, renter-friendly installations with student discount pricing.",
      features: [
        "Dorm-safe TV mounting",
        "Apartment cable concealment", 
        "Gaming setup mounting",
        "Student-friendly pricing"
      ]
    },
    {
      title: "UCLA Campus Areas We Serve",
      content: "Comprehensive coverage of all UCLA campus areas and surrounding student housing.",
      areas: [
        "UCLA dormitories & residence halls",
        "Westwood Village apartments",
        "Graduate student housing",
        "Off-campus student apartments",
        "UCLA family housing",
        "Fraternity & sorority houses"
      ]
    },
    {
      title: "Student Discount Pricing",
      content: "Special pricing for UCLA students to make professional TV mounting affordable.",
      pricing: [
        {
          service: "Basic TV Mount (≤55\")",
          price: "$99",
          includes: ["Mounting", "Basic cable management", "Testing"]
        },
        {
          service: "Standard TV Mount (≤65\")", 
          price: "$129",
          includes: ["Mounting", "Cable concealment", "Tilt adjustment"]
        },
        {
          service: "Premium TV Mount (>65\")",
          price: "$159",
          includes: ["Mounting", "Full cable concealment", "Swivel adjustment"]
        }
      ]
    },
    {
      title: "Frequently Asked Questions",
      content: "Common questions about TV mounting for UCLA students.",
      faqs: [
        {
          question: "Can you mount TVs in UCLA dorms and residence halls?",
          answer: "Yes! We provide RA-approved TV mounting for UCLA dorms using damage-free methods that comply with UCLA housing regulations. Our mounting solutions leave no permanent marks and can be easily removed without penalty."
        },
        {
          question: "Do you offer student discounts for UCLA TV mounting?",
          answer: "We offer student-friendly pricing for UCLA installations. Our standard rates are already competitive, and we provide the same professional service whether it's a dorm room or off-campus apartment."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              UCLA Student Discount
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              UCLA TV Mounting Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional TV mounting for UCLA students in dorms, apartments & graduate housing. 
              RA-approved, renter-friendly installations with student discount pricing.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book UCLA Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call for UCLA Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {contentSections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                {section.content}
              </p>
              
              {/* Render different content types */}
              {section.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {section.areas && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {section.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {section.pricing && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.pricing.map((package_, packageIndex) => (
                    <Card key={packageIndex} className="border-gray-200 text-center">
                      <CardHeader>
                        <CardTitle className="text-xl">{package_.service}</CardTitle>
                        <div className="text-3xl font-bold text-blue-600">{package_.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {package_.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              {section.faqs && (
                <Accordion type="single" collapsible className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${faqIndex}`}
                      className="bg-white border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
```

### **Samsung Frame Service Page Content Structure**
```typescript:src/app/services/samsung-frame/page.tsx
export default function SamsungFramePage() {
  const contentSections = [
    {
      title: "Samsung Frame Installation Process",
      content: "Our step-by-step Samsung Frame installation process ensures a perfect, gallery-quality finish.",
      steps: [
        {
          step: 1,
          title: "Wall Assessment & Planning",
          description: "We assess your wall type, determine optimal positioning, and plan the recessed box installation for seamless integration."
        },
        {
          step: 2,
          title: "Recessed Box Installation",
          description: "Professional installation of the recessed box to create the perfect cavity for your Samsung Frame TV."
        },
        {
          step: 3,
          title: "TV Mounting & Alignment",
          description: "Precise mounting with perfect alignment to achieve the zero-gap wall finish Samsung Frame is known for."
        },
        {
          step: 4,
          title: "Cable Management & Testing",
          description: "Complete cable concealment and thorough testing to ensure perfect functionality and appearance."
        }
      ]
    },
    {
      title: "Samsung Frame Features & Benefits",
      content: "Discover why Samsung Frame TVs are the perfect choice for art-display installations.",
      features: [
        {
          icon: "🎨",
          title: "Art Mode",
          description: "Transform your TV into a beautiful art display when not in use"
        },
        {
          icon: "🔌",
          title: "One Connect Box",
          description: "Single cable connection for clean, minimal installation"
        },
        {
          icon: "📱",
          title: "Smart Remote",
          description: "Intuitive control with built-in voice assistant"
        },
        {
          icon: "🎯",
          title: "Zero-Gap Mount",
          description: "Seamless wall integration for gallery-quality appearance"
        }
      ]
    },
    {
      title: "Pricing & Packages",
      content: "Transparent pricing for Samsung Frame installation with no hidden costs.",
      packages: [
        {
          name: "Basic Installation",
          price: "$299",
          includes: [
            "TV mounting and alignment",
            "Basic cable management",
            "Testing and calibration",
            "1-year installation warranty"
          ],
          popular: false
        },
        {
          name: "Premium Installation",
          price: "$399",
          includes: [
            "TV mounting and alignment",
            "Recessed box installation",
            "Complete cable concealment",
            "Art mode setup and optimization",
            "2-year installation warranty"
          ],
          popular: true
        },
        {
          name: "Complete Setup",
          price: "$499",
          includes: [
            "TV mounting and alignment",
            "Recessed box installation",
            "Complete cable concealment",
            "Art mode setup and optimization",
            "Sound system integration",
            "Lifetime installation warranty"
          ],
          popular: false
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              Samsung Frame Specialist
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Samsung Frame TV Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert Samsung Frame TV mounting with recessed box installation for the ultimate 
              art-display aesthetic. Zero-gap wall finish guaranteed.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookOnline}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4"
              >
                Book Samsung Frame Installation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4"
                asChild
              >
                <a href="tel:(323) 863-8146">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  Call for Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {contentSections.map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                {section.content}
              </p>
              
              {/* Render different content types */}
              {section.steps && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {section.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-center p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {section.packages && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.packages.map((package_, packageIndex) => (
                    <Card key={packageIndex} className={`border-gray-200 text-center ${package_.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {package_.popular && (
                        <div className="bg-blue-500 text-white text-sm font-semibold py-2 rounded-t-lg">
                          Most Popular
                        </div>
                      )}
                      <CardHeader className={package_.popular ? '' : 'pt-6'}>
                        <CardTitle className="text-xl">{package_.name}</CardTitle>
                        <div className="text-3xl font-bold text-blue-600">{package_.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {package_.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
```

---

## **7. Content Strategy & Blog Ideas**

### **10 Blog Post Ideas with Outlines**

#### **1. "Complete Guide to TV Mounting in Los Angeles: 2025 Edition"**
- **Target Keywords**: "tv mounting guide los angeles", "tv installation guide ca"
- **Outline**:
  - Types of TV mounts (fixed, tilt, full-motion)
  - Wall types and mounting considerations
  - Cable management options
  - Local building codes and regulations
  - DIY vs. professional installation
  - Cost breakdown and pricing guide

#### **2. "Samsung Frame TV Installation: Art Gallery Quality Setup"**
- **Target Keywords**: "samsung frame installation los angeles", "samsung frame mounting"
- **Outline**:
  - Samsung Frame features and benefits
  - Recessed box installation process
  - Cable concealment techniques
  - Art mode optimization
  - Maintenance and care tips
  - Alternative art-display TV options

#### **3. "Over-Fireplace TV Mounting: Safety and Style Guide"**
- **Target Keywords**: "over fireplace tv mount los angeles", "fireplace tv installation"
- **Outline**:
  - Heat considerations and safety requirements
  - Mounting height and viewing angle optimization
  - Pull-down bracket options
  - Cable routing solutions
  - Fireplace-specific challenges
  - Professional vs. DIY considerations

#### **4. "Student Housing TV Mounting: UCLA and USC Guide"**
- **Target Keywords**: "ucla tv mounting", "usc tv installation", "student housing tv mount"
- **Outline**:
  - Dorm and apartment mounting challenges
  - RA-approved installation methods
  - Damage-free mounting solutions
  - Student discount programs
  - Move-in/move-out considerations
  - Campus area service coverage

#### **5. "Cable Concealment: Professional In-Wall Solutions"**
- **Target Keywords**: "cable concealment los angeles", "in wall cable hiding"
- **Outline**:
  - In-wall vs. surface cable management
  - Electrical code compliance
  - Fishing techniques for different wall types
  - Outlet installation and placement
  - HDMI and power cable considerations
  - Professional tools and equipment

#### **6. "Soundbar Installation: Complete Audio Setup Guide"**
- **Target Keywords**: "soundbar installation los angeles", "soundbar mounting service"
- **Outline**:
  - Soundbar positioning and acoustics
  - Mounting hardware options
  - Cable management for audio systems
  - Subwoofer placement considerations
  - Calibration and testing
  - Integration with existing systems

#### **7. "TV Mounting Cost Guide: Los Angeles 2025 Pricing"**
- **Target Keywords**: "tv mounting cost los angeles", "tv installation price ca"
- **Outline**:
  - Service pricing breakdown
  - Factors affecting installation cost
  - Package deals and discounts
  - Student and senior pricing
  - Same-day service premiums
  - Value-added services

#### **8. "Renter-Friendly TV Mounting: Protect Your Security Deposit"**
- **Target Keywords**: "renter friendly tv mounting", "apartment tv installation"
- **Outline**:
  - Landlord approval strategies
  - Damage-free mounting methods
  - Removable mounting solutions
  - Lease agreement considerations
  - Professional vs. DIY for renters
  - Move-out restoration tips

#### **9. "Home Theater Setup: Professional Installation Guide"**
- **Target Keywords**: "home theater installation los angeles", "home theater setup ca"
- **Outline**:
  - Room acoustics and optimization
  - Speaker positioning and mounting
  - Video calibration and testing
  - Smart home integration
  - Lighting and ambiance considerations
  - Professional installation benefits

#### **10. "Same-Day TV Mounting: When You Need It Fast"**
- **Target Keywords**: "same day tv mounting los angeles", "emergency tv installation"
- **Outline**:
  - Same-day service availability
  - Emergency installation scenarios
  - Preparation for quick installation
  - What to expect from same-day service
  - Premium pricing considerations
  - Quality assurance for fast installations

---

## **8. Implementation Checklist**

### **Phase 1: Critical Fixes (Week 1-2)**
- [ ] Replace hero carousel with single optimized image
- [ ] Implement next/font for Inter and Open Sans
- [ ] Complete LocalBusiness schema with all required properties
- [ ] Test LCP improvements

### **Phase 2: High Priority (Week 3-6)**
- [ ] Defer Housecall Pro script to on-demand loading
- [ ] Fix CLS issues with fixed aspect ratio containers
- [ ] Add missing canonical URLs to all pages
- [ ] Implement optimized title tags and meta descriptions
- [ ] Enhance city pages with local targeting
- [ ] Add Google Business Profile schema integration
- [ ] Implement GA4 tracking and conversion tracking
- [ ] Create image sitemap
- [ ] Implement cross-linking between services and locations
- [ ] Add sticky mobile CTAs

### **Phase 3: Medium Priority (Week 7-12)**
- [ ] Build topic clusters and content strategy
- [ ] Enhance service pages with comprehensive content
- [ ] Add trust signals and business credentials
- [ ] Submit to local business directories
- [ ] Implement accessibility improvements
- [ ] Optimize sitemap and technical SEO
- [ ] Monitor and optimize based on analytics data

---

*These templates and snippets provide everything needed to implement the technical and SEO audit recommendations for Ice Mount'n.*
