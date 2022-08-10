const OpeningTagReplacement = require('./../utils');
const ClosingTagReplacement = require('./../utils');
// convert Link to LinkInline

//TODO: Focus on removing link from Newskit import without deleting
// other components

const addImports = require('jscodeshift-add-imports');
module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const {statement} = j.template;

  const getNewskitImports = (j, root) =>
    root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

  const removeLink = (j, root, list) => {
    let newskitImports = getNewskitImports(j, root);

    j(newskitImports)
      .find(j.ImportSpecifier)
      .filter(s => {
        const name = s.value.imported.name;
        console.log(s, 's')
        if (list.includes(name !== 'Link')) {
          j(s).remove();
        }

      });
  };

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
      addImports(root, [
        statement`import {LinkInline} from 'newskit';`,
        // ...iconImports,
      ]);
      removeLink(
        j,
        root,
        //remove original name
        iconList.map(i => i === i.name),
      );
    }
    JSXElementReplacement(create);
  });
  return root.toSource();
};
