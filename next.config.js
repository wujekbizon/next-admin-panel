/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['crowd-literature.eu'],
  },
  webpack(config) {
    // if not work, try `config.module.rules[2]...`
    config.module.rules[3].oneOf?.forEach((one) => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
};

module.exports = nextConfig;
