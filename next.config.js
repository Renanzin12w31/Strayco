/** @type {import('next').NextConfig} */
const nextConfig = {

    // ❌ REMOVIDO: output: 'export',
    // ❌ REMOVIDO: trailingSlash: true,

    images: {
        // ❌ REMOVIDO: unoptimized: true
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
