/* eslint-disable no-param-reassign */
const path = require('path');
const {resolve, join: joinPath} = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withMDX = require('./mdx');

module.exports = withCSS(
  withMDX(
    withImages({
      webpack: config => {
        // enable transpile of files outside of directory - https://github.com/vercel/next.js/issues/5666#issuecomment-782922703
        config.module.rules.forEach(rule => {
          if (rule.test && rule.test.toString().includes('tsx|ts')) {
            rule.include = [...rule.include, joinPath(__dirname, '../src')];
          }
        });

        config.resolve.alias['@components/page-title'] = path.join(
          __dirname,
          'components/page-title.tsx',
        );

        // references next polyfills example: https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();

          if (
            entries['main.js'] &&
            !entries['main.js'].includes('./helpers/polyfills.js')
          ) {
            entries['main.js'].unshift('./helpers/polyfills.js');
          }

          return entries;
        };

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
    }),
  ),
);
