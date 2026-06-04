import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    outputFileTracingRoot: path.join(__dirname),
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
