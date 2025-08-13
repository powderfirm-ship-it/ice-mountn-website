export type ServiceSlug =
  | "standard-tv-mount"
  | "over-fireplace-mount"
  | "cable-concealment"
  | "soundbar-mounting"
  | "samsung-frame"
  | "same-day-tv-mounting";

export const SERVICES: Record<ServiceSlug, {
  title: string;
  h1: string;
  description: string;
  canonicalPath: string;
  icon: "tv" | "flame" | "cable" | "speaker" | "frame" | "lightning";
  bullets: string[];
}> = {
  "standard-tv-mount": {
    title: "Standard TV Mount",
    h1: "Standard TV Wall Mounting",
    description: "Secure, damage‑free TV mounting with clean cable options and perfect placement.",
    canonicalPath: "/services/standard-tv-mount",
    icon: "tv",
    bullets: ["Stud‑secure mount", "Tilt/level calibration", "Works with all sizes", "Cable tidy options"]
  },
  "over-fireplace-mount": {
    title: "Over‑Fireplace Mount",
    h1: "Over‑Fireplace TV Mounting",
    description: "Heat‑safe mounting above fireplaces using specialized brackets and methods.",
    canonicalPath: "/services/over-fireplace-mount",
    icon: "flame",
    bullets: ["Heat‑aware placement", "Pull‑down options", "Articulation choices", "Code‑compliant"]
  },
  "cable-concealment": {
    title: "In‑Wall Cable Concealment",
    h1: "In‑Wall Cable Concealment",
    description: "Hide power and data lines in‑wall for a clean, code‑compliant look.",
    canonicalPath: "/services/cable-concealment",
    icon: "cable",
    bullets: ["Outlet + power bridge", "Data/HDMI runs", "Code compliant", "Clean aesthetic"]
  },
  "soundbar-mounting": {
    title: "Sound‑bar / Speaker Mounting",
    h1: "Sound‑bar & Speaker Mounting",
    description: "Mount and align soundbars and speakers for an immersive setup.",
    canonicalPath: "/services/soundbar-mounting",
    icon: "speaker",
    bullets: ["Soundbar alignment", "Bracket install", "Cable management", "System tidy‑up"]
  },
  "samsung-frame": {
    title: "Samsung Frame Specialist",
    h1: "Samsung Frame TV Installation",
    description: "Zero‑gap mounting and Art Mode optimization for Samsung Frame TVs.",
    canonicalPath: "/services/samsung-frame",
    icon: "frame",
    bullets: ["Zero‑gap mount", "One Connect routing", "Art Mode setup", "Wire‑free look"]
  },
  "same-day-tv-mounting": {
    title: "Same‑Day Service",
    h1: "Same‑Day TV Mounting",
    description: "Urgent installs with landlord‑friendly methods across LA.",
    canonicalPath: "/same-day-tv-mounting",
    icon: "lightning",
    bullets: ["Fast scheduling", "Renter‑friendly", "Pro tools", "Top‑rated techs"]
  }
};
