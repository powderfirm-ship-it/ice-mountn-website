export interface CityData {
  name: string;
  slug: string;
  neighborhoods: string[];
  landmarks: string[];
  localChallenges: string[];
  localBenefits: string[];
  jobCount: number;
  averageRating: number;
  nearbyCities: string[];
  heroImage: string;
  galleryImages: string[];
  localFaqs: Array<{ question: string; answer: string }>;
}

export const CITIES_DATA: Record<string, CityData> = {
  "glendale": {
    name: "Glendale",
    slug: "glendale",
    neighborhoods: ["Adams Hill", "Verdugo Woodlands", "Oakmont", "Downtown Glendale", "Crescenta Highlands", "Montrose", "La Crescenta", "Tropico", "Pacific Palisades", "Chevy Chase Canyon"],
    landmarks: ["The Americana at Brand", "The Galleria", "Forest Lawn Memorial Park", "Brand Park", "Verdugo Mountains", "Deukmejian Wilderness Park"],
    localChallenges: ["HOA rules in luxury condos", "tight parking in Downtown", "older construction in historic areas", "hillside access challenges"],
    localBenefits: ["luxury condo expertise", "downtown parking knowledge", "historic home experience", "hillside installation skills"],
    jobCount: 220,
    averageRating: 4.9,
    nearbyCities: ["Burbank", "Pasadena", "Eagle Rock"],
    heroImage: "tv-mounting-los-angeles-16.webp",
    galleryImages: [
      "tv-wall-installation-los-angeles-01.webp",
      "samsung-frame-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-07.webp",
      "tv-wall-installation-los-angeles-02.webp",
      "tv-mounting-los-angeles-08.webp",
      "samsung-frame-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "Can you mount TVs in Glendale apartment buildings with strict HOA rules?",
        answer: "Yes, we frequently work with HOAs in complexes like The Americana and The Sage. We're familiar with their requirements and can provide landlord-approved installations."
      },
      {
        question: "Do you offer same-day service in Downtown Glendale?",
        answer: "Absolutely! We provide same-day TV mounting throughout Glendale, including Downtown areas. Book before 2 PM for same-day installation."
      },
      {
        question: "Can you conceal cables in older Glendale homes?",
        answer: "Yes, we specialize in older home installations. We handle everything from 1920s craftsman homes to mid-century modern properties with proper cable concealment."
      },
      {
        question: "How do you handle parking in Downtown Glendale?",
        answer: "Our technicians are familiar with Downtown Glendale parking. We coordinate with building management and use permit parking when needed for smooth service delivery."
      }
    ]
  },
  "beverly-hills": {
    name: "Beverly Hills",
    slug: "beverly-hills",
    neighborhoods: ["Beverly Hills Flats", "Trousdale Estates", "Beverly Hills Post Office", "Beverly Glen", "Coldwater Canyon", "Benedict Canyon"],
    landmarks: ["Rodeo Drive", "Beverly Hills Hotel", "Greystone Mansion", "Beverly Gardens Park", "Beverly Hills City Hall"],
    localChallenges: ["luxury home requirements", "strict building codes", "high-end finish expectations", "security system integration"],
    localBenefits: ["luxury home expertise", "high-end finish quality", "security system knowledge", "premium service standards"],
    jobCount: 185,
    averageRating: 4.9,
    nearbyCities: ["West Hollywood", "Beverly Glen", "Century City"],
    heroImage: "tv-mounting-los-angeles-19.webp",
    galleryImages: [
      "tv-wall-installation-los-angeles-04.webp",
      "samsung-frame-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-10.webp",
      "samsung-frame-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "Do you handle luxury home installations in Beverly Hills?",
        answer: "Yes, we specialize in luxury Beverly Hills homes. We understand the high standards and can integrate with existing security systems and smart home technology."
      },
      {
        question: "Can you work with Beverly Hills building codes?",
        answer: "Absolutely. Our technicians are familiar with Beverly Hills building codes and can ensure all installations meet local requirements and inspections."
      },
      {
        question: "Do you offer premium cable concealment for luxury homes?",
        answer: "Yes, we provide premium in-wall cable concealment that maintains the aesthetic standards expected in Beverly Hills luxury properties."
      },
      {
        question: "How do you handle high-end finish requirements?",
        answer: "We use premium materials and techniques to ensure installations meet the high-end finish standards of Beverly Hills luxury homes."
      }
    ]
  },
  "santa-monica": {
    name: "Santa Monica",
    slug: "santa-monica",
    neighborhoods: ["Downtown Santa Monica", "Ocean Park", "Sunset Park", "North of Montana", "Wilshire Montana", "Mid-City"],
    landmarks: ["Santa Monica Pier", "Third Street Promenade", "Santa Monica Beach", "Palisades Park", "Santa Monica Place"],
    localChallenges: ["beach proximity considerations", "older apartment buildings", "parking restrictions", "tourist area access"],
    localBenefits: ["beach area expertise", "apartment building experience", "parking knowledge", "tourist-friendly service"],
    jobCount: 245,
    averageRating: 4.8,
    nearbyCities: ["Venice", "Brentwood", "Marina del Rey"],
    heroImage: "tv-mounting-los-angeles-17.webp",
    galleryImages: [
      "tv-wall-installation-los-angeles-02.webp",
      "samsung-frame-installation-los-angeles-02.webp",
      "tv-mounting-los-angeles-11.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-12.webp",
      "samsung-frame-installation-los-angeles-05.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Santa Monica installations?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal areas."
      },
      {
        question: "Can you work in older Santa Monica apartment buildings?",
        answer: "Yes, we're experienced with Santa Monica's historic apartment buildings. We handle everything from 1920s Spanish-style to mid-century modern properties."
      },
      {
        question: "Do you offer same-day service in tourist-heavy areas?",
        answer: "Absolutely! We provide same-day service throughout Santa Monica, including tourist areas. We're familiar with local parking and access procedures."
      },
      {
        question: "How do you handle parking restrictions in Downtown Santa Monica?",
        answer: "Our technicians know Santa Monica parking regulations and coordinate with building management for smooth access to your property."
      }
    ]
  },
  "westwood": {
    name: "Westwood",
    slug: "westwood",
    neighborhoods: ["Westwood Village", "Westwood Hills", "Bel Air", "Brentwood", "Sawtelle", "Century City"],
    landmarks: ["UCLA Campus", "Westwood Village", "Hammer Museum", "Westwood Memorial Park", "Fox Theater"],
    localChallenges: ["student housing", "university area parking", "apartment building rules", "historic preservation"],
    localBenefits: ["student housing expertise", "university area knowledge", "apartment building experience", "historic home skills"],
    jobCount: 198,
    averageRating: 4.8,
    nearbyCities: ["Brentwood", "Bel Air", "Century City"],
    heroImage: "tv-mounting-los-angeles-18.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-06.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-01.webp"
    ],
    localFaqs: [
      {
        question: "Do you handle student housing installations in Westwood?",
        answer: "Yes, we're experienced with Westwood student housing and can work with RA approval and landlord requirements for dorm and apartment installations."
      },
      {
        question: "How do you handle UCLA area parking restrictions?",
        answer: "Our technicians know UCLA area parking regulations and can coordinate with building management for smooth access to student housing."
      },
      {
        question: "Can you work in historic Westwood buildings?",
        answer: "Absolutely! We handle historic Westwood buildings with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "Do you offer student-friendly pricing for Westwood installations?",
        answer: "Yes, we offer competitive pricing for Westwood students while maintaining the same professional quality standards."
      }
    ]
  },
  "hollywood": {
    name: "Hollywood",
    slug: "hollywood",
    neighborhoods: ["Hollywood Hills", "Los Feliz", "East Hollywood", "Thai Town", "Little Armenia", "Virgil Village"],
    landmarks: ["Hollywood Walk of Fame", "TCL Chinese Theatre", "Hollywood Sign", "Griffith Observatory", "Hollywood Bowl"],
    localChallenges: ["hillside access", "older apartment buildings", "parking limitations", "tourist area logistics"],
    localBenefits: ["hillside expertise", "apartment building experience", "tourist area knowledge", "historic home skills"],
    jobCount: 212,
    averageRating: 4.7,
    nearbyCities: ["Los Feliz", "East Hollywood", "Silver Lake"],
    heroImage: "tv-mounting-los-angeles-20.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-04.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-05.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle hillside access in Hollywood Hills?",
        answer: "We're experienced with Hollywood Hills terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      },
      {
        question: "Can you work in older Hollywood apartment buildings?",
        answer: "Yes, we handle Hollywood's historic apartment buildings with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in tourist-heavy Hollywood areas?",
        answer: "Absolutely! We provide same-day service throughout Hollywood, including tourist areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle parking limitations in Hollywood?",
        answer: "Our technicians know Hollywood parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "venice": {
    name: "Venice",
    slug: "venice",
    neighborhoods: ["Venice Beach", "Venice Canals", "Marina Peninsula", "Oxford Triangle", "East Venice", "Venice Industrial"],
    landmarks: ["Venice Beach Boardwalk", "Venice Canals", "Abbot Kinney Boulevard", "Venice Beach", "Venice Pier"],
    localChallenges: ["beach proximity", "canal area access", "older beach cottages", "parking restrictions"],
    localBenefits: ["beach area expertise", "canal area knowledge", "historic home experience", "beach community understanding"],
    jobCount: 178,
    averageRating: 4.8,
    nearbyCities: ["Marina del Rey", "Santa Monica", "Culver City"],
    heroImage: "tv-mounting-los-angeles-21.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-06.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-los-angeles-01.webp",
      "tv-mounting-los-angeles-02.webp",
      "tv-wall-installation-los-angeles-01.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Venice installations?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Venice."
      },
      {
        question: "Can you access properties in the Venice Canals area?",
        answer: "Yes, we're experienced with Venice Canals area access and can coordinate with property managers for smooth service delivery in this unique neighborhood."
      },
      {
        question: "Do you work in older Venice beach cottages?",
        answer: "Absolutely! We handle Venice's historic beach cottages with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "How do you handle parking restrictions in Venice Beach areas?",
        answer: "Our technicians know Venice parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  }
};

// Add more cities with similar structure...
export const ADDITIONAL_CITIES: Record<string, CityData> = {
  "pasadena": {
    name: "Pasadena",
    slug: "pasadena",
    neighborhoods: ["Old Pasadena", "South Lake", "East Pasadena", "Linda Vista", "San Rafael Hills", "Arroyo Seco"],
    landmarks: ["Huntington Library", "Rose Bowl", "Old Pasadena", "Colorado Boulevard", "Pasadena City Hall"],
    localChallenges: ["historic preservation", "older construction", "hillside access", "parking limitations"],
    localBenefits: ["historic home expertise", "preservation knowledge", "hillside skills", "local landmark understanding"],
    jobCount: 203,
    averageRating: 4.8,
    nearbyCities: ["Glendale", "Eagle Rock", "South Pasadena"],
    heroImage: "tv-mounting-los-angeles-15.webp",
    galleryImages: [
      "tv-mounting-los-angeles-03.webp",
      "tv-wall-installation-los-angeles-02.webp",
      "tv-mounting-los-angeles-04.webp",
      "tv-mounting-los-angeles-05.webp",
      "tv-mounting-los-angeles-06.webp",
      "tv-wall-installation-los-angeles-03.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle historic preservation in Pasadena?",
        answer: "We're experienced with Pasadena's historic homes and can ensure installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "Can you work in older Pasadena properties?",
        answer: "Yes, we handle Pasadena's historic properties with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Pasadena?",
        answer: "Absolutely! We provide same-day service throughout Pasadena, including historic areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle hillside access in Pasadena?",
        answer: "We're experienced with Pasadena's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      }
    ]
  },
  "burbank": {
    name: "Burbank",
    slug: "burbank",
    neighborhoods: ["Downtown Burbank", "Media District", "Magnolia Park", "Burbank Hills", "Rancho Equestrian", "Toluca Lake"],
    landmarks: ["Warner Bros. Studios", "Universal Studios", "Burbank Town Center", "Starlight Bowl", "Johnny Carson Park"],
    localChallenges: ["studio area access", "media district parking", "hillside properties", "commercial zoning"],
    localBenefits: ["studio area expertise", "media district knowledge", "hillside skills", "commercial property experience"],
    jobCount: 189,
    averageRating: 4.8,
    nearbyCities: ["Glendale", "Toluca Lake", "Studio City"],
    heroImage: "tv-mounting-los-angeles-14.webp",
    galleryImages: [
      "tv-mounting-los-angeles-06.webp",
      "tv-wall-installation-los-angeles-04.webp",
      "tv-mounting-los-angeles-07.webp",
      "tv-mounting-los-angeles-08.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-05.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle studio area access in Burbank?",
        answer: "We're experienced with Burbank's studio areas and can coordinate with security for smooth access to media district properties."
      },
      {
        question: "Can you work in Burbank's hillside properties?",
        answer: "Yes, we handle Burbank's hillside properties with care. We're familiar with hillside terrain and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Burbank?",
        answer: "Absolutely! We provide same-day service throughout Burbank, including studio areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle commercial property installations in Burbank?",
        answer: "We're experienced with Burbank's commercial properties and can ensure installations meet business requirements and local zoning regulations."
      }
    ]
  },
  "west-hollywood": {
    name: "West Hollywood",
    slug: "west-hollywood",
    neighborhoods: ["Sunset Strip", "Beverly Grove", "West Hollywood East", "Plummer Park", "Laurel Canyon", "Melrose"],
    landmarks: ["Sunset Strip", "The Comedy Store", "Whisky a Go Go", "Plummer Park", "West Hollywood Library"],
    localChallenges: ["entertainment district access", "parking restrictions", "apartment building rules", "tourist area logistics"],
    localBenefits: ["entertainment district expertise", "parking knowledge", "apartment building experience", "tourist-friendly service"],
    jobCount: 167,
    averageRating: 4.8,
    nearbyCities: ["Beverly Hills", "Hollywood", "Beverly Grove"],
    heroImage: "tv-mounting-los-angeles-13.webp",
    galleryImages: [
      "tv-mounting-los-angeles-10.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-11.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-12.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle Sunset Strip area access?",
        answer: "We're experienced with West Hollywood's entertainment district and can coordinate with building management for smooth access to Sunset Strip properties."
      },
      {
        question: "Can you work in West Hollywood apartment buildings?",
        answer: "Yes, we handle West Hollywood's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in West Hollywood?",
        answer: "Absolutely! We provide same-day service throughout West Hollywood, including entertainment areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle parking restrictions in West Hollywood?",
        answer: "Our technicians know West Hollywood parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "dtla": {
    name: "Downtown LA",
    slug: "dtla",
    neighborhoods: ["Financial District", "Arts District", "Little Tokyo", "Chinatown", "Bunker Hill", "South Park"],
    landmarks: ["Walt Disney Concert Hall", "The Broad", "Grand Central Market", "LA Live", "Staples Center"],
    localChallenges: ["high-rise access", "commercial zoning", "parking limitations", "security protocols"],
    localBenefits: ["high-rise expertise", "commercial property knowledge", "security coordination", "downtown logistics"],
    jobCount: 234,
    averageRating: 4.7,
    nearbyCities: ["Echo Park", "Silver Lake", "Boyle Heights"],
    heroImage: "tv-mounting-los-angeles-12.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle high-rise access in Downtown LA?",
        answer: "We're experienced with Downtown LA high-rises and can coordinate with building security and management for smooth access to your property."
      },
      {
        question: "Can you work in Downtown LA commercial properties?",
        answer: "Yes, we handle Downtown LA commercial properties with care. We're familiar with commercial zoning and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Downtown LA?",
        answer: "Absolutely! We provide same-day service throughout Downtown LA, including high-rise areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Downtown LA parking restrictions?",
        answer: "Our technicians know Downtown LA parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "silver-lake": {
    name: "Silver Lake",
    slug: "silver-lake",
    neighborhoods: ["Silver Lake", "Echo Park", "Los Feliz", "Atwater Village", "East Hollywood", "Virgil Village"],
    landmarks: ["Silver Lake Reservoir", "Echo Park Lake", "Griffith Observatory", "Dodger Stadium", "Elysian Park"],
    localChallenges: ["hillside access", "older homes", "narrow streets", "parking limitations"],
    localBenefits: ["hillside expertise", "historic home knowledge", "local street navigation", "community understanding"],
    jobCount: 156,
    averageRating: 4.8,
    nearbyCities: ["Echo Park", "Los Feliz", "East Hollywood"],
    heroImage: "tv-mounting-los-angeles-11.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-los-angeles-01.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle hillside access in Silver Lake?",
        answer: "We're experienced with Silver Lake's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      },
      {
        question: "Can you work in older Silver Lake homes?",
        answer: "Yes, we handle Silver Lake's historic homes with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Silver Lake?",
        answer: "Absolutely! We provide same-day service throughout Silver Lake, including hillside areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle narrow street parking in Silver Lake?",
        answer: "Our technicians know Silver Lake's street layout and can coordinate with neighbors for smooth access to your property."
      }
    ]
  },
  "echo-park": {
    name: "Echo Park",
    slug: "echo-park",
    neighborhoods: ["Echo Park", "Silver Lake", "Los Feliz", "Elysian Valley", "Chinatown", "Dodger Stadium"],
    landmarks: ["Echo Park Lake", "Dodger Stadium", "Elysian Park", "Angelino Heights", "Sunset Boulevard"],
    localChallenges: ["hillside access", "older homes", "parking limitations", "historic preservation"],
    localBenefits: ["hillside expertise", "historic home knowledge", "local landmark understanding", "community navigation"],
    jobCount: 134,
    averageRating: 4.8,
    nearbyCities: ["Silver Lake", "Los Feliz", "Chinatown"],
    heroImage: "tv-mounting-los-angeles-10.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-los-angeles-02.webp",
      "tv-mounting-los-angeles-21.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle hillside access in Echo Park?",
        answer: "We're experienced with Echo Park's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      },
      {
        question: "Can you work in older Echo Park homes?",
        answer: "Yes, we handle Echo Park's historic homes with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Echo Park?",
        answer: "Absolutely! We provide same-day service throughout Echo Park, including hillside areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle historic preservation in Echo Park?",
        answer: "We're experienced with Echo Park's historic properties and can ensure installations meet preservation requirements while providing modern functionality."
      }
    ]
  },
  "culver-city": {
    name: "Culver City",
    slug: "culver-city",
    neighborhoods: ["Downtown Culver City", "Fox Hills", "Blair Hills", "Culver West", "Park West", "Westside"],
    landmarks: ["Sony Pictures Studios", "Culver City Hall", "Culver City Stairs", "Baldwin Hills Scenic Overlook", "Westfield Culver City"],
    localChallenges: ["studio area access", "commercial zoning", "parking restrictions", "security protocols"],
    localBenefits: ["studio area expertise", "commercial property knowledge", "security coordination", "local business understanding"],
    jobCount: 178,
    averageRating: 4.8,
    nearbyCities: ["Marina del Rey", "Venice", "West Los Angeles"],
    heroImage: "tv-mounting-los-angeles-09.webp",
    galleryImages: [
      "tv-mounting-los-angeles-03.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-04.webp",
      "tv-mounting-los-angeles-05.webp",
      "tv-mounting-los-angeles-06.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle studio area access in Culver City?",
        answer: "We're experienced with Culver City's studio areas and can coordinate with security for smooth access to Sony Pictures and other studio properties."
      },
      {
        question: "Can you work in Culver City commercial properties?",
        answer: "Yes, we handle Culver City's commercial properties with care. We're familiar with commercial zoning and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Culver City?",
        answer: "Absolutely! We provide same-day service throughout Culver City, including studio areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Culver City parking restrictions?",
        answer: "Our technicians know Culver City parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "brentwood": {
    name: "Brentwood",
    slug: "brentwood",
    neighborhoods: ["Brentwood", "West Los Angeles", "Pacific Palisades", "Sawtelle", "Westwood", "Bel Air"],
    landmarks: ["Getty Center", "Brentwood Country Club", "Brentwood Village", "San Vicente Boulevard", "Brentwood Park"],
    localChallenges: ["luxury home requirements", "strict building codes", "high-end finish expectations", "security system integration"],
    localBenefits: ["luxury home expertise", "high-end finish quality", "security system knowledge", "premium service standards"],
    jobCount: 145,
    averageRating: 4.9,
    nearbyCities: ["Pacific Palisades", "Westwood", "Bel Air"],
    heroImage: "tv-mounting-los-angeles-08.webp",
    galleryImages: [
      "tv-mounting-los-angeles-07.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-08.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "Do you handle luxury home installations in Brentwood?",
        answer: "Yes, we specialize in luxury Brentwood homes. We understand the high standards and can integrate with existing security systems and smart home technology."
      },
      {
        question: "Can you work with Brentwood building codes?",
        answer: "Absolutely. Our technicians are familiar with Brentwood building codes and can ensure all installations meet local requirements and inspections."
      },
      {
        question: "Do you offer premium cable concealment for luxury homes?",
        answer: "Yes, we provide premium in-wall cable concealment that maintains the aesthetic standards expected in Brentwood luxury properties."
      },
      {
        question: "How do you handle high-end finish requirements?",
        answer: "We use premium materials and techniques to ensure installations meet the high-end finish standards of Brentwood luxury homes."
      }
    ]
  },
  "sherman-oaks": {
    name: "Sherman Oaks",
    slug: "sherman-oaks",
    neighborhoods: ["Sherman Oaks", "Encino", "Studio City", "Van Nuys", "Tarzana", "Woodland Hills"],
    landmarks: ["Sherman Oaks Galleria", "Ventura Boulevard", "Van Nuys Sherman Oaks Park", "Sepulveda Basin", "Los Encinos State Historic Park"],
    localChallenges: ["valley area access", "parking regulations", "apartment building rules", "commercial zoning"],
    localBenefits: ["valley area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 198,
    averageRating: 4.8,
    nearbyCities: ["Studio City", "Encino", "Van Nuys"],
    heroImage: "tv-mounting-los-angeles-07.webp",
    galleryImages: [
      "tv-mounting-los-angeles-10.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-11.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-12.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle valley area access in Sherman Oaks?",
        answer: "We're experienced with Sherman Oaks' valley location and can navigate the area efficiently for quick service delivery to all neighborhoods."
      },
      {
        question: "Can you work in Sherman Oaks apartment buildings?",
        answer: "Yes, we handle Sherman Oaks' apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Sherman Oaks?",
        answer: "Absolutely! We provide same-day service throughout Sherman Oaks, including all valley areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Sherman Oaks parking regulations?",
        answer: "Our technicians know Sherman Oaks parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "studio-city": {
    name: "Studio City",
    slug: "studio-city",
    neighborhoods: ["Studio City", "Sherman Oaks", "Toluca Lake", "North Hollywood", "Burbank", "Universal City"],
    landmarks: ["Universal Studios", "Studio City Golf & Tennis Club", "Ventura Boulevard", "Toluca Lake", "Warner Bros. Studios"],
    localChallenges: ["studio area access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["studio area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 167,
    averageRating: 4.8,
    nearbyCities: ["Sherman Oaks", "Toluca Lake", "North Hollywood"],
    heroImage: "tv-mounting-los-angeles-06.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle studio area access in Studio City?",
        answer: "We're experienced with Studio City's studio areas and can coordinate with security for smooth access to Universal Studios and other studio properties."
      },
      {
        question: "Can you work in Studio City apartment buildings?",
        answer: "Yes, we handle Studio City's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Studio City?",
        answer: "Absolutely! We provide same-day service throughout Studio City, including studio areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Studio City parking restrictions?",
        answer: "Our technicians know Studio City parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "marina-del-rey": {
    name: "Marina del Rey",
    slug: "marina-del-rey",
    neighborhoods: ["Marina del Rey", "Venice", "Playa del Rey", "Playa Vista", "Westchester", "Culver City"],
    landmarks: ["Marina del Rey Harbor", "Burton Chace Park", "Marina Beach", "Ballona Wetlands", "Playa Vista"],
    localChallenges: ["beach proximity", "marina area access", "parking restrictions", "tourist area logistics"],
    localBenefits: ["beach area expertise", "marina area knowledge", "parking understanding", "tourist-friendly service"],
    jobCount: 134,
    averageRating: 4.8,
    nearbyCities: ["Venice", "Playa del Rey", "Culver City"],
    heroImage: "tv-mounting-los-angeles-05.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Marina del Rey?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Marina del Rey."
      },
      {
        question: "Can you access properties in the Marina del Rey area?",
        answer: "Yes, we're experienced with Marina del Rey area access and can coordinate with property managers for smooth service delivery in this unique waterfront community."
      },
      {
        question: "Do you work in Marina del Rey condos and apartments?",
        answer: "Absolutely! We handle Marina del Rey's waterfront properties with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "How do you handle parking restrictions in Marina del Rey?",
        answer: "Our technicians know Marina del Rey parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "manhattan-beach": {
    name: "Manhattan Beach",
    slug: "manhattan-beach",
    neighborhoods: ["Manhattan Beach", "Hermosa Beach", "Redondo Beach", "El Segundo", "Torrance", "Palos Verdes"],
    landmarks: ["Manhattan Beach Pier", "The Strand", "Manhattan Beach", "Manhattan Village", "Polliwog Park"],
    localChallenges: ["beach proximity", "parking restrictions", "tourist area access", "older beach homes"],
    localBenefits: ["beach area expertise", "parking knowledge", "tourist area understanding", "beach community experience"],
    jobCount: 123,
    averageRating: 4.8,
    nearbyCities: ["Hermosa Beach", "Redondo Beach", "El Segundo"],
    heroImage: "tv-mounting-los-angeles-04.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-21.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Manhattan Beach?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Manhattan Beach."
      },
      {
        question: "Can you access properties in the Manhattan Beach area?",
        answer: "Yes, we're experienced with Manhattan Beach area access and can coordinate with property managers for smooth service delivery in this beautiful beach community."
      },
      {
        question: "Do you work in older Manhattan Beach homes?",
        answer: "Absolutely! We handle Manhattan Beach's historic beach homes with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "How do you handle parking restrictions in Manhattan Beach?",
        answer: "Our technicians know Manhattan Beach parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "el-segundo": {
    name: "El Segundo",
    slug: "el-segundo",
    neighborhoods: ["El Segundo", "Manhattan Beach", "Redondo Beach", "Torrance", "Hawthorne", "Inglewood"],
    landmarks: ["El Segundo Beach", "El Segundo Library", "El Segundo Museum of Art", "Chevron Refinery", "LAX Airport"],
    localChallenges: ["airport proximity", "industrial area access", "parking restrictions", "beach area considerations"],
    localBenefits: ["airport area expertise", "industrial area knowledge", "parking understanding", "beach community experience"],
    jobCount: 98,
    averageRating: 4.7,
    nearbyCities: ["Manhattan Beach", "Hawthorne", "Inglewood"],
    heroImage: "tv-mounting-los-angeles-03.webp",
    galleryImages: [
      "tv-mounting-los-angeles-01.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-02.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-03.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle airport proximity in El Segundo?",
        answer: "We're experienced with El Segundo's airport location and can coordinate with security for smooth access to properties near LAX and industrial areas."
      },
      {
        question: "Can you access properties in the El Segundo area?",
        answer: "Yes, we're experienced with El Segundo area access and can coordinate with property managers for smooth service delivery in this unique airport-adjacent community."
      },
      {
        question: "Do you work in El Segundo homes and businesses?",
        answer: "Absolutely! We handle El Segundo's diverse properties with care, ensuring installations meet all requirements while providing modern functionality."
      },
      {
        question: "How do you handle parking restrictions in El Segundo?",
        answer: "Our technicians know El Segundo parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "inglewood": {
    name: "Inglewood",
    slug: "inglewood",
    neighborhoods: ["Inglewood", "Hawthorne", "El Segundo", "Lennox", "Westchester", "South Los Angeles"],
    landmarks: ["SoFi Stadium", "The Forum", "Hollywood Park Casino", "Inglewood Park Cemetery", "Centinela Adobe"],
    localChallenges: ["stadium area access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["stadium area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 145,
    averageRating: 4.7,
    nearbyCities: ["Hawthorne", "El Segundo", "South Los Angeles"],
    heroImage: "tv-mounting-los-angeles-02.webp",
    galleryImages: [
      "tv-mounting-los-angeles-04.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-05.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-06.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle stadium area access in Inglewood?",
        answer: "We're experienced with Inglewood's stadium areas and can coordinate with security for smooth access to properties near SoFi Stadium and The Forum."
      },
      {
        question: "Can you work in Inglewood apartment buildings?",
        answer: "Yes, we handle Inglewood's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Inglewood?",
        answer: "Absolutely! We provide same-day service throughout Inglewood, including stadium areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Inglewood parking restrictions?",
        answer: "Our technicians know Inglewood parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "hawthorne": {
    name: "Hawthorne",
    slug: "hawthorne",
    neighborhoods: ["Hawthorne", "Inglewood", "El Segundo", "Lennox", "Gardena", "Torrance"],
    landmarks: ["SpaceX Headquarters", "Hawthorne Municipal Airport", "Hawthorne Memorial Center", "Hawthorne Library", "Hawthorne Plaza"],
    localChallenges: ["industrial area access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["industrial area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 112,
    averageRating: 4.7,
    nearbyCities: ["Inglewood", "El Segundo", "Gardena"],
    heroImage: "tv-mounting-los-angeles-01.webp",
    galleryImages: [
      "tv-mounting-los-angeles-07.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-08.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle industrial area access in Hawthorne?",
        answer: "We're experienced with Hawthorne's industrial areas and can coordinate with security for smooth access to properties near SpaceX and other industrial facilities."
      },
      {
        question: "Can you work in Hawthorne apartment buildings?",
        answer: "Yes, we handle Hawthorne's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Hawthorne?",
        answer: "Absolutely! We provide same-day service throughout Hawthorne, including industrial areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Hawthorne parking restrictions?",
        answer: "Our technicians know Hawthorne parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "ucla": {
    name: "UCLA",
    slug: "ucla",
    neighborhoods: ["Westwood", "Brentwood", "Bel Air", "Sawtelle", "Century City", "West Los Angeles"],
    landmarks: ["UCLA Campus", "Westwood Village", "Hammer Museum", "Getty Center", "Brentwood Country Club"],
    localChallenges: ["campus area access", "student housing", "parking restrictions", "apartment building rules"],
    localBenefits: ["campus area expertise", "student housing knowledge", "parking understanding", "apartment building experience"],
    jobCount: 234,
    averageRating: 4.8,
    nearbyCities: ["Westwood", "Brentwood", "Bel Air"],
    heroImage: "tv-mounting-los-angeles-18.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-06.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-01.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle campus area access in UCLA?",
        answer: "We're experienced with UCLA's campus area and can coordinate with security for smooth access to student housing and campus-adjacent properties."
      },
      {
        question: "Can you work in UCLA student housing?",
        answer: "Yes, we handle UCLA student housing with care. We're familiar with dorm and apartment requirements and can work with RA approval."
      },
      {
        question: "Do you offer same-day service in UCLA area?",
        answer: "Absolutely! We provide same-day service throughout the UCLA area, including student housing. We know local parking and access procedures."
      },
      {
        question: "How do you handle UCLA area parking restrictions?",
        answer: "Our technicians know UCLA area parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "usc": {
    name: "USC",
    slug: "usc",
    neighborhoods: ["University Park", "South Los Angeles", "Exposition Park", "Downtown LA", "Boyle Heights", "Lincoln Heights"],
    landmarks: ["USC Campus", "Los Angeles Memorial Coliseum", "Exposition Park", "Natural History Museum", "California Science Center"],
    localChallenges: ["campus area access", "student housing", "parking restrictions", "apartment building rules"],
    localBenefits: ["campus area expertise", "student housing knowledge", "parking understanding", "apartment building experience"],
    jobCount: 198,
    averageRating: 4.7,
    nearbyCities: ["Downtown LA", "South Los Angeles", "Boyle Heights"],
    heroImage: "tv-mounting-los-angeles-17.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle campus area access in USC?",
        answer: "We're experienced with USC's campus area and can coordinate with security for smooth access to student housing and campus-adjacent properties."
      },
      {
        question: "Can you work in USC student housing?",
        answer: "Yes, we handle USC student housing with care. We're familiar with dorm and apartment requirements and can work with RA approval."
      },
      {
        question: "Do you offer same-day service in USC area?",
        answer: "Absolutely! We provide same-day service throughout the USC area, including student housing. We know local parking and access procedures."
      },
      {
        question: "How do you handle USC area parking restrictions?",
        answer: "Our technicians know USC area parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "bel-air": {
    name: "Bel Air",
    slug: "bel-air",
    neighborhoods: ["Bel Air Estates", "Bel Air Crest", "Bel Air Glen"],
    landmarks: ["Getty Center", "Bel Air Country Club", "UCLA campus"],
    localChallenges: ["luxury home requirements", "strict building codes", "hillside access", "security system integration"],
    localBenefits: ["luxury home expertise", "hillside skills", "security system knowledge", "premium service standards"],
    jobCount: 145,
    averageRating: 4.9,
    nearbyCities: ["Brentwood", "Westwood", "Beverly Hills"],
    heroImage: "tv-mounting-los-angeles-08.webp",
    galleryImages: [
      "tv-mounting-los-angeles-07.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-08.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "Do you handle luxury home installations in Bel Air?",
        answer: "Yes, we specialize in luxury Bel Air homes. We understand the high standards and can integrate with existing security systems and smart home technology."
      },
      {
        question: "Can you work with Bel Air building codes?",
        answer: "Absolutely. Our technicians are familiar with Bel Air building codes and can ensure all installations meet local requirements and inspections."
      },
      {
        question: "Do you offer premium cable concealment for luxury homes?",
        answer: "Yes, we provide premium in-wall cable concealment that maintains the aesthetic standards expected in Bel Air luxury properties."
      },
      {
        question: "How do you handle hillside access in Bel Air?",
        answer: "We're experienced with Bel Air's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      }
    ]
  },
  "beverly-glen": {
    name: "Beverly Glen",
    slug: "beverly-glen",
    neighborhoods: ["Beverly Glen", "Beverly Glen Circle", "Beverly Glen Estates"],
    landmarks: ["Beverly Glen Circle", "Beverly Hills", "Coldwater Canyon"],
    localChallenges: ["hillside access", "luxury home requirements", "narrow canyon roads", "parking limitations"],
    localBenefits: ["hillside expertise", "luxury home knowledge", "canyon area navigation", "premium service standards"],
    jobCount: 123,
    averageRating: 4.9,
    nearbyCities: ["Beverly Hills", "Bel Air", "West Hollywood"],
    heroImage: "tv-mounting-los-angeles-19.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-04.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-05.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle hillside access in Beverly Glen?",
        answer: "We're experienced with Beverly Glen's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      },
      {
        question: "Can you work in Beverly Glen luxury homes?",
        answer: "Yes, we handle Beverly Glen's luxury homes with care. We're familiar with high-end requirements and can ensure premium installations."
      },
      {
        question: "Do you offer same-day service in Beverly Glen?",
        answer: "Absolutely! We provide same-day service throughout Beverly Glen, including hillside areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle canyon area parking in Beverly Glen?",
        answer: "Our technicians know Beverly Glen's canyon layout and can coordinate with neighbors for smooth access to your property."
      }
    ]
  },
  "beverly-grove": {
    name: "Beverly Grove",
    slug: "beverly-grove",
    neighborhoods: ["Beverly Grove", "Fairfax District", "Melrose District"],
    landmarks: ["The Grove", "Farmers Market", "Melrose Avenue"],
    localChallenges: ["tourist area access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["tourist area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 156,
    averageRating: 4.8,
    nearbyCities: ["West Hollywood", "Beverly Hills", "Fairfax"],
    heroImage: "tv-mounting-los-angeles-20.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-21.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle Grove area access in Beverly Grove?",
        answer: "We're experienced with Beverly Grove's tourist areas and can coordinate with building management for smooth access to Grove-adjacent properties."
      },
      {
        question: "Can you work in Beverly Grove apartment buildings?",
        answer: "Yes, we handle Beverly Grove's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Beverly Grove?",
        answer: "Absolutely! We provide same-day service throughout Beverly Grove, including Grove areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle parking restrictions in Beverly Grove?",
        answer: "Our technicians know Beverly Grove parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "boyle-heights": {
    name: "Boyle Heights",
    slug: "boyle-heights",
    neighborhoods: ["Boyle Heights", "East LA", "Lincoln Heights"],
    landmarks: ["Mariachi Plaza", "Hollenbeck Park", "East LA College"],
    localChallenges: ["historic preservation", "older construction", "parking limitations", "apartment building rules"],
    localBenefits: ["historic home expertise", "preservation knowledge", "local landmark understanding", "community navigation"],
    jobCount: 134,
    averageRating: 4.7,
    nearbyCities: ["Downtown LA", "East Hollywood", "Lincoln Heights"],
    heroImage: "tv-mounting-los-angeles-21.webp",
    galleryImages: [
      "tv-mounting-los-angeles-01.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-02.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-03.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle historic preservation in Boyle Heights?",
        answer: "We're experienced with Boyle Heights' historic homes and can ensure installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "Can you work in older Boyle Heights properties?",
        answer: "Yes, we handle Boyle Heights' historic properties with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Boyle Heights?",
        answer: "Absolutely! We provide same-day service throughout Boyle Heights, including historic areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle parking limitations in Boyle Heights?",
        answer: "Our technicians know Boyle Heights' street layout and can coordinate with neighbors for smooth access to your property."
      }
    ]
  },
  "century-city": {
    name: "Century City",
    slug: "century-city",
    neighborhoods: ["Century City", "Westwood", "Beverly Hills"],
    landmarks: ["Westfield Century City", "Fox Studios", "Beverly Hills"],
    localChallenges: ["high-rise access", "commercial zoning", "parking limitations", "security protocols"],
    localBenefits: ["high-rise expertise", "commercial property knowledge", "security coordination", "downtown logistics"],
    jobCount: 178,
    averageRating: 4.8,
    nearbyCities: ["Westwood", "Beverly Hills", "West Los Angeles"],
    heroImage: "tv-mounting-los-angeles-12.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle high-rise access in Century City?",
        answer: "We're experienced with Century City's high-rises and can coordinate with building security and management for smooth access to your property."
      },
      {
        question: "Can you work in Century City commercial properties?",
        answer: "Yes, we handle Century City's commercial properties with care. We're familiar with commercial zoning and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Century City?",
        answer: "Absolutely! We provide same-day service throughout Century City, including high-rise areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Century City parking restrictions?",
        answer: "Our technicians know Century City parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "chinatown": {
    name: "Chinatown",
    slug: "chinatown",
    neighborhoods: ["Chinatown", "Downtown LA", "Echo Park"],
    landmarks: ["Chinatown Central Plaza", "Union Station", "Dodger Stadium"],
    localChallenges: ["historic preservation", "older construction", "parking limitations", "tourist area logistics"],
    localBenefits: ["historic home expertise", "preservation knowledge", "tourist area understanding", "local landmark experience"],
    jobCount: 145,
    averageRating: 4.7,
    nearbyCities: ["Downtown LA", "Echo Park", "Lincoln Heights"],
    heroImage: "tv-mounting-los-angeles-11.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle historic preservation in Chinatown?",
        answer: "We're experienced with Chinatown's historic homes and can ensure installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "Can you work in older Chinatown properties?",
        answer: "Yes, we handle Chinatown's historic properties with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Chinatown?",
        answer: "Absolutely! We provide same-day service throughout Chinatown, including historic areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle tourist area logistics in Chinatown?",
        answer: "Our technicians know Chinatown's tourist areas and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "eagle-rock": {
    name: "Eagle Rock",
    slug: "eagle-rock",
    neighborhoods: ["Eagle Rock", "Highland Park", "Glassell Park"],
    landmarks: ["Eagle Rock", "Colorado Boulevard", "Occidental College"],
    localChallenges: ["historic preservation", "older construction", "hillside access", "parking limitations"],
    localBenefits: ["historic home expertise", "preservation knowledge", "hillside skills", "local landmark understanding"],
    jobCount: 123,
    averageRating: 4.8,
    nearbyCities: ["Highland Park", "Glassell Park", "Pasadena"],
    heroImage: "tv-mounting-los-angeles-10.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-21.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle historic preservation in Eagle Rock?",
        answer: "We're experienced with Eagle Rock's historic homes and can ensure installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "Can you work in older Eagle Rock properties?",
        answer: "Yes, we handle Eagle Rock's historic properties with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Eagle Rock?",
        answer: "Absolutely! We provide same-day service throughout Eagle Rock, including historic areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle hillside access in Eagle Rock?",
        answer: "We're experienced with Eagle Rock's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      }
    ]
  },
  "east-hollywood": {
    name: "East Hollywood",
    slug: "east-hollywood",
    neighborhoods: ["East Hollywood", "Thai Town", "Little Armenia"],
    landmarks: ["Thai Town", "Barnsdall Art Park", "Los Feliz"],
    localChallenges: ["apartment building rules", "parking restrictions", "tourist area logistics", "diverse community needs"],
    localBenefits: ["apartment building experience", "parking knowledge", "tourist area understanding", "community diversity expertise"],
    jobCount: 167,
    averageRating: 4.7,
    nearbyCities: ["Hollywood", "Los Feliz", "Thai Town"],
    heroImage: "tv-mounting-los-angeles-09.webp",
    galleryImages: [
      "tv-mounting-los-angeles-03.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-04.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-05.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle apartment building rules in East Hollywood?",
        answer: "We're experienced with East Hollywood's apartment buildings and can coordinate with building management for smooth access to your property."
      },
      {
        question: "Can you work in East Hollywood's diverse communities?",
        answer: "Yes, we handle East Hollywood's diverse communities with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in East Hollywood?",
        answer: "Absolutely! We provide same-day service throughout East Hollywood, including all neighborhoods. We know local parking and access procedures."
      },
      {
        question: "How do you handle parking restrictions in East Hollywood?",
        answer: "Our technicians know East Hollywood parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "encino": {
    name: "Encino",
    slug: "encino",
    neighborhoods: ["Encino", "Sherman Oaks", "Tarzana"],
    landmarks: ["Encino Village", "Lake Balboa", "Sepulveda Basin"],
    localChallenges: ["valley area access", "parking regulations", "apartment building rules", "commercial zoning"],
    localBenefits: ["valley area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 189,
    averageRating: 4.8,
    nearbyCities: ["Sherman Oaks", "Tarzana", "Van Nuys"],
    heroImage: "tv-mounting-los-angeles-08.webp",
    galleryImages: [
      "tv-mounting-los-angeles-07.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-08.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle valley area access in Encino?",
        answer: "We're experienced with Encino's valley location and can navigate the area efficiently for quick service delivery to all neighborhoods."
      },
      {
        question: "Can you work in Encino apartment buildings?",
        answer: "Yes, we handle Encino's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Encino?",
        answer: "Absolutely! We provide same-day service throughout Encino, including all valley areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Encino parking regulations?",
        answer: "Our technicians know Encino parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "gardena": {
    name: "Gardena",
    slug: "gardena",
    neighborhoods: ["Gardena", "Torrance", "Hawthorne"],
    landmarks: ["Gardena City Hall", "Gardena Valley", "South Bay"],
    localChallenges: ["industrial area access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["industrial area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 134,
    averageRating: 4.7,
    nearbyCities: ["Torrance", "Hawthorne", "Inglewood"],
    heroImage: "tv-mounting-los-angeles-07.webp",
    galleryImages: [
      "tv-mounting-los-angeles-10.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-11.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-12.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle industrial area access in Gardena?",
        answer: "We're experienced with Gardena's industrial areas and can coordinate with security for smooth access to properties near industrial facilities."
      },
      {
        question: "Can you work in Gardena apartment buildings?",
        answer: "Yes, we handle Gardena's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Gardena?",
        answer: "Absolutely! We provide same-day service throughout Gardena, including industrial areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Gardena parking restrictions?",
        answer: "Our technicians know Gardena parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "hermosa-beach": {
    name: "Hermosa Beach",
    slug: "hermosa-beach",
    neighborhoods: ["Hermosa Beach", "Manhattan Beach", "Redondo Beach"],
    landmarks: ["Hermosa Beach Pier", "The Strand", "Hermosa Beach"],
    localChallenges: ["beach proximity", "parking restrictions", "tourist area access", "older beach homes"],
    localBenefits: ["beach area expertise", "parking knowledge", "tourist area understanding", "beach community experience"],
    jobCount: 112,
    averageRating: 4.8,
    nearbyCities: ["Manhattan Beach", "Redondo Beach", "El Segundo"],
    heroImage: "tv-mounting-los-angeles-06.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Hermosa Beach?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Hermosa Beach."
      },
      {
        question: "Can you access properties in the Hermosa Beach area?",
        answer: "Yes, we're experienced with Hermosa Beach area access and can coordinate with property managers for smooth service delivery in this beautiful beach community."
      },
      {
        question: "Do you work in older Hermosa Beach homes?",
        answer: "Absolutely! We handle Hermosa Beach's historic beach homes with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "How do you handle parking restrictions in Hermosa Beach?",
        answer: "Our technicians know Hermosa Beach parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "los-feliz": {
    name: "Los Feliz",
    slug: "los-feliz",
    neighborhoods: ["Los Feliz", "Griffith Park", "Silver Lake"],
    landmarks: ["Griffith Observatory", "Griffith Park", "Los Feliz Village"],
    localChallenges: ["hillside access", "older homes", "narrow streets", "parking limitations"],
    localBenefits: ["hillside expertise", "historic home knowledge", "local street navigation", "community understanding"],
    jobCount: 145,
    averageRating: 4.8,
    nearbyCities: ["Silver Lake", "East Hollywood", "Griffith Park"],
    heroImage: "tv-mounting-los-angeles-05.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle hillside access in Los Feliz?",
        answer: "We're experienced with Los Feliz's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      },
      {
        question: "Can you work in older Los Feliz homes?",
        answer: "Yes, we handle Los Feliz's historic homes with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Los Feliz?",
        answer: "Absolutely! We provide same-day service throughout Los Feliz, including hillside areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle narrow street parking in Los Feliz?",
        answer: "Our technicians know Los Feliz's street layout and can coordinate with neighbors for smooth access to your property."
      }
    ]
  },
  "north-hollywood": {
    name: "North Hollywood",
    slug: "north-hollywood",
    neighborhoods: ["North Hollywood", "NoHo Arts District", "Toluca Lake"],
    landmarks: ["NoHo Arts District", "Universal Studios", "Toluca Lake"],
    localChallenges: ["arts district access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["arts district expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 178,
    averageRating: 4.8,
    nearbyCities: ["Toluca Lake", "Burbank", "Studio City"],
    heroImage: "tv-mounting-los-angeles-04.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-21.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle arts district access in North Hollywood?",
        answer: "We're experienced with North Hollywood's NoHo Arts District and can coordinate with building management for smooth access to arts district properties."
      },
      {
        question: "Can you work in North Hollywood apartment buildings?",
        answer: "Yes, we handle North Hollywood's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in North Hollywood?",
        answer: "Absolutely! We provide same-day service throughout North Hollywood, including arts district areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle North Hollywood parking restrictions?",
        answer: "Our technicians know North Hollywood parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "pacific-palisades": {
    name: "Pacific Palisades",
    slug: "pacific-palisades",
    neighborhoods: ["Pacific Palisades", "Brentwood", "Malibu"],
    landmarks: ["Pacific Palisades Village", "Will Rogers State Beach", "Temescal Canyon"],
    localChallenges: ["beach proximity", "luxury home requirements", "canyon access", "parking restrictions"],
    localBenefits: ["beach area expertise", "luxury home knowledge", "canyon navigation", "premium service standards"],
    jobCount: 123,
    averageRating: 4.9,
    nearbyCities: ["Brentwood", "Malibu", "Santa Monica"],
    heroImage: "tv-mounting-los-angeles-03.webp",
    galleryImages: [
      "tv-mounting-los-angeles-01.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-02.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-03.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Pacific Palisades?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Pacific Palisades."
      },
      {
        question: "Can you work in Pacific Palisades luxury homes?",
        answer: "Yes, we handle Pacific Palisades' luxury homes with care. We're familiar with high-end requirements and can ensure premium installations."
      },
      {
        question: "Do you offer same-day service in Pacific Palisades?",
        answer: "Absolutely! We provide same-day service throughout Pacific Palisades, including beach and canyon areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle canyon access in Pacific Palisades?",
        answer: "We're experienced with Pacific Palisades' canyon terrain and can access canyon properties safely. We coordinate with property managers for smooth service delivery."
      }
    ]
  },
  "playa-del-rey": {
    name: "Playa del Rey",
    slug: "playa-del-rey",
    neighborhoods: ["Playa del Rey", "Marina del Rey", "Venice"],
    landmarks: ["Playa del Rey Beach", "Ballona Wetlands", "LAX Airport"],
    localChallenges: ["beach proximity", "airport area access", "parking restrictions", "tourist area logistics"],
    localBenefits: ["beach area expertise", "airport area knowledge", "parking understanding", "tourist-friendly service"],
    jobCount: 98,
    averageRating: 4.8,
    nearbyCities: ["Marina del Rey", "Venice", "El Segundo"],
    heroImage: "tv-mounting-los-angeles-02.webp",
    galleryImages: [
      "tv-mounting-los-angeles-04.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-05.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-06.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Playa del Rey?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Playa del Rey."
      },
      {
        question: "Can you access properties in the Playa del Rey area?",
        answer: "Yes, we're experienced with Playa del Rey area access and can coordinate with property managers for smooth service delivery in this unique beach community."
      },
      {
        question: "Do you work in Playa del Rey condos and apartments?",
        answer: "Absolutely! We handle Playa del Rey's beachfront properties with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "How do you handle airport area access in Playa del Rey?",
        answer: "Our technicians know Playa del Rey's airport-adjacent location and can coordinate with security for smooth access to properties near LAX."
      }
    ]
  },
  "redondo-beach": {
    name: "Redondo Beach",
    slug: "redondo-beach",
    neighborhoods: ["Redondo Beach", "Hermosa Beach", "Manhattan Beach"],
    landmarks: ["Redondo Beach Pier", "King Harbor", "The Strand"],
    localChallenges: ["beach proximity", "parking restrictions", "tourist area access", "older beach homes"],
    localBenefits: ["beach area expertise", "parking knowledge", "tourist area understanding", "beach community experience"],
    jobCount: 112,
    averageRating: 4.8,
    nearbyCities: ["Hermosa Beach", "Manhattan Beach", "Torrance"],
    heroImage: "tv-mounting-los-angeles-01.webp",
    galleryImages: [
      "tv-mounting-los-angeles-07.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-08.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-09.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle beach proximity in Redondo Beach?",
        answer: "We use corrosion-resistant hardware and consider salt air exposure when installing TVs near the beach. This ensures long-lasting installations in coastal Redondo Beach."
      },
      {
        question: "Can you access properties in the Redondo Beach area?",
        answer: "Yes, we're experienced with Redondo Beach area access and can coordinate with property managers for smooth service delivery in this beautiful harbor community."
      },
      {
        question: "Do you work in older Redondo Beach homes?",
        answer: "Absolutely! We handle Redondo Beach's historic beach homes with care, ensuring installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "How do you handle parking restrictions in Redondo Beach?",
        answer: "Our technicians know Redondo Beach parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "south-pasadena": {
    name: "South Pasadena",
    slug: "south-pasadena",
    neighborhoods: ["South Pasadena", "Pasadena", "Eagle Rock"],
    landmarks: ["South Pasadena City Hall", "Mission Street", "Arroyo Seco"],
    localChallenges: ["historic preservation", "older construction", "hillside access", "parking limitations"],
    localBenefits: ["historic home expertise", "preservation knowledge", "hillside skills", "local landmark understanding"],
    jobCount: 98,
    averageRating: 4.8,
    nearbyCities: ["Pasadena", "Eagle Rock", "Highland Park"],
    heroImage: "tv-mounting-los-angeles-16.webp",
    galleryImages: [
      "tv-mounting-los-angeles-19.webp",
      "tv-wall-installation-los-angeles-05.webp",
      "tv-mounting-los-angeles-20.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-21.webp",
      "tv-wall-installation-los-angeles-06.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle historic preservation in South Pasadena?",
        answer: "We're experienced with South Pasadena's historic homes and can ensure installations meet preservation requirements while providing modern functionality."
      },
      {
        question: "Can you work in older South Pasadena properties?",
        answer: "Yes, we handle South Pasadena's historic properties with care. We're familiar with older construction and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in South Pasadena?",
        answer: "Absolutely! We provide same-day service throughout South Pasadena, including historic areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle hillside access in South Pasadena?",
        answer: "We're experienced with South Pasadena's hillside terrain and can access hillside properties safely. We coordinate with property managers for smooth service delivery."
      }
    ]
  },
  "toluca-lake": {
    name: "Toluca Lake",
    slug: "toluca-lake",
    neighborhoods: ["Toluca Lake", "North Hollywood", "Burbank"],
    landmarks: ["Toluca Lake", "Warner Bros. Studios", "Universal Studios"],
    localChallenges: ["lakeside access", "studio area access", "parking restrictions", "apartment building rules"],
    localBenefits: ["lakeside expertise", "studio area knowledge", "parking understanding", "apartment building experience"],
    jobCount: 134,
    averageRating: 4.8,
    nearbyCities: ["North Hollywood", "Burbank", "Studio City"],
    heroImage: "tv-mounting-los-angeles-15.webp",
    galleryImages: [
      "tv-mounting-los-angeles-16.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-17.webp",
      "tv-mounting-service-los-angeles-01.webp",
      "tv-mounting-los-angeles-18.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle lakeside access in Toluca Lake?",
        answer: "We're experienced with Toluca Lake's lakeside location and can coordinate with property managers for smooth access to lakeside properties."
      },
      {
        question: "Can you work in Toluca Lake apartment buildings?",
        answer: "Yes, we handle Toluca Lake's apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Toluca Lake?",
        answer: "Absolutely! We provide same-day service throughout Toluca Lake, including lakeside areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle studio area access in Toluca Lake?",
        answer: "Our technicians know Toluca Lake's studio-adjacent location and can coordinate with security for smooth access to properties near Warner Bros. and Universal Studios."
      }
    ]
  },
  "van-nuys": {
    name: "Van Nuys",
    slug: "van-nuys",
    neighborhoods: ["Van Nuys", "Sherman Oaks", "Encino"],
    landmarks: ["Van Nuys Airport", "Sherman Oaks Galleria", "Lake Balboa"],
    localChallenges: ["valley area access", "parking regulations", "apartment building rules", "commercial zoning"],
    localBenefits: ["valley area expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 167,
    averageRating: 4.7,
    nearbyCities: ["Sherman Oaks", "Encino", "North Hollywood"],
    heroImage: "tv-mounting-los-angeles-14.webp",
    galleryImages: [
      "tv-mounting-los-angeles-13.webp",
      "tv-wall-installation-los-angeles-03.webp",
      "tv-mounting-los-angeles-14.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-15.webp",
      "tv-wall-installation-los-angeles-04.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle valley area access in Van Nuys?",
        answer: "We're experienced with Van Nuys' valley location and can navigate the area efficiently for quick service delivery to all neighborhoods."
      },
      {
        question: "Can you work in Van Nuys apartment buildings?",
        answer: "Yes, we handle Van Nuys' apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in Van Nuys?",
        answer: "Absolutely! We provide same-day service throughout Van Nuys, including all valley areas. We know local parking and access procedures."
      },
      {
        question: "How do you handle Van Nuys parking regulations?",
        answer: "Our technicians know Van Nuys parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  },
  "west-los-angeles": {
    name: "West Los Angeles",
    slug: "west-los-angeles",
    neighborhoods: ["West Los Angeles", "Brentwood", "Sawtelle"],
    landmarks: ["Sawtelle Japantown", "Brentwood Country Club", "UCLA campus"],
    localChallenges: ["diverse neighborhood access", "parking restrictions", "apartment building rules", "commercial zoning"],
    localBenefits: ["diverse neighborhood expertise", "parking knowledge", "apartment building experience", "commercial property understanding"],
    jobCount: 189,
    averageRating: 4.8,
    nearbyCities: ["Brentwood", "Sawtelle", "Westwood"],
    heroImage: "tv-mounting-los-angeles-13.webp",
    galleryImages: [
      "tv-mounting-los-angeles-10.webp",
      "tv-wall-installation-los-angeles-01.webp",
      "tv-mounting-los-angeles-11.webp",
      "tv-mounting-service-los-angeles-02.webp",
      "tv-mounting-los-angeles-12.webp",
      "tv-wall-installation-los-angeles-02.webp"
    ],
    localFaqs: [
      {
        question: "How do you handle diverse neighborhood access in West Los Angeles?",
        answer: "We're experienced with West Los Angeles' diverse neighborhoods and can coordinate with building management for smooth access to all areas."
      },
      {
        question: "Can you work in West Los Angeles apartment buildings?",
        answer: "Yes, we handle West Los Angeles' apartment buildings with care. We're familiar with local building codes and can ensure safe, compliant installations."
      },
      {
        question: "Do you offer same-day service in West Los Angeles?",
        answer: "Absolutely! We provide same-day service throughout West Los Angeles, including all neighborhoods. We know local parking and access procedures."
      },
      {
        question: "How do you handle West Los Angeles parking restrictions?",
        answer: "Our technicians know West Los Angeles parking regulations and can coordinate with building management for smooth access to your property."
      }
    ]
  }
};

// Combine all cities
export const ALL_CITIES = { ...CITIES_DATA, ...ADDITIONAL_CITIES };

// Helper function to get city data
export function getCityData(citySlug: string): CityData | null {
  return ALL_CITIES[citySlug] || null;
}
