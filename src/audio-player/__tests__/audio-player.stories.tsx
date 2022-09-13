import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {AudioPlayer as OriginalAudioPlayer, AudioPlayerProps} from '..';
import {styled} from '../../utils/style';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {
  DISABLE_ANIMATIONS_SCRIPT,
  useAllPlayersCanPlayCheck,
  VisualTestAudioPlayer,
} from '../../utils/audio-tests';

const AudioPlayer = (props: AudioPlayerProps) => (
  <VisualTestAudioPlayer comp={OriginalAudioPlayer} props={props} />
);

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  live: true,
  captionSrc: 'captions.vtt',
};

const recordedAudioProps = {
  src:
    'https://ncu-newskit-docs.s3.eu-west-1.amazonaws.com/storybook-assets/audio_file_1.mp3',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
};

const AudioPlayerContainer = styled.div<{dark?: boolean}>`
  border: solid 1px red;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
  ${({dark}) => (dark ? 'background: #000' : null)}
`;

// eslint-disable-next-line no-alert
const alert = (msg: string) => () => window.alert(msg);

const audioPlayerCustomThemeObject: CreateThemeArgs = {
  name: 'audio-player-custom-theme',
  overrides: {
    stylePresets: {
      customAudioPlayPauseButton: {
        base: {
          backgroundColor: 'transparent',
          borderRadius: '50%',
          iconColor: '#fff',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#243c46',
        },
        hover: {
          backgroundColor: '#243c46',
          borderStyle: 'none',
        },
        active: {
          backgroundColor: '#818f94',
          borderStyle: 'none',
        },
      },
      customAudioPlayPauseButtonLoading: {
        base: {
          iconColor: '#fff',
        },
      },
      customAudioForwardButton: {
        base: {
          backgroundColor: 'transparent',
          iconColor: '#fff',
        },
      },
      customAudioPlayerReplayButton: {
        base: {
          backgroundColor: 'transparent',
          iconColor: '#fff',
        },
      },
      customAudioNextButton: {
        base: {
          backgroundColor: 'transparent',
          iconColor: '#fff',
        },
      },
      customAudioPlayerPreviousButton: {
        base: {
          backgroundColor: 'transparent',
        },
        active: {
          color: 'white',
          iconColor: 'white',
        },
        disabled: {
          iconColor: '#9EA9AC',
        },
      },
      customAudioPopoutButton: {
        base: {
          backgroundColor: 'transparent',
          iconColor: '#fff',
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
          backgroundColor: '#243c46',
        },
      },
      customAudioPlayerSeekBarIndicator: {
        base: {
          backgroundColor: '#0c2731',
        },
      },
      customAudioPlayerLabels: {
        base: {
          backgroundColor: 'transparent',
          iconColor: '#fff',
          color: '#fff',
        },
      },
      customAudioPlayerSeekBarBuffering: {
        base: {
          backgroundColor: 'rgb(51, 51, 51)',
        },
      },
      customVolumeControlButton: {
        base: {
          backgroundColor: 'transparent',
          iconColor: '#fff',
        },
      },
    },
  },
};

export const StoryAudioPlayer = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(3);
  return (
    <>
      {allPlayersCanPlay && <div id="allPlayersCanPlay" />}
      <StorybookHeading>Audio Player</StorybookHeading>
      <StorybookSubHeading>default</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          onCanPlay={onCanPlay}
          {...recordedAudioProps}
          ariaLandmark="audio player default"
        />
      </AudioPlayerContainer>
      <StorybookSubHeading>with overrides</StorybookSubHeading>
      <AudioPlayerContainer dark>
        <AudioPlayer
          onCanPlay={onCanPlay}
          {...recordedAudioProps}
          popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
          ariaLandmark="audio player with overrides"
          overrides={{
            seekBar: {
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
                thumbLabel: {
                  stylePreset: 'customAudioPlayerLabels',
                },
                labels: {
                  stylePreset: 'customAudioPlayerLabels',
                  typographyPreset: 'utilityMeta010',
                },
              },
              buffering: {
                stylePreset: 'customAudioPlayerSeekBarBuffering',
              },
            },
            controls: {
              space: 'space040',
              previousButton: {
                stylePreset: 'customAudioPlayerPreviousButton',
              },
              replayButton: {
                stylePreset: 'customAudioPlayerReplayButton',
              },
              playPauseButton: {
                stylePreset: 'customAudioPlayPauseButton',
                loadingIndicator: {
                  stylePreset: 'customAudioPlayPauseButtonLoading',
                },
              },
              forwardButton: {
                stylePreset: 'customAudioForwardButton',
              },
              nextButton: {
                stylePreset: 'customAudioNextButton',
              },
              popoutButton: {
                stylePreset: 'customAudioPopoutButton',
              },
            },
            volumeControl: {
              slider: {
                track: {
                  stylePreset: 'customAudioPlayerSeekBarTrack',
                  size: 'sizing010',
                },
                indicator: {
                  stylePreset: 'customAudioPlayerSeekBarIndicator',
                },
                thumb: {
                  stylePreset: 'customAudioPlayerThumb',
                  size: 'sizing040',
                },
                thumbLabel: {
                  stylePreset: 'customAudioPlayerLabels',
                },
                labels: {
                  stylePreset: 'customAudioPlayerLabels',
                },
              },
              button: {
                stylePreset: 'customVolumeControlButton',
              },
            },
          }}
        />
      </AudioPlayerContainer>
      <StorybookHeading>Live Audio Player</StorybookHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          onCanPlay={onCanPlay}
          {...liveAudioProps}
          ariaLandmark="audio player live"
        />
      </AudioPlayerContainer>
    </>
  );
};
StoryAudioPlayer.storyName = 'audio-player';
StoryAudioPlayer.parameters = {
  eyes: {
    waitBeforeCapture: '#allPlayersCanPlay',
  },
};

