function renameOverrides({root, componentName, overrides}) {
  return root.findJSXElements(componentName).forEach(path => {
    path.node.openingElement.attributes.forEach(node => {
      if (node.type === 'JSXAttribute' && node.name.name === 'overrides') {
        node.value.expression.properties.forEach(child => {
          if (overrides[child.key.name]) {
            if (typeof overrides[ov.key.name] === 'string') {
              child.key.name = overrides[child.key.name];
            }
            if (typeof overrides[child.key.name] === 'object') {
              replaceObjectChildren(overrides, child);
            }
          }
        });
      }
    });
  });
}

const replaceObjectChildren = (overrides, node) => {
  const parent = node.key.name;
  node.value.properties.forEach(child => {
    const condition = overrides[parent][child.key.name];

    if (condition) {
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

  const printOptions = options.printOptions;

  return renameOverrides({
    root,
    componentName: 'RadioButton',
    overrides: {
      spaceStack: 'marginBlockEnd',
      input: {
        spaceInline: 'gap',
      },
    },
  }).toSource(printOptions);
};
