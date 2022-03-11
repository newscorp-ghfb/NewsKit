/* eslint-disable no-console */
import * as React from 'react';
import {PlayPauseButton} from '../components/play-pause-button/play-pause-button';
import {TimeDisplay} from '../components/time-display/time-display';
import {AudioPlayerComposable} from '../audio-player-composable';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {calculateTime, formatFunction} from '../components/time-display/utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {SeekBar} from '../components/seek-bar/seek-bar';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';

const AudioPlayerContainer = styled.div<{dark?: boolean}>`
  border: solid 1px red;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
  ${({dark}) => (dark ? 'background: #000' : null)}
`;

const myCustomTheme = createTheme({
  name: 'my-custom-audio-player-theme',
  overrides: {
    stylePresets: {
      customAudioPlayerThumb: {
        base: {
          backgroundColor: '#f6807e',
          borderRadius: '50%',
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
    },
  },
});

export default {
  title: 'NewsKit Light/audio-player-composable',
  component: () => 'None',
};
const myCustomThemeTimeDisplay = createTheme({
  name: 'my-custom-audio-player-theme',
  overrides: {
    stylePresets: {
      customAudioPlayerLabels: {
        base: {
          backgroundColor: 'grey',
          color: '#blue',
        },
      },
    },
  },
});
export const AudioPlayPauseButton = () => (
  <AudioPlayerComposable
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player"
  >
    <PlayPauseButton
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
    <PlayPauseButton
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
      <PlayPauseButton
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
      <PlayPauseButton
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

export const AudioPlayerWithTimeDisplay = () => (
  <>
    <StorybookSubHeading>with time display label default</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 3"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <SeekBar />
      <TimeDisplay />
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time current time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 4"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <SeekBar />
      <TimeDisplay format={({currentTime}) => calculateTime(currentTime)} />
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time length time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 5"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <TimeDisplay format={({duration}) => calculateTime(duration)} />
    </AudioPlayerComposable>
    <StorybookSubHeading>with formatFunction</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 6"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <TimeDisplay
        // format={formatFunction}
        format={({currentTime, duration}) =>
          formatFunction({duration, currentTime})
        }
      />
    </AudioPlayerComposable>
    <StorybookSubHeading>with overrides in grid</StorybookSubHeading>
    <ThemeProvider theme={myCustomThemeTimeDisplay}>
      <AudioPlayerComposable
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ariaLandmark="audio player 7"
      >
        <PlayPauseButton
          onClick={() => {
            console.log('customer click function');
          }}
        />
        <SeekBar />
        <GridLayout columns="1fr 1fr 0fr 0fr 0fr">
          <GridLayoutItem justifySelf="start">
            <TimeDisplay
              format={({currentTime}) => calculateTime(currentTime)}
              // overrides={{
              //   typographyPreset: 'editorialSubheadline010',
              //   stylePreset: 'customAudioPlayerLabels',
              // }}
            />
          </GridLayoutItem>
          <GridLayoutItem justifySelf="end">
            <TimeDisplay
              format={({duration}) => calculateTime(duration)}
              // overrides={{
              //   typographyPreset: 'editorialSubheadline010',
              //   stylePreset: 'customAudioPlayerLabels',
              // }}
            />
          </GridLayoutItem>
        </GridLayout>
      </AudioPlayerComposable>
    </ThemeProvider>
  </>
);

export const AudioPlayerSeekBar = () => (
  <AudioPlayerComposable
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player 7"
  >
    <SeekBar />
    <PlayPauseButton
      onClick={() => {
        console.log('customer click function');
      }}
    />
  </AudioPlayerComposable>
);

AudioPlayerSeekBar.storyName = 'audio-player-seek-bar';

export const AudioPlayerSeekBarWithOverrides = () => (
  <AudioPlayerContainer dark>
    <ThemeProvider theme={myCustomTheme}>
      <AudioPlayerComposable
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ariaLandmark="audio player 8"
      >
        <SeekBar
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
        <PlayPauseButton
          onClick={() => {
            console.log('customer click function');
          }}
        />
      </AudioPlayerComposable>
    </ThemeProvider>
  </AudioPlayerContainer>
);

AudioPlayerSeekBarWithOverrides.storyName =
  'audio-player-seek-bar-with-overrides';
