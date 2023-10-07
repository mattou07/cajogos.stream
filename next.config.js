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
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/cajogos.stream',
        permanent: true,
      },
      {
        source: '/beardiverse',
        destination: 'https://discord.gg/DGu7bYQQg7',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/cajogos',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
