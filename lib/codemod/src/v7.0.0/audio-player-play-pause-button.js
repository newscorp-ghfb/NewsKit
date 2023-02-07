const addProp = require('../utils/add-prop');

const PROP_UPDATES = [['AudioPlayerPlayPauseButton', 'size', 'large']];

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  PROP_UPDATES.forEach(([component, prop, value]) => {
    addProp(root, component, prop, value, jscodeshift);
  });

  return root.toSource();
};
