module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: false, // Disable strict mode for faster development builds
  productionBrowserSourceMaps: false, // Disable source maps in production for faster builds
};
