/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    'framer-motion',
    'lucide-react',
  ],
  // Optimización para build
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts'],
  },
  // Importante para Cloudflare
  outputFileTracing: true,
};

export default nextConfig;