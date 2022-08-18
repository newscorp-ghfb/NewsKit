const {replaceTag, replaceImports} = require('../utils');

//convert Link to LinkInline

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceImports(j, root, 'Link', 'LinkInline');
  replaceTag(j, root, 'Link', 'LinkInline');
  return root.toSource();
};
