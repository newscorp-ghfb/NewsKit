const jscodeshift = require('jscodeshift');
const updateAllDefaultStyles = require('../all-default-styles');
const dedent = require('dedent-js');

describe('all-default-styles', () => {
  let source;
  let expected;
  let actual;

  test('applies audio player default style updates', () => {
    source = dedent`
      const componentName = () => <AudioPlayerPlayPauseButton />;
    `;

    expected = dedent`
      const componentName = () => <AudioPlayerPlayPauseButton size="large" />;
    `;

    actual = updateAllDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });
});
