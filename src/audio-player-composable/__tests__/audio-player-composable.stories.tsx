/* eslint-disable no-console */
import * as React from 'react';
import {PlayPauseButton} from '../components/play-pause-button';
import {TimeDisplay} from '../components/time-display/time-display';
import {AudioPlayerComposable} from '../audio-player-composable';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {calculateTime, formatFunction} from '../components/time-display/utils';

export default {
  title: 'NewsKit Light/audio-player-composable',
  component: () => 'None',
};

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
      {/* <TimeDisplay format={'length'} /> */}
    </AudioPlayerComposable>
    <StorybookSubHeading>with time display currentTime</StorybookSubHeading>
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
      <TimeDisplay format={({currentTime}) => calculateTime(currentTime)} />
      <TimeDisplay
        format={({currentTime, length}) => formatFunction(length, currentTime)}
      />
    </AudioPlayerComposable>
  </>
);

AudioPlayerWithTimeDisplay.storyName = 'audio-player-with-time-display';
