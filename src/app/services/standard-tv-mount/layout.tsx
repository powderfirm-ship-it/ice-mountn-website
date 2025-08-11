import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standard TV Wall Mounting Service Los Angeles | $149+ | Ice Mount'n",
  description: "Professional TV wall mounting service in Los Angeles starting at $149. Same-day installation for TVs up to 85\". Free consultation, basic cable management included. Call (323) 863-8146.",
  keywords: "TV wall mounting Los Angeles, TV mount installation, professional TV mounting, same day TV mount, Los Angeles TV installer, wall mount TV service",
  openGraph: {
    title: "Standard TV Wall Mounting Service Los Angeles | Ice Mount'n",
    description: "Professional TV wall mounting service starting at $149. Same-day installation available throughout Los Angeles County.",
    images: ["/images/tv-mount-service.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/services/standard-tv-mount",
  },
};

export default function StandardTVMountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
