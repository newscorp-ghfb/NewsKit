/* eslint-disable no-console */
import * as React from 'react';
import {AudioPlayerPlayPauseButton} from '../components/play-pause-button';
import {AudioPlayerTimeDisplay} from '../components/time-display';
import {AudioPlayerForwardButton} from '../components/forward-button';
import {AudioPlayerReplayButton} from '../components/replay-button';
import {AudioPlayerComposable} from '../audio-player-composable';
import {AudioPlayerSkipNextButton} from '../components/skip-next/skip-next';
import {AudioPlayerSkipPreviousButton} from '../components/skip-previous/skip-previous';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {calculateTime} from '../components/time-display/utils';
import {GridLayout} from '../../grid-layout';
import {AudioPlayerSeekBar} from '../components/seek-bar';
import {createTheme, ThemeProvider} from '../../theme';
import {Block} from '../../block';
import {ButtonSize} from '../../button/types';
import {Hidden} from '../../grid/visibility';

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
          backgroundColor: '#D20600',
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
const fullAudioPlayerAreas = `
  seekBar seekBar seekBar
  currentTime none  totalTime  
  volume controls link
 `;

export const AudioPlayer = () => (
  <>
    <StorybookSubHeading>Full player-recorded</StorybookSubHeading>
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
              <Hidden xs sm>
                Not yet
              </Hidden>
            </Areas.Volume>
            <Areas.Link alignSelf="center" justifySelf="end">
              <Hidden xs sm>
                Not yet
              </Hidden>
            </Areas.Link>
            <Areas.Controls>
              <GridLayout
                columns="repeat(5, auto)"
                columnGap={{md: 'space045'}}
                justifyContent="center"
                alignItems="center"
              >
                <AudioPlayerSkipPreviousButton
                  onClick={() => console.log('on skip Prev track')}
                />
                <AudioPlayerReplayButton />
                <AudioPlayerPlayPauseButton />
                <AudioPlayerForwardButton />
                <AudioPlayerSkipNextButton
                  onClick={() => console.log('on skip Next track')}
                />
              </GridLayout>
            </Areas.Controls>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
    <br />
    <br />
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
const timeDisplayAreas = `
  current duration default 

 `;
export const AudioSubComponents = () => (
  <>
    <StorybookHeading>Audio Player - subcomponents</StorybookHeading>
    <StorybookSubHeading>TimeDisplay</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player 4"
    >
      <GridLayout rowGap="20px" areas={timeDisplayAreas}>
        {Areas => (
          <>
            <Areas.Current>
              <StorybookSubHeading>currentTime</StorybookSubHeading>
              <AudioPlayerTimeDisplay
                format={({currentTime}) => calculateTime(currentTime)}
              />
            </Areas.Current>
            <Areas.Duration>
              <StorybookSubHeading>duration</StorybookSubHeading>
              <AudioPlayerTimeDisplay
                format={({duration}) => calculateTime(duration)}
              />
            </Areas.Duration>
            <Areas.Default>
              <StorybookSubHeading>default</StorybookSubHeading>
              <AudioPlayerTimeDisplay />
            </Areas.Default>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
    <br />
    <StorybookSubHeading>Play/Pause</StorybookSubHeading>
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
    <StorybookSubHeading>SkipNext</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player play pause button"
    >
      <AudioPlayerSkipNextButton
        onClick={() => console.log('on skip Next track')}
      />
    </AudioPlayerComposable>
    <StorybookSubHeading>SkipPrevious</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player play pause button"
    >
      <AudioPlayerSkipPreviousButton
        onClick={() => console.log('on skip Next track')}
      />
    </AudioPlayerComposable>
    <StorybookSubHeading>Forward</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player play pause button"
    >
      <AudioPlayerForwardButton />
    </AudioPlayerComposable>
    <StorybookSubHeading>Replay</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player play pause button"
    >
      <AudioPlayerReplayButton />
    </AudioPlayerComposable>
    <StorybookSubHeading>SeekBar</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player play pause button"
    >
      <AudioPlayerSeekBar />
    </AudioPlayerComposable>
    <br />
  </>
);

AudioSubComponents.storyName = 'audio-sub-components';
export const AudioPlayerOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookSubHeading>Audio player with overrides</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player skip buttons"
    >
      <GridLayout rowGap="20px" areas={fullAudioPlayerAreas}>
        {Areas => (
          <>
            <Areas.SeekBar>
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
            </Areas.SeekBar>
            <Areas.CurrentTime justifySelf="start">
              <AudioPlayerTimeDisplay
                overrides={{
                  typographyPreset: 'editorialSubheadline010',
                  stylePreset: 'customAudioPlayerLabels',
                }}
                format={({currentTime}) => calculateTime(currentTime)}
              />
            </Areas.CurrentTime>
            <Areas.TotalTime justifySelf="end">
              <AudioPlayerTimeDisplay
                overrides={{
                  typographyPreset: 'editorialSubheadline010',
                  stylePreset: 'customAudioPlayerLabels',
                }}
                format={({duration}) => calculateTime(duration)}
              />
            </Areas.TotalTime>
            {/* <Areas.Volume alignSelf="center" justifySelf="start">
              Not yet
            </Areas.Volume>
            <Areas.Link alignSelf="center" justifySelf="end">
              Not yet
            </Areas.Link> */}
            <Areas.Controls>
              <GridLayout
                columns="repeat(5, auto)"
                columnGap="20px"
                justifyContent="center"
                alignItems="center"
              >
                <AudioPlayerSkipPreviousButton
                  overrides={{
                    iconSize: 'iconSize030',
                    stylePreset: 'buttonOutlinedNegative',
                  }}
                />
                <AudioPlayerReplayButton
                  overrides={{
                    iconSize: 'iconSize030',
                    stylePreset: 'buttonOutlinedNegative',
                  }}
                />
                <AudioPlayerPlayPauseButton
                  overrides={{
                    iconSize: 'iconSize030',
                    stylePreset: 'buttonOutlinedNegative',
                  }}
                />
                <AudioPlayerForwardButton
                  overrides={{
                    iconSize: 'iconSize030',
                    stylePreset: 'buttonOutlinedNegative',
                  }}
                />
                <AudioPlayerSkipNextButton
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
  </ThemeProvider>
);
AudioPlayerOverrides.storyName = 'audio-player-overrides';

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
