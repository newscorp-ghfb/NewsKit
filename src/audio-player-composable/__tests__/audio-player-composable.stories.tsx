/* eslint-disable no-console */
import * as React from 'react';
import {
  AudioPlayerComposable as OriginalAudioPlayerComposable,
  AudioPlayerForwardButton,
  AudioPlayerPlayPauseButton,
  AudioPlayerReplayButton,
  AudioPlayerSeekBar,
  AudioPlayerTimeDisplay,
  AudioPlayerSkipNextButton,
  AudioPlayerSkipPreviousButton,
  AudioPlayerVolumeControl,
  MuteButtonIconProps,
  AudioPlayerPlaybackSpeedControl,
  useAudioPlayerContext,
} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookSpan,
} from '../../test/storybook-comps';
import {calculateTime} from '../components/time-display/utils';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {createTheme, ThemeProvider} from '../../theme';
import {Block} from '../../block';
import {Hidden} from '../../grid/visibility';
import {IconButton} from '../../icon-button';
import {
  IconFilledLaunch,
  IconFilledReplay5,
  IconFilledForward5,
  IconFilledGraphicEq,
  IconFilledStarOutline,
  IconFilledCancel,
  IconFilledSlowMotionVideo,
} from '../../icons';
import {useBreakpointKey} from '../../utils/hooks';
import {Flag} from '../../flag';
import {styled} from '../../utils';
import {Button} from '../../button';
import {AudioPlayerComposableProps} from '../types';
import {
  useAllPlayersCanPlayCheck,
  VisualTestAudioPlayer,
} from '../../utils/audio-tests';

const StyledPage = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const AUDIO_SRC =
  'https://ncu-newskit-docs.s3.eu-west-1.amazonaws.com/storybook-assets/audio_file_1.mp3';
const LIVE_AUDIO_SRC = 'https://radio.talkradio.co.uk/stream';

