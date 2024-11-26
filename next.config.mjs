/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "img.icons8.com",
      port: "",
      pathname: "/",
      },
      {
      protocol: "https",
      hostname: "stbm7resourcesprod.blob.core.windows.net",
      port: "",
      pathname: "/",
      }]
  },
};

export default nextConfig;
