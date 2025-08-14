#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const NON_CANONICAL = [
  "https://ice-mountn-website.vercel.app/services/standard-tv-mount",
  "https://ice-mountn-website.vercel.app/locations/beverly-hills",
  "https://ice-mountn-website.vercel.app/customer-reviews",
  "https://ice-mountn-website.vercel.app/services/samsung-frame",
  "https://ice-mountn-website.vercel.app/locations/hawthorne",
  "https://ice-mountn-website.vercel.app/locations/toluca-lake",
  "https://ice-mountn-website.vercel.app/locations/gardena",
  "https://ice-mountn-website.vercel.app/discounts",
  "https://ice-mountn-website.vercel.app/services/soundbar-mounting",
  "https://ice-mountn-website.vercel.app/locations/boyle-heights",
  "https://ice-mountn-website.vercel.app/locations/brentwood",
  "https://ice-mountn-website.vercel.app/locations/echo-park",
  "https://ice-mountn-website.vercel.app/trust-and-support",
  "https://ice-mountn-website.vercel.app/locations/westwood",
  "https://ice-mountn-website.vercel.app/locations/west-los-angeles",
  "https://ice-mountn-website.vercel.app/locations/redondo-beach",
  "https://ice-mountn-website.vercel.app/locations/el-segundo",
  "https://ice-mountn-website.vercel.app/locations/beverly-glen",
  "https://ice-mountn-website.vercel.app/contact",
  "https://ice-mountn-website.vercel.app/locations/east-hollywood",
  "https://ice-mountn-website.vercel.app/locations/pasadena",
  "https://ice-mountn-website.vercel.app/locations/los-feliz",
  "https://ice-mountn-website.vercel.app/locations/encino",
  "https://ice-mountn-website.vercel.app/locations/silver-lake",
  "https://ice-mountn-website.vercel.app/locations/culver-city",
  "https://ice-mountn-website.vercel.app/same-day-tv-mounting",
  "https://ice-mountn-website.vercel.app/services/over-fireplace-mount",
  "https://ice-mountn-website.vercel.app/locations/hollywood",
  "https://ice-mountn-website.vercel.app/locations/burbank",
  "https://ice-mountn-website.vercel.app/locations/marina-del-rey",
  "https://ice-mountn-website.vercel.app/locations/beverly-grove",
  "https://ice-mountn-website.vercel.app/locations/dtla",
  "https://ice-mountn-website.vercel.app/locations/west-hollywood",
  "https://ice-mountn-website.vercel.app/locations/santa-monica",
  "https://ice-mountn-website.vercel.app/locations/manhattan-beach",
  "https://ice-mountn-website.vercel.app/",
  "https://ice-mountn-website.vercel.app/locations/inglewood",
  "https://ice-mountn-website.vercel.app/locations/ucla",
  "https://ice-mountn-website.vercel.app/locations/glendale",
  "https://ice-mountn-website.vercel.app/locations/usc",
  "https://ice-mountn-website.vercel.app/locations/chinatown",
  "https://ice-mountn-website.vercel.app/services",
  "https://ice-mountn-website.vercel.app/locations/south-pasadena",
  "https://ice-mountn-website.vercel.app/locations",
  "https://ice-mountn-website.vercel.app/locations/eagle-rock",
  "https://ice-mountn-website.vercel.app/locations/pacific-palisades",
  "https://ice-mountn-website.vercel.app/locations/playa-del-rey",
  "https://ice-mountn-website.vercel.app/locations/bel-air",
  "https://ice-mountn-website.vercel.app/locations/venice",
  "https://ice-mountn-website.vercel.app/locations/north-hollywood",
  "https://ice-mountn-website.vercel.app/privacy",
  "https://ice-mountn-website.vercel.app/services/cable-concealment",
  "https://ice-mountn-website.vercel.app/locations/studio-city",
  "https://ice-mountn-website.vercel.app/locations/century-city",
  "https://ice-mountn-website.vercel.app/locations/van-nuys",
  "https://ice-mountn-website.vercel.app/locations/sherman-oaks",
  "https://ice-mountn-website.vercel.app/locations/hermosa-beach"
];

