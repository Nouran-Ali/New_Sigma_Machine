// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  devIndicators: {
    buildActivity: true,
  },
  env: {},
};

module.exports = {
  images: {
    unoptimized: true,
  },
};


module.exports = nextConfig;
