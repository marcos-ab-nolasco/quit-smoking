/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export
  images: {
    unoptimized: true,
  },
  distDir: 'out',
};

module.exports = nextConfig;