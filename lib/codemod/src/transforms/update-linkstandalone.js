const {tagReplacement, replaceImports} = require('../utils');

//convert Link to LinkStandalone

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceImports(j, root, 'Link', 'LinkStandalone');
  root.forEach(path => {
    const createTags = j(path);
    tagReplacement(j, createTags, 'LinkStandalone');
  });
  return root.toSource();
};
