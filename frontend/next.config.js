/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // 외부 이미지 출처 도메인 등록
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
