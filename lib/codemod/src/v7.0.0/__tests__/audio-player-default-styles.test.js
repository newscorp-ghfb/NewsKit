const jscodeshift = require('jscodeshift');
const updateAudioPlayerDefaultStyles = require('../audio-player-default-styles');
const dedent = require('dedent-js');

describe('updateAudioPlayerDefaultStyles', () => {
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

    actual = updateAudioPlayerDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });

  test('adds spaceBetween and thumb / popover stylePresets to AudioPlayerVolumeControl', () => {
    source = dedent`
      const componentName = () => (
        <>
          <AudioPlayerVolumeControl />
          <AudioPlayerVolumeControl
            overrides={{
              popover: {
                stylePreset: "audioPlayerVolumeControlPopoverCustom"
              },
              slider: {
                thumb: {
                  stylePreset: "audioPlayerVolumeControlThumbCustom"
                }
              },
              spaceBetween: "space020"
            }} />
          <AnotherComponent />
        </>
      );
    `;

    expected = dedent`
      const componentName = () => (
        <>
          <AudioPlayerVolumeControl
            overrides={{
              popover: {
                stylePreset: "audioPlayerVolumeControlPopoverOld"
              },
      
              slider: {
                thumb: {
                  stylePreset: "audioPlayerVolumeControlThumbOld"
                }
              },
      
              spaceBetween: "space030"
            }} />
          <AudioPlayerVolumeControl
            overrides={{
              popover: {
                stylePreset: "audioPlayerVolumeControlPopoverCustom"
              },
      
              slider: {
                thumb: {
                  stylePreset: "audioPlayerVolumeControlThumbCustom"
                }
              },
      
              spaceBetween: "space020"
            }} />
          <AnotherComponent />
        </>
      );
    `;

    actual = updateAudioPlayerDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });

  test('adds overrides.typographyPreset prop to AudioPlayerTimeDisplay', () => {
    source = dedent`
      const componentName = () => (
        <>
          <AudioPlayerTimeDisplay />
          <AudioPlayerTimeDisplay
            overrides={{
              typographyPreset: "utilityLabel010"
            }} />
          <AnotherComponent />
        </>
      );
    `;

    expected = dedent`
      const componentName = () => (
        <>
          <AudioPlayerTimeDisplay
            overrides={{
              typographyPreset: "utilityLabel030"
            }} />
          <AudioPlayerTimeDisplay
            overrides={{
              typographyPreset: "utilityLabel010"
            }} />
          <AnotherComponent />
        </>
      );
    `;

    actual = updateAudioPlayerDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });
});
