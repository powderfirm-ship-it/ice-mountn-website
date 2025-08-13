import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "In‑Wall Cable Concealment | Ice Mount'n",
  description:
    "Completely hide TV cables inside your walls with professional, code‑compliant outlet installation. Clean, safe, and renter‑friendly options.",
  alternates: {
    canonical: "/services/cable-concealment",
  },
  openGraph: {
    title: "In‑Wall Cable Concealment | Ice Mount'n",
    description:
      "Hide HDMI, power, and audio cables inside the wall. Professional electrical work and clean finish.",
    url: "/services/cable-concealment",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "In‑Wall Cable Concealment | Ice Mount'n",
    description:
      "Clean, code‑compliant cable concealment with new outlet behind the TV.",
  },
};

export default function CableConcealmentPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            In‑Wall Cable Concealment
          </h1>
          <p className="mt-3 text-gray-600">
            Completely hide TV cables inside your wall for a clean, professional look. Includes new outlet behind the TV and code‑compliant work.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn btn-primary">Book Installation</Link>
            <Link href="tel:13238638146" className="btn btn-outline">Call (323) 863‑8146</Link>
          </div>
          <div className="mt-4 text-sm text-gray-500">Licensed & insured • Code‑compliant • Professional finish</div>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium">Basic Concealment</h3>
            <p className="mt-2 text-sm text-gray-600">Hide TV power + HDMI cables in wall.</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Est. time: 2–3 hours</li>
              <li>Clean wall opening + wall plate</li>
              <li>Professional wall finishing</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium">Complete Concealment</h3>
            <p className="mt-2 text-sm text-gray-600">New recessed outlet behind TV + HDMI, power, and audio in‑wall.</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Est. time: 3–4 hours</li>
              <li>Code‑compliant electrical work</li>
              <li>GFCI where required</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium">Premium Install</h3>
            <p className="mt-2 text-sm text-gray-600">Multi‑device routing (soundbar, console, boxes) with clean finishing.</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Est. time: 4–5 hours</li>
              <li>Outlet + cable management box</li>
              <li>Paint‑ready finish</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-medium">Our Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-gray-600 space-y-1">
              <li>Wall assessment (studs, blocking, route)</li>
              <li>Outlet install behind TV (code‑compliant)</li>
              <li>Cable fishing + management</li>
              <li>Clean finish and operation check</li>
            </ol>
          </div>
          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-medium">FAQ</h2>
            <details className="mt-3">
              <summary className="cursor-pointer font-medium">Is it safe/code‑compliant?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes. Electrical work is performed to local code by qualified technicians. GFCI is used where required.
              </p>
            </details>
            <details className="mt-3">
              <summary className="cursor-pointer font-medium">Works with all wall types?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Drywall and wood stud are typical. We can often accommodate plaster or concrete with proper tools and methods.
              </p>
            </details>
            <details className="mt-3">
              <summary className="cursor-pointer font-medium">Need everything hidden?</summary>
              <p className="mt-2 text-sm text-gray-600">
                Pair with our <Link href="/services/standard-tv-mount" className="underline">TV Mounting</Link> or
                {" "}<Link href="/services/soundbar-mounting" className="underline">Sound‑bar Mounting</Link> for a seamless setup.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 p-6 text-center">
          <h2 className="text-xl font-semibold">Ready for a completely clean look?</h2>
          <p className="mt-2 text-gray-600">Book your in‑wall cable concealment today.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn btn-primary">Book Installation</Link>
            <Link href="/services" className="btn btn-ghost">View all services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
