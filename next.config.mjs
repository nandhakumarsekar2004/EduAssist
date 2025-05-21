/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'eduassist-app-storage.s3.amazonaws.com'],
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:8000',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}

export default nextConfig
