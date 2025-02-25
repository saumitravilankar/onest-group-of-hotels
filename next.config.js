/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_STRAPI_IMAGES_HOSTNAME || "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
