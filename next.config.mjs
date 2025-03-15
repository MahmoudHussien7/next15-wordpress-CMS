/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "hrawy.local",
      },
      {
        protocol: "http",
        hostname: "hrawy.local",
        pathname: "/wp-content/uploads/**", // السماح بكل الصور داخل uploads
      },
    ],
  },
};

export default nextConfig;
