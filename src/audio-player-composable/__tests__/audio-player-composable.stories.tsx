/* eslint-disable no-console */
import * as React from 'react';
import {AudioPlayerPlayPauseButton} from '../components/play-pause-button';
import {AudioPlayerTimeDisplay} from '../components/time-display';
import {AudioPlayerForwardButton} from '../components/forward-button';
import {AudioPlayerReplayButton} from '../components/replay-button';
import {AudioPlayerComposable} from '../audio-player-composable';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {calculateTime} from '../components/time-display/utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {AudioPlayerSeekBar} from '../components/seek-bar';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Block} from '../../block';
import {ButtonSize} from '../../button/types';

const AudioPlayerContainer = styled.div<{dark?: boolean}>`
  border: solid 1px red;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
  ${({dark}) => (dark ? 'background: #000' : null)}
`;

// create own theme
const myCustomTheme = createTheme({
  name: 'my-custom-audio-player-theme',
  overrides: {
    stylePresets: {
      customAudioPlayerThumb: {
        base: {
          backgroundColor: '#f6807e',
          borderRadius: '50%',
          textAlign: 'center',
        },
      },
      customAudioPlayerSeekBarTrack: {
        base: {
          backgroundColor: 'red',
        },
      },
      customAudioPlayerSeekBarIndicator: {
        base: {
          backgroundColor: 'yellow',
        },
      },
      customAudioPlayerSeekBarBuffering: {
        base: {
          backgroundColor: 'green',
        },
      },
      customAudioPlayerLabels: {
        base: {
          backgroundColor: 'grey',
          color: '#blue',
        },
      },
    },
  },
});

export default {
  title: 'NewsKit Light/audio-player-composable',
  component: () => 'None',
};

export const AudioPlayer = () => (
  <>
    <StorybookSubHeading>Audio player inline recorded </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player inline"
    >
      <GridLayout
        columns="auto 40px 1fr auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
      </GridLayout>
    </AudioPlayerComposable>
  </>
);
AudioPlayer.storyName = 'audio-player';

export const AudioPlayPauseButton = () => (
  <AudioPlayerComposable
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player play pause button"
  >
    <AudioPlayerPlayPauseButton
      onClick={() => {
        console.log('customer click function');
      }}
    />
  </AudioPlayerComposable>
);
AudioPlayPauseButton.storyName = 'audio-play-pause-button';

export const AudioPlayPauseButtonAutoplay = () => (
  <AudioPlayerComposable
    autoPlay
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player auto"
  >
    <AudioPlayerPlayPauseButton
      onClick={() => {
        console.log('customer click function');
      }}
    />
  </AudioPlayerComposable>
);

AudioPlayPauseButtonAutoplay.storyName = 'audio-play-pause-button-autoplay';

export const MultipleAudioPlayPauseButtonWithOverrides = () => (
  <>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 1"
    >
      <AudioPlayerPlayPauseButton
        overrides={{
          stylePreset: {
            xs: 'buttonOutlinedNegative',
            md: 'buttonSolidPositive',
          },
        }}
      />
    </AudioPlayerComposable>
    <br />
    <br />
    <br />
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 2"
    >
      <AudioPlayerPlayPauseButton
        overrides={{
          stylePreset: {
            xs: 'buttonOutlinedNegative',
            md: 'buttonSolidPositive',
          },
        }}
      />
    </AudioPlayerComposable>
  </>
);

MultipleAudioPlayPauseButtonWithOverrides.storyName =
  'multiple-audio-play-pause-with-overrides';

const fullAudioPlayerAreas = `
  seekBar seekBar seekBar 
  currentTime none totalTime  
  volume controls link
 `;

