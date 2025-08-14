import { NextResponse } from 'next/server'
import { ALL_CITIES } from '@/data/cities'
import { toCanonical } from '@/lib/canonical'

export async function GET() {
  
  // Hard-include the 27 flagged URLs that SEMrush identified
  const flaggedUrls = [
    { path: '/locations/venice', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/burbank', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/beverly-hills', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/hollywood', priority: 0.7, changeFreq: 'monthly' },
    { path: '/same-day-tv-mounting', priority: 0.9, changeFreq: 'weekly' },
    { path: '/locations/culver-city', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/silver-lake', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/pasadena', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/sherman-oaks', priority: 0.7, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/locations/el-segundo', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/studio-city', priority: 0.7, changeFreq: 'monthly' },
    { path: '/services/cable-concealment', priority: 0.8, changeFreq: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFreq: 'monthly' },
    { path: '/locations', priority: 0.8, changeFreq: 'weekly' },
    { path: '/locations/westwood', priority: 0.7, changeFreq: 'monthly' },
    { path: '/trust-and-support', priority: 0.6, changeFreq: 'monthly' },
    { path: '/locations/marina-del-rey', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/brentwood', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/echo-park', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/glendale', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/hawthorne', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/inglewood', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/manhattan-beach', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/santa-monica', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/west-hollywood', priority: 0.7, changeFreq: 'monthly' },
    { path: '/locations/dtla', priority: 0.7, changeFreq: 'monthly' }
  ];
  
  // Static pages
  const staticPages = [
    { path: '/', priority: 1.0, changeFreq: 'weekly' },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/customer-reviews', priority: 0.7, changeFreq: 'monthly' },
    { path: '/faq', priority: 0.7, changeFreq: 'monthly' },
    { path: '/discounts', priority: 0.8, changeFreq: 'monthly' },
  ]

  // Service pages - only canonical paths, exclude legacy slugs
  const servicePages = [
    { path: '/services/standard-tv-mount', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/over-fireplace-mount', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/soundbar-mounting', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/samsung-frame', priority: 0.8, changeFreq: 'monthly' },
  ]

  // Location pages - only include valid locations from our registry
  const locationPages = Object.values(ALL_CITIES).map(city => ({
    path: `/locations/${city.slug}`,
    priority: 0.7,
    changeFreq: 'monthly'
  }))

  // Location + service combination pages - use the new canonical service slugs
  // Exclude same-day-tv-mounting since it's now a redirect
  const locationServicePages = Object.values(ALL_CITIES).flatMap(city => [
    { path: `/locations/${city.slug}/standard-tv-mount`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/over-fireplace-mount`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/cable-concealment`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/soundbar-mounting`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/samsung-frame`, priority: 0.7, changeFreq: 'monthly' },
  ])

  // Combine all pages - flagged URLs first to ensure they're included
  const allPages = [
    ...flaggedUrls,
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...locationServicePages
  ]

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => {
  const url = toCanonical(page.path)
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
}).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
