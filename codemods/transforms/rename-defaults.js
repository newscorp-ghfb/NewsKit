const replaceObjectChildren = (overrides, node) => {
  const parent = node.key.name;
  if (typeof overrides[parent] === 'string') {
    node.key.name = overrides[parent];
  }

  node.value.properties.forEach(child => {
    if (overrides[parent] && overrides[parent][child.key.name]) {
      const condition = overrides[parent][child.key.name];
      if (typeof condition === 'string') {
        child.key.name = overrides[parent][child.key.name];
      }
      if (typeof condition === 'object') {
        replaceObjectChildren(overrides[parent], child);
      }
    }
  });
};

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  //if (file.source.match(/(function\s*createTheme|const\s*createTheme)/g)) {

  const printOptions = options.printOptions;

  const overrides = {
    headlineH2: {
      typographyPreset: 'typo',
    },
    headlineH3: 'h3',
    contentPrimary: {
      description: {
        spaceStack: 'marginBlockEnd',
      },
    },
  };

  return root
    .find(j.VariableDeclaration)
    .forEach(e => {
      e.value.declarations
        .filter(node => node.id.name === 'componentDefaults')
        .forEach(node => {
          node.init.properties.forEach(child => {
            replaceObjectChildren(overrides, child);
          });
        });
    })
    .toSource(printOptions);
};
