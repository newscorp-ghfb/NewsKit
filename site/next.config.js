/* eslint-disable no-param-reassign */
/* eslint-env node */
require('dotenv').config();

const path = require('path');
const {resolve} = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withMDX = require('./mdx');

module.exports = withCSS(
  withMDX(
    withImages({
      webpack: config => {
        config.resolve.alias.newskit = resolve(__dirname, '../dist');
        config.resolve.alias.examples = resolve(__dirname, 'static/examples');
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

          // Read the .env file
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true,
          }),
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
    }),
  ),
);
