type Item = { src: string; alt: string };

// Hardcoded image mappings based on the CSV data
const ALT_MAP: Record<string, string> = {
  "samsung-frame-installation-los-angeles-01.webp": "Samsung Frame TV installation in Los Angeles home, wall-mounted for a sleek modern look",
  "samsung-frame-installation-los-angeles-02.webp": "Samsung Frame TV installation in Los Angeles home, wall-mounted for a sleek modern look",
  "samsung-frame-installation-los-angeles-03.webp": "Samsung Frame TV installation in Los Angeles home, wall-mounted for a sleek modern look",
  "samsung-frame-installation-los-angeles-04.webp": "Samsung Frame TV installation in Los Angeles home, wall-mounted for a sleek modern look",
  "samsung-frame-installation-los-angeles-05.webp": "Samsung Frame TV installation in Los Angeles home, wall-mounted for a sleek modern look",
  "tv-mounting-los-angeles-01.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-02.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-03.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-04.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-05.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-06.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-07.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-08.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-09.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-10.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-11.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-12.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-13.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-14.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-15.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-16.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-17.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-18.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-19.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-20.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-los-angeles-21.webp": "Professional TV mounting in Los Angeles with secure wall installation",
  "tv-mounting-service-los-angeles-01.webp": "Expert TV mounting service in Los Angeles for home entertainment setups",
  "tv-mounting-service-los-angeles-02.webp": "Expert TV mounting service in Los Angeles for home entertainment setups",
  "tv-wall-installation-los-angeles-01.webp": "Professional TV wall installation in Los Angeles living room with concealed wiring",
  "tv-wall-installation-los-angeles-02.webp": "Professional TV wall installation in Los Angeles living room with concealed wiring",
  "tv-wall-installation-los-angeles-03.webp": "Professional TV wall installation in Los Angeles living room with concealed wiring",
  "tv-wall-installation-los-angeles-04.webp": "Professional TV wall installation in Los Angeles living room with concealed wiring",
  "tv-wall-installation-los-angeles-06.webp": "Professional TV wall installation in Los Angeles living room with concealed wiring",
  "tv-wall-installation-los-angeles-05.webp": "Professional TV wall installation in Los Angeles living room with concealed wiring",
};

/** Fallback alt text generator */
function humanize(name: string) {
  return name
    .replace(/\.(webp|jpe?g|png)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b(tv)\b/gi, "TV")
    .replace(/\bla\b/gi, "Los Angeles")
    .replace(/\busa\b/gi, "USA")
    .replace(/\b\w/g, s => s.toUpperCase());
}

function resolveAlt(filename: string, context?: string) {
  const fromMap = ALT_MAP[filename];
  if (fromMap) return fromMap;
  const base = humanize(filename);
  return context ? `${base} — ${context}` : base;
}

// Available images organized by category
const AVAILABLE_IMAGES = {
  standard: [
    "tv-wall-installation-los-angeles-01.webp",
    "tv-mounting-los-angeles-01.webp",
    "tv-mounting-service-los-angeles-01.webp",
    "tv-mounting-los-angeles-02.webp",
    "tv-wall-installation-los-angeles-02.webp",
    "tv-mounting-los-angeles-03.webp",
  ],
  fireplace: [
    "tv-wall-installation-los-angeles-03.webp",
    "tv-mounting-los-angeles-04.webp",
    "tv-mounting-los-angeles-05.webp",
    "tv-wall-installation-los-angeles-04.webp",
    "tv-mounting-los-angeles-06.webp",
  ],
  frame: [
    "samsung-frame-installation-los-angeles-01.webp",
    "samsung-frame-installation-los-angeles-02.webp",
    "samsung-frame-installation-los-angeles-03.webp",
    "samsung-frame-installation-los-angeles-04.webp",
    "samsung-frame-installation-los-angeles-05.webp",
  ],
  generic: [
    "tv-mounting-los-angeles-07.webp",
    "tv-mounting-los-angeles-08.webp",
    "tv-mounting-los-angeles-09.webp",
    "tv-mounting-los-angeles-10.webp",
    "tv-mounting-los-angeles-11.webp",
    "tv-mounting-los-angeles-12.webp",
    "tv-mounting-los-angeles-13.webp",
    "tv-mounting-los-angeles-14.webp",
    "tv-mounting-los-angeles-15.webp",
  ],
  location: [
    "tv-mounting-los-angeles-16.webp",
    "tv-mounting-los-angeles-17.webp",
    "tv-mounting-los-angeles-18.webp",
    "tv-mounting-los-angeles-19.webp",
    "tv-mounting-los-angeles-20.webp",
    "tv-mounting-los-angeles-21.webp",
  ],
};

export function getGallery(page: "standard"|"fireplace"|"frame"|"generic", opts?: {limit?: number, context?: string}): Item[] {
  const limit = opts?.limit ?? 6;
  const context = opts?.context;

  const picks = AVAILABLE_IMAGES[page] || AVAILABLE_IMAGES.generic;
  return picks.slice(0, limit).map(filename => ({
    src: `/images/gallery/${filename}`,
    alt: resolveAlt(filename, context),
  }));
}

export function getLocationGallery(city: string, limit=3): Item[] {
  const picks = AVAILABLE_IMAGES.location.slice(0, limit);
  return picks.map(f => ({
    src: `/images/gallery/${f}`,
    alt: resolveAlt(f, `${city} TV Mounting`),
  }));
}
