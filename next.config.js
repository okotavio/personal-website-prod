/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/portfolio-ds-2025',
        destination: 'https://www.figma.com/deck/nyyDGUGkhCoh9N4n1NXdS2/Otavio-Vidal-%7C-2025-Portfolio?node-id=2017-15572&viewport=-1819%2C-5803%2C0.85&t=e7G06hKHiYh7gUxF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        permanent: false, // use true if the redirect is final and won't change
      },
    ]
  },
}

module.exports = nextConfig
