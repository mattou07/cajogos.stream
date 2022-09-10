/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () =>
  {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/cajogos',
        permanent: true,
      },
      {
        source: '/twitch',
        destination: 'https://twitch.tv/cajogos',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UC1xiWXTrJlGFhwpKPA52IjA',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
