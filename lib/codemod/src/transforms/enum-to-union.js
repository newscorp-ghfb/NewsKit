const {toKebabCase} = require('../utils/to-kebab-case');

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

const enumPropList = [
  'size',
  'flow',
  'stackDistribution',
  'align',
  'alignSelf',
  'labelPosition',
  'indicatorPosition',
  'distribution',
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

const transformEnums = (j, root) => {
  enumPropList.forEach(propName => {
    root
      .find(j.JSXAttribute, {
        name: {
          type: 'JSXIdentifier',
          name: propName,
        },
        value: {
          type: 'JSXExpressionContainer',
        },
      })
      .find(j.JSXExpressionContainer)
      .replaceWith(nodePath => {
        const propValue = nodePath.value.expression.property.name;
        const newPropValue = `${toKebabCase(propValue)}`
        const newNode = (propName === "stackDistribution" && ["start", "end"].includes(newPropValue)) ? j.literal(`flex-${toKebabCase(propValue)}`) : j.literal(`${toKebabCase(propValue)}`);
        return newNode;
      });
  });
};

module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'double',
    objectCurlySpacing: false,
  };

  removeEnumImports(j, root);

  transformEnums(j, root);

  return root.toSource(printOptions);
};