export const AudioPlayerForwardReplayButton = () => (
  <>
    <StorybookSubHeading>
      with default forward and replay buttons
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player skip buttons"
    >
      <GridLayout rowGap="20px" areas={fullAudioPlayerAreas}>
        {Areas => (
          <>
            <Areas.SeekBar>
              <AudioPlayerSeekBar />
            </Areas.SeekBar>
            <Areas.CurrentTime>
              <AudioPlayerTimeDisplay
                format={({currentTime}) => calculateTime(currentTime)}
              />
            </Areas.CurrentTime>
            <Areas.TotalTime justifySelf="end">
              <AudioPlayerTimeDisplay
                format={({duration}) => calculateTime(duration)}
              />
            </Areas.TotalTime>
            <Areas.Volume alignSelf="center" justifySelf="start">
              Not yet
            </Areas.Volume>
            <Areas.Link alignSelf="center" justifySelf="end">
              Not yet
            </Areas.Link>
            <Areas.Controls>
              <GridLayout
                columns="repeat(5, auto)"
                columnGap="20px"
                justifyContent="center"
                alignItems="center"
              >
                <AudioPlayerReplayButton />
                <AudioPlayerPlayPauseButton />
                <AudioPlayerForwardButton />
              </GridLayout>
            </Areas.Controls>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player skip buttons override"
    >
      <GridLayout rowGap="20px" areas={fullAudioPlayerAreas}>
        {Areas => (
          <>
            <Areas.SeekBar>
              <AudioPlayerSeekBar />
            </Areas.SeekBar>
            <Areas.CurrentTime>
              <AudioPlayerTimeDisplay
                format={({currentTime}) => calculateTime(currentTime)}
              />
            </Areas.CurrentTime>
            <Areas.TotalTime justifySelf="end">
              <AudioPlayerTimeDisplay
                format={({duration}) => calculateTime(duration)}
              />
            </Areas.TotalTime>
            <Areas.Volume alignSelf="center" justifySelf="start">
              Not yet
            </Areas.Volume>
            <Areas.Link alignSelf="center" justifySelf="end">
              Not yet
            </Areas.Link>
            <Areas.Controls>
              <GridLayout
                columns="repeat(5, auto)"
                columnGap="20px"
                justifyContent="center"
                alignItems="center"
              >
                <AudioPlayerReplayButton
                  overrides={{
                    iconSize: 'iconSize030',
                    stylePreset: 'buttonOutlinedNegative',
                  }}
                />
                <AudioPlayerPlayPauseButton />
                <AudioPlayerForwardButton
                  overrides={{
                    iconSize: 'iconSize030',
                    stylePreset: 'buttonOutlinedNegative',
                  }}
                />
              </GridLayout>
            </Areas.Controls>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
  </>
);

AudioPlayerForwardReplayButton.storyName = 'audio-forward-replay-button';

export const AudioPlayerWithTimeDisplay = () => (
  <>
    <StorybookSubHeading>with time display label default</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 3"
    >
      <AudioPlayerPlayPauseButton />

      <Block spaceStack="space030" />
      <AudioPlayerSeekBar />
      <Block spaceStack="space030" />
      <GridLayout justifyItems="end">
        <AudioPlayerTimeDisplay />
      </GridLayout>
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time current time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 4"
    >
      <AudioPlayerPlayPauseButton />
      <Block spaceStack="space030" />
      <AudioPlayerSeekBar />
      <Block spaceStack="space030" />
      <GridLayout justifyItems="start">
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
      </GridLayout>
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time length time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 5"
    >
      <AudioPlayerPlayPauseButton />
      <Block spaceStack="space030" />
      <AudioPlayerSeekBar />
      <Block spaceStack="space030" />
      <GridLayout justifyItems="end">
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
      </GridLayout>
    </AudioPlayerComposable>
  </>
);
AudioPlayerWithTimeDisplay.storyName = 'audio-player-with-time-display';

export const AudioPlayerTimeDisplayOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 6"
    >
      <AudioPlayerPlayPauseButton />
      <Block spaceStack="space030" />
      <AudioPlayerSeekBar />
      <Block spaceStack="space030" />
      <GridLayout columns="auto 1fr auto">
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
          overrides={{
            typographyPreset: 'editorialSubheadline010',
            stylePreset: 'customAudioPlayerLabels',
          }}
        />

        <GridLayoutItem />

        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
          overrides={{
            typographyPreset: 'editorialSubheadline010',
            stylePreset: 'customAudioPlayerLabels',
          }}
        />
      </GridLayout>
    </AudioPlayerComposable>
  </ThemeProvider>
);

AudioPlayerTimeDisplayOverrides.storyName =
  'audio-player-time-display-overrides';

export const AudioPlayerSeekBarStories = () => (
  <AudioPlayerComposable
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player 7"
  >
    <AudioPlayerSeekBar />
    <AudioPlayerPlayPauseButton />
  </AudioPlayerComposable>
);

AudioPlayerSeekBarStories.storyName = 'audio-player-seek-bar';

export const AudioPlayerSeekBarWithOverrides = () => (
  <AudioPlayerContainer dark>
    <ThemeProvider theme={myCustomTheme}>
      <AudioPlayerComposable
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ariaLandmark="audio player 8"
      >
        <AudioPlayerSeekBar
          overrides={{
            slider: {
              track: {
                stylePreset: 'customAudioPlayerSeekBarTrack',
                size: 'sizing030',
              },
              indicator: {
                stylePreset: 'customAudioPlayerSeekBarIndicator',
              },
              thumb: {
                stylePreset: 'customAudioPlayerThumb',
                size: 'sizing050',
              },
            },
            buffering: {
              stylePreset: 'customAudioPlayerSeekBarBuffering',
            },
          }}
        />
        <AudioPlayerPlayPauseButton />
      </AudioPlayerComposable>
    </ThemeProvider>
  </AudioPlayerContainer>
);

AudioPlayerSeekBarWithOverrides.storyName =
  'audio-player-seek-bar-with-overrides';

export const AudioPlayerKeyboard = () => (
  <>
    <StorybookSubHeading>Audio Player Keyboard shortcuts</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player keyboard"
    >
      <GridLayout
        columns="auto auto 1fr auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
      </GridLayout>
    </AudioPlayerComposable>
    <Block marginBlockEnd="space040" />
    <GridLayout columns="auto 1fr" rowGap="space020" as="dl">
      <dt>k / space</dt>
      <dd>Toggle play/pause</dd>
      <dt>0 / Home</dt>
      <dd>Jump to start</dd>
      <dt>End</dt>
      <dd>Jump to end</dd>
      <dt>-</dt>
      <dd>Next track</dd>
      <dt>-</dt>
      <dd>Prev track</dd>
    </GridLayout>
    <Block marginBlockEnd="space090" />

    <StorybookSubHeading>
      Audio Player Keyboard overrides shortcuts
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player keyboard overrides"
      keyboardShortcuts={{jumpToStart: 's', jumpToEnd: 'e'}}
    >
      <GridLayout
        columns="auto auto 1fr auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerPlayPauseButton
          size={ButtonSize.Small}
          keyboardShortcuts={{toggle: 't'}}
        />
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
      </GridLayout>
    </AudioPlayerComposable>
    <Block marginBlockEnd="space040" />
    <GridLayout columns="auto 1fr" rowGap="space020" as="dl">
      <dt>t</dt>
      <dd>Toggle play/pause</dd>
      <dt>s</dt>
      <dd>Jump to start</dd>
      <dt>e</dt>
      <dd>Jump to end</dd>
      <dt>-</dt>
      <dd>Next track</dd>
      <dt>-</dt>
      <dd>Prev track</dd>
    </GridLayout>
  </>
);
AudioPlayerKeyboard.storyName = 'audio-keyboard-shortcuts';
