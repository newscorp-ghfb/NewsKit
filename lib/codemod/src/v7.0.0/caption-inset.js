const {replaceComponent} = require('../utils/component-utils');
const {updateOverrides} = require('../utils/update-spaceInset-props-overrides');
const {replaceSpaceInset} = require('../utils/replace-space-inset');

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);
  const source = root.toSource();

  updateOverrides(root, jscodeshift, source, 'CaptionInset', overrides => {
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

    const {spaceInset} = overrides;

    // does not have spaceInset so we add it manually
    if (!spaceInset) {
      return {
        ...overrides,
        ...defaultPadding,
      };
    }

    return replaceSpaceInset(overrides);
  });

  replaceComponent(jscodeshift, root, 'CaptionInset', 'Caption');

  return root.toSource();
};
