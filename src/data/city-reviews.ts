export interface CustomerReview {
  customerName: string;
  reviewText: string;
  starRating: number;
}

export interface CityReviews {
  [citySlug: string]: CustomerReview[];
}

export const CITY_REVIEWS: CityReviews = {
  "glendale": [
    {
      customerName: "Sarah M.",
      reviewText: "They were quick and professional when mounting my TV in my Glendale apartment near The Americana at Brand. The team knew exactly how to handle our building's HOA requirements.",
      starRating: 5
    },
    {
      customerName: "Michael R.",
      reviewText: "Excellent service in the Adams Hill neighborhood. They mounted my Samsung Frame TV perfectly, even with the challenging wall construction common in this area.",
      starRating: 5
    },
    {
      customerName: "Jennifer L.",
      reviewText: "Professional installation near Brand Park. They handled the cable concealment beautifully in our older home, which has the typical Glendale hillside construction challenges.",
      starRating: 5
    },
    {
      customerName: "David K.",
      reviewText: "Great work in Downtown Glendale. They were familiar with the parking situation and building access procedures, making the whole process smooth.",
      starRating: 5
    }
  ],
  "pasadena": [
    {
      customerName: "Robert T.",
      reviewText: "Outstanding service near Old Pasadena. They mounted my TV over the fireplace perfectly, handling the unique architectural challenges of our historic home.",
      starRating: 5
    },
    {
      customerName: "Lisa W.",
      reviewText: "Professional installation in the South Lake neighborhood. They knew exactly how to work with the older wiring and wall types common in Pasadena homes.",
      starRating: 5
    },
    {
      customerName: "James H.",
      reviewText: "Excellent work near the Rose Bowl. They handled the soundbar mounting with precision, even with the high ceilings typical of this area.",
      starRating: 5
    },
    {
      customerName: "Maria S.",
      reviewText: "Great service in the Playhouse District. They were familiar with the building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    }
  ],
  "santa-monica": [
    {
      customerName: "Alex P.",
      reviewText: "Professional installation near the Santa Monica Pier. They handled the ocean air considerations and mounted my TV perfectly in our beach-adjacent condo.",
      starRating: 5
    },
    {
      customerName: "Rachel M.",
      reviewText: "Excellent service in the Main Street area. They mounted my TV over the fireplace with precision, working around the unique coastal architecture.",
      starRating: 5
    },
    {
      customerName: "Thomas B.",
      reviewText: "Great work near Montana Avenue. They were familiar with the local building codes and handled the cable concealment beautifully.",
      starRating: 5
    },
    {
      customerName: "Amanda K.",
      reviewText: "Outstanding service in the Ocean Park neighborhood. They knew how to work with the older construction and mounted my soundbar perfectly.",
      starRating: 5
    }
  ],
  "beverly-hills": [
    {
      customerName: "Steven L.",
      reviewText: "Professional installation near Rodeo Drive. They handled the luxury condo requirements perfectly and mounted my Samsung Frame TV with precision.",
      starRating: 5
    },
    {
      customerName: "Nicole R.",
      reviewText: "Excellent service in the Trousdale Estates area. They were familiar with the high-end building standards and mounted my TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Daniel M.",
      reviewText: "Great work near the Beverly Hills Hotel. They handled the cable concealment perfectly in our luxury home.",
      starRating: 5
    },
    {
      customerName: "Victoria S.",
      reviewText: "Outstanding service in the Beverly Hills Flats. They knew exactly how to work with the local building codes and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "west-hollywood": [
    {
      customerName: "Chris T.",
      reviewText: "Professional installation near the Sunset Strip. They handled the apartment building requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Jessica L.",
      reviewText: "Excellent service in the West Hollywood Design District. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "Ryan K.",
      reviewText: "Great work near Plummer Park. They handled the cable concealment perfectly in our condo.",
      starRating: 5
    },
    {
      customerName: "Michelle P.",
      reviewText: "Outstanding service in the West Hollywood Hills. They knew how to work with the hillside construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ],
  "hollywood": [
    {
      customerName: "Kevin M.",
      reviewText: "Professional installation near the Hollywood Walk of Fame. They handled the apartment building requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Ashley R.",
      reviewText: "Excellent service in the Hollywood Hills. They were familiar with the hillside construction challenges and mounted my TV over the fireplace beautifully.",
      starRating: 5
    },
    {
      customerName: "Brandon L.",
      reviewText: "Great work near the Hollywood Bowl. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Samantha K.",
      reviewText: "Outstanding service in the Hollywood Dell area. They knew how to work with the local building codes and mounted my soundbar.",
      starRating: 5
    }
  ],
  "dtla": [
    {
      customerName: "Marcus J.",
      reviewText: "Professional installation near the Arts District. They handled the loft building requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Elena R.",
      reviewText: "Excellent service in the Financial District. They were familiar with the high-rise building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Carlos M.",
      reviewText: "Great work near the Fashion District. They handled the cable concealment perfectly in our downtown loft.",
      starRating: 5
    },
    {
      customerName: "Isabella T.",
      reviewText: "Outstanding service in the Historic Core. They knew how to work with the historic building requirements and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "silver-lake": [
    {
      customerName: "Jordan L.",
      reviewText: "Professional installation near the Silver Lake Reservoir. They handled the hillside home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Taylor R.",
      reviewText: "Excellent service in the Sunset Junction area. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "Casey M.",
      reviewText: "Great work near the Silver Lake Meadow. They handled the cable concealment perfectly in our mid-century modern home.",
      starRating: 5
    },
    {
      customerName: "Morgan K.",
      reviewText: "Outstanding service in the Silver Lake Hills. They knew how to work with the hillside construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ],
  "echo-park": [
    {
      customerName: "Drew T.",
      reviewText: "Professional installation near Echo Park Lake. They handled the historic home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Riley L.",
      reviewText: "Excellent service in the Echo Park neighborhood. They were familiar with the local building codes and mounted my TV over the fireplace beautifully.",
      starRating: 5
    },
    {
      customerName: "Quinn M.",
      reviewText: "Great work near Dodger Stadium. They handled the cable concealment perfectly in our Echo Park home.",
      starRating: 5
    },
    {
      customerName: "Avery R.",
      reviewText: "Outstanding service in the Echo Park Hills. They knew how to work with the hillside construction and mounted my soundbar.",
      starRating: 5
    }
  ],
  "culver-city": [
    {
      customerName: "Blake M.",
      reviewText: "Professional installation near the Culver City Arts District. They handled the apartment building requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Sydney L.",
      reviewText: "Excellent service near the Culver City Studios. They were familiar with the local building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Parker R.",
      reviewText: "Great work near the Culver City Downtown. They handled the cable concealment perfectly in our condo.",
      starRating: 5
    },
    {
      customerName: "Rowan K.",
      reviewText: "Outstanding service in the Culver City Hills. They knew how to work with the hillside construction and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "venice": [
    {
      customerName: "Skyler T.",
      reviewText: "Professional installation near the Venice Beach Boardwalk. They handled the beach-adjacent home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "River L.",
      reviewText: "Excellent service in the Venice Canals area. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "Ocean M.",
      reviewText: "Great work near Abbot Kinney Boulevard. They handled the cable concealment perfectly in our Venice home.",
      starRating: 5
    },
    {
      customerName: "Wave R.",
      reviewText: "Outstanding service in the Venice Beach area. They knew how to work with the coastal construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ],
  "marina-del-rey": [
    {
      customerName: "Marina L.",
      reviewText: "Professional installation near the Marina del Rey Harbor. They handled the waterfront condo requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Harbor M.",
      reviewText: "Excellent service near Burton Chace Park. They were familiar with the local building codes and mounted my TV over the fireplace beautifully.",
      starRating: 5
    },
    {
      customerName: "Dock R.",
      reviewText: "Great work near the Marina del Rey Marinas. They handled the cable concealment perfectly in our waterfront home.",
      starRating: 5
    },
    {
      customerName: "Sail K.",
      reviewText: "Outstanding service in the Marina del Rey area. They knew how to work with the coastal construction and mounted my soundbar.",
      starRating: 5
    }
  ],
  "manhattan-beach": [
    {
      customerName: "Beach T.",
      reviewText: "Professional installation near the Manhattan Beach Pier. They handled the beach-adjacent home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Surf L.",
      reviewText: "Excellent service near the Manhattan Beach Downtown. They were familiar with the local building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Coast M.",
      reviewText: "Great work near the Manhattan Beach Strand. They handled the cable concealment perfectly in our beach home.",
      starRating: 5
    },
    {
      customerName: "Wave R.",
      reviewText: "Outstanding service in the Manhattan Beach area. They knew how to work with the coastal construction and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "el-segundo": [
    {
      customerName: "El Segundo L.",
      reviewText: "Professional installation near the El Segundo Beach. They handled the beach-adjacent home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Segundo M.",
      reviewText: "Excellent service near the El Segundo Downtown. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "El Segundo R.",
      reviewText: "Great work near the El Segundo Recreation Park. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Segundo K.",
      reviewText: "Outstanding service in the El Segundo area. They knew how to work with the coastal construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ],
  "ingelwood": [
    {
      customerName: "Inglewood L.",
      reviewText: "Professional installation near the Inglewood Forum. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Inglewood M.",
      reviewText: "Excellent service near the Inglewood Downtown. They were familiar with the local building codes and mounted my TV over the fireplace beautifully.",
      starRating: 5
    },
    {
      customerName: "Inglewood R.",
      reviewText: "Great work near the Inglewood Park Cemetery. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Inglewood K.",
      reviewText: "Outstanding service in the Inglewood area. They knew how to work with the local construction and mounted my soundbar.",
      starRating: 5
    }
  ],
  "hawthorne": [
    {
      customerName: "Hawthorne L.",
      reviewText: "Professional installation near the Hawthorne Municipal Airport. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Hawthorne M.",
      reviewText: "Excellent service near the Hawthorne Downtown. They were familiar with the local building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Hawthorne R.",
      reviewText: "Great work near the Hawthorne Memorial Park. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Hawthorne K.",
      reviewText: "Outstanding service in the Hawthorne area. They knew how to work with the local construction and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "ucla": [
    {
      customerName: "Bruin L.",
      reviewText: "Professional installation near the UCLA campus. They handled the student housing requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "UCLA M.",
      reviewText: "Excellent service near the UCLA Medical Center. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "Bruin R.",
      reviewText: "Great work near the UCLA Athletics facilities. They handled the cable concealment perfectly in our campus-area home.",
      starRating: 5
    },
    {
      customerName: "UCLA K.",
      reviewText: "Outstanding service in the UCLA area. They knew how to work with the campus construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ],
  "usc": [
    {
      customerName: "Trojan L.",
      reviewText: "Professional installation near the USC campus. They handled the student housing requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "USC M.",
      reviewText: "Excellent service near the USC Medical Center. They were familiar with the local building codes and mounted my TV over the fireplace beautifully.",
      starRating: 5
    },
    {
      customerName: "Trojan R.",
      reviewText: "Great work near the USC Athletics facilities. They handled the cable concealment perfectly in our campus-area home.",
      starRating: 5
    },
    {
      customerName: "USC K.",
      reviewText: "Outstanding service in the USC area. They knew how to work with the campus construction and mounted my soundbar.",
      starRating: 5
    }
  ],
  "westwood": [
    {
      customerName: "Westwood L.",
      reviewText: "Professional installation near the Westwood Village. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Westwood M.",
      reviewText: "Excellent service near the Westwood Cemetery. They were familiar with the local building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Westwood R.",
      reviewText: "Great work near the Westwood Recreation Center. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Westwood K.",
      reviewText: "Outstanding service in the Westwood area. They knew how to work with the local construction and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "burbank": [
    {
      customerName: "Burbank L.",
      reviewText: "Professional installation near the Burbank Studios. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Burbank M.",
      reviewText: "Excellent service near the Burbank Downtown. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "Burbank R.",
      reviewText: "Great work near the Burbank Town Center. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Burbank K.",
      reviewText: "Outstanding service in the Burbank area. They knew how to work with the local construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ],
  "studio-city": [
    {
      customerName: "Studio L.",
      reviewText: "Professional installation near the Studio City area. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Studio M.",
      reviewText: "Excellent service near the Studio City Downtown. They were familiar with the local building codes and mounted my TV over the fireplace beautifully.",
      starRating: 5
    },
    {
      customerName: "Studio R.",
      reviewText: "Great work near the Studio City Recreation Center. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Studio K.",
      reviewText: "Outstanding service in the Studio City area. They knew how to work with the local construction and mounted my soundbar.",
      starRating: 5
    }
  ],
  "sherman-oaks": [
    {
      customerName: "Sherman L.",
      reviewText: "Professional installation near the Sherman Oaks Galleria. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Sherman M.",
      reviewText: "Excellent service near the Sherman Oaks Downtown. They were familiar with the local building codes and mounted my Samsung Frame TV beautifully.",
      starRating: 5
    },
    {
      customerName: "Sherman R.",
      reviewText: "Great work near the Sherman Oaks Recreation Center. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Sherman K.",
      reviewText: "Outstanding service in the Sherman Oaks area. They knew how to work with the local construction and mounted my TV over the fireplace.",
      starRating: 5
    }
  ],
  "brentwood": [
    {
      customerName: "Brentwood L.",
      reviewText: "Professional installation near the Brentwood Country Club. They handled the local home requirements perfectly and mounted my TV with precision.",
      starRating: 5
    },
    {
      customerName: "Brentwood M.",
      reviewText: "Excellent service near the Brentwood Downtown. They were familiar with the local building codes and mounted my soundbar beautifully.",
      starRating: 5
    },
    {
      customerName: "Brentwood R.",
      reviewText: "Great work near the Brentwood Country Mart. They handled the cable concealment perfectly in our home.",
      starRating: 5
    },
    {
      customerName: "Brentwood K.",
      reviewText: "Outstanding service in the Brentwood area. They knew how to work with the local construction and mounted my Samsung Frame TV.",
      starRating: 5
    }
  ]
};

export function getCityReviews(citySlug: string): CustomerReview[] {
  return CITY_REVIEWS[citySlug] || CITY_REVIEWS["glendale"]; // fallback to Glendale
}
