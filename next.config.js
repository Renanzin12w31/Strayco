/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Necessário para deploy como Static Site (Render/Netlify/GitHub Pages etc.)
  output: 'export',
  trailingSlash: true,

  // ✅ next/image não pode usar o otimizador em modo export
  images: {
    unoptimized: true,
  },

  // Build optimizations
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig