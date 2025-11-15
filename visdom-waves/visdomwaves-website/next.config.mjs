/** @type {import('next').NextConfig} */
const nextConfig = {
  // If your website will be deployed in a subdirectory, uncomment and update the basePath
  // For example, if your site is at yourdomain.com/visdomwaves/, use:
  basePath: '',
  
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Add output configuration for static export
  output: 'export',
  // Configure trailing slash behavior
  trailingSlash: true,
};

export default nextConfig;