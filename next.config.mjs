// next.config.mjs
/** @type {import('next').NextConfig} */

const nextConfig = {
    // Enables React Strict Mode to catch potential problems in an application.
    reactStrictMode: true,
  
    // Custom Webpack configuration
    webpack: (config, { isServer }) => {
      // Modify the existing Webpack config as needed
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
          path: false,
        };
      }
  
      return config;
    },
  
    // Internationalized Routing
    i18n: {
      locales: ['en', 'fr', 'es'],
      defaultLocale: 'en',
    },
  
    // Enabling experimental features
    experimental: {
      appDir: true,
    },
  
    // Base path for the application if deployed to a subdirectory
    // basePath: '/subdirectory',
  
    // Asset prefix if serving static assets from a CDN
    // assetPrefix: 'https://cdn.mydomain.com',
  
    // Environment variables
    env: {
      CUSTOM_VAR: 'my-custom-variable',
    },
  
    // Image optimization
    images: {
      domains: ['example.com', 'cdn.example.com'],
    },
  
    // Redirects configuration
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true,
        },
      ];
    },
  
    // Rewrites configuration
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  