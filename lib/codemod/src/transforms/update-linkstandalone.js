const {replaceImports} = require('../utils/component-utils');

//convert Link to LinkStandalone

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceImports(j, root, 'Link', 'LinkStandalone');
  return root.toSource();
};
