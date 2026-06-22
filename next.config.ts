import type { NextConfig } from "next";
import { version } from "./package.json";

const isProd = process.env.NEXT_PUBLIC_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  async redirects() {
    return [];
  },
  typescript: {
    ignoreBuildErrors: true
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "offers-smartbuyuat.reward360.in",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "192.168.100.159",
        port: "1338",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "dpimages.crayondata.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**.cloudfront.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**kaligo.imgix.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**rukmini-ct.flixcart.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "r2imghtlak.mmtcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "r1imghtlak.mmtcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "fastui.cltpstatic.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "imgcld.yatra.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "d2hx8jjky1f7ly.cloudfront.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "d157777v0iph40.cloudfront.net",
        pathname: "/**"
      },

      {
        protocol: "https",
        hostname: "smartbuycms-uat.reward360.in",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "r1imghtlak.mmtcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "r2imghtlak.mmtcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "rukmini-ct.flixcart.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "gommts3.mmtcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "q-xx.bstatic.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.travelapi.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ak-d.tripcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.cfmedia.vfmleonardo.com",
        pathname: "/**"
      }
    ]
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: version
  },
  compiler: {
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false
  }
};

export default nextConfig;
