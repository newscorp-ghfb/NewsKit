const addProp = require('../utils/add-prop');

const PROP_UPDATES = [['overrides.header.stylePreset', 'accordionHeaderOld']];

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  PROP_UPDATES.forEach(([prop, value]) => {
    addProp(root, 'Accordion', prop, value, jscodeshift);
  });

  return root.toSource();
};
