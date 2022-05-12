function removeComponent({root, componentName}) {
  return root.findJSXElements(componentName).forEach(element => {
    // element.replace('{/* COMPONENT REMOVED */}');
    // element.replace('<CustomButton />');
    element.replace(null);
  });
}

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions;

  return removeComponent({
    root,
    componentName: 'RadioButton',
  }).toSource(printOptions);
};
