import * as React from 'react';
import {AudioPlayer} from '..';
import {styled} from '../../utils/style';
import {createTheme, ThemeProvider} from '../../theme';

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

const myCustomTheme = createTheme({
  name: 'my-custom-audio-player-theme',
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
});

export default {
  name: 'audio-player',
  children: [
    {
      name: 'recorded-audio-player',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            ariaLandmark="audio player one"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-audio-player-with-onPlay',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3"
            autoPlay
            preload="auto"
            disableNextTrack
            disablePreviousTrack
            ariaLandmark="audio player two"
            onPlay={() => {}}
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-with-popout-link',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            ariaLandmark="audio player three"
            popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-with-controls',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            onNextTrack={alert('Next track clicked!')}
            onPreviousTrack={alert('Previous track clicked!')}
            ariaLandmark="audio player four"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'with-disabled-controls',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            onNextTrack={() => {}}
            onPreviousTrack={() => {}}
            disableNextTrack
            disablePreviousTrack
            ariaLandmark="audio player five"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'live-audio-player',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer {...liveAudioProps} ariaLandmark="audio player six" />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-with-overrides',
      type: 'story',
      component: () => (
        <AudioPlayerContainer dark>
          <ThemeProvider theme={myCustomTheme}>
            <AudioPlayer
              {...recordedAudioProps}
              popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
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
                    },
                  },
                  buffering: {
                    stylePreset: 'customAudioPlayerSeekBarBuffering',
                  },
                },
                controls: {
                  space: 'sizing040',
                  previousButton: {
                    stylePreset: 'customAudioPlayerPreviousButton',
                  },
                  replayButton: {
                    stylePreset: 'customAudioPlayerReplayButton',
                  },
                  playPauseButton: {
                    stylePreset: 'customAudioPlayPauseButton',
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
          </ThemeProvider>
        </AudioPlayerContainer>
      ),
    },
  ],
};
