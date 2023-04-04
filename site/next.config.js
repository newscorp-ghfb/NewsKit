/* eslint-disable no-param-reassign */
const path = require('path');
const {resolve} = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// remove @next/mdx when doc pages are all tranformed to tsx
const withMDX = require('./mdx');

const isSiteEnvProduction = process.env.SITE_ENV === 'production';

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

      new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, '../fonts'),
            to: resolve(__dirname, 'public/static/fonts'),
          },
        ],
      }),
    ];

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

  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: isSiteEnvProduction ? 'never' : 'always',
      labelFormat: '[local]',
      importMap: {
        newskit: {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
          },
        },
      },
    },
  },
});
