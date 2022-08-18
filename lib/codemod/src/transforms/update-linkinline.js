const {tagReplacement, replaceImports} = require('../utils');

//convert Link to LinkInline

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  replaceImports(j, root, 'Link', 'LinkInline');
  root.forEach(path => {
    const createTags = j(path);
    tagReplacement(j, createTags, 'LinkInline');
  });
  return root.toSource();
};
