import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {AudioPlayer} from '..';
import {styled} from '../../utils/style';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  live: true,
  captionSrc: 'captions.vtt',
};

const recordedAudioProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
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

export const StoryAudioPlayer = () => (
  <>
    <StorybookHeading>Recored Audio Player</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        ariaLandmark="audio player default"
      />
    </AudioPlayerContainer>
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <AudioPlayerContainer dark>
      <AudioPlayer
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
      <AudioPlayer {...liveAudioProps} ariaLandmark="audio player live" />
    </AudioPlayerContainer>
  </>
);
StoryAudioPlayer.storyName = 'audio-player';
StoryAudioPlayer.parameters = {eyes: {waitBeforeCapture: 10000}};

export const StoryAudioPlayerLogicalOverrides = () => (
  <>
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
        ariaLandmark="audio player with logical overrides"
        overrides={{
          marginBlock: 'space050',
          paddingBlock: 'space050',
        }}
      />
    </AudioPlayerContainer>
  </>
);
StoryAudioPlayerLogicalOverrides.storyName = 'audio-player-logical-overrides';

export const StoryRecordedAudioPlayerWithOnplay = () => (
  <AudioPlayerContainer>
    <AudioPlayer
      src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3"
      autoPlay
      preload="auto"
      disableNextTrack
      disablePreviousTrack
      ariaLandmark="audio player with onPlay"
      onPlay={() => {}}
    />
  </AudioPlayerContainer>
);
StoryRecordedAudioPlayerWithOnplay.storyName =
  'recorded-audio-player-with-onPlay';
StoryRecordedAudioPlayerWithOnplay.parameters = {
  eyes: {waitBeforeCapture: 5000},
};

export const StoryRecordedWithControls = () => (
  <>
    <StorybookHeading>Recored Audio Player</StorybookHeading>
    <StorybookSubHeading>with popout link</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        ariaLandmark="audio player with popout link"
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
      />
    </AudioPlayerContainer>
    <StorybookSubHeading>with controls</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        onNextTrack={alert('Next track clicked!')}
        onPreviousTrack={alert('Previous track clicked!')}
        ariaLandmark="audio player with controls"
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
      />
    </AudioPlayerContainer>
  </>
);
StoryRecordedWithControls.storyName = 'recorded-with-controls';

export const StoryRecordedWithHiddenControls = () => (
  <>
    <StorybookHeading>Recored Audio Player</StorybookHeading>
    <StorybookSubHeading>with hidden volumne controls</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        onNextTrack={alert('Next track clicked!')}
        onPreviousTrack={alert('Previous track clicked!')}
        ariaLandmark="audio player with hidden volumne controls"
        hideVolumeControl
      />
    </AudioPlayerContainer>
    <StorybookSubHeading>with hidden previous track button</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        hidePreviousTrack
        ariaLandmark="audio player with hidden previous track"
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
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
      />
    </AudioPlayerContainer>
    <StorybookSubHeading>with hide all controls</StorybookSubHeading>
    <AudioPlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        hidePreviousTrack
        hideSeekButtons
        ariaLandmark="audio player with all hidden"
      />
    </AudioPlayerContainer>
  </>
);
StoryRecordedWithHiddenControls.storyName = 'recorded-with-hidden-controls';
StoryRecordedWithControls.parameters = {eyes: {waitBeforeCapture: 10000}};

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
  parameters: {eyes: {waitBeforeCapture: 10000}},
};
