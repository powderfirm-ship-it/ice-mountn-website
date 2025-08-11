import Image from "next/image";

export default function HeroMediaFallback() {
  return (
    <div className="relative w-full md:w-auto flex justify-center">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-xl">
        <div className="relative w-full max-w-[600px] aspect-[4/5] min-h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/stock/hero-1.webp"
            alt="Recent TV mounting install in Los Angeles"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 90vw, 600px"
            className="object-cover"
          />

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
