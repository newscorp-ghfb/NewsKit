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
  AudioPlayerVolumeControl,
  MuteButtonIconProps,
  AudioPlayerPlaybackSpeedControl,
  AudioPlayerVolumeControlOverridesProps,
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
import {ButtonSize} from '../../button/types';
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
  title: 'NewsKit Light/audio-player-composable',
  component: () => 'None',
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

const AudioPlayerFullRecorded = (props: {
  ariaLandmark: string;
  src?: string;
  autoPlay?: boolean;
}) => {
  const breakpointKey = useBreakpointKey();

  return (
    <AudioPlayerComposable src={AUDIO_SRC} {...props}>
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
                  size={ButtonSize.Medium}
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

const AudioPlayerFullLive = (props: {
  ariaLandmark: string;
  src?: string;
  autoPlay?: boolean;
}) => {
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
                  size={ButtonSize.Medium}
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

const AudioPlayerInlineRecorded = (props: {
  ariaLandmark: string;
  src?: string;
  overrides?: AudioPlayerVolumeControlOverridesProps;
}) => {
  const breakpointKey = useBreakpointKey();
  return (
    <AudioPlayerComposable src={AUDIO_SRC} {...props}>
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <GridLayoutItem column="1/2" row="1/5">
          <AudioPlayerVolumeControl
            {...props}
            layout={breakpointKey === 'xs' ? 'collapsed' : 'horizontal'}
          />
        </GridLayoutItem>
        <GridLayoutItem column="2/3" row="4/5">
          <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
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
          <AudioPlayerPlaybackSpeedControl useModal={{xs: true, md: true}} />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
  );
};
const AudioPlayerInlineLive = (props: {ariaLandmark: string; src?: string}) => (
  <AudioPlayerComposable src={LIVE_AUDIO_SRC} live {...props}>
    <GridLayout
      columns="auto auto"
      columnGap="space040"
      alignItems="center"
      justifyContent="flex-start"
    >
      <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
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
    <ThemeProvider theme={myCustomTheme}>
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <GridLayoutItem column="1/2" row="1/5">
          <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
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
                size={ButtonSize.Medium}
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
                size={ButtonSize.Small}
              >
                <span>{playbackSpeed}x</span>
              </Button>
            )}
          </AudioPlayerPlaybackSpeedControl>
        </GridLayoutItem>
      </GridLayout>
    </ThemeProvider>
  );
};

export const AudioPlayer = () => (
  <StyledPage>
    <StorybookSubHeading>Audio Player - full recorded</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player full recorded" />
    <br />
    <StorybookSubHeading>Audio Player - full live</StorybookSubHeading>
    <AudioPlayerFullLive ariaLandmark="audio player full live" />
    <br />
    <br />
    <StorybookSubHeading>
      Audio Player - inline recorded-expanded
    </StorybookSubHeading>
    <AudioPlayerInlineRecorded ariaLandmark="audio player inline recorded" />
    <br />
    <br />
    <StorybookSubHeading>Audio Player - inline live</StorybookSubHeading>
    <AudioPlayerInlineLive ariaLandmark="audio player inline live" />
  </StyledPage>
);
AudioPlayer.storyName = 'audio-player';
AudioPlayer.parameters = {eyes: {waitBeforeCapture: 5000}};

export const AudioSubComponents = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StyledPage>
      <StorybookHeading>Audio Player - subcomponents</StorybookHeading>

      <AudioPlayerComposable
        src={AUDIO_SRC}
        ariaLandmark="audio player time display"
      >
        <GridLayout
          columns="1fr 1fr 1fr"
          rows="1fr 1fr 1fr 1fr"
          rowGap="16px"
          columnGap="20px"
        >
          {/* <GridLayoutItem>
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
                size={ButtonSize.Small}
              >
                Speed
              </Button>
            </AudioPlayerPlaybackSpeedControl>
          </GridLayoutItem> <GridLayoutItem>
            <StorybookSubHeading>Collapsed Volume Control</StorybookSubHeading>
            <AudioPlayerVolumeControl layout="collapsed" />
          </GridLayoutItem> 
          {<GridLayoutItem>
            <StorybookSubHeading>Expanded Volume Control</StorybookSubHeading>
            <AudioPlayerVolumeControl layout="horizontalExpanded" />
          </GridLayoutItem>
          <GridLayoutItem>
            <StorybookSubHeading>Volume Control</StorybookSubHeading>
            <AudioPlayerVolumeControl layout="horizontal" />
          </GridLayoutItem>
           */}
          <GridLayoutItem>
            <StorybookSubHeading>Vertical Volume Control</StorybookSubHeading>
            <VerticalContainer>
              <AudioPlayerVolumeControl layout="vertical" />
            </VerticalContainer>
          </GridLayoutItem>
          {/* <GridLayoutItem column="1/-1">
            <StorybookSubHeading>SeekBar</StorybookSubHeading>
            <AudioPlayerSeekBar />
          </GridLayoutItem> */}
        </GridLayout>
      </AudioPlayerComposable>
    </StyledPage>
  </ThemeProvider>
);
AudioSubComponents.storyName = 'audio-sub-components';
AudioSubComponents.parameters = {eyes: {waitBeforeCapture: 5000}};

