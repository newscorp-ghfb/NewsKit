const {objectToExpression} = require('./helpers');

const getChunk = (file, start, end) => file.substring(start, end);

const strToObject = str => eval(`(${str})`);

module.exports = updateOverrides = (root, j, componentName, propFn) => {
  const source = root.toSource();

  return root.findJSXElements(componentName).forEach(path => {
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
  updateOverrides,
};
