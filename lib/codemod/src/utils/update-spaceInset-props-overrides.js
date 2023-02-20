const {objectToExpression} = require('./helpers');

const getChunk = (file, start, end) => file.substring(start, end);

const strToObject = str => eval(`(${str})`);

const updateProps = (root, j, source, componentName, propFn) =>
  root.findJSXElements(componentName).forEach(path => {
    const attributes = path.node.openingElement.attributes;
    attributes.forEach((node, index) => {
      if (
        node.type === 'JSXAttribute' &&
        node.name.name === 'spaceInset' &&
        node.value.type === 'Literal'
      ) {
        const propValue = node.value.value;
        const {paddingBlock, paddingInline} = propFn(propValue);

        attributes[index] = j.jsxAttribute(
          j.jsxIdentifier('paddingBlock'),
          j.literal(paddingBlock),
        );
        attributes[index + 1] = j.jsxAttribute(
          j.jsxIdentifier('paddingInline'),
          j.literal(paddingInline),
        );
      }
      if (
        node.type === 'JSXAttribute' &&
        node.name.name === 'spaceInset' &&
        node.value.type === 'JSXExpressionContainer'
      ) {
        const objectChunk = getChunk(
          source,
          node.value.expression.start,
          node.value.expression.end,
        );
        const newObj = strToObject(objectChunk);
        const {paddingBlock, paddingInline} = propFn(newObj);
        attributes[index] = j.jsxAttribute(
          j.jsxIdentifier('paddingBlock'),
          j.jsxExpressionContainer(objectToExpression(j, paddingBlock)),
        );
        attributes[index + 1] = j.jsxAttribute(
          j.jsxIdentifier('paddingInline'),
          j.jsxExpressionContainer(objectToExpression(j, paddingInline)),
        );
      }
    });
  });
const updateOverrides = (root, j, source, componentName, propFn) => {
  root.findJSXElements(componentName).forEach(path => {
    const attributes = path.node.openingElement.attributes;
    let hasOverridesProp = false;
    attributes.forEach((node, index) => {
      if (node.type === 'JSXAttribute' && node.name.name === 'overrides') {
        hasOverridesProp = true;

        const objectChunk = getChunk(
          source,
          node.value.expression.start,
          node.value.expression.end,
        );
        const overridesObject = strToObject(objectChunk);
        const newOverrides = propFn(overridesObject);

        if (
          componentName !== 'CaptionInset' &&
          !objectChunk.includes('spaceInset')
        ) {
          return;
        }
        attributes[index] = j.jsxAttribute(
          j.jsxIdentifier('overrides'),
          j.jsxExpressionContainer(objectToExpression(j, newOverrides)),
        );
      }
    });

    if (hasOverridesProp === false) {
      // Currently this component does not have overrides prop
      // We execute the propFn with undefined as arg
      // and add prop overrides only of the return value is Object
      const newOverrides = propFn(undefined);
      if (typeof newOverrides === 'object') {
        path.node.openingElement.attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier('overrides'),
            j.jsxExpressionContainer(objectToExpression(j, newOverrides)),
          ),
        );
      }
    }
  });
};

module.exports = {
  updateProps,
  updateOverrides,
};
