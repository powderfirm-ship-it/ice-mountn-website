'use client';

import React, { useEffect, useRef, useState } from 'react';

type CityMapProps = {
  city: string;           // e.g. "Glendale, CA"
  lat?: number;
  lng?: number;
  zoom?: number;          // default 12–13
  className?: string;
};

// Tiny util to build a Google Maps Embed (no API key needed) centered on the place.
const buildEmbedSrc = (city: string, lat?: number, lng?: number, zoom = 13) => {
  if (lat != null && lng != null) {
    // Lat/Lng center
    return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  }
  // Place search fallback
  const q = encodeURIComponent(city);
  return `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
};

export default function CityMap({ city, lat, lng, zoom = 13, className }: CityMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simple lazy loading with a small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className={className ?? ''} aria-label={`Map showing ${city} location`}>
      {visible ? (
        <iframe
          title={`Map showing ${city} location`}
          src={buildEmbedSrc(city, lat, lng, zoom)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full aspect-[16/9] rounded-xl border border-gray-200 shadow-sm"
        />
      ) : (
        <div className="w-full aspect-[16/9] rounded-xl bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading map...</div>
        </div>
      )}
    </div>
  );
}
