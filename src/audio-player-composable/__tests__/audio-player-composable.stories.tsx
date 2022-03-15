/* eslint-disable no-console */
import * as React from 'react';
import {PlayPauseButton} from '../components/play-pause-button/play-pause-button';
import {TimeDisplay} from '../components/time-display/time-display';
import {AudioPlayerComposable} from '../audio-player-composable';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {calculateTime} from '../components/time-display/utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {SeekBar} from '../components/seek-bar/seek-bar';
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
    <StorybookSubHeading>Audio player inline</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player inline"
    >
      <GridLayout
        columns="auto auto 1fr auto"
        columnGap="16px"
        alignItems="center"
      >
        <PlayPauseButton size={ButtonSize.Small} />
        <TimeDisplay format={({currentTime}) => calculateTime(currentTime)} />
        <SeekBar />
        <TimeDisplay format={({duration}) => calculateTime(duration)} />
      </GridLayout>
    </AudioPlayerComposable>
  </>
);
AudioPlayer.storyName = 'audio-player';

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
      <PlayPauseButton />
      <Block spaceStack="space030" />
      <SeekBar />
      <Block spaceStack="space030" />
      <GridLayout columns="1fr 0fr 0fr 0fr">
        <GridLayoutItem justifySelf="end">
          <TimeDisplay />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time current time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 4"
    >
      <PlayPauseButton />
      <Block spaceStack="space030" />
      <SeekBar />
      <Block spaceStack="space030" />
      <GridLayout columns="1fr 1fr 0fr 0fr">
        <GridLayoutItem justifySelf="start">
          <TimeDisplay format={({currentTime}) => calculateTime(currentTime)} />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time length time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 5"
    >
      <PlayPauseButton />
      <Block spaceStack="space030" />
      <SeekBar />
      <Block spaceStack="space030" />
      <GridLayout columns="1fr 0fr 0fr 0fr">
        <GridLayoutItem justifySelf="end">
          <TimeDisplay format={({duration}) => calculateTime(duration)} />
        </GridLayoutItem>
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
      <PlayPauseButton />
      <Block spaceStack="space030" />
      <SeekBar />
      <Block spaceStack="space030" />
      <GridLayout columns="1fr 1fr 0fr 0fr">
        <GridLayoutItem justifySelf="start">
          <TimeDisplay
            format={({currentTime}) => calculateTime(currentTime)}
            overrides={{
              typographyPreset: 'editorialSubheadline010',
              stylePreset: 'customAudioPlayerLabels',
            }}
          />
        </GridLayoutItem>
        <GridLayoutItem justifySelf="end">
          <TimeDisplay
            format={({duration}) => calculateTime(duration)}
            overrides={{
              typographyPreset: 'editorialSubheadline010',
              stylePreset: 'customAudioPlayerLabels',
            }}
          />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
  </ThemeProvider>
);

AudioPlayerTimeDisplayOverrides.storyName =
  'audio-player-time-display-overrides';

export const AudioPlayerSeekBar = () => (
  <AudioPlayerComposable
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player 7"
  >
    <SeekBar />
    <PlayPauseButton />
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
        <PlayPauseButton />
      </AudioPlayerComposable>
    </ThemeProvider>
  </AudioPlayerContainer>
);

AudioPlayerSeekBarWithOverrides.storyName =
  'audio-player-seek-bar-with-overrides';
