import createMDX from "@next/mdx";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
      },
    ],
  },
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [["rehype-pretty-code", { theme: "one-dark-pro" }]],
    remarkPlugins: ["remark-gfm"],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
