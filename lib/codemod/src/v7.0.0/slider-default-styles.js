const addProp = require('../utils/add-prop');

const SLIDER_PROP_UPDATES = [
  ['Slider', 'overrides.track.size', 'sizing030'],
  ['Slider', 'overrides.labels.stylePreset', 'sliderLabelsOld'],
];

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  SLIDER_PROP_UPDATES.forEach(([component, prop, value]) => {
    addProp(root, component, prop, value, jscodeshift);
  });

  return root.toSource();
};
