/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/account", destination: "/", permanent: false },
      { source: "/cart", destination: "/", permanent: false },
      { source: "/product/:path*", destination: "/", permanent: false },
      { source: "/us/en/:path*", destination: "/", permanent: false },
      {
        source: "/collection-detail",
        destination: "/collection",
        permanent: false,
      },
      {
        source: "/collection-detail/:slug",
        destination: "/collection/:slug",
        permanent: false,
      },
      {
        source: "/contact-us",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
