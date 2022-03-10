/* eslint-disable no-console */
import * as React from 'react';
import {PlayPauseButton} from '../components/play-pause-button';
import {TimeDisplay} from '../components/time-display/time-display';
import {AudioPlayerComposable} from '../audio-player-composable';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {calculateTime, formatFunction} from '../components/time-display/utils';
import {createTheme, ThemeProvider} from '../../theme';

export default {
  title: 'NewsKit Light/audio-player-composable',
  component: () => 'None',
};
const myCustomTheme = createTheme({
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
      ariaLandmark="audio player"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <TimeDisplay />
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time current time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <TimeDisplay format={({currentTime}) => calculateTime(currentTime)} />
    </AudioPlayerComposable>
    <StorybookSubHeading>
      with time length time display only
    </StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <TimeDisplay format={({length}) => calculateTime(length)} />
    </AudioPlayerComposable>
    <StorybookSubHeading>with formatFunction</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <TimeDisplay
        format={({currentTime, length}) => formatFunction(length, currentTime)}
      />
    </AudioPlayerComposable>
    {/* <StorybookSubHeading>with grid</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player"
    >
      <PlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <GridLayout columns="1fr 1fr 0fr 0fr 0fr">
        <GridLayoutItem justifySelf="start">
          <TimeDisplay overrides={{typographyPreset: 'editorialSubheadline010', stylePreset:'customAudioPlayerLabels'}} />
        </GridLayoutItem>
        <GridLayoutItem justifySelf="end">
          <TimeDisplay format={({length}) => calculateTime(length)} />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable> 
       </ThemeProvider>  */}
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <AudioPlayerComposable
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ariaLandmark="audio player"
      >
        <PlayPauseButton
          onClick={() => {
            console.log('customer click function');
          }}
        />
        <TimeDisplay
          overrides={{
            typographyPreset: 'editorialSubheadline010',
            stylePreset: 'customAudioPlayerLabels',
          }}
          format={({currentTime, length}) =>
            formatFunction(length, currentTime)
          }
        />
      </AudioPlayerComposable>
    </ThemeProvider>
  </>
);

AudioPlayerWithTimeDisplay.storyName = 'audio-player-with-time-display';
