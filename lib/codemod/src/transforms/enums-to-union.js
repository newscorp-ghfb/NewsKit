const {toKebabCase} = require('./utils');

const enumNames = [
  'ButtonSize',
  'FlagSize',
  'MenuItemAlign',
  'MenuItemSize',
  'LabelPosition',
  'Flow',
  'StackDistribution',
  'AlignSelfValues',
  'TabAlign',
  'TabSize',
  'TabsDistribution',
  'TabsIndicatorPosition',
  'TagSize',
  'TextFieldSize',
  'TextInputSize',
];

const getNewskitImports = (j, root) =>
  root.find(j.ImportDeclaration, {source: {value: 'newskit'}}).nodes();

const removeEnumImports = (j, root) => {
  let newskitImports = getNewskitImports(j, root);

  j(newskitImports)
    .find(j.ImportSpecifier)
    .filter(s => {
      const name = s.value.imported.name;
      if (enumNames.includes(name)) {
        j(s).remove();
      }
    });
};

module.exports = function transformer(
  file,
  api,
  {componentName, propName, options},
) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options || {
    quote: 'double',
    objectCurlySpacing: false,
  };

  removeEnumImports(j, root);

  const replaceEnumProp = prop =>
    root
      .findJSXElements(componentName)
      .find(j.JSXAttribute, {
        name: {
          type: 'JSXIdentifier',
          name: prop,
        },
        value: {
          type: 'JSXExpressionContainer',
        },
      })
      .find(j.JSXExpressionContainer)
      .replaceWith(nodePath => {
        const propValue = nodePath.value.expression.property.name;
        const newNode = j.literal(`${toKebabCase(propValue)}`);
        return newNode;
      });

  // forEach path find the one with the propName and replace with NewCode
  if (Array.isArray(propName)) {
    propName.forEach(prop => {
      replaceEnumProp(prop);
    });
  } else {
    replaceEnumProp(propName);
  }
  return root.toSource(printOptions);
};
