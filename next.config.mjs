/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'trial-period-api.vercel.app',
            },
        ],
    },
};

export default nextConfig;
