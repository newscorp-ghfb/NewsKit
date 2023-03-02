const jscodeshift = require('jscodeshift');
const updateDefaultAudioPlayerPlayPauseButtonSize = require('../all-default');
const dedent = require('dedent-js');

describe('updateDefaultAudioPlayerPlayPauseButtonSize', () => {
  let source;
  let expected;
  let actual;

  test('adds size to AudioPlayerPlayPauseButton', () => {
    source = dedent`
      const componentName = () => (
        <>
          <AudioPlayerPlayPauseButton />
          <AudioPlayerPlayPauseButton size="small" />
          <AnotherComponent />
        </>
      );
    `;

    expected = dedent`
      const componentName = () => (
        <>
          <AudioPlayerPlayPauseButton size="large" />
          <AudioPlayerPlayPauseButton size="small" />
          <AnotherComponent />
        </>
      );
    `;

    actual = updateDefaultAudioPlayerPlayPauseButtonSize(
      {source},
      {jscodeshift},
    );

    expect(actual).toEqual(expected);
  });
});
