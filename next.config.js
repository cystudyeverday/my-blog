/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/introduction',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

