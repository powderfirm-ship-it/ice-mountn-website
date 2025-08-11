import { Metadata } from 'next';
import { SiteLayout } from "@/components/site-layout";
import { UCLAPageClient } from "./ucla-page-client";

export const metadata: Metadata = {
  title: "UCLA TV Mounting (Student Discount) | Ice Mount'n",
  description: "Professional TV mounting for UCLA students in dorms, apartments & graduate housing near campus. Student discount pricing as low as $50. RA-approved, renter-friendly installations.",
  alternates: {
    canonical: "https://icemountn.com/locations/ucla"
  },
  openGraph: {
    title: "UCLA TV Mounting (Student Discount) | Ice Mount'n",
    description: "Professional TV mounting for UCLA students in dorms, apartments & graduate housing near campus. Student discount pricing as low as $50. RA-approved, renter-friendly installations.",
    type: "website",
    url: "https://icemountn.com/locations/ucla",
    siteName: "Ice Mount'n",
    images: [
      {
        url: "https://icemountn.com/images/stock/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "TV mounted above fireplace in student apartment near UCLA"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "UCLA TV Mounting (Student Discount) | Ice Mount'n",
    description: "Professional TV mounting for UCLA students in dorms, apartments & graduate housing near campus. Student discount pricing as low as $50. RA-approved, renter-friendly installations.",
    images: ["https://icemountn.com/images/stock/hero-1.webp"]
  }
};

export default function UCLAPage() {
  return <UCLAPageClient />;
}
