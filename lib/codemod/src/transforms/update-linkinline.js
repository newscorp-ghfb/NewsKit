const OpeningTagReplacement = require('../utils');
const ClosingTagReplacement = require('../utils');
// convert Link to LinkInline

const addImports = require('jscodeshift-add-imports');
module.exports = function transformer(file, api) {
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
  const j = api.jscodeshift;
  const {statement} = j.template;
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

  const iconList = getNewskitImports(j, root);

  root.forEach(path => {
    const create = j(path);

    if (iconList.length) {
      addImports(root, [statement`import {LinkInline} from 'newskit';`]);
      removeLink(
        j,
        root,
        iconList.map(i => i === i.name),
      );
    }
    JSXElementReplacement(create);
  });
  return root.toSource();
};
