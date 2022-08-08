// convert Link to LinkInline

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;

  // Change the tag from Link to LinkInline
  const OpeningTagReplacement = tag => {
    const name = tag.find(j.JSXIdentifier, {name: 'Link'});
    name.replaceWith(j.jsxIdentifier('LinkInline'));
  };
  const ClosingTagReplacement = tag => {
    // Change closing tag from Link to LinkInline
    const name = tag.find(j.JSXIdentifier, {name: 'Link'});
    name.replaceWith(j.jsxIdentifier('LinkInline'));
  };

  const JSXElementReplacement = create => {
    // Opening tag
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

    OpeningTagReplacement(createOpeningTags);
    ClosingTagReplacement(createClosingTags);
  };
  const root = j(file.source);

  root.forEach(path => {
    const create = j(path);
    JSXElementReplacement(create);
  });
  return root.toSource();
};
