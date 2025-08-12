import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./critical.css";
import "./globals.css";
import ClientBody from "./ClientBody";
import { SchemaMarkup } from "@/components/schema-markup";
import HcpProvider from "@/components/HcpProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://icemountn.com'),
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
    url: "https://icemountn.com",
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
    canonical: "https://icemountn.com"
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
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <head>
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
      </head>
      <body suppressHydrationWarning className="antialiased">
        <HcpProvider />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
