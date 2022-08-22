const {replaceComponents} = require('../utils/component-utils');

//convert Link to LinkInline

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceComponents(j, root, 'Link', 'LinkInline');
  return root.toSource();
};
