module.exports = function addProp(
  root,
  componentName,
  prop,
  propValue,
  jscodeshift,
) {
  return root.findJSXElements(componentName).forEach(path => {
    let doesPropExist;

    path.node.openingElement.attributes.forEach(attributeObject => {
      if (
        attributeObject.type === 'JSXAttribute' &&
        attributeObject.name.name === prop
      ) {
        doesPropExist = true;
      }
    });

    if (!doesPropExist) {
      path.node.openingElement.attributes.push(
        jscodeshift.jsxAttribute(
          jscodeshift.jsxIdentifier(prop),
          jscodeshift.jsxExpressionContainer(jscodeshift.literal(propValue)),
        ),
      );
    }
  });
};
