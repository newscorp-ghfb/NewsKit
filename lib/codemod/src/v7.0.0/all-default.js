const updateDefaultAudioPlayerPlayPauseButtonSize = require('./audio-player-play-pause-button');

const codemods = [updateDefaultAudioPlayerPlayPauseButtonSize];

module.exports = function transformer(file, api) {
  let source = file.source;
  const jscodeshift = api.jscodeshift;

  codemods.forEach(fn => {
    source = fn({source}, api);
  });

  const root = jscodeshift(source);

  return root.toSource();
};
