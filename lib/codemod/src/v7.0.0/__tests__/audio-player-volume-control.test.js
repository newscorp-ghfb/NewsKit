const jscodeshift = require('jscodeshift');
const audioPlayerVolumeControlTransform = require('../audio-player-volume-control');
const dedent = require('dedent-js');

describe('AudioPlayerVolumeControl', () => {
  let source;
  let expected;
  let actual;

  test('replace distance with offset override prop', () => {
    source = dedent`
      <AudioPlayerVolumeControl
        overrides={{
          popover: {
            distance: "space050",
            pointer: {
              size: "sizing080"
            },
          },

          stylePreset: "codemod"
        }}
      />
    `;

    expected = dedent`
      <AudioPlayerVolumeControl
        overrides={{
          popover: {
            pointer: {
              size: "sizing080"
            },

            offset: "space050"
          },

          stylePreset: "codemod"
        }}
      />
    `;

    actual = audioPlayerVolumeControlTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('no distance prop in popover overrides - no change', () => {
    source = dedent`
      <AudioPlayerVolumeControl
        overrides={{
          popover: {
            pointer: {
              size: "sizing080"
            }
          },

          stylePreset: "codemod"
        }}
      />
    `;

    expected = dedent`
      <AudioPlayerVolumeControl
        overrides={{
          popover: {
            pointer: {
              size: "sizing080"
            }
          },

          stylePreset: "codemod"
        }}
      />
    `;

    actual = audioPlayerVolumeControlTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('no popover overrides - no change', () => {
    source = dedent`
      <AudioPlayerVolumeControl
        overrides={{
          stylePreset: "codemod"
        }}
      />
    `;

    expected = dedent`
      <AudioPlayerVolumeControl
        overrides={{
          stylePreset: "codemod"
        }}
      />
    `;

    actual = audioPlayerVolumeControlTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('no overrides - no change', () => {
    source = dedent`
      <AudioPlayerVolumeControl/>
    `;

    expected = dedent`
      <AudioPlayerVolumeControl/>
    `;

    actual = audioPlayerVolumeControlTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });
});
