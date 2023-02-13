const {replaceComponent} = require('../utils/component-utils');
const {updateOverrides} = require('../utils/update-overrides');

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
    // CaptionInset had this padding
    const defaultPadding = {
      paddingBlock: {
        xs: 'space040',
        md: 'space050',
      },
      paddingInline: {
        xs: 'space040',
        md: 'space050',
      },
    };

    // when there is no overrides prop
    // we want to add some defaults
    if (!overrides) {
      return defaultPadding;
    }

    const {spaceInset, ...otherOverrides} = overrides;

    // does not have spaceInset so we  it manually
    if (!spaceInset) {
      return {
        ...overrides,
        ...defaultPadding,
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
