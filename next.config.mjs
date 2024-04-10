/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ww1.tcbscans.org',
      },
    ],
  },
};

export default nextConfig;
