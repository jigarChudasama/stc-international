/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/account", destination: "/", permanent: false },
      { source: "/cart", destination: "/", permanent: false },
      { source: "/product/:path*", destination: "/", permanent: false },
      { source: "/us/en/:path*", destination: "/", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hermes.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cms.discovery.hcomapps.com",
        pathname: "/is/image/**",
      },
      {
        protocol: "https",
        hostname: "belstaff.com",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
