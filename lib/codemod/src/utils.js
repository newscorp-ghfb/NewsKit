// Functions for changing Link to LinkInline /LinkStandalone

function tagReplacement(j, tag, replaceWith) {
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
}

const getNewskitImports = (j, root) =>
  root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

function replaceImports(j, root, list, component) {
  let newskitImports = getNewskitImports(j, root);

  j(newskitImports)
    .find(j.ImportSpecifier)
    .filter(s => {
      const name = s.value.imported.name;
      if (list.includes(name)) {
        s.value.imported.name = component;
      }
    });
}

module.exports = {
  tagReplacement,
  replaceImports,
};
