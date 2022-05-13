function renameProps({root, componentName, props}) {
  return root.findJSXElements(componentName).forEach(path => {
    path.node.openingElement.attributes.forEach(node => {
      if (
        node.type === 'JSXAttribute' &&
        Object.keys(props).includes(node.name.name)
      ) {
        node.name.name = props[node.name.name];
      }
    });
  });
}

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions;

  return renameProps({
    root,
    componentName: 'RadioButton',
    props: {
      value: 'newValue',
      checked: 'selected',
      onChange: 'onSelect',
    },
  }).toSource(printOptions);
};
