import Image from "next/image";

export default function FeaturedProject() {
  return (
    <div className="relative w-full md:w-auto flex justify-center">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-xl">
        <div className="relative w-full max-w-[600px] aspect-[4/5] min-h-[420px] rounded-3xl overflow-hidden shadow-xl">
          {/* Featured Project Image */}
          <Image
            src="/images/stock/hero-1.webp"
            alt="Featured TV mounting project in a Los Angeles living room"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 90vw, 600px"
            className="object-cover"
          />

          {/* Top-left Badge */}
          <div className="absolute left-3 top-3 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur">
            Featured Project
            <span className="sr-only">Featured project image.</span>
          </div>

          {/* Bottom-left Caption Overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-4">
            <div className="inline-flex max-w-[90%] items-center rounded-xl bg-black/45 px-3 py-2 text-sm text-white backdrop-blur">
              Samsung Frame 65" • In-wall cable concealment • Brentwood, Los Angeles
            </div>
          </div>

          {/* Floating tools */}
          <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
            <div className="text-2xl">🔧</div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
            <div className="text-2xl">📏</div>
          </div>
        </div>
      </div>
    </div>
  );
}
