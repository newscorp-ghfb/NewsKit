const {replaceComponent} = require('../utils/component-utils');

//convert Link to LinkStandalone

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceComponent(j, root, 'Link', 'LinkStandalone');
  return root.toSource();
};
