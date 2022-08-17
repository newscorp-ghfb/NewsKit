const {tagReplacement, removeImports} = require('../utils');
const addImports = require('jscodeshift-add-imports');

//convert Link to LinkStandalone

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const {statement} = j.template;
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

    addImports(root, [statement`import {LinkStandalone} from 'newskit';`]);
    removeImports(j, root, 'Link');
    JSXElementReplacement(createTags);
  });
  return root.toSource();
};