export const StoryAudioPlayerLogicalOverrides = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(1);
  return (
    <>
      {allPlayersCanPlay && <div id="allPlayersCanPlay" />}
      <StorybookSubHeading>with overrides</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          id="ap-logical-props"
          {...recordedAudioProps}
          popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
          ariaLandmark="audio player with logical overrides"
          overrides={{
            marginBlock: 'space050',
            paddingBlock: 'space050',
          }}
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
    </>
  );
};
StoryAudioPlayerLogicalOverrides.storyName = 'audio-player-logical-overrides';
StoryAudioPlayerLogicalOverrides.parameters = {
  eyes: {
    waitBeforeCapture: '#allPlayersCanPlay',
  },
};

export const StoryAudioPlayerLoadingState = () => (
  <>
    <StorybookSubHeading>Loading state</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        src=""
        ariaLandmark="audio player in loading state"
      />
    </AudioPlayerContainer>
  </>
);
StoryAudioPlayerLoadingState.storyName = 'audio-player-loading-state';
StoryAudioPlayerLoadingState.parameters = {
  eyes: {
    scriptHooks: {
      beforeCaptureScreenshot: DISABLE_ANIMATIONS_SCRIPT,
    },
  },
};

export const StoryAudioPlayerWithAutoPlay = () => (
  <AudioPlayerContainer>
    <AudioPlayer
      src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3"
      autoPlay
      preload="auto"
      disableNextTrack
      disablePreviousTrack
      ariaLandmark="audio player with autoPlay"
    />
  </AudioPlayerContainer>
);
StoryAudioPlayerWithAutoPlay.storyName = 'audio-player-with-autoPlay';
// No visual test is required for autoPlay behaviour.
StoryAudioPlayerWithAutoPlay.parameters = {eyes: {include: false}};

export const StoryAudioPlayerWithControls = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(3);
  return (
    <>
      {allPlayersCanPlay && <div id="allPlayersCanPlay" />}
      <StorybookHeading>Audio Player</StorybookHeading>
      <StorybookSubHeading>with popout link</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          ariaLandmark="audio player with popout link"
          popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
      <StorybookSubHeading>with controls</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          onNextTrack={alert('Next track clicked!')}
          onPreviousTrack={alert('Previous track clicked!')}
          ariaLandmark="audio player with controls"
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
      <StorybookSubHeading>with disabled controls</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          onNextTrack={() => {}}
          onPreviousTrack={() => {}}
          disableNextTrack
          disablePreviousTrack
          ariaLandmark="audio player with disabled controls"
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
    </>
  );
};
StoryAudioPlayerWithControls.storyName = 'audio-player-with-controls';
StoryAudioPlayerWithControls.parameters = {
  eyes: {
    waitBeforeCapture: '#allPlayersCanPlay',
  },
};

export const StoryAudioPlayerWithHiddenControls = () => {
  const {allPlayersCanPlay, onCanPlay} = useAllPlayersCanPlayCheck(4);
  return (
    <>
      {allPlayersCanPlay && <div id="allPlayersCanPlay" />}
      <StorybookHeading>Audio Player</StorybookHeading>
      <StorybookSubHeading>with hidden volume controls</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          onNextTrack={alert('Next track clicked!')}
          onPreviousTrack={alert('Previous track clicked!')}
          ariaLandmark="audio player with hidden volumne controls"
          hideVolumeControl
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
      <StorybookSubHeading>
        with hidden previous track button
      </StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          hidePreviousTrack
          ariaLandmark="audio player with hidden previous track"
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
      <StorybookSubHeading>with hidden seek buttons</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          onNextTrack={() => {}}
          onPreviousTrack={() => {}}
          disableNextTrack
          disablePreviousTrack
          hideSeekButtons
          ariaLandmark="audio player with hidden seek buttons"
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
      <StorybookSubHeading>with hide all controls</StorybookSubHeading>
      <AudioPlayerContainer>
        <AudioPlayer
          {...recordedAudioProps}
          hidePreviousTrack
          hideSeekButtons
          ariaLandmark="audio player with all hidden"
          onCanPlay={onCanPlay}
        />
      </AudioPlayerContainer>
    </>
  );
};
StoryAudioPlayerWithHiddenControls.storyName =
  'audio-player-with-hidden-controls';
StoryAudioPlayerWithHiddenControls.parameters = {
  eyes: {
    waitBeforeCapture: '#allPlayersCanPlay',
  },
};

export default {
  title: 'NewsKit Light/audio-player',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          audioPlayerCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
