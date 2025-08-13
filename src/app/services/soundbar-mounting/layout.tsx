import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soundbar & Speaker Mounting Los Angeles | Ice Mount'n",
  description: "Professional soundbar and speaker mounting in Los Angeles starting at $129. Complete surround sound installation with calibration. All brands supported. Call (323) 863-8146.",
  keywords: "soundbar mounting Los Angeles, speaker installation, surround sound setup, audio equipment mounting, speaker calibration, home theater installation",
  openGraph: {
    title: "Soundbar & Speaker Mounting Los Angeles | Ice Mount'n",
    description: "Professional audio equipment mounting and calibration. From soundbars to complete surround sound systems.",
    images: ["/images/soundbar-mounting.jpg"],
    type: "website",
  },
  twitter: {
    title: "Soundbar & Speaker Mounting Los Angeles | Ice Mount'n",
  },
  alternates: {
    canonical: "/services/soundbar-mounting",
  },
};

export default function SoundbarMountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
