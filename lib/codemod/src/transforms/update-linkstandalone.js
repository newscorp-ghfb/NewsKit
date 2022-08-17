const {tagReplacement, replaceImports} = require('../utils');

//convert Link to LinkStandalone

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const JSXElementReplacement = createTags => {
    const createOpeningTags = createTags.find(j.JSXOpeningElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Link',
      },
    });

    const createClosingTags = createTags.find(j.JSXClosingElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Link',
      },
    });

    tagReplacement(j, createOpeningTags, 'LinkStandalone');
    tagReplacement(j, createClosingTags, 'LinkStandalone');
  };

  const root = j(file.source);

  root.forEach(path => {
    const createTags = j(path);
    replaceImports(j, root, 'Link', 'LinkStandalone');
    JSXElementReplacement(createTags);
  });
  return root.toSource();
};
