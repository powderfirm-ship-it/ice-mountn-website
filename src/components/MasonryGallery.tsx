"use client";

import Image from "next/image";
import * as React from "react";

type GalleryImage = {
  src: string;          // "/images/gallery/xxx.webp"
  alt: string;          // final alt text (may include city)
  width?: number;       // intrinsic width if known (fallback 1200)
  height?: number;      // intrinsic height if known (fallback 800)
  priority?: boolean;   // default false (we won't set true in galleries)
};

type Props = {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  // optional: number of columns per breakpoint
  cols?: { base?: number; sm?: number; md?: number; lg?: number };
};

export default function MasonryGallery({ title, subtitle, images, cols }: Props) {
  const gridCols = {
    base: cols?.base ?? 2,
    sm: cols?.sm ?? 2,
    md: cols?.md ?? 3,
    lg: cols?.lg ?? 4,
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-4xl mx-auto text-center mb-10">
            {title && <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
        )}

        {/* Masonry using CSS columns to avoid layout shifts / CLS */}
        <div
          className={`
            [column-gap:1rem]
            columns-${gridCols.base}
            sm:columns-${gridCols.sm}
            md:columns-${gridCols.md}
            lg:columns-${gridCols.lg}
          `}
        >
          {images.map((img, i) => (
            <figure key={i} className="mb-4 break-inside-avoid">
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width || 1200}
                  height={img.height || 800}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Optional caption (disabled by default) */}
              {/* <figcaption className="mt-2 text-sm text-gray-500">{img.alt}</figcaption> */}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
