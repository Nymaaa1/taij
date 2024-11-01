/** @type {import('next').NextConfig} */


import createNextIntlPlugin from 'next-intl/plugin';
// import withVideos from "next-videos";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    // output: 'export',
    reactStrictMode: false,
    experimental: {
        typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "a0.muscache.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.gstatic.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
export default withNextIntl(nextConfig);