const myCustomTheme = createTheme({
  name: 'my-custom-audio-player-theme',
  overrides: {
    stylePresets: {
      customTrackStylePreset: {
        base: {
          backgroundColor: 'red',
          borderColor: 'blue',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
      customIndicatorStylePreset: {
        base: {
          backgroundColor: 'yellow',
        },
      },
      customThumbStylePreset: {
        base: {
          backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: '2px',
          borderStyle: 'solid',
        },
      },
      customThumbLabelStylePreset: {
        base: {
          borderColor: 'black',
          borderWidth: '1px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          color: 'green',
        },
      },
      customLabelStylePreset: {
        base: {
          borderColor: 'purple',
          borderWidth: '2px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          color: 'purple',
        },
      },
      customButtonStylePreset: {
        base: {
          borderColor: 'purple',
          borderWidth: '2px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          iconColor: 'purple',
          backgroundColor: '{{colors.interface010}}',
        },
      },
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
      customAudioPlayerVolumeControlHorizontalContainer: {
        base: {
          backgroundColor: 'grey',
        },
      },
      customAudioPlayerVolumeControlVerticalContainer: {
        base: {
          backgroundColor: 'purple',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
      customFeedback: {
        base: {
          backgroundColor: '{{colors.red060}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          opacity: '{{overlays.opacity000}}',
        },
        hover: {
          opacity: '{{overlays.opacity020}}',
        },
      },
    },
  },
});
const volumeTheme = createTheme({
  name: 'my-custom-volume-theme',
  overrides: {
    stylePresets: {
      customPointerStylePreset: {
        base: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

const VerticalContainer = styled.div`
  display: inline-flex;
`;

const CustomMuteButtonIcon = ({volume}: MuteButtonIconProps) =>
  volume === 0 ? (
    <IconFilledStarOutline
      overrides={{size: 'iconSize030', stylePreset: 'inkNegative'}}
    />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize030', stylePreset: 'inkPositive'}}
    />
  );

export default {
  title: 'Components/audio-player-composable',
  component: () => 'None',
  parameters: {
    percy: {waitForSelector: '.ready'},
  },
};

const fullAudioPlayerAreasDesktop = `
  seekBar     seekBar   seekBar   seekBar   seekBar   seekBar      seekBar      seekBar
  currentTime none      none      none      none      none      none      totalTime
  volume      prev      backward  play      forward   next      playbackSpeed      link
 `;

const fullAudioPlayerAreasMobile = `
 seekBar     seekBar   seekBar   seekBar   seekBar   seekBar
 currentTime none      none      playbackSpeed      link      totalTime
 volume      prev      backward  play      forward   next
`;

const fullAudioPlayerLiveAreasDesktop = `
  volume      prev   backward   play   forward   next   live   link
 `;

const fullAudioPlayerLiveAreasMobile = `
  none        none      none      none      none      live
  volume      prev      backward  play      forward   next
`;

const AudioPlayerComposable = (props: AudioPlayerComposableProps) => (
  <VisualTestAudioPlayer comp={OriginalAudioPlayerComposable} props={props} />
);

const AudioPlayerFullRecorded = ({
  src,
  ...rest
}: Partial<AudioPlayerComposableProps>) => {
  const breakpointKey = useBreakpointKey();
  return (
    <AudioPlayerComposable src={src !== undefined ? src : AUDIO_SRC} {...rest}>
      <GridLayout
        columns={{
          xs: 'auto 1fr auto auto auto 1fr',
          md: '50px 1fr auto auto auto 1fr 50px 50px',
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
              <AudioPlayerVolumeControl
                layout={
                  breakpointKey === 'xs' || breakpointKey === 'sm'
                    ? 'collapsed'
                    : 'horizontal'
                }
              />
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

            <Areas.PlaybackSpeed alignSelf="center" justifySelf="end">
              <Hidden xs sm>
                <AudioPlayerPlaybackSpeedControl useModal={{md: true}} />
              </Hidden>
            </Areas.PlaybackSpeed>

            <Areas.Link alignSelf="center" justifySelf="end">
              <Hidden xs sm>
                <IconButton
                  size="medium"
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
};

const AudioPlayerFullLive = (props: Partial<AudioPlayerComposableProps>) => {
  const breakpointKey = useBreakpointKey();
  return (
    <AudioPlayerComposable src={LIVE_AUDIO_SRC} live {...props}>
      <GridLayout
        columns={{
          xs: 'auto 1fr auto auto auto 1fr',
          md: '50px 1fr auto auto auto 1fr 60px 60px',
        }}
        columnGap="space040"
        areas={{
          xs: fullAudioPlayerLiveAreasMobile,
          md: fullAudioPlayerLiveAreasDesktop,
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
              <AudioPlayerVolumeControl
                layout={
                  breakpointKey === 'xs' || breakpointKey === 'sm'
                    ? 'collapsed'
                    : 'horizontal'
                }
              />
            </Areas.Volume>

            <Areas.Live
              alignSelf="center"
              justifySelf={{xs: 'end', md: 'start'}}
            >
              <Flag overrides={{stylePreset: `flagMinimalInformative`}}>
                <IconFilledGraphicEq />
                Live
              </Flag>
            </Areas.Live>

            <Areas.Link alignSelf="center" justifySelf="end">
              <Hidden xs sm>
                <IconButton
                  size="medium"
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
};

const AudioPlayerInlineRecorded = (
  props: Partial<AudioPlayerComposableProps>,
) => {
  const breakpointKey = useBreakpointKey();
  return (
    <AudioPlayerComposable src={AUDIO_SRC} {...props}>
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerVolumeControl
          layout={breakpointKey === 'xs' ? 'collapsed' : 'horizontal'}
        />
        <AudioPlayerPlayPauseButton size="small" />
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
        <AudioPlayerPlaybackSpeedControl useModal={{xs: true, md: true}} />
      </GridLayout>
    </AudioPlayerComposable>
  );
};

const AudioPlayerInlineLive = (props: Partial<AudioPlayerComposableProps>) => (
  <AudioPlayerComposable src={LIVE_AUDIO_SRC} live {...props}>
    <GridLayout
      columns="auto auto auto"
      columnGap="space040"
      alignItems="center"
      justifyContent="flex-start"
    >
      <AudioPlayerPlayPauseButton size="small" />
      <AudioPlayerVolumeControl
        layout="vertical"
        overrides={{
          popover: {
            pointer: {
              size: 'sizing080',
              stylePreset: 'customPointerStylePreset',
            },
          },
        }}
        muteButtonSize="small"
      />
      <Flag overrides={{stylePreset: `flagMinimalInformative`}}>
        <IconFilledGraphicEq />
        Live
      </Flag>
    </GridLayout>
  </AudioPlayerComposable>
);

const AudioPlayerPlaybackSpeedTriggerComponent = (props: {
  withLeadingIcon?: boolean;
}) => {
  const {withLeadingIcon = false} = props;
  const {getPlaybackSpeedControlProps} = useAudioPlayerContext();
  const {playbackSpeed} = getPlaybackSpeedControlProps!({});

  return (
    <GridLayout
      columns="auto auto 40px 1fr auto auto"
      columnGap="space040"
      alignItems="center"
    >
      <GridLayoutItem column="1/2" row="1/5">
        <AudioPlayerPlayPauseButton size="small" />
      </GridLayoutItem>
      <GridLayoutItem column="2/3" row="4/5">
        <AudioPlayerVolumeControl layout="collapsed" />
      </GridLayoutItem>
      <GridLayoutItem column="3/4" row="4/5">
        <AudioPlayerTimeDisplay
          format={({currentTime}) => calculateTime(currentTime)}
        />
      </GridLayoutItem>
      <GridLayoutItem column="4/5" row="4/5">
        <AudioPlayerSeekBar />
      </GridLayoutItem>
      <GridLayoutItem column="5/6" row="4/5">
        <AudioPlayerTimeDisplay
          format={({duration}) => calculateTime(duration)}
        />
      </GridLayoutItem>
      <GridLayoutItem column="6/7" row="4/5">
        <AudioPlayerPlaybackSpeedControl useModal={{xs: true, md: true}}>
          {withLeadingIcon ? (
            <Button
              overrides={{
                stylePreset: 'buttonMinimalPrimary',
                minWidth: '90px',
              }}
              size="medium"
            >
              <IconFilledSlowMotionVideo />
              <span>{playbackSpeed}x</span>
            </Button>
          ) : (
            <Button
              overrides={{
                stylePreset: 'buttonOutlinedSecondary',
                minWidth: '52px',
              }}
              size="small"
            >
              <span>{playbackSpeed}x</span>
            </Button>
          )}
        </AudioPlayerPlaybackSpeedControl>
      </GridLayoutItem>
    </GridLayout>
  );
};

export const StoryAudioPlayer = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(4);
  return (
    <StyledPage>
      {allPlayersCanPlay && <div className="ready" />}
      <StorybookSubHeading>Audio Player - full recorded</StorybookSubHeading>
      <AudioPlayerFullRecorded
        ariaLandmark="audio player full recorded"
        onCanPlay={onCanPlay}
      />
      <br />
      <StorybookSubHeading>Audio Player - full live</StorybookSubHeading>
      <AudioPlayerFullLive
        ariaLandmark="audio player full live"
        onCanPlay={onCanPlay}
      />
      <br />
      <br />
      <StorybookSubHeading>
        Audio Player - inline recorded-expanded
      </StorybookSubHeading>
      <AudioPlayerInlineRecorded
        ariaLandmark="audio player inline recorded"
        onCanPlay={onCanPlay}
      />
      <br />
      <br />
      <StorybookSubHeading>Audio Player - inline live</StorybookSubHeading>
      <AudioPlayerInlineLive
        ariaLandmark="audio player inline live"
        onCanPlay={onCanPlay}
      />
    </StyledPage>
  );
};
StoryAudioPlayer.storyName = 'audio-player';

export const StoryAudioSubComponents = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(1);
  return (
    <StyledPage>
      {allPlayersCanPlay && <div className="ready" />}
      <StorybookHeading>Audio Player - subcomponents</StorybookHeading>

      <AudioPlayerComposable
        src={AUDIO_SRC}
        ariaLandmark="audio player time display"
        onCanPlay={onCanPlay}
      >
        <GridLayout
          columns="1fr 1fr 1fr"
          rows="1fr 1fr 1fr 1fr"
          rowGap="16px"
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
            <StorybookSubHeading>live</StorybookSubHeading>
            <Flag overrides={{stylePreset: `flagMinimalInformative`}}>
              <IconFilledGraphicEq />
              Live
            </Flag>
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>default</StorybookSubHeading>
            <AudioPlayerTimeDisplay />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Play/Pause</StorybookSubHeading>
            <AudioPlayerPlayPauseButton
              onClick={() => console.log('customer click function')}
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
          <GridLayoutItem>
            <StorybookSubHeading>Playback Speed (modal)</StorybookSubHeading>
            <AudioPlayerPlaybackSpeedControl useModal />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Playback Speed (popover)</StorybookSubHeading>
            <AudioPlayerPlaybackSpeedControl />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>
              Playback Speed (custom trigger)
            </StorybookSubHeading>
            <AudioPlayerPlaybackSpeedControl>
              <Button
                overrides={{stylePreset: 'buttonOutlinedSecondary'}}
                size="small"
              >
                Speed
              </Button>
            </AudioPlayerPlaybackSpeedControl>
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Collapsed Volume Control</StorybookSubHeading>
            <AudioPlayerVolumeControl layout="collapsed" />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Expanded Volume Control</StorybookSubHeading>
            <AudioPlayerVolumeControl layout="horizontal-expanded" />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Volume Control</StorybookSubHeading>
            <AudioPlayerVolumeControl layout="horizontal" />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Vertical Volume Control</StorybookSubHeading>
            <VerticalContainer>
              <AudioPlayerVolumeControl
                layout="vertical"
                overrides={{
                  popover: {
                    offset: 'space050',
                    pointer: {
                      size: 'sizing080',
                      stylePreset: 'customPointerStylePreset',
                    },
                  },
                }}
              />
            </VerticalContainer>
          </GridLayoutItem>
          <GridLayoutItem column="1/-1">
            <StorybookSubHeading>SeekBar</StorybookSubHeading>
            <AudioPlayerSeekBar />
          </GridLayoutItem>
        </GridLayout>
      </AudioPlayerComposable>
    </StyledPage>
  );
};
StoryAudioSubComponents.storyName = 'audio-player-sub-components';

export const StoryAudioPlayerWithInitialProps = () => {
  const breakpointKey = useBreakpointKey();
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(1);
  return (
    <StyledPage>
      {allPlayersCanPlay && <div className="ready" />}
      <StorybookHeading>Audio Player - initial prop</StorybookHeading>
      <AudioPlayerComposable
        src={AUDIO_SRC}
        initialTime={50}
        initialVolume={0.2}
        onCanPlay={onCanPlay}
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
                <AudioPlayerPlayPauseButton />
              </Areas.Play>

              <Areas.Volume alignSelf="center" justifySelf="start">
                <AudioPlayerVolumeControl
                  layout={
                    breakpointKey === 'xs' || breakpointKey === 'sm'
                      ? 'collapsed'
                      : 'horizontal'
                  }
                />
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
            </>
          )}
        </GridLayout>
      </AudioPlayerComposable>
    </StyledPage>
  );
};
StoryAudioPlayerWithInitialProps.storyName = 'audio-player-with-initial-props';

export const StoryAudioPlayerOverrides = () => {
  const breakpointKey = useBreakpointKey();
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(5);
  return (
    <StyledPage>
      {allPlayersCanPlay && <div className="ready" />}
      <StorybookSubHeading>Audio player with overrides</StorybookSubHeading>

      <ThemeProvider theme={myCustomTheme}>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player overrides"
          id="apc-overrides"
          onCanPlay={onCanPlay}
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
                  <AudioPlayerVolumeControl
                    muteButtonSize="medium"
                    layout={
                      breakpointKey === 'xs' || breakpointKey === 'sm'
                        ? 'collapsed'
                        : 'horizontal'
                    }
                    overrides={{
                      stylePreset:
                        'customAudioPlayerVolumeControlHorizontalContainer',
                      spaceBetween: 'space050',
                      slider: {
                        track: {
                          stylePreset: 'customTrackStylePreset',
                          size: 'sizing020',
                          length: '150px',
                        },
                        indicator: {
                          stylePreset: 'customIndicatorStylePreset',
                        },
                        thumb: {
                          stylePreset: 'customThumbStylePreset',
                          size: 'sizing040',
                        },
                        feedback: {
                          size: 'sizing070',
                          stylePreset: 'customFeedback',
                        },
                      },
                    }}
                  />
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
                        feedback: {
                          size: 'sizing070',
                          stylePreset: 'customFeedback',
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
                <Areas.PlaybackSpeed alignSelf="center">
                  <AudioPlayerPlaybackSpeedControl
                    buttonSize="medium"
                    overrides={{
                      iconButton: {
                        stylePreset: 'customButtonStylePreset',
                      },
                    }}
                    useModal={{md: true}}
                  />
                </Areas.PlaybackSpeed>

                <Areas.Link alignSelf="center" justifySelf="end">
                  <Hidden xs sm>
                    <IconButton
                      size="medium"
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
      <StorybookSubHeading>
        Vertical volume control with overrides
      </StorybookSubHeading>

      <ThemeProvider theme={myCustomTheme}>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player vertical volume control overrides"
          onCanPlay={onCanPlay}
        >
          <VerticalContainer>
            <AudioPlayerVolumeControl
              layout={
                breakpointKey === 'xs' || breakpointKey === 'sm'
                  ? 'collapsed'
                  : 'vertical'
              }
              overrides={{
                stylePreset: 'customAudioPlayerVolumeControlVerticalContainer',
                spaceBetween: 'space050',
                slider: {
                  track: {
                    stylePreset: 'customTrackStylePreset',
                    size: 'sizing020',
                    length: '100px',
                  },
                  indicator: {
                    stylePreset: 'customIndicatorStylePreset',
                  },
                  thumb: {
                    stylePreset: 'customThumbStylePreset',
                    size: 'sizing040',
                  },
                  feedback: {
                    size: 'sizing070',
                    stylePreset: 'customFeedback',
                  },
                },
              }}
            />
          </VerticalContainer>
        </AudioPlayerComposable>
      </ThemeProvider>
      <StorybookSubHeading>MuteButton Icon Prop Overrides</StorybookSubHeading>

      <ThemeProvider theme={myCustomTheme}>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player mutebutton icon prop overrides"
          onCanPlay={onCanPlay}
        >
          <AudioPlayerVolumeControl
            muteButtonSize="medium"
            overrides={{
              button: {
                muteButtonIcon: {
                  props: {
                    overrides: {
                      stylePreset: 'inkPositive',
                      size: 'iconSize010',
                    },
                  },
                },
              },
            }}
          />
        </AudioPlayerComposable>
      </ThemeProvider>
      <StorybookSubHeading>MuteButton Icon Overrides</StorybookSubHeading>
      <ThemeProvider theme={myCustomTheme}>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player mutebutton icon overrides"
          onCanPlay={onCanPlay}
        >
          <AudioPlayerVolumeControl
            muteButtonSize="medium"
            overrides={{
              button: {
                muteButtonIcon: {
                  stylePreset: 'inkNegative',
                  size: 'iconSize030',
                },
              },
            }}
          />
        </AudioPlayerComposable>
      </ThemeProvider>
      <StorybookSubHeading>
        MuteButton Icon Component Overrides
      </StorybookSubHeading>
      <ThemeProvider theme={myCustomTheme}>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player mutebutton component overrides"
          onCanPlay={onCanPlay}
        >
          <AudioPlayerVolumeControl
            muteButtonSize="medium"
            overrides={{
              button: {
                muteButtonIcon: CustomMuteButtonIcon,
              },
            }}
          />
        </AudioPlayerComposable>
      </ThemeProvider>
      <ThemeProvider theme={volumeTheme}>
        <StorybookSubHeading>
          Volume control vertical with offset between button and slider
        </StorybookSubHeading>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player offset between iconbutton and slider"
        >
          <AudioPlayerVolumeControl
            layout="vertical"
            overrides={{
              popover: {
                offset: 'space050',
                pointer: {
                  size: 'sizing080',
                  stylePreset: 'customPointerStylePreset',
                },
              },
            }}
          />
        </AudioPlayerComposable>
      </ThemeProvider>
    </StyledPage>
  );
};
StoryAudioPlayerOverrides.storyName = 'audio-player-overrides';

export const StoryAudioPlayerAutoplay = () => (
  <StyledPage>
    <StorybookSubHeading>Autoplay</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player autoplay" autoPlay />
  </StyledPage>
);
StoryAudioPlayerAutoplay.storyName = 'audio-player-play-autoplay';
StoryAudioPlayerAutoplay.parameters = {
  percy: {skip: true},
};

export const StoryAudioPlayerPlaybackSpeedTriggerButton = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(2);
  return (
    <StyledPage>
      {allPlayersCanPlay && <div className="ready" />}
      <StorybookHeading>
        Audio Player - playback speed control trigger overrides
      </StorybookHeading>
      <div style={{marginTop: 280}}>
        <StorybookSubHeading>
          playback speed control custom trigger button
        </StorybookSubHeading>
        <AudioPlayerComposable
          ariaLandmark="audio player custom playback trigger"
          src={AUDIO_SRC}
          onCanPlay={onCanPlay}
        >
          <AudioPlayerPlaybackSpeedTriggerComponent />
        </AudioPlayerComposable>
        <br />
        <br />
        <StorybookSubHeading>
          playback speed control custom trigger button with a leading icon
        </StorybookSubHeading>
        <AudioPlayerComposable
          ariaLandmark="audio player custom playback trigger with icon"
          src={AUDIO_SRC}
          onCanPlay={onCanPlay}
        >
          <AudioPlayerPlaybackSpeedTriggerComponent withLeadingIcon />
        </AudioPlayerComposable>
      </div>
    </StyledPage>
  );
};
StoryAudioPlayerPlaybackSpeedTriggerButton.storyName =
  'audio-player-playback-speed-trigger-button';

export const StoryAudioPlayerKeyboard = () => (
  <StyledPage>
    <StorybookSubHeading>Audio Player Keyboard shortcuts</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player keyboard" />
    <Block marginBlockEnd="space040" />
    <GridLayout columns="auto 1fr auto 1fr" rowGap="space020" as="dl">
      <dt>
        <StorybookSpan>k / space</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Toggle play/pause</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>0 / Home</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Jump to start</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>End</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Jump to end</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>shift + n</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Next track</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>shift + p</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Prev track</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>l</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Forward 10sec</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>j</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Replay 10 sec</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>m</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>mute / unmute volume</StorybookSpan>
      </dd>
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
              <AudioPlayerVolumeControl keyboardShortcuts={{muteToggle: 'y'}} />
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
                  size="medium"
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
    <GridLayout columns="auto 1fr auto 1fr" rowGap="space020" as="dl">
      <dt>
        <StorybookSpan>s</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Toggle play/pause</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>1</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Jump to start</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>9</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Jump to end</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>n</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Next track</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>p</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Prev track</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>d</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Forward 10sec</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>a</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>Replay 10 sec</StorybookSpan>
      </dd>
      <dt>
        <StorybookSpan>y</StorybookSpan>
      </dt>
      <dd>
        <StorybookSpan>mute / unmute volume</StorybookSpan>
      </dd>
    </GridLayout>
  </StyledPage>
);
StoryAudioPlayerKeyboard.storyName = 'audio-player-keyboard-shortcuts';
StoryAudioPlayerKeyboard.parameters = {
  percy: {skip: true},
};

export const StoryAudioPlayerVolumeControlLayout = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(1);
  return (
    <StyledPage>
      {allPlayersCanPlay && <div className="ready" />}
      <StorybookSubHeading>Volume control horizontal</StorybookSubHeading>
      <AudioPlayerComposable
        src={AUDIO_SRC}
        ariaLandmark="audio player volume control horizontal"
        onCanPlay={onCanPlay}
      >
        <AudioPlayerVolumeControl layout="horizontal" />

        <StorybookSubHeading>
          Volume control horizontal-expanded
        </StorybookSubHeading>
        <AudioPlayerVolumeControl layout="horizontal-expanded" />

        <StorybookSubHeading>Volume control Collapsed</StorybookSubHeading>
        <AudioPlayerVolumeControl layout="collapsed" />

        <StorybookSubHeading>Volume control vertical</StorybookSubHeading>
        <AudioPlayerVolumeControl layout="vertical" />
        <StorybookSubHeading>
          Volume control vertical-no pointer and hover in between button and
          popover
        </StorybookSubHeading>
        <AudioPlayerVolumeControl
          layout="vertical"
          overrides={{
            popover: {
              offset: 'space050',
              pointer: {
                size: 'sizing080',
                stylePreset: 'customPointerStylePreset',
              },
            },
          }}
        />
      </AudioPlayerComposable>
    </StyledPage>
  );
};

StoryAudioPlayerVolumeControlLayout.storyName =
  'audio-player-volume-control-layout';

export const StoryAudioPlayerLoadingState = () => (
  <StyledPage>
    <StorybookSubHeading>Loading state</StorybookSubHeading>
    <div className="ready" />
    <AudioPlayerFullRecorded ariaLandmark="audio player loading state" src="" />
  </StyledPage>
);

StoryAudioPlayerLoadingState.storyName = 'audio-player-loading-state';
