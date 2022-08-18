// Functions for changing Link to LinkInline /LinkStandalone

function findTags(j, tag, replaceWith) {
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
}

function replaceTag(j, root, _oldTag, newTag) {
  const createOpeningTags = root.find(j.JSXOpeningElement, {
    name: {
      type: 'JSXIdentifier',
      name: 'Link',
    },
  });

  const createClosingTags = root.find(j.JSXClosingElement, {
    name: {
      type: 'JSXIdentifier',
      name: 'Link',
    },
  });
  findTags(j, createOpeningTags,  newTag);
  findTags(j, createClosingTags, newTag);
}

const getNewskitImports = (j, root) =>
  root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

function replaceImports(j, root, oldComponent, newComponent) {
  let newskitImports = getNewskitImports(j, root);

  j(newskitImports)
    .find(j.ImportSpecifier)
    .filter(s => {
      const name = s.value.imported.name;
      if (oldComponent.includes(name)) {
        s.value.imported.name = newComponent;
      }
    });
}

module.exports = {
  replaceImports,
  replaceTag,
};
