const {updateOverrides} = require('../utils/update-overrides');
const {replaceDistance} = require('../utils/replace-distance');

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  updateOverrides(root, jscodeshift, 'Tooltip', overrides => {
    if (!overrides) return;
    if (!overrides.distance) return overrides;
    return replaceDistance(overrides);
  });

  return root.toSource();
};
