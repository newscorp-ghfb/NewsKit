const {updateOverrides} = require('../utils/update-overrides');
const {replaceDistance} = require('../utils/replace-distance');

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  updateOverrides(root, jscodeshift, 'AudioPlayerVolumeControl', overrides => {
    if (!overrides) return overrides;
    if (!overrides.popover) return overrides;
    return replaceDistance(overrides);
  });

  return root.toSource();
};
