/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: 'https://pro.housecallpro.com/IceMountn/573582/terms',
        permanent: false, // temporary; switch to true if you want a 308 later
      },
    ];
  },
  allowedDevOrigins: ["*.preview.same-app.com"],
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
