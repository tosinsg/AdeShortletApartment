// next.config.js (CommonJS)
let userConfig = undefined;
try {
  // Try to import ESM first
  userConfig = require('./v0-user-next.config.mjs'); // Use require for CommonJS
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = require('./v0-user-next.config'); // Fallback for CJS
  } catch (innerError) {
    // Ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

if (userConfig) {
  // For ESM imports, we have a "default" property
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

module.exports = nextConfig;