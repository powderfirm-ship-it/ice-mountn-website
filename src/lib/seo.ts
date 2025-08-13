export const buildTitle = (base: string, city?: string) =>
  city ? `${base} in ${city} | Ice Mount'n` : `${base} | Ice Mount'n`;

export const buildDescription = (what: string, city?: string) =>
  city
    ? `${what} in ${city} with licensed, renter-friendly installers. Same-day service, transparent pricing, and damage-free mounting. Call (323) 863-8146.`
    : `${what} with licensed, renter-friendly installers. Same-day service, transparent pricing, and damage-free mounting. Call (323) 863-8146.`;

export const canonical = (path: string) =>
  `${process.env.NEXT_PUBLIC_SITE_URL || "https://ice-mountn-website.vercel.app"}${path}`;
