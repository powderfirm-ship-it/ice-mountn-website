import { Metadata } from 'next';
import { SiteLayout } from "@/components/site-layout";
import { USCPageClient } from "./usc-page-client";

export const metadata: Metadata = {
  title: "USC TV Mounting (Student Discount) | Ice Mount'n",
  description: "Professional TV mounting for USC students in dorms, apartments & off-campus housing near campus. Student discount pricing as low as $50. Landlord-approved, renter-friendly installations.",
  alternates: {
    canonical: "https://www.icemountn.com/locations/usc"
  },
  openGraph: {
    title: "USC TV Mounting (Student Discount) | Ice Mount'n",
    description: "Professional TV mounting for USC students in dorms, apartments & off-campus housing near campus. Student discount pricing as low as $50. Landlord-approved, renter-friendly installations.",
    type: "website",
    url: "https://www.icemountn.com/locations/usc",
    siteName: "Ice Mount'n",
    images: [
      {
        url: "https://www.icemountn.com/images/stock/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "TV mounted above fireplace in student apartment near USC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "USC TV Mounting (Student Discount) | Ice Mount'n",
    description: "Professional TV mounting for USC students in dorms, apartments & off-campus housing near campus. Student discount pricing as low as $50. Landlord-approved, renter-friendly installations.",
    images: ["https://www.icemountn.com/images/stock/hero-1.webp"]
  }
};

export default function USCPage() {
  return <USCPageClient />;
}
