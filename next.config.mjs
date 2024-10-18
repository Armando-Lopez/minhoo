/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['103.43.75.41:8083'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '103.43.75.41:8083',
      },
    ],
  },
};

export default nextConfig;
