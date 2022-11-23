/* eslint-disable no-param-reassign */
const path = require('path');
const {resolve} = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// remove @next/mdx when doc pages are all tranformed to tsx
const withMDX = require('./mdx');

module.exports = withMDX({
  reactStrictMode: true,
  eslint: {
    dirs: [
      'components',
      'demo-components',
      'helpers',
      'pages',
      'templates',
      'theme',
      'utils',
    ],
  },
  experimental: {
    externalDir: true,
  },
  webpack: config => {
    config.resolve.alias['@components/page-title'] = path.join(
      __dirname,
      'components/page-title.tsx',
    );

    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      new CopyPlugin([
        {
          from: resolve(__dirname, '../fonts'),
          to: resolve(__dirname, 'public/static/fonts'),
        },
      ]),
    ];
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'],
  trailingSlash: true, // added for static export https://stackoverflow.com/a/66573096/641979
  ...(() => {
    const basePath = process.env.BASE_PATH
      ? {basePath: `/${process.env.BASE_PATH}`}
      : {};
    return basePath;
  })(), // used to build in relative paths when site is located in a sub dir
});
