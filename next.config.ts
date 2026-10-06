import type { NextConfig } from "next";

const securityHeaders = [
  // Stop browsers guessing content types (blocks some drive by script tricks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only let the site frame itself (clickjacking defense)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Limit referrer data sent to other sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Switch off powerful browser features this site never uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // Force HTTPS for two years once visited over HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Do not advertise the framework version in response headers
  poweredByHeader: false,
  // Serve modern, smaller image formats first so pages load fast
  // on slow networks (falls back automatically where unsupported)
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
