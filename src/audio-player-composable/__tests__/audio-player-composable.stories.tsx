/* eslint-disable no-console */
import * as React from 'react';
import {AudioPlayerPlayPauseButton} from '../components/play-pause-button';
import {AudioPlayerTimeDisplay} from '../components/time-display';
import {AudioPlayerComposable} from '../audio-player-composable';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {calculateTime} from '../components/time-display/utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {AudioPlayerSeekBar} from '../components/seek-bar';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils';
import {Block} from '../../block';
import {ButtonSize} from '../../button/types';
import {Button} from '../../button';
import {AudioPlayerSkipNextButton} from '../components/skip-next/skip-next';
import {AudioPlayerSkipPreviousButton} from '../components/skip-previous/skip-previous';

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

export const AudioPlayerE2E = () => (
  <div data-testid="audio-player-inline">
    <StorybookSubHeading>Audio player for e2e tests</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player e2e tests"
    >
      <GridLayout
        columns="auto auto 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
        <AudioPlayerTimeDisplay
          data-testid="audio-player-current-time"
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          data-testid="audio-player-duration"
          format={({duration}) => calculateTime(duration)}
        />
        <Button
          href="/"
          size={ButtonSize.Small}
          overrides={{stylePreset: 'buttonOutlinedPrimary'}}
        >
          read more
        </Button>
      </GridLayout>
      <GridLayout
        columnGap="space040"
        columns="auto auto 1fr auto auto"
        justifyContent="center"
      >
        <AudioPlayerSkipPreviousButton size={ButtonSize.Small} />
        <AudioPlayerSkipNextButton size={ButtonSize.Small} />
        <span />
        <AudioPlayerSkipPreviousButton
          onClick={() => alert('Prev track clicked!')}
          overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
          size={ButtonSize.Small}
        />
        <AudioPlayerSkipNextButton
          onClick={() => alert('Next track clicked!')}
          overrides={{stylePreset: 'iconButtonOutlinedPrimary'}}
          size={ButtonSize.Small}
        />
      </GridLayout>
    </AudioPlayerComposable>
  </div>
);
AudioPlayerE2E.storyName = 'audio-player-e2e';

export const AudioPlayPauseButton = () => (
  <AudioPlayerComposable
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ariaLandmark="audio player"
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
      ariaLandmark="audio player inline"
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
      ariaLandmark="audio player inline"
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