export const AudioPlayerWithInitialProps = () => {
  const breakpointKey = useBreakpointKey();
  return (
    <StyledPage>
      <StorybookHeading>Audio Player - initial prop</StorybookHeading>
      <AudioPlayerComposable
        src={AUDIO_SRC}
        initialTime={50}
        initialVolume={0.2}
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
AudioPlayerWithInitialProps.storyName = 'audio-player-with-initial-props';
AudioPlayerWithInitialProps.parameters = {eyes: {include: false}};

export const AudioPlayerOverrides = () => {
  const breakpointKey = useBreakpointKey();
  return (
    <ThemeProvider theme={myCustomTheme}>
      <StyledPage>
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
                  <AudioPlayerVolumeControl
                    muteButtonSize={ButtonSize.Medium}
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
                    buttonSize={ButtonSize.Medium}
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
                      size={ButtonSize.Medium}
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
        <StorybookSubHeading>
          Vertical volume control with overrides
        </StorybookSubHeading>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player vertical volume control overrides"
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
        <StorybookSubHeading>
          MuteButton Icon Prop Overrides
        </StorybookSubHeading>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player mutebutton icon prop overrides"
        >
          <AudioPlayerVolumeControl
            muteButtonSize={ButtonSize.Medium}
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
        <StorybookSubHeading>MuteButton Icon Overrides</StorybookSubHeading>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player mutebutton icon overrides"
        >
          <AudioPlayerVolumeControl
            muteButtonSize={ButtonSize.Medium}
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
        <StorybookSubHeading>
          MuteButton Icon Component Overrides
        </StorybookSubHeading>
        <AudioPlayerComposable
          src={AUDIO_SRC}
          ariaLandmark="audio player mutebutton component overrides"
        >
          <AudioPlayerVolumeControl
            muteButtonSize={ButtonSize.Medium}
            overrides={{
              button: {
                muteButtonIcon: CustomMuteButtonIcon,
              },
            }}
          />
        </AudioPlayerComposable>
      </StyledPage>
    </ThemeProvider>
  );
};
AudioPlayerOverrides.storyName = 'audio-player-overrides';
AudioPlayerOverrides.parameters = {eyes: {waitBeforeCapture: 5000}};

export const AudioPlayPauseButtonAutoplay = () => (
  <StyledPage>
    <StorybookSubHeading>Autoplay</StorybookSubHeading>
    <AudioPlayerFullRecorded ariaLandmark="audio player autoplay" autoPlay />
  </StyledPage>
);
AudioPlayPauseButtonAutoplay.storyName = 'audio-play-pause-button-autoplay';
AudioPlayPauseButtonAutoplay.parameters = {eyes: {waitBeforeCapture: 5000}};

export const AudioPlayerPlaybackSpeedTriggerButton = () => (
  <StyledPage>
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
      >
        <AudioPlayerPlaybackSpeedTriggerComponent withLeadingIcon />
      </AudioPlayerComposable>
    </div>
  </StyledPage>
);
AudioPlayerPlaybackSpeedTriggerButton.storyName =
  'audio-player-playback-speed-trigger-button';
AudioPlayerPlaybackSpeedTriggerButton.parameters = {
  eyes: {waitBeforeCapture: 5000},
};

export const AudioPlayerKeyboard = () => (
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
                  size={ButtonSize.Medium}
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
AudioPlayerKeyboard.storyName = 'audio-keyboard-shortcuts';

export const AudioPlayerVolumeControlLayout = () => (
  <StyledPage>
    <StorybookSubHeading>Volume control horizontal</StorybookSubHeading>
    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player volume control horizontal"
    >
      <AudioPlayerVolumeControl layout="horizontal" />
    </AudioPlayerComposable>
    <br />
    <StorybookSubHeading>
      Volume control horizontal-expandable
    </StorybookSubHeading>
    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player volume control horizontal expanded"
    >
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <GridLayoutItem column="1/2" row="1/5">
          <AudioPlayerVolumeControl />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
    <br />
    <StorybookSubHeading>
      Volume control horizontal-collapsed
    </StorybookSubHeading>
    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player volume control horizontal collapsed"
    >
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <GridLayoutItem column="1/2" row="1/5">
          <AudioPlayerVolumeControl layout="collapsed" />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
    <br />
    <StorybookSubHeading>Volume control vertical</StorybookSubHeading>
    <AudioPlayerComposable
      src={AUDIO_SRC}
      ariaLandmark="audio player volume control vertical"
    >
      <GridLayout
        columns="auto auto 40px 1fr auto auto"
        columnGap="space040"
        alignItems="center"
      >
        <GridLayoutItem column="1/2" row="1/5">
          <AudioPlayerVolumeControl layout="vertical" />
        </GridLayoutItem>
      </GridLayout>
    </AudioPlayerComposable>
  </StyledPage>
);

AudioPlayerVolumeControlLayout.storyName = 'audio-player-volume-control-layout';
AudioPlayerKeyboard.parameters = {eyes: {waitBeforeCapture: 5000}};
