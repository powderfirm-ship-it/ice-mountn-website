import type { } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const BASE = "/images/gallery/";

// 1) Build from CSV: filename -> preferred alt
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

// 2) convenience maker
function img(name: string, altOverride?: string, width = 1200, height = 800): GalleryImage {
  const baseAlt = ALT_MAP[name] || name.replace(/[-_]/g, " ").replace(/\.\w+$/, "");
  return { src: `${BASE}${name}`, alt: altOverride || baseAlt, width, height };
}

// 3) Service-specific picks (no more than 6–9 per page)
export function getServiceImages(serviceSlug: string): GalleryImage[] {
  switch (serviceSlug) {
    case "standard-tv-mount":
      return [
        img("tv-wall-installation-los-angeles-01.webp"),
        img("tv-mounting-los-angeles-01.webp"),
        img("tv-mounting-service-los-angeles-01.webp"),
        img("tv-mounting-los-angeles-02.webp"),
        img("tv-wall-installation-los-angeles-02.webp"),
        img("tv-mounting-los-angeles-03.webp"),
      ];
    case "over-fireplace-mount":
      return [
        img("tv-wall-installation-los-angeles-03.webp"),
        img("tv-mounting-los-angeles-04.webp"),
        img("tv-mounting-los-angeles-05.webp"),
        img("tv-wall-installation-los-angeles-04.webp"),
        img("tv-mounting-los-angeles-06.webp"),
      ];
    case "cable-concealment":
      return [
        img("tv-wall-installation-los-angeles-05.webp"),
        img("tv-mounting-los-angeles-07.webp"),
        img("tv-mounting-los-angeles-08.webp"),
        img("tv-wall-installation-los-angeles-06.webp"),
        img("tv-mounting-los-angeles-09.webp"),
      ];
    case "soundbar-mounting":
      return [
        img("tv-mounting-los-angeles-10.webp"),
        img("tv-mounting-los-angeles-11.webp"),
        img("tv-mounting-los-angeles-12.webp"),
        img("tv-mounting-los-angeles-13.webp"),
      ];
    case "samsung-frame":
      return [
        img("samsung-frame-installation-los-angeles-01.webp"),
        img("samsung-frame-installation-los-angeles-02.webp"),
        img("samsung-frame-installation-los-angeles-03.webp"),
        img("samsung-frame-installation-los-angeles-04.webp"),
        img("samsung-frame-installation-los-angeles-05.webp"),
      ];
    case "same-day-tv-mounting":
      return [
        img("tv-mounting-los-angeles-14.webp"),
        img("tv-mounting-los-angeles-15.webp"),
        img("tv-mounting-service-los-angeles-02.webp"),
      ];
    default:
      return [];
  }
}

// 4) Location page picks (2–4 images, alt **must** include cityName)
export function getLocationImages(citySlug: string, cityName: string): GalleryImage[] {
  const baseSet = [
    img("tv-mounting-los-angeles-16.webp", `Professional TV Mounting in ${cityName}`),
    img("tv-wall-installation-los-angeles-01.webp", `TV Wall Installation — ${cityName}`),
    img("samsung-frame-installation-los-angeles-01.webp", `Samsung Frame Installation in ${cityName}`),
  ];

  // Light tailoring for a few known cities to avoid repetition; others use baseSet
  switch (citySlug) {
    case "santa-monica":
      return [
        img("tv-mounting-los-angeles-17.webp", `TV Mounting — Santa Monica, CA`),
        img("tv-wall-installation-los-angeles-02.webp", `Wall‑Mounted TV — Santa Monica`),
        img("samsung-frame-installation-los-angeles-02.webp", `Samsung Frame Installation — Santa Monica`),
      ];
    case "westwood":
      return [
        img("tv-mounting-los-angeles-18.webp", `TV Mounting — Westwood, Los Angeles`),
        img("tv-wall-installation-los-angeles-03.webp", `TV Wall Install — Westwood`),
        img("samsung-frame-installation-los-angeles-03.webp", `Samsung Frame — Westwood`),
      ];
    case "beverly-hills":
      return [
        img("tv-mounting-los-angeles-19.webp", `TV Mounting — Beverly Hills, CA`),
        img("tv-wall-installation-los-angeles-04.webp", `TV Wall Installation — Beverly Hills`),
        img("samsung-frame-installation-los-angeles-04.webp", `Samsung Frame Installation — Beverly Hills`),
      ];
    case "hollywood":
      return [
        img("tv-mounting-los-angeles-20.webp", `TV Mounting — Hollywood, Los Angeles`),
        img("tv-wall-installation-los-angeles-05.webp", `TV Wall Installation — Hollywood`),
        img("samsung-frame-installation-los-angeles-05.webp", `Samsung Frame Installation — Hollywood`),
      ];
    case "venice":
      return [
        img("tv-mounting-los-angeles-21.webp", `TV Mounting — Venice, CA`),
        img("tv-mounting-service-los-angeles-01.webp", `TV Mounting Service — Venice`),
        img("tv-wall-installation-los-angeles-06.webp", `TV Wall Installation — Venice`),
      ];
    // Add a couple more special cases if desired…
    default:
      return baseSet;
  }
}
