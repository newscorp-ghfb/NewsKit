const isObject = obj =>
  typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

const getAttributeValue = (path, attribute) =>
  path.node.openingElement.attributes.find(
    ({type, name: {name}}) => type === 'JSXAttribute' && name === attribute,
  );

const objectToExpression = (jscodeshift, obj) =>
  jscodeshift.objectExpression(
    Object.entries(obj).reduce(
      (prev, [k, v]) => [
        ...prev,
        jscodeshift.objectProperty(
          jscodeshift.identifier(k),
          isObject(v)
            ? objectToExpression(jscodeshift, v)
            : jscodeshift.literal(v),
        ),
      ],
      [],
    ),
  );

const buildNestedObject = (props, value) => {
  const reversed = props.slice().reverse();
  return reversed.reduce(
    (prev, next, i) => ({
      [next]: i > 0 ? {...prev} : value,
    }),
    {},
  );
};

const mergeObjects = (obj1, obj2) =>
  Object.entries(obj1).reduce(
    (prev, [k, v]) => ({
      ...prev,
      [k]: isObject(v) ? mergeObjects(v, (obj2 || {})[k]) : v,
    }),
    {
      ...obj2,
    },
  );

const parseNodeValue = ({type, value, ...rest}) => {
  if (type === 'Literal') {
    return value;
  }
  if (type === 'ObjectExpression') {
    return rest.properties.reduce(
      (prev, {key: {name}, value}) => ({
        ...prev,
        [name]: parseNodeValue(value),
      }),
      {},
    );
  }
};

const addSimpleProp = (path, prop, propValue, jscodeshift) => {
  const existing = getAttributeValue(path, prop);
  if (!!existing) {
    return;
  }
  const asLiteral = jscodeshift.literal(propValue);
  const value =
    typeof propValue === 'string'
      ? asLiteral
      : jscodeshift.jsxExpressionContainer(asLiteral);
  path.node.openingElement.attributes.push(
    jscodeshift.jsxAttribute(jscodeshift.jsxIdentifier(prop), value),
  );
};

const addNestedProp = (path, props, propValue, jscodeshift) => {
  const [prop, ...rest] = props.split('.');
  const existing = getAttributeValue(path, prop);
  const before = !!existing ? parseNodeValue(existing.value.expression) : {};
  const after = buildNestedObject(rest, propValue);
  const merged = mergeObjects(before, after);
  const expression = objectToExpression(jscodeshift, merged);
  const value = jscodeshift.jsxExpressionContainer(expression);
  path.node.openingElement.attributes =
    path.node.openingElement.attributes.filter(
      ({name: {name}}) => name !== prop,
    );
  path.node.openingElement.attributes.push(
    jscodeshift.jsxAttribute(jscodeshift.jsxIdentifier(prop), value),
  );
};

module.exports = function addProp(
  root,
  componentName,
  prop,
  propValue,
  jscodeshift,
) {
  return root.findJSXElements(componentName).forEach(path => {
    if (!prop.includes('.')) {
      addSimpleProp(path, prop, propValue, jscodeshift);
    } else {
      addNestedProp(path, prop, propValue, jscodeshift);
    }
  });
};
