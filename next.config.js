/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  compress: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    // Exclude scripts-build directory from webpack compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /scripts-build/,
    };
    return config;
  },
  async redirects() {
    return [
      // 2.1 Host-level: force www (covers non-www to www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'icemountn.com' }],
        destination: 'https://www.icemountn.com/:path*',
        permanent: true,
      },

      // 2.2 Exact legacy/bad URLs → canonical targets (21 items from SEMrush CSV)
      // NOTE: These source paths are relative (host rewrite above will also catch non-www)
      { source: '/services/standard-tv-mount', destination: '/services/standard-tv-mount', permanent: true },
      { source: '/locations/beverly-hills/soundbar-speaker', destination: '/locations/beverly-hills/soundbar-mounting', permanent: true },
      { source: '/locations/beverly-hills/standard-tv', destination: '/locations/beverly-hills/standard-tv-mount', permanent: true },
      { source: '/locations/usc', destination: '/locations/usc', permanent: true },
      { source: '/locations/beverly-hills/in-wall-cable', destination: '/locations/beverly-hills/cable-concealment', permanent: true },
      { source: '/locations/west-hollywood/standard-tv', destination: '/locations/west-hollywood/standard-tv-mount', permanent: true },
      { source: '/locations/santa-monica/soundbar-speaker', destination: '/locations/santa-monica/soundbar-mounting', permanent: true },
      { source: '/locations/santa-monica/samsung-frame', destination: '/locations/santa-monica/samsung-frame', permanent: true },
      { source: '/locations/west-hollywood/samsung-frame', destination: '/locations/west-hollywood/samsung-frame', permanent: true },
      { source: '/services/soundbar-mounting', destination: '/services/soundbar-mounting', permanent: true },
      { source: '/locations/inglewood/same-day', destination: '/locations/inglewood/same-day', permanent: true },
      { source: '/locations/inglewood/samsung-frame', destination: '/locations/inglewood/samsung-frame', permanent: true },
      { source: '/locations/ucla', destination: '/locations/ucla', permanent: true },
      { source: '/locations/beverly-hills/samsung-frame', destination: '/locations/beverly-hills/samsung-frame', permanent: true },
      { source: '/discounts', destination: '/discounts', permanent: true },
      { source: '/services/samsung-frame', destination: '/services/samsung-frame', permanent: true },
      { source: '/locations/santa-monica/over-fireplace', destination: '/locations/santa-monica/over-fireplace-mount', permanent: true },
      { source: '/locations/west-hollywood/over-fireplace', destination: '/locations/west-hollywood/over-fireplace-mount', permanent: true },
      { source: '/locations/west-hollywood/same-day', destination: '/locations/west-hollywood/same-day', permanent: true },
      { source: '/locations/beverly-hills/over-fireplace', destination: '/locations/beverly-hills/over-fireplace-mount', permanent: true },
      { source: '/locations/west-hollywood/soundbar-speaker', destination: '/locations/west-hollywood/soundbar-mounting', permanent: true },

      // Legacy redirects from the old redirects section
      {
        source: '/terms',
        destination: 'https://pro.housecallpro.com/IceMountn/573582/terms',
        permanent: false, // temporary; switch to true if you want a 308 later
      },
    ];
  },
  allowedDevOrigins: ["*.preview.same-app.com"],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [360, 420, 640, 750, 828, 1080],
    imageSizes: [256, 384, 560],
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
