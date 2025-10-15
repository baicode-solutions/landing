/**
 * Next.js configuration
 * Nota:
 *  - 'outputFileTracing' ya no es una opción de primer nivel válida en Next 15 (la traza es automática).
 *  - Para despliegues tipo serverless/edge puedes usar `output: 'standalone'` o las herramientas específicas
 *    de la plataforma (Cloudflare: next-on-pages / experimental edge runtime).
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: "standalone", // mantiene un bundle auto-contenido (útil para contenedores / algunas plataformas)
  transpilePackages: ["framer-motion", "lucide-react"],
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },
};

export default nextConfig;
