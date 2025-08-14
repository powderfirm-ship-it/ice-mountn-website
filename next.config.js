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

      // 2.2 Host-level redirects only - keep the non-www to www redirect
      // Location + service combinations use legacy slugs that actually exist
      // No need to redirect them to non-existent canonical paths

      // Legacy redirects from the old redirects section
      {
        source: '/terms',
        destination: 'https://pro.housecallpro.com/IceMountn/573582/terms',
        permanent: false, // temporary; switch to true if you want a 308 later
      },

      // 4xx Error Fixes: Redirect non-existent pages to canonical URLs
      {
        source: '/locations/nearby-areas',
        destination: '/locations',
        permanent: true, // 301 redirect to locations hub
      },
      {
        source: '/services/same-day-tv-mounting',
        destination: '/same-day-tv-mounting',
        permanent: true, // 301 redirect to canonical same-day service page
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
