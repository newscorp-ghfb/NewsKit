// Functions for changing Link to LinkInline /LinkStandalone

const openingTagReplacement = (j, tag, replaceWith) => {
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
};
const closingTagReplacement = (j, tag, replaceWith) => {
  // Change closing tag from Link to LinkInline
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
};

module.exports = openingTagReplacement;
module.exports = closingTagReplacement;
