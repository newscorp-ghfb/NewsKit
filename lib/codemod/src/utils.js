// Functions for changing Link to LinkInline /LinkStandalone

function findTags(j, oldTag, newTag) {
  const name = oldTag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(newTag));
}

function replaceTags(j, root, oldTag, newTag) {
  const createOpeningTags = root.find(j.JSXOpeningElement, {
    name: {
      type: 'JSXIdentifier',
      name: oldTag,
    },
  });

  const createClosingTags = root.find(j.JSXClosingElement, {
    name: {
      type: 'JSXIdentifier',
      name: oldTag,
    },
  });
  findTags(j, createOpeningTags, newTag);
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
  replaceTags,
};
