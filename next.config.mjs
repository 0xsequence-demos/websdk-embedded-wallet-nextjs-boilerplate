/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
