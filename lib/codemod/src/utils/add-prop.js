const isObject = obj =>
  typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

const getAttributeValue = (path, attribute) =>
  path.node.openingElement.attributes.find(
    ({type, name: {name}}) => type === 'JSXAttribute' && name === attribute,
  );

// This function converts an object to a JSX expression.
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

// This function builds a nested object from an array of props and a final value.
const buildNestedObject = (props, value) => {
  const reversed = props.slice().reverse();
  return reversed.reduce(
    (prev, next, i) => ({
      [next]: i > 0 ? {...prev} : value,
    }),
    {},
  );
};

// This function merges two objects together, giving priority to obj1.
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

// This function parses a JSX expression to a primitive or object.
const parseNodeValue = ({type, value, ...rest}) => {
  if (type === 'Literal') {
    return value;
  }
  if (type === 'ObjectExpression') {
    return rest.properties.reduce(
      (prev, {key: {name}, value: v}) => ({
        ...prev,
        [name]: parseNodeValue(v),
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


const addNestedProp = (path, props, propValue, filter, jscodeshift) => {
  let filterPropKey, filterPropValue;
  const [prop, ...rest] = props.split('.');
  if (filter && typeof filter === 'object') {
    filterPropKey = Object.keys(filter)[0];
    filterPropValue = filter[filterPropKey];
  }
  const existing = getAttributeValue(path, prop);

  const matchingFilter =
    path.node.openingElement.attributes.find(e => e.name.name === filterPropKey)
      ?.value?.value === filterPropValue;

  const newValue =
    // Proceed if there is a matching filter or no filter at all
    (matchingFilter || !filter) &&
    mergeObjects(
      !!existing ? parseNodeValue(existing.value.expression) : {},
      buildNestedObject(rest, propValue),
    );
  path.node.openingElement.attributes = [
    ...path.node.openingElement.attributes.filter(
      ({name: {name}}) => name !== prop,
    ),
    jscodeshift.jsxAttribute(
      jscodeshift.jsxIdentifier(prop),
      jscodeshift.jsxExpressionContainer(
        objectToExpression(jscodeshift, newValue),
      ),
    ),
  ];
};

module.exports = function addProp(
  jscodeshift,
  root,
  componentName,
  prop,
  propValue,
  filterProp, // An object in this form {propName: propValue}, used for cases where we need to apply some updates only if the prop is provided to the component. Example: {size: "small"} - the changes would be applied only if the component has size="small" prop.
) {
  return root.findJSXElements(componentName).forEach(path => {
    if (prop.includes('.') || filterProp) {
      addNestedProp(path, prop, propValue, filterProp, jscodeshift);
    } else {
      addSimpleProp(path, prop, propValue, jscodeshift);
    }
  });
};
