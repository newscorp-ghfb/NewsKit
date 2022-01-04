/* eslint-disable consistent-return */
const u = require('unist-builder');
const find = require('unist-util-find');
const toString = require('mdast-util-to-string');

const DEFAULT_TAG = 'h1';

const attacher = (options = {}) => {
  const transformer = tree => {
    const tag = options.tag || DEFAULT_TAG;
    const tagFirstInstance = find(tree, node => node.tagName === tag);

    if (tagFirstInstance) {
      const docTitle = toString(tagFirstInstance);

      const treeWithDocTitle = u('root', [
        u('import', "import PageTitle from '@components/page-title';"),
        u('text', '\n'),
        ...tree.children,
        u('text', '\n'),
        u('jsx', `<PageTitle title="${docTitle}" />`),
      ]);

      return treeWithDocTitle;
    }
  };

  return transformer;
};

module.exports = attacher;
