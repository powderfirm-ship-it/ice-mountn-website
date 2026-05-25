import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./critical.css";
import "./globals.css";

import { SchemaMarkup } from "@/components/schema-markup";
import HcpProvider from "@/components/HcpProvider";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { PageViewTracker } from "@/components/page-view-tracker";
import { AttributionCapture } from "@/components/attribution-capture";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.icemountn.com'),
  title: {
    template: '%s | Ice Mount\'n',
    default: 'TV Mounting Los Angeles | Ice Mount\'n - Same Day Service'
  },
  description: "Professional TV mounting and home theater installation in Los Angeles. Samsung Frame specialist, over-fireplace mounting, cable concealment. Same-day service, top-rated pros. Call (323) 863-8146 for free estimate.",
  keywords: "tv mounting los angeles, tv wall mounting service los angeles, tv installation los angeles, home theater installation, cable concealment, samsung frame installer los angeles, over fireplace tv mounting, sound bar installation",
  authors: [{ name: "Ice Mount'n" }],
  creator: "Ice Mount'n",
  publisher: "Ice Mount'n",
  icons: {
    icon: '/images/brand/favicon.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Ice Mount'n",
    title: "Ice Mount'n - TV Mounting & Home Theater Installation Los Angeles",
    description: "Same-day TV mounting service across LA. Professional installation, lowest pricing, top-rated service.",
    locale: "en_US",
    url: "https://www.icemountn.com",
    images: [
      {
        url: "/images/stock/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Professional TV mounting service in Los Angeles"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@icemountn",
    creator: "@icemountn",
    title: "Ice Mount'n - TV Mounting Los Angeles",
    description: "Same-day TV mounting service across LA. Professional installation, lowest pricing, top-rated service.",
    images: ["/images/stock/hero-1.webp"]
  },
  alternates: {
    canonical: "https://www.icemountn.com"
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/webp" href="/images/brand/favicon.webp" />
        
        {/* Preload LCP image for better performance */}
        <link
          rel="preload"
          href="/images/stock/hero-1.webp"
          as="image"
          type="image/webp"
        />
        {/* JSON-LD Schema Markup for SEO */}
        <SchemaMarkup />
        {/* Meta Pixel + GA4 + Microsoft Clarity — afterInteractive so they don't block LCP */}
        <AnalyticsScripts />
      </head>
      <body className={`${inter.className} antialiased`}>
        <HcpProvider />
        {/* Fires PageView on every Next.js client-side route change. Wrapped in Suspense
            because useSearchParams() bails to client rendering — Suspense satisfies that. */}
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        {/* Persists utm tags, gclid, and fbclid into the im_attr cookie on every
            navigation so /booking-complete can attach them to Pixel + GA4 events. */}
        <Suspense fallback={null}>
          <AttributionCapture />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
