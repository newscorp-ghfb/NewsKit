// Change the tag from Link to LinkInline

const OpeningTagReplacement = (j, tag, replaceWith) => {
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
};
const ClosingTagReplacement = (j, tag, replaceWith) => {
  // Change closing tag from Link to LinkInline
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
};

module.exports = OpeningTagReplacement;
module.exports = ClosingTagReplacement;
