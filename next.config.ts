import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      { source: '/register', destination: '/auth/register' },
      { source: '/login', destination: '/auth/login' },
    ];
  },
};
