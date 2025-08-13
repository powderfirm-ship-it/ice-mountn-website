// src/lib/urls.ts
export const BASE =
  process.env.SITE_BASE_URL?.replace(/\/+$/, '') ||
  "https://ice-mountn-website.vercel.app"; // keep current prod until custom domain is live

export function canonical(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`.replace(/\/+$/, ""); // no trailing slash
}

export function normalizePath(path: string) {
  // Remove query/hash, collapse multiple slashes, no trailing slash (except root)
  const u = path.split("?")[0].split("#")[0];
  const cleaned = u.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
}
