/* eslint-disable no-console */
import * as React from 'react';
import {
  AudioPlayerComposable,
  AudioPlayerForwardButton,
  AudioPlayerPlayPauseButton,
  AudioPlayerReplayButton,
  AudioPlayerSeekBar,
  AudioPlayerTimeDisplay,
  AudioPlayerSkipNextButton,
  AudioPlayerSkipPreviousButton,
} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {calculateTime} from '../components/time-display/utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {createTheme, ThemeProvider} from '../../theme';
import {Block} from '../../block';
import {ButtonSize} from '../../button/types';
import {Hidden} from '../../grid/visibility';
import {IconButton} from '../../icon-button';
import {
  IconFilledLaunch,
  IconFilledReplay5,
  IconFilledForward5,
  IconFilledGraphicEq,
} from '../../icons';
import {Flag} from '../../flag';

const AUDIO_SRC =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

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
        },
      },
    },
  },
});

export default {
  title: 'NewsKit Light/audio-player-composable',
  component: () => 'None',
};

const fullAudioPlayerAreasDesktop = `
  seekBar     seekBar   seekBar   seekBar   seekBar   seekBar   seekBar
  currentTime none      none      none      none      none      totalTime
  volume      prev      backward  play      forward   next      link
 `;

const fullAudioPlayerAreasMobile = `
  seekBar     seekBar   seekBar   seekBar   seekBar
  currentTime volume    none      link      totalTime
  prev        backward  play      forward   next
 `;

const AudioPlayerFullRecorded = (props: {
  ariaLandmark: string;
  src?: string;
  autoPlay?: boolean;
}) => (
  <AudioPlayerComposable src={AUDIO_SRC} {...props}>
    <GridLayout
      columns={{
        xs: '1fr auto auto auto 1fr',
        md: '50px 1fr auto auto auto 1fr 50px',
      }}
      rowGap="space040"
      columnGap="space040"
      areas={{
        xs: fullAudioPlayerAreasMobile,
        md: fullAudioPlayerAreasDesktop,
      }}
    >
      {Areas => (
        <>
          <Areas.Play alignSelf="center">
            <AudioPlayerPlayPauseButton />
          </Areas.Play>

          <Areas.Backward alignSelf="center">
            <AudioPlayerReplayButton />
          </Areas.Backward>

          <Areas.Forward alignSelf="center">
            <AudioPlayerForwardButton />
          </Areas.Forward>

          <Areas.Prev alignSelf="center" justifySelf="end">
            <AudioPlayerSkipPreviousButton
              onClick={() => console.log('on skip Prev track')}
            />
          </Areas.Prev>

          <Areas.Next alignSelf="center">
            <AudioPlayerSkipNextButton
              onClick={() => console.log('on skip Next track')}
            />
          </Areas.Next>

          <Areas.Volume alignSelf="center" justifySelf="start">
            <Hidden xs sm>
              Not yet
            </Hidden>
          </Areas.Volume>

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

          <Areas.Link alignSelf="center" justifySelf="end">
            <Hidden xs sm>
              <IconButton
                aria-label="Open popout player"
                overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
                onClick={() => {
                  window.open(
                    'https://www.newskit.co.uk/',
                    '',
                    'width=380,height=665',
                  );
                }}
              >
                <IconFilledLaunch />
              </IconButton>
            </Hidden>
          </Areas.Link>
        </>
      )}
    </GridLayout>
  </AudioPlayerComposable>
);
const AudioPlayerFullLive = (props: {
  ariaLandmark: string;
  src?: string;
  autoPlay?: boolean;
}) => (
  <AudioPlayerComposable src={AUDIO_SRC} live {...props}>
    <GridLayout
      columns={{
        xs: '1fr auto auto auto 1fr',
        md: '50px 1fr auto auto auto 1fr 50px',
      }}
      rowGap="space040"
      columnGap="space040"
      areas={{
        xs: fullAudioPlayerAreasMobile,
        md: fullAudioPlayerAreasDesktop,
      }}
    >
      {Areas => (
        <>
          <Areas.Play alignSelf="center">
            <AudioPlayerPlayPauseButton />
          </Areas.Play>

          <Areas.Backward alignSelf="center">
            <AudioPlayerReplayButton />
          </Areas.Backward>

          <Areas.Forward alignSelf="center">
            <AudioPlayerForwardButton disabled />
          </Areas.Forward>

          <Areas.Prev alignSelf="center" justifySelf="end">
            <AudioPlayerSkipPreviousButton
              onClick={() => console.log('on skip Prev track')}
            />
          </Areas.Prev>

          <Areas.Next alignSelf="center">
            <AudioPlayerSkipNextButton
              disabled
              onClick={() => console.log('on skip Next track')}
            />
          </Areas.Next>

          <Areas.Volume alignSelf="center" justifySelf="start">
            <Hidden xs sm>
              Not yet
            </Hidden>
          </Areas.Volume>
          <Areas.SeekBar alignSelf="center" justifySelf="end">
            <Flag overrides={{stylePreset: `flagMinimalInformative`}}>
              <IconFilledGraphicEq />
              Live
            </Flag>
          </Areas.SeekBar>

          <Areas.Link alignSelf="center" justifySelf="end">
            <Hidden xs sm>
              <IconButton
                aria-label="Open popout player"
                overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
                onClick={() => {
                  window.open(
                    'https://www.newskit.co.uk/',
                    '',
                    'width=380,height=665',
                  );
                }}
              >
                <IconFilledLaunch />
              </IconButton>
            </Hidden>
          </Areas.Link>
        </>
      )}
    </GridLayout>
  </AudioPlayerComposable>
);

