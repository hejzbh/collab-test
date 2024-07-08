/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    /**  remotePatterns: [
      {
        protocol: "https",
        hostname:
          "prod-drm-backend-api-assetsbucket5f3b285a-bxbye7pjwskf.s3.us-east-1.amazonaws.com",
      },
    ], */
  },
};

export default nextConfig;
