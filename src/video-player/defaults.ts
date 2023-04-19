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
        paddingInline: 'space020',
        paddingBlock: 'space020',
        typographyPreset: 'utilityMeta010',
      },
      seekPosition: {
        stylePreset: 'videoPlayerSeekPosition',
        paddingInline: 'space020',
        paddingBlock: 'space020',
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
        stylePreset: 'inkLight010',
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
        stylePreset: 'inkLight010',
      },
    },
    dockText: {
      stylePreset: 'videoPlayerDockText',
      paddingInline: {
        xs: 'space040',
        md: 'space050',
      },
      paddingBlock: {
        xs: 'space040',
        md: 'space050',
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
      paddingInline: 'space030',
      paddingBlock: 'space020',
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
        paddingInline: 'space010',
        paddingBlock: 'space010',
      },
    },
  },
};
