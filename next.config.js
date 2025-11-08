/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  // Turbopack enabled in dev (Next.js 15 feature)
  turbo: {},
}

export default nextConfig
