const {replaceComponent} = require('../utils/component-utils');
const _ = require('lodash');

const getChunk = (file, start, end) => file.substring(start, end);

const strToObject = str => eval(`(${str})`);

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

const isObject = obj =>
  typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

const updateOverrides = (root, j, componentName, propFn) => {
  const source = root.toSource();

  return root.findJSXElements(componentName).forEach(path => {
    const attributes = path.node.openingElement.attributes;
    attributes.forEach((node, index) => {
      if (node.type === 'JSXAttribute' && node.name.name === 'overrides') {
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
  });
};

const map = {
  spaceInset010: {
    paddingInline: 'space010',
    paddingBlock: 'space010',
  },
  spaceInset020: {
    paddingInline: 'space020',
    paddingBlock: 'space020',
  },
  spaceInsetSquish010: {
    paddingInline: 'space010',
    paddingBlock: 'space020',
  },
  spaceInsetStretch010: {
    paddingInline: 'space020',
    paddingBlock: 'space010',
  },
};

const getPadding = token => {
  if (typeof token === 'string') {
    return map[token] || {};
  }
  if (typeof token === 'object') {
    const mqKeys = Object.keys(token);
    return mqKeys.reduce(
      (obj, mqKey) => {
        const spaceToken = token[mqKey];
        const {paddingBlock, paddingInline} = map[spaceToken];
        return {
          paddingBlock: {[mqKey]: paddingBlock, ...obj.paddingBlock},
          paddingInline: {[mqKey]: paddingInline, ...obj.paddingInline},
        };
      },
      {paddingBlock: {}, paddingInline: {}},
    );
  }
};

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  updateOverrides(root, jscodeshift, 'CaptionInset', overrides => {
    const {spaceInset, ...otherOverrides} = overrides;

    // does not have spaceInset so we add manually
    if (!spaceInset) {
      return {
        ...overrides,
        paddingBlock: 'space020',
        paddingInline: 'space020',
      };
    }

    const padding = getPadding(spaceInset);
    const newOverrides = {
      ...otherOverrides,
      ...padding,
    };
    return newOverrides;
  });

  replaceComponent(jscodeshift, root, 'CaptionInset', 'Caption');

  return root.toSource();
};
