/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
  ...nextConfig,
  publicRuntimeConfig: {
    bffServer: process.env.BFF,
  },
}
