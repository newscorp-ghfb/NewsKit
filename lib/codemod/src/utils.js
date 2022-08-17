// Functions for changing Link to LinkInline /LinkStandalone

const tagReplacement = (j, tag, replaceWith) => {
  const name = tag.find(j.JSXIdentifier, {name: 'Link'});
  name.replaceWith(j.jsxIdentifier(replaceWith));
};


module.exports = tagReplacement;

