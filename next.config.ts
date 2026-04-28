import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/paytia-saq-checklist",
  assetPrefix: "/paytia-saq-checklist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
