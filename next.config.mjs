/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // nodig voor Zoho Catalyst of lokale hosting
  },
  output: "standalone", // handig voor Catalyst-deployment
};

export default nextConfig;

