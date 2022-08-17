const tagReplacement = require('../utils');
const addImports = require('jscodeshift-add-imports');

//convert Link to LinkInline

const getNewskitImports = (j, root) =>
  root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

const removeLink = (j, root, list) => {
  let newskitImports = getNewskitImports(j, root);

  j(newskitImports)
    .find(j.ImportSpecifier)
    .filter(s => {
      const name = s.value.imported.name;
      if (list.includes(name !== 'Link')) {
        j(s).remove();
      }
    });
};

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

    tagReplacement(j, createOpeningTags, 'LinkInline');
    tagReplacement(j, createClosingTags, 'LinkInline');
  };

  const root = j(file.source);

  const iconList = getNewskitImports(j, root);

  root.forEach(path => {
    const createTags = j(path);

    addImports(root, [statement`import {LinkInline} from 'newskit';`]);
    removeLink(
      j,
      root,
      iconList.map(i => i === i.name),
    );
    JSXElementReplacement(createTags);
  });
  return root.toSource();
};
