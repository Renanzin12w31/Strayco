/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Web Service: NÃO usar output: 'export'
  // output: 'export',

  images: {
    // ✅ Web Service pode usar otimização normal.
    // Só use unoptimized se você tiver alguma restrição específica.
    // unoptimized: true,
  },

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