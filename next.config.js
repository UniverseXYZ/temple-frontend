/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    RESERVOIR_API_KEY: "b37f428c-629c-42e8-9bbb-8e349539e263",
    RESERVOIR_API_URL: "https://api.reservoir.tools/",
    ZAPPER_KEY: "33d6fd40-c040-423f-ab0c-fe6d8e5fb877"
  },
  
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