const AudioPlayerInlineRecorded = (props: {
  ariaLandmark: string;
  src?: string;
}) => (
  <AudioPlayerComposable src={AUDIO_SRC} {...props}>
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
);

const AudioPlayerInlineLive = (props: {ariaLandmark: string; src?: string}) => (
  <AudioPlayerComposable src={AUDIO_SRC} live {...props}>
    <GridLayout
      columns="auto auto"
      columnGap="space040"
      alignItems="center"
      justifyContent="space-between"
    >
      <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
      <Flag overrides={{stylePreset: `flagMinimalInformative`}}>
        <IconFilledGraphicEq />
        Live
      </Flag>
    </GridLayout>
  </AudioPlayerComposable>
);

export const AudioPlayer = () => (
  <>
    <StorybookSubHeading>Audio Player - full recorded</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player full recorded" />
    <br />
    <StorybookSubHeading>Audio Player - full live</StorybookSubHeading>
    <AudioPlayerFullLive ariaLandmark="audio player full live" />
    <br />
    <br />
    <StorybookSubHeading>Audio Player - inline recorded</StorybookSubHeading>
    <AudioPlayerInlineRecorded ariaLandmark="audio player inline recorded" />
    <br />
    <StorybookSubHeading>Audio Player - inline live</StorybookSubHeading>
    <AudioPlayerInlineLive ariaLandmark="audio player inline live" />
  </>
);
AudioPlayer.storyName = 'audio-player';

export const AudioSubComponents = () => (
  <>
    <StorybookHeading>Audio Player - subcomponents</StorybookHeading>
    <StorybookSubHeading>TimeDisplay</StorybookSubHeading>
    <br />

    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player time display"
    >
      <GridLayout
        columns="1fr 1fr 1fr"
        rows="1fr 1fr 1fr"
        rowGap="10px"
        columnGap="20px"
      >
        <GridLayoutItem>
          <StorybookSubHeading>currentTime</StorybookSubHeading>
          <AudioPlayerTimeDisplay
            format={({currentTime}) => calculateTime(currentTime)}
          />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>duration</StorybookSubHeading>
          <AudioPlayerTimeDisplay
            format={({duration}) => calculateTime(duration)}
          />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>default</StorybookSubHeading>
          <AudioPlayerTimeDisplay />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>Play/Pause</StorybookSubHeading>
          <AudioPlayerPlayPauseButton
            onClick={() => {
              console.log('customer click function');
            }}
          />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>SkipNext</StorybookSubHeading>
          <AudioPlayerSkipNextButton
            onClick={() => console.log('on skip Next track')}
          />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>SkipPrevious</StorybookSubHeading>
          <AudioPlayerSkipPreviousButton
            onClick={() => console.log('on skip Next track')}
          />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>Forward</StorybookSubHeading>
          <AudioPlayerForwardButton />
        </GridLayoutItem>
        <GridLayoutItem>
          <StorybookSubHeading>Replay</StorybookSubHeading>

          <AudioPlayerReplayButton />
        </GridLayoutItem>
      </GridLayout>
      <StorybookSubHeading>SeekBar</StorybookSubHeading> <AudioPlayerSeekBar />
    </AudioPlayerComposable>
  </>
);
AudioSubComponents.storyName = 'audio-sub-components';

