import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   /* config options here */
  // for cloudinary
  // images: {
  //   domains: ["res.cloudinary.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dxveggtpi/image/upload/**",
      },
    ]
  },
};

export default nextConfig;
