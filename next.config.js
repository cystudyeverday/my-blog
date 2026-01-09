/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

