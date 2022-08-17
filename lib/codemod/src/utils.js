// Functions for changing Link to LinkInline /LinkStandalone

function tagReplacement(j, tag, replaceWith) {
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
}

module.exports = {
  tagReplacement,
};
