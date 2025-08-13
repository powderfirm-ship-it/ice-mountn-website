// Using built-in fetch (Node 18+)

const urls = [
  "https://ice-mountn-website.vercel.app/",
  "https://ice-mountn-website.vercel.app/services",
  "https://ice-mountn-website.vercel.app/services/standard-tv",
  "https://ice-mountn-website.vercel.app/services/over-fireplace",
  "https://ice-mountn-website.vercel.app/services/in-wall-cable",
  "https://ice-mountn-website.vercel.app/services/soundbar-speaker",
  "https://ice-mountn-website.vercel.app/same-day",
  "https://ice-mountn-website.vercel.app/locations",
  "https://ice-mountn-website.vercel.app/locations/santa-monica",
  "https://ice-mountn-website.vercel.app/locations/westwood",
  "https://ice-mountn-website.vercel.app/locations/beverly-hills",
  "https://ice-mountn-website.vercel.app/locations/west-hollywood",
  "https://ice-mountn-website.vercel.app/locations/hollywood",
  "https://ice-mountn-website.vercel.app/locations/dtla",
  "https://ice-mountn-website.vercel.app/locations/silver-lake",
  "https://ice-mountn-website.vercel.app/locations/echo-park",
  "https://ice-mountn-website.vercel.app/locations/pasadena",
  "https://ice-mountn-website.vercel.app/locations/glendale",
  "https://ice-mountn-website.vercel.app/locations/burbank",
  "https://ice-mountn-website.vercel.app/locations/studio-city",
  "https://ice-mountn-website.vercel.app/locations/sherman-oaks",
  "https://ice-mountn-website.vercel.app/locations/brentwood",
  "https://ice-mountn-website.vercel.app/locations/culver-city",
  "https://ice-mountn-website.vercel.app/locations/venice",
  "https://ice-mountn-website.vercel.app/locations/marina-del-rey",
  "https://ice-mountn-website.vercel.app/locations/manhattan-beach",
  "https://ice-mountn-website.vercel.app/locations/el-segundo",
  "https://ice-mountn-website.vercel.app/locations/inglewood",
  "https://ice-mountn-website.vercel.app/locations/hawthorne",
  "http://ice-mountn-website.vercel.app/",
  "http://www.icemountn.com/",
  "https://icemountn.com/",
  "http://icemountn.com/",
  "https://www.icemountn.com/services/standard-tv",
  "https://www.icemountn.com/services/over-fireplace",
  "https://www.icemountn.com/services/in-wall-cable",
  "https://www.icemountn.com/services/soundbar-speaker"
];

console.log("Checking for redirects on 37 URLs...\n");

for (const u of urls) {
  try {
    const r = await fetch(u, { method: "HEAD", redirect: "manual" });
    if (r.status >= 300 && r.status < 400) {
      console.log("REDIRECT:", u, "→", r.headers.get("location"));
    } else {
      console.log("OK:", u, r.status);
    }
  } catch (error) {
    console.log("ERROR:", u, error.message);
  }
}

console.log("\nCheck complete.");
