import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over-Fireplace TV Mounting Los Angeles | Ice Mount'n",
  description: "Professional over-fireplace TV mounting in Los Angeles starting at $249. Heat-safe installation with pull-down brackets. Expert assessment included. Call (323) 863-8146.",
  keywords: "over fireplace TV mount Los Angeles, fireplace TV installation, heat safe TV mounting, pull down TV mount, above fireplace TV installer",
  openGraph: {
    title: "Over-Fireplace TV Mounting Los Angeles | Ice Mount'n",
    description: "Expert over-fireplace TV mounting with heat-safe installation and pull-down brackets. Professional assessment included.",
    images: ["/images/over-fireplace-mount.jpg"],
    type: "website",
  },
  twitter: {
    title: "Over-Fireplace TV Mounting Los Angeles | Ice Mount'n",
  },
  alternates: {
    canonical: "/services/over-fireplace-mount",
  },
};

export default function OverFireplaceMountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
