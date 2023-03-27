const jscodeshift = require('jscodeshift');
const updateAllDefault = require('../all-default');
const dedent = require('dedent-js');

describe('all-default', () => {
  let source;
  let expected;
  let actual;

  test('applies audio player default play pause button size', () => {
    source = dedent`
      const componentName = () => <AudioPlayerPlayPauseButton />;
    `;

    expected = dedent`
      const componentName = () => <AudioPlayerPlayPauseButton size="large" />;
    `;

    actual = updateAllDefault({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });
});
