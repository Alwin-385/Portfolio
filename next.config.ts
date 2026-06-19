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
  async headers() {
    return [
      {
        // Always revalidate the resume PDFs so updates show immediately
        source: "/:file(RESUME|alwin-baby-resume).pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
