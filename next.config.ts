import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio" : "",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
