const { setupDevPlatform } = require("@cloudflare/next-on-pages/next-dev");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

if (process.env.NODE_ENV === "development") {
  setupDevPlatform().then();
}

module.exports = nextConfig;
