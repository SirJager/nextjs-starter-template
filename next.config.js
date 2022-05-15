/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: true,
  swcMinify: true,
  optimizeFonts: true,
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "www.notion.so",
      "picsum.photos",
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
