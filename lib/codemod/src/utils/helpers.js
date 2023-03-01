const isObject = obj =>
  typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

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

module.exports = {
  objectToExpression,
  isObject,
};
