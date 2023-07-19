/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // 이미지 최적화 기능을 비활성화합니다.
    }
}

module.exports = nextConfig
