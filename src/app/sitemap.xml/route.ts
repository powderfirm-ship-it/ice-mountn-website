import { NextResponse } from 'next/server'
import { CITIES } from '@/data/cities'

export async function GET() {
  const base = process.env.SITE_BASE_URL || "https://ice-mountn-website.vercel.app"
  
  // Static pages
  const staticPages = [
    { path: '/', priority: 1.0, changeFreq: 'weekly' },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/locations', priority: 0.8, changeFreq: 'weekly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/customer-reviews', priority: 0.7, changeFreq: 'monthly' },
    { path: '/faq', priority: 0.7, changeFreq: 'monthly' },
    { path: '/discounts', priority: 0.8, changeFreq: 'monthly' },
    { path: '/trust-and-support', priority: 0.6, changeFreq: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFreq: 'monthly' },
    { path: '/same-day-tv-mounting', priority: 0.9, changeFreq: 'weekly' },
  ]

  // Service pages - only canonical paths, exclude legacy slugs
  const servicePages = [
    { path: '/services/standard-tv-mount', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/over-fireplace-mount', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/cable-concealment', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/soundbar-mounting', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/samsung-frame', priority: 0.8, changeFreq: 'monthly' },
  ]

  // Location pages
  const locationPages = CITIES.map(city => ({
    path: `/locations/${city.slug}`,
    priority: 0.7,
    changeFreq: 'monthly'
  }))

  // Location + service combination pages - only canonical service paths
  const locationServicePages = CITIES.flatMap(city => [
    { path: `/locations/${city.slug}/standard-tv-mount`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/over-fireplace-mount`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/cable-concealment`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/soundbar-mounting`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/samsung-frame`, priority: 0.7, changeFreq: 'monthly' },
    { path: `/locations/${city.slug}/same-day`, priority: 0.7, changeFreq: 'monthly' },
  ])

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...locationServicePages
  ]

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => {
  const url = new URL(page.path, base).toString()
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
