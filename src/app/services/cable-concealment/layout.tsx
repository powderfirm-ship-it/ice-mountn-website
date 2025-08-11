import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Wall Cable Concealment Los Angeles | $199+ | Hide TV Cables | Ice Mount'n",
  description: "Professional in-wall cable concealment in Los Angeles starting at $199. Hide all TV cables with new outlet installation. Code-compliant electrical work. Call (323) 863-8146.",
  keywords: "cable concealment Los Angeles, hide TV cables, in-wall cable routing, TV cable management, electrical outlet installation, wire hiding service",
  openGraph: {
    title: "In-Wall Cable Concealment Los Angeles | Ice Mount'n",
    description: "Professional in-wall cable concealment with new outlet installation. Completely hide all TV cables for a clean look.",
    images: ["/images/cable-concealment.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/services/cable-concealment",
  },
};

export default function CableConcealmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
