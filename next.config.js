/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ["drive.google.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
