import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samsung Frame TV Installation Los Angeles | $199+ | Art Mode Setup | Ice Mount'n",
  description: "Samsung Frame TV specialist in Los Angeles starting at $199. Zero-gap mounting, One Connect Box concealment, Art Mode setup. Certified installation. Call (323) 863-8146.",
  keywords: "Samsung Frame TV installation Los Angeles, Frame TV mounting, Art Mode setup, One Connect Box hiding, zero gap wall mount, Samsung Frame specialist",
  openGraph: {
    title: "Samsung Frame TV Installation Los Angeles | Ice Mount'n",
    description: "Expert Samsung Frame TV installation with zero-gap mounting and Art Mode setup. Transform your space into an art gallery.",
    images: ["/images/samsung-frame-installation.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/services/samsung-frame",
  },
};

export default function SamsungFrameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
