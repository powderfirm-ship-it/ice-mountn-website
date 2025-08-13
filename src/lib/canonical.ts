export const CANONICAL_BASE =
  process.env.SITE_BASE_URL?.replace(/\/+$/, "") || "https://www.icemountn.com";

export function toCanonical(href: string): string {
  // Accept absolute/relative; output absolute on canonical base
  try {
    const u = href.startsWith("http")
      ? new URL(href)
      : new URL(href, CANONICAL_BASE);

    // Force https + host
    u.protocol = "https:";
    u.host = new URL(CANONICAL_BASE).host;

    // Strip default ports and trailing slashes on root only
    if (u.pathname !== "/" && u.pathname.endsWith("/")) {
      u.pathname = u.pathname.replace(/\/+$/, "");
    }
    return u.toString();
  } catch {
    return new URL("/", CANONICAL_BASE).toString();
  }
}
