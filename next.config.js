/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'res.cloudinary.com'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dtkvfdjg5/image/upload',
  },
}

module.exports = nextConfig
