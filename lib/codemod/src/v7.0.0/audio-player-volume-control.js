const {updateOverrides} = require('../utils/update-props-overrides');
const {replaceDistance} = require('../utils/replace-distance');

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);
  const source = root.toSource();

  updateOverrides(
    root,
    jscodeshift,
    source,
    'AudioPlayerVolumeControl',
    'distance',
    overrides => {
      if (!overrides) return overrides;
      if (!overrides.popover) return overrides;
      return replaceDistance(overrides);
    },
  );

  return root.toSource();
};
