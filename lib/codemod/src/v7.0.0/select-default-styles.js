const addProp = require('../utils/add-prop');

const SLIDER_PROP_UPDATES = [
  ['Select', 'overrides.small.button.minHeight', 'sizing060'],
  ['Select', 'overrides.medium.button.typographyPreset', 'utilityBody020'],
  ['Select', 'overrides.medium.button.spaceInset', 'space020'],
  ['Select', 'overrides.large.button.spaceInset', 'space030'],
  ['SelectOption', 'overrides.medium.minHeight', 'sizing080'],
  ['SelectOption', 'overrides.large.minHeight', 'sizing090'],
  ['SelectOption', 'overrides.medium.spaceInset', 'spaceInset020'],
  ['SelectOption', 'overrides.large.spaceInset', 'spaceInsetStretch030'],
];

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  SLIDER_PROP_UPDATES.forEach(([component, prop, value]) => {
    addProp(root, component, prop, value, jscodeshift);
  });

  return root.toSource();
};