export const AudioPlayerOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookSubHeading>Audio player with overrides</StorybookSubHeading>
    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player overrides"
    >
      <GridLayout
        columns={{
          xs: '1fr auto auto auto 1fr',
          md: '50px 1fr auto auto auto 1fr 50px',
        }}
        rowGap="space040"
        columnGap="space040"
        areas={{
          xs: fullAudioPlayerAreasMobile,
          md: fullAudioPlayerAreasDesktop,
        }}
      >
        {Areas => (
          <>
            <Areas.Play alignSelf="center">
              <AudioPlayerPlayPauseButton
                overrides={{
                  iconSize: 'iconSize030',
                  stylePreset: 'buttonOutlinedNegative',
                }}
              />
            </Areas.Play>

            <Areas.Backward alignSelf="center">
              <AudioPlayerReplayButton
                seconds={5}
                overrides={{
                  iconSize: 'iconSize030',
                  stylePreset: 'buttonOutlinedNegative',
                }}
              >
                <IconFilledReplay5 />
              </AudioPlayerReplayButton>
            </Areas.Backward>

            <Areas.Forward alignSelf="center">
              <AudioPlayerForwardButton
                seconds={5}
                overrides={{
                  iconSize: 'iconSize030',
                  stylePreset: 'buttonOutlinedNegative',
                }}
              >
                <IconFilledForward5 />
              </AudioPlayerForwardButton>
            </Areas.Forward>

            <Areas.Prev alignSelf="center" justifySelf="end">
              <AudioPlayerSkipPreviousButton
                overrides={{
                  iconSize: 'iconSize030',
                  stylePreset: 'buttonOutlinedNegative',
                }}
              />
            </Areas.Prev>

            <Areas.Next alignSelf="center">
              <AudioPlayerSkipNextButton
                overrides={{
                  iconSize: 'iconSize030',
                  stylePreset: 'buttonOutlinedNegative',
                }}
                onClick={() => console.log('on skip Next track')}
              />
            </Areas.Next>

            <Areas.Volume alignSelf="center" justifySelf="start">
              <Hidden xs sm>
                Not yet
              </Hidden>
            </Areas.Volume>

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

            <Areas.CurrentTime>
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

            <Areas.Link alignSelf="center" justifySelf="end">
              <Hidden xs sm>
                <IconButton
                  aria-label="Open popout player"
                  href="https://www.newskit.co.uk/"
                  overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
                >
                  <IconFilledLaunch />
                </IconButton>
              </Hidden>
            </Areas.Link>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
  </ThemeProvider>
);
AudioPlayerOverrides.storyName = 'audio-player-overrides';

export const AudioPlayPauseButtonAutoplay = () => (
  <>
    <StorybookSubHeading>Autoplay</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player autoplay" autoPlay />
  </>
);

AudioPlayPauseButtonAutoplay.storyName = 'audio-play-pause-button-autoplay';

export const AudioPlayerKeyboard = () => (
  <>
    <StorybookSubHeading>Audio Player Keyboard shortcuts</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player keyboard" />
    <Block marginBlockEnd="space040" />
    <GridLayout columns="auto 1fr" rowGap="space020" as="dl">
      <dt>k / space</dt>
      <dd>Toggle play/pause</dd>
      <dt>0 / Home</dt>
      <dd>Jump to start</dd>
      <dt>End</dt>
      <dd>Jump to end</dd>
      <dt>shift + n</dt>
      <dd>Next track</dd>
      <dt>shift + p</dt>
      <dd>Prev track</dd>
      <dt>l</dt>
      <dd>Forward 10sec</dd>
      <dt>j</dt>
      <dd>Replay 10 sec</dd>
    </GridLayout>
    <Block marginBlockEnd="space090" />

    <StorybookSubHeading>
      Audio Player Keyboard overrides shortcuts
    </StorybookSubHeading>
    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player keyboard overrides"
      keyboardShortcuts={{
        jumpToStart: '1',
        jumpToEnd: '9',
      }}
    >
      <GridLayout
        columns={{
          xs: '1fr auto auto auto 1fr',
          md: '50px 1fr auto auto auto 1fr 50px',
        }}
        rowGap="space040"
        columnGap="space040"
        areas={{
          xs: fullAudioPlayerAreasMobile,
          md: fullAudioPlayerAreasDesktop,
        }}
      >
        {Areas => (
          <>
            <Areas.Play alignSelf="center">
              <AudioPlayerPlayPauseButton keyboardShortcuts="s" />
            </Areas.Play>

            <Areas.Backward alignSelf="center">
              <AudioPlayerReplayButton keyboardShortcuts="a" />
            </Areas.Backward>

            <Areas.Forward alignSelf="center">
              <AudioPlayerForwardButton keyboardShortcuts="d" />
            </Areas.Forward>

            <Areas.Prev alignSelf="center" justifySelf="end">
              <AudioPlayerSkipPreviousButton
                keyboardShortcuts="p"
                onClick={() => console.log('on skip Prev track')}
              />
            </Areas.Prev>

            <Areas.Next alignSelf="center">
              <AudioPlayerSkipNextButton
                keyboardShortcuts="n"
                onClick={() => console.log('on skip Next track')}
              />
            </Areas.Next>

            <Areas.Volume alignSelf="center" justifySelf="start">
              <Hidden xs sm>
                Not yet
              </Hidden>
            </Areas.Volume>

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

            <Areas.Link alignSelf="center" justifySelf="end">
              <Hidden xs sm>
                <IconButton
                  aria-label="Open popout player"
                  href="https://www.newskit.co.uk/"
                  overrides={{stylePreset: 'iconButtonMinimalPrimary'}}
                >
                  <IconFilledLaunch />
                </IconButton>
              </Hidden>
            </Areas.Link>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
    <Block marginBlockEnd="space040" />
    <GridLayout columns="auto 1fr" rowGap="space020" as="dl">
      <dt>s</dt>
      <dd>Toggle play/pause</dd>
      <dt>1</dt>
      <dd>Jump to start</dd>
      <dt>9</dt>
      <dd>Jump to end</dd>
      <dt>n</dt>
      <dd>Next track</dd>
      <dt>p</dt>
      <dd>Prev track</dd>
      <dt>d</dt>
      <dd>Forward 10sec</dd>
      <dt>a</dt>
      <dd>Replay 10 sec</dd>
    </GridLayout>
  </>
);
AudioPlayerKeyboard.storyName = 'audio-keyboard-shortcuts';
