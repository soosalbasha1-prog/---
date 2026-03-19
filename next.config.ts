/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['example.com'], // Replace with your allowed image domains
    formats: ['image/avif', 'image/webp'], // Formats for optimized images
  },
};

module.exports = nextConfig;