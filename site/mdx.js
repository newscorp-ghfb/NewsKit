/* eslint-disable import/order */
/* eslint-env node */

const rehypeExtractDocTitle = require('./mdx-plugins/rehype-extract-doc-title');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypeExtractDocTitle, {tag: 'h1'}]],
  },
});

module.exports = withMDX;
