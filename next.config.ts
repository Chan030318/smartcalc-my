import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as standalone for optimised Vercel deployment
  // (Vercel auto-detects Next.js — no explicit output mode needed)

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Compress output
  compress: true,

  // Image optimisation (for future OG images)
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
