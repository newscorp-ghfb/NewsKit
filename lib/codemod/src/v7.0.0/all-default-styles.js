const updateAudioPlayerDefaultStyles = require('./audio-player-default-styles');
const updateAccordionDefaultStyles = require('./accordion-default-styles');

const codemods = [updateAudioPlayerDefaultStyles, updateAccordionDefaultStyles];

module.exports = function transformer(file, api) {
  let source = file.source;
  const jscodeshift = api.jscodeshift;

  codemods.forEach(fn => {
    source = fn({source}, api);
  });

  const root = jscodeshift(source);

  return root.toSource();
};
