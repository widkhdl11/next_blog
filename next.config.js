// 이 프로젝트에 대한 next 설정 파일

// next 설정 파일을 생성해서
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true, // 디버그 모드
  swcMinify: true, // 코드를 최적화하여 용량 줄여줌(공백제거 등등)
};

// 기존 설정에 새로운 설정 추가 (원래는 위의 nextConfig에 작성하지만 아래 방법으로 손쉽게 적용 가능)
module.exports = withContentlayer(nextConfig);
