import Image from "next/image";

export default function FeaturedProject() {
  return (
    <div className="relative w-full md:w-auto flex justify-center">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-xl">
        <div className="relative w-full max-w-[560px] aspect-[4/5] min-h-[480px] rounded-3xl overflow-hidden shadow-lg">
          {/* Featured Project Image */}
          <Image
            src="/images/stock/hero-1.webp"
            alt="Featured living room TV mounting project"
            fill
            priority
            fetchPriority="high"
            quality={62}
            sizes="(max-width: 480px) 92vw, (max-width: 768px) 88vw, 560px"
            className="object-cover"
            decoding="async"
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


        </div>
      </div>
    </div>
  );
}
