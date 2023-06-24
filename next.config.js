/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        topLevelAwait: true
    }
}

module.exports = nextConfig
