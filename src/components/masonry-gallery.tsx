"use client";
import Image from "next/image";
import * as React from "react";

type Item = {
  src: string;            // e.g., "/images/gallery/standard-01.webp"
  alt: string;            // resolved alt text
  width?: number;         // optional, if known
  height?: number;        // optional, if known
};

export default function MasonryGallery({
  items,
  className = "",
  minColWidth = 260,      // auto columns via CSS columns
}: { items: Item[]; className?: string; minColWidth?: number }) {
  return (
    <div
      className={["masonry not-prose", className].join(" ")}
      style={{
        columnGap: "1rem",
        columns: `200px`,
        gridAutoRows: "1px",
      }}
    >
      <style jsx>{`
        .masonry {
          columns: 1;
        }
        @media (min-width: 640px) { .masonry { columns: 2; } }
        @media (min-width: 1024px) {
          .masonry { columns: 3; }
        }
        .masonry-item {
          break-inside: avoid;
          margin: 0 0 1rem;
          display: block;
          border-radius: 0.75rem; /* rounded-xl */
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,.06);
          background: #f8fafc;
        }
        .masonry-img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>

      {items.map((it, i) => (
        <figure className="masonry-item" key={it.src + i}>
          <Image
            className="masonry-img"
            src={it.src}
            alt={it.alt}
            width={it.width ?? 1200}
            height={it.height ?? 800}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>
      ))}
    </div>
  );
}
