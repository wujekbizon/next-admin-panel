/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['crowd-literature.eu'],
  },
};

module.exports = nextConfig;
