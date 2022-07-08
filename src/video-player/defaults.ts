export default {
  videoPlayer: {
    playButton: {
      stylePreset: 'videoPlayerPlayButton',
    },
    seekBar: {
      stylePreset: 'videoPlayerSeekBarContainer',
      loadingProgressBar: {
        stylePreset: 'videoPlayerLoadProgressBar',
      },
      playProgressBar: {
        stylePreset: 'videoPlayerPlayProgressBar',
      },
      seekHandle: {
        stylePreset: 'videoPlayerSeekHandle',
        width: 'borderWidth020',
      },
      currentDuration: {
        stylePreset: 'videoPlayerCurrentDuration',
        spaceInset: 'spaceInset020',
        typographyPreset: 'utilityMeta010',
      },
      seekPosition: {
        stylePreset: 'videoPlayerSeekPosition',
        spaceInset: 'spaceInset020',
        typographyPreset: 'utilityMeta010',
      },
    },
    controlBar: {
      stylePreset: 'videoPlayerControlBar',
      typographyPreset: {
        xs: 'utilityMeta010',
        md: 'utilityMeta020',
      },
      maxHeight: {
        xs: 'sizing070',
        md: 'sizing080',
      },
      timeDisplay: {
        typographyPreset: 'utilityMeta010',
        stylePreset: 'inkInverse',
        currentTime: {
          spaceInline: 'space010',
        },
        divider: {
          spaceInline: 'space010',
        },
      },
      volumeControl: {
        volumeBar: {
          stylePreset: 'videoPlayerVolumeBar',
        },
        volumeLevel: {
          stylePreset: 'videoPlayerVolumeLevel',
        },
      },
      iconToggle: {
        stylePreset: 'inkInverse',
      },
    },
    dockText: {
      stylePreset: 'videoPlayerDockText',
      spaceInset: {
        xs: 'spaceInset040',
        md: 'spaceInset050',
      },
      title: {
        stylePreset: 'videoPlayerDockTextTitle',
        typographyPreset: {
          xs: 'utilityHeading010',
          md: 'utilityHeading040',
        },
        spaceStack: {
          xs: 'space020',
          md: 'space030',
        },
      },
      description: {
        stylePreset: 'inkInverse',
        typographyPreset: {
          xs: 'utilityBody010',
          md: 'utilityBody030',
        },
      },
    },
    miniCardOverlay: {
      stylePreset: 'videoPlayerMiniCardOverlay',
      spaceInset: 'spaceInsetSquish020',
      countdown: {
        typographyPreset: 'utilityMeta010',
        stylePreset: 'inkInverse',
        spaceStack: 'space010',
      },
      name: {
        typographyPreset: 'utilityMeta010',
        stylePreset: 'inkInverse',
      },
      closeButton: {
        spaceInset: 'spaceInset010',
      },
    },
  },
};
