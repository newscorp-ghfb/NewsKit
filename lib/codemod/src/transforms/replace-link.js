const OpeningTagReplacement = require('./../utils');
const ClosingTagReplacement = require('./../utils');
// convert Link to LinkInline

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;

  const JSXElementReplacement = create => {
    const createOpeningTags = create.find(j.JSXOpeningElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Link',
      },
    });

    const createClosingTags = create.find(j.JSXClosingElement, {
      name: {
        type: 'JSXIdentifier',
        name: 'Link',
      },
    });

    OpeningTagReplacement(j, createOpeningTags, 'LinkInline');
    ClosingTagReplacement(j, createClosingTags, 'LinkInline');
  };
  const root = j(file.source);
  

  root.forEach(path => {
    const create = j(path);
    JSXElementReplacement(create);
  });
  return root.toSource();
};
