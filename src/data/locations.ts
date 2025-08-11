export interface LocationData {
  slug: string;
  name: string;
  neighborhoods?: string[];
  landmarks: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const locations: LocationData[] = [
  {
    slug: "santa-monica",
    name: "Santa Monica",
    neighborhoods: ["Third Street Promenade", "Santa Monica Pier", "Ocean Park"],
    landmarks: ["Santa Monica Pier", "Third Street Promenade", "Santa Monica Beach"],
    description: "Professional TV mounting services in Santa Monica, from beachside condos to downtown apartments. Renter-friendly solutions for all Santa Monica residences.",
    metaTitle: "TV Mounting Santa Monica | Renter-Friendly Same-Day Install",
    metaDescription: "Professional TV mounting in Santa Monica. Renter-friendly, same-day service available. Licensed technicians serving condos, apartments & homes near the pier."
  },
  {
    slug: "westwood",
    name: "Westwood",
    neighborhoods: ["Westwood Village", "Little Holmby", "Westwood Hills"],
    landmarks: ["UCLA campus", "Westwood Village", "Hammer Museum"],
    description: "Expert TV mounting in Westwood serving condos, apartments, and student housing. UCLA-area specialists with renter-friendly mounting solutions.",
    metaTitle: "TV Mounting Westwood | UCLA Area Renter-Friendly Service",
    metaDescription: "Professional TV mounting in Westwood near UCLA. Student-friendly, renter-safe installations for apartments, condos, and dorms. Same-day service available."
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    neighborhoods: ["Golden Triangle", "Trousdale Estates", "Flats"],
    landmarks: ["Rodeo Drive", "Beverly Hills Hotel", "Greystone Mansion"],
    description: "Luxury TV mounting services in Beverly Hills with white-glove installation and premium cable concealment for upscale residences.",
    metaTitle: "TV Mounting Beverly Hills | Premium Installation Service",
    metaDescription: "Luxury TV mounting in Beverly Hills. Premium installation for high-end homes, condos & apartments. Same-day service available near Rodeo Drive."
  },
  {
    slug: "west-hollywood",
    name: "West Hollywood",
    neighborhoods: ["Sunset Strip", "West Hollywood Design District", "Melrose District"],
    landmarks: ["Sunset Strip", "Melrose Avenue", "West Hollywood Park"],
    description: "Professional TV mounting in West Hollywood serving modern condos, lofts, and apartments. Renter-friendly solutions for WeHo residents.",
    metaTitle: "TV Mounting West Hollywood | Renter-Friendly WeHo Service",
    metaDescription: "TV mounting in West Hollywood (WeHo). Renter-friendly installations for condos, lofts & apartments near Sunset Strip. Same-day service available."
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    neighborhoods: ["Hollywood Hills", "East Hollywood", "Little Armenia"],
    landmarks: ["Hollywood Walk of Fame", "TCL Chinese Theatre", "Hollywood Bowl"],
    description: "TV mounting services throughout Hollywood, from historic apartments to modern condos. Renter-friendly solutions for all Hollywood neighborhoods.",
    metaTitle: "TV Mounting Hollywood | Same-Day Installation Service",
    metaDescription: "Professional TV mounting in Hollywood. Renter-friendly service for apartments, condos & homes near Walk of Fame. Same-day installation available."
  },
  {
    slug: "dtla",
    name: "Downtown LA",
    neighborhoods: ["Arts District", "Little Tokyo", "South Park"],
    landmarks: ["Walt Disney Concert Hall", "Crypto.com Arena", "Grand Central Market"],
    description: "Downtown LA TV mounting specialists serving high-rise condos, lofts, and apartments. Renter-friendly mounting for DTLA residents.",
    metaTitle: "TV Mounting Downtown LA | DTLA Renter-Friendly Service",
    metaDescription: "TV mounting in Downtown LA (DTLA). Renter-friendly installations for high-rise condos, lofts & apartments. Same-day service in Arts District & beyond."
  },
  {
    slug: "silver-lake",
    name: "Silver Lake",
    neighborhoods: ["Silver Lake Reservoir", "Los Feliz border", "Sunset Junction"],
    landmarks: ["Silver Lake Reservoir", "Sunset Junction", "Griffith Observatory"],
    description: "TV mounting in trendy Silver Lake serving creative professionals in condos, apartments, and vintage homes. Renter-friendly solutions available.",
    metaTitle: "TV Mounting Silver Lake | Renter-Friendly Installation",
    metaDescription: "Professional TV mounting in Silver Lake. Renter-friendly service for condos, apartments & vintage homes near the reservoir. Same-day available."
  },
  {
    slug: "echo-park",
    name: "Echo Park",
    neighborhoods: ["Echo Park Lake", "Historic Filipinotown", "Elysian Valley"],
    landmarks: ["Echo Park Lake", "Dodger Stadium", "Elysian Park"],
    description: "TV mounting services in Echo Park for apartments, condos, and historic homes. Renter-friendly mounting solutions near the lake.",
    metaTitle: "TV Mounting Echo Park | Lake Area Installation Service",
    metaDescription: "TV mounting in Echo Park near the lake. Renter-friendly installations for apartments, condos & homes. Same-day service near Dodger Stadium."
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    neighborhoods: ["Old Pasadena", "South Lake", "Caltech area"],
    landmarks: ["Rose Bowl", "Pasadena City Hall", "Caltech campus"],
    description: "Professional TV mounting in Pasadena serving historic homes, modern condos, and student housing. Renter-friendly solutions available.",
    metaTitle: "TV Mounting Pasadena | Rose Bowl Area Installation",
    metaDescription: "TV mounting in Pasadena near Rose Bowl & Caltech. Renter-friendly service for homes, condos & apartments. Same-day installation available."
  },
  {
    slug: "glendale",
    name: "Glendale",
    neighborhoods: ["Downtown Glendale", "Rossmoyne", "Sparr Heights"],
    landmarks: ["Americana at Brand", "Griffith Park", "Forest Lawn Memorial Park"],
    description: "TV mounting services throughout Glendale serving condos, apartments, and family homes. Renter-friendly mounting solutions available.",
    metaTitle: "TV Mounting Glendale | Americana Area Installation",
    metaDescription: "Professional TV mounting in Glendale near Americana at Brand. Renter-friendly service for condos, apartments & homes. Same-day available."
  },
  {
    slug: "burbank",
    name: "Burbank",
    neighborhoods: ["Media District", "Magnolia Park", "Rancho"],
    landmarks: ["Warner Bros. Studios", "Disney Studios", "Bob Hope Airport"],
    description: "TV mounting in Burbank's media district and residential areas. Renter-friendly solutions for apartments, condos, and studio housing.",
    metaTitle: "TV Mounting Burbank | Media District Installation",
    metaDescription: "TV mounting in Burbank near Warner Bros & Disney Studios. Renter-friendly service for apartments, condos & media housing. Same-day available."
  },
  {
    slug: "studio-city",
    name: "Studio City",
    neighborhoods: ["Ventura Boulevard", "Colfax Meadows", "Carpenter Community"],
    landmarks: ["Universal Studios", "Ventura Boulevard", "Fryman Canyon"],
    description: "Studio City TV mounting specialists serving condos, apartments, and valley homes. Renter-friendly mounting near Universal Studios.",
    metaTitle: "TV Mounting Studio City | Universal Area Installation",
    metaDescription: "TV mounting in Studio City near Universal Studios. Renter-friendly service for valley condos, apartments & homes on Ventura Blvd. Same-day available."
  },
  {
    slug: "sherman-oaks",
    name: "Sherman Oaks",
    neighborhoods: ["Ventura Boulevard", "Dickens Street", "Mulholland Drive"],
    landmarks: ["Sherman Oaks Galleria", "Sepulveda Basin", "Mulholland Drive"],
    description: "Professional TV mounting in Sherman Oaks serving valley condos, apartments, and hillside homes. Renter-friendly solutions available.",
    metaTitle: "TV Mounting Sherman Oaks | Valley Installation Service",
    metaDescription: "TV mounting in Sherman Oaks on Ventura Blvd area. Renter-friendly service for valley condos, apartments & hillside homes. Same-day available."
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    neighborhoods: ["Brentwood Country Club", "Mandeville Canyon", "Kenter Canyon"],
    landmarks: ["Getty Center", "UCLA campus", "Brentwood Country Club"],
    description: "Premium TV mounting services in Brentwood serving luxury condos, apartments, and estates. High-end installation near Getty Center.",
    metaTitle: "TV Mounting Brentwood | Getty Center Area Installation",
    metaDescription: "Luxury TV mounting in Brentwood near Getty Center & UCLA. Premium service for condos, apartments & estates. Same-day installation available."
  },
  {
    slug: "culver-city",
    name: "Culver City",
    neighborhoods: ["Downtown Culver City", "Blair Hills", "Sunkist Park"],
    landmarks: ["Sony Pictures Studios", "Culver City Studios", "Baldwin Hills"],
    description: "TV mounting in Culver City's tech and media hub serving modern condos, apartments, and studio housing. Renter-friendly solutions.",
    metaTitle: "TV Mounting Culver City | Sony Studios Area Service",
    metaDescription: "TV mounting in Culver City near Sony Pictures Studios. Renter-friendly service for tech & media housing, condos & apartments. Same-day available."
  },
  {
    slug: "venice",
    name: "Venice",
    neighborhoods: ["Venice Beach", "Abbot Kinney", "Marina Peninsula"],
    landmarks: ["Venice Beach Boardwalk", "Abbot Kinney Boulevard", "Venice Canals"],
    description: "Venice TV mounting specialists serving beachside condos, lofts, and apartments. Renter-friendly mounting near the beach and boardwalk.",
    metaTitle: "TV Mounting Venice | Beach Area Installation Service",
    metaDescription: "TV mounting in Venice near the beach & Abbot Kinney. Renter-friendly service for beachside condos, lofts & apartments. Same-day available."
  },
  {
    slug: "marina-del-rey",
    name: "Marina del Rey",
    neighborhoods: ["Marina Peninsula", "Playa del Rey", "Westchester"],
    landmarks: ["Marina del Rey Harbor", "Loyola Marymount University", "LAX Airport"],
    description: "Marina del Rey TV mounting for high-rise condos and waterfront apartments. Renter-friendly solutions with harbor views.",
    metaTitle: "TV Mounting Marina del Rey | Waterfront Installation",
    metaDescription: "TV mounting in Marina del Rey harbor area. Renter-friendly service for high-rise condos & waterfront apartments. Same-day service available."
  },
  {
    slug: "manhattan-beach",
    name: "Manhattan Beach",
    neighborhoods: ["The Strand", "Sand Section", "Hill Section"],
    landmarks: ["Manhattan Beach Pier", "The Strand", "Manhattan Beach Boulevard"],
    description: "Manhattan Beach TV mounting for beachside homes, condos, and luxury apartments. Premium installation with ocean views.",
    metaTitle: "TV Mounting Manhattan Beach | Beachside Installation",
    metaDescription: "TV mounting in Manhattan Beach near the pier & Strand. Premium service for beachside homes, condos & luxury apartments. Same-day available."
  },
  {
    slug: "el-segundo",
    name: "El Segundo",
    neighborhoods: ["Downtown El Segundo", "LAX area", "Smoky Hollow"],
    landmarks: ["LAX Airport", "El Segundo Boulevard", "Smoky Hollow"],
    description: "El Segundo TV mounting near LAX serving apartments, condos, and corporate housing. Renter-friendly solutions for business travelers.",
    metaTitle: "TV Mounting El Segundo | LAX Area Installation",
    metaDescription: "TV mounting in El Segundo near LAX airport. Renter-friendly service for apartments, condos & corporate housing. Same-day installation available."
  },
  {
    slug: "inglewood",
    name: "Inglewood",
    neighborhoods: ["Downtown Inglewood", "Morningside Park", "Westchester"],
    landmarks: ["SoFi Stadium", "The Forum", "LAX Airport"],
    description: "Inglewood TV mounting specialists serving the SoFi Stadium area. Renter-friendly solutions for apartments, condos, and family homes.",
    metaTitle: "TV Mounting Inglewood | SoFi Stadium Area Service",
    metaDescription: "TV mounting in Inglewood near SoFi Stadium & The Forum. Renter-friendly service for apartments, condos & homes. Same-day installation available."
  },
  {
    slug: "hawthorne",
    name: "Hawthorne",
    neighborhoods: ["South Bay", "Del Aire", "West Athens"],
    landmarks: ["SpaceX headquarters", "Hawthorne Boulevard", "Del Aire Park"],
    description: "Hawthorne TV mounting serving South Bay apartments, condos, and family homes. Renter-friendly mounting solutions available.",
    metaTitle: "TV Mounting Hawthorne | South Bay Installation",
    metaDescription: "TV mounting in Hawthorne & South Bay area. Renter-friendly service for apartments, condos & family homes. Same-day installation available."
  }
];

export const campusLocations = [
  {
    slug: "ucla",
    name: "UCLA",
    fullName: "University of California, Los Angeles",
    neighborhoods: ["Westwood Village", "UCLA campus", "Graduate housing"],
    landmarks: ["UCLA campus", "Westwood Village", "Hammer Museum"],
    description: "UCLA TV mounting specialists serving student apartments, dorms, and graduate housing. RA-approved, renter-friendly mounting solutions for UCLA students.",
    metaTitle: "TV Mounting UCLA | Student & Dorm Installation Service",
    metaDescription: "TV mounting for UCLA students in dorms, apartments & graduate housing. RA-approved, renter-friendly installations near campus. Same-day available."
  },
  {
    slug: "usc",
    name: "USC",
    fullName: "University of Southern California",
    neighborhoods: ["University Park", "USC campus", "Student housing"],
    landmarks: ["USC campus", "Los Angeles Memorial Coliseum", "Exposition Park"],
    description: "USC TV mounting experts serving student apartments, dorms, and off-campus housing. Landlord-approved, renter-friendly solutions for USC students.",
    metaTitle: "TV Mounting USC | Student Housing Installation Service",
    metaDescription: "TV mounting for USC students in dorms, apartments & off-campus housing. Landlord-approved, renter-friendly installations. Same-day service available."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(location => location.slug === slug);
}

export function getCampusLocationBySlug(slug: string) {
  return campusLocations.find(campus => campus.slug === slug);
}
