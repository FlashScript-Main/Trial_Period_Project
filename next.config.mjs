import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'trial-period-api.vercel.app',
            },
        ],
    },
};

export default isProduction ? withPWA({
    dest: 'public',
})(nextConfig) : nextConfig;
