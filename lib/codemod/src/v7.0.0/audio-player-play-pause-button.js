const addProp = require('../utils/add-prop');

const PROP_UPDATES = [['size', 'large']];

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  PROP_UPDATES.forEach(([prop, value]) => {
    addProp(jscodeshift, root, 'AudioPlayerPlayPauseButton', prop, value);
  });

  return root.toSource();
};
