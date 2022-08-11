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

const enumList = [
  {compName: 'Button', propName: 'size'},
  {compName: 'Flag', propName: 'size'},
  {compName: 'Stack', propName: ['flow', 'stackDistribution']},
  {compName: 'StackChild', propName: 'alignSelf'},
  {
    compName: 'Tabs',
    propName: ['size', 'align', 'indicatorPosition', 'distribution'],
  },
  {compName: 'Menu', propName: ['size', 'align']},
  {compName: 'Slider', propName: 'labelPosition'},
  {compName: 'FormInputTextField', propName: 'size'},
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
  const replaceEnumProp = (compName, propName) =>
    root
      .findJSXElements(compName)
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
        const newNode = j.literal(`${toKebabCase(propValue)}`);
        return newNode;
      });

  enumList.forEach(({compName, propName}) => {
    if (Array.isArray(propName)) {
      propName.forEach(prop => {
        replaceEnumProp(compName, prop);
      });
    } else {
      replaceEnumProp(compName, propName);
    }
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
