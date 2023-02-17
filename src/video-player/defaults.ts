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
        paddingInlineStart: 'space020',
        paddingInlineEnd: 'space020',
        paddingBlockStart: 'space020',
        paddingBlockEnd: 'space020',
        typographyPreset: 'utilityMeta010',
      },
      seekPosition: {
        stylePreset: 'videoPlayerSeekPosition',
        paddingInlineStart: 'space020',
        paddingInlineEnd: 'space020',
        paddingBlockStart: 'space020',
        paddingBlockEnd: 'space020',
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
      paddingInlineStart: {
        xs: 'space040',
        md: 'space050',
      },
      paddingInlineEnd: {
        xs: 'space040',
        md: 'space050',
      },
      paddingBlockStart: {
        xs: 'space040',
        md: 'space050',
      },
      paddingBlockEnd: {
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
      paddingInlineStart: 'space030',
      paddingInlineEnd: 'space030',
      paddingBlockStart: 'space020',
      paddingBlockEnd: 'space020',
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
        paddingInlineStart: 'space010',
        paddingInlineEnd: 'space010',
        paddingBlockStart: 'space010',
        paddingBlockEnd: 'space010',
      },
    },
  },
};
