/* eslint-disable import/order */
/* eslint-env node */

const rehypePrism = require('@mapbox/rehype-prism');
const rehypeExtractDocTitle = require('./mdx-plugins/rehype-extract-doc-title');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [[rehypeExtractDocTitle, {tag: 'h1'}], rehypePrism],
  },
});

module.exports = withMDX;
