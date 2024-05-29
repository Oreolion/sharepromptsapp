/** @type {import('next').NextConfig} */
const nextConfig = {
    // disable suspense and fallback in project
    missingSuspenseWithCSRBailout: false,

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
