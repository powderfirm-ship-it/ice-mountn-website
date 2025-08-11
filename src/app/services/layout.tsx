import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV Mounting Services Los Angeles | Professional Installation | Ice Mount'n",
  description: "Complete TV mounting services in Los Angeles starting at $129. Standard mounting, over-fireplace, cable concealment, soundbar installation, Samsung Frame specialist. Same-day service available.",
  keywords: "TV mounting services Los Angeles, professional TV installation, same day TV mount, Los Angeles TV installer, home theater installation, cable concealment",
  openGraph: {
    title: "TV Mounting Services Los Angeles | Ice Mount'n",
    description: "Professional TV mounting and home theater installation services throughout Los Angeles. Same-day service available.",
    images: ["/images/tv-mounting-services.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
