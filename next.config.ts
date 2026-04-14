import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',        // generates out/ with static HTML/CSS/JS
  trailingSlash: true,     // out/leistungen/index.html → /leistungen/
  images: {
    unoptimized: true,     // required for static export (no Image server)
  },
}

export default nextConfig
