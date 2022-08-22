const {replaceComponent} = require('../utils/component-utils');

//convert Link to LinkInline

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceComponent(j, root, 'Link', 'LinkInline');
  return root.toSource();
};