const CANONICAL = [
  "https://www.icemountn.com/services/standard-tv-mount",
  "https://www.icemountn.com/locations/beverly-hills",
  "https://www.icemountn.com/customer-reviews",
  "https://www.icemountn.com/services/samsung-frame",
  "https://www.icemountn.com/locations/hawthorne",
  "https://www.icemountn.com/locations/toluca-lake",
  "https://www.icemountn.com/locations/gardena",
  "https://www.icemountn.com/discounts",
  "https://www.icemountn.com/services/soundbar-mounting",
  "https://www.icemountn.com/locations/boyle-heights",
  "https://www.icemountn.com/locations/brentwood",
  "https://www.icemountn.com/locations/echo-park",
  "https://www.icemountn.com/trust-and-support",
  "https://www.icemountn.com/locations/westwood",
  "https://www.icemountn.com/locations/west-los-angeles",
  "https://www.icemountn.com/locations/redondo-beach",
  "https://www.icemountn.com/locations/el-segundo",
  "https://www.icemountn.com/locations/beverly-glen",
  "https://www.icemountn.com/contact",
  "https://www.icemountn.com/locations/east-hollywood",
  "https://www.icemountn.com/locations/pasadena",
  "https://www.icemountn.com/locations/los-feliz",
  "https://www.icemountn.com/locations/encino",
  "https://www.icemountn.com/locations/silver-lake",
  "https://www.icemountn.com/locations/culver-city",
  "https://www.icemountn.com/same-day-tv-mounting",
  "https://www.icemountn.com/services/over-fireplace-mount",
  "https://www.icemountn.com/locations/hollywood",
  "https://www.icemountn.com/locations/burbank",
  "https://www.icemountn.com/locations/marina-del-rey",
  "https://www.icemountn.com/locations/beverly-grove",
  "https://www.icemountn.com/locations/dtla",
  "https://www.icemountn.com/locations/west-hollywood",
  "https://www.icemountn.com/locations/santa-monica",
  "https://www.icemountn.com/locations/manhattan-beach",
  "https://www.icemountn.com/",
  "https://www.icemountn.com/locations/inglewood",
  "https://www.icemountn.com/locations/ucla",
  "https://www.icemountn.com/locations/glendale",
  "https://www.icemountn.com/locations/usc",
  "https://www.icemountn.com/locations/chinatown",
  "https://www.icemountn.com/services",
  "https://www.icemountn.com/locations/south-pasadena",
  "https://www.icemountn.com/locations",
  "https://www.icemountn.com/locations/eagle-rock",
  "https://www.icemountn.com/locations/pacific-palisades",
  "https://www.icemountn.com/locations/playa-del-rey",
  "https://www.icemountn.com/locations/bel-air",
  "https://www.icemountn.com/locations/venice",
  "https://www.icemountn.com/locations/north-hollywood",
  "https://www.icemountn.com/privacy",
  "https://www.icemountn.com/services/cable-concealment",
  "https://www.icemountn.com/locations/studio-city",
  "https://www.icemountn.com/locations/century-city",
  "https://www.icemountn.com/locations/van-nuys",
  "https://www.icemountn.com/locations/sherman-oaks",
  "https://www.icemountn.com/locations/hermosa-beach"
];

if (NON_CANONICAL.length !== CANONICAL.length) {
  console.error('NON_CANONICAL and CANONICAL arrays must be the same length.');
  process.exit(1);
}

const map = new Map();
for (let i = 0; i < NON_CANONICAL.length; i++) {
  const from = NON_CANONICAL[i];
  const to = CANONICAL[i];
  if (!from || !to) {
    console.error(`Empty mapping at index ${i}`);
    process.exit(1);
  }
  map.set(from.trim(), to.trim());
}

const normalizeHost = (u) =>
  u.replace('http://', 'https://')
   .replace('://icemountn.com', '://www.icemountn.com');

(async () => {
  try {
    const sitemapPath = resolve(ROOT, 'public', 'sitemap.xml');
    let xml = await readFile(sitemapPath, 'utf8');

    // Global host normalization safety net
    xml = xml.replaceAll('http://', 'https://')
             .replaceAll('://icemountn.com', '://www.icemountn.com');

    // Surgical 57 replacements
    for (const [from, to] of map.entries()) {
      const safeFrom = normalizeHost(from);
      const safeTo = normalizeHost(to);
      xml = xml.split(safeFrom).join(safeTo);
    }

    await writeFile(sitemapPath, xml, 'utf8');
    console.log('✅ sitemap.xml canonicals fixed.');
  } catch (error) {
    console.error('❌ Error fixing sitemap:', error.message);
    process.exit(1);
  }
})();
