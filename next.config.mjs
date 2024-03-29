/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images:{
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'images.pexels.com',
            }
        ]
    },
    assetPrefix: './',
};

export default nextConfig;
