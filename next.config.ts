import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/projects/**",
      },
      {
        pathname: "/certificates/**",
      },
      {
        pathname: "/RESUME-cover.png",
        search: "",
      },
    ],
  },
};

export default nextConfig;
