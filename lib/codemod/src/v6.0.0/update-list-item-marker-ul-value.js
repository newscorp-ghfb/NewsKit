const addProp = require('../utils/add-prop');

module.exports = function transformer(file, api) {
  const jscodeshift = api.jscodeshift;
  const root = jscodeshift(file.source);

  return addProp(
    jscodeshift,
    root,
    'UnorderedList',
    'listItemMarker',
    null,
  ).toSource();
};
