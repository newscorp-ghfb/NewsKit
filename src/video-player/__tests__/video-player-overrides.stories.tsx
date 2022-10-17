import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {VideoPlayer} from '..';
import {compileTheme, createTheme, ThemeProvider} from '../../theme';
import {
  DEFATULT_VIDEO_PLAYER_CONFIG,
  PLAYLISTS_VIDEO_PLAYER_CONFIG,
} from './config';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'video-player-theme',
    overrides: {
      stylePresets: {
        customPlaybutton: {
          base: {
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderRadius: '50%',
            backgroundColor: 'orange',
            color: 'red',
          },
        },
        customSeekBarContainer: {
          base: {
            backgroundColor: '{{colors.amber050}}',
          },
        },
        customLoadProgressBar: {
          base: {
            backgroundColor: '{{colors.blue050}}',
          },
        },
        customPlayProgressBar: {
          base: {
            backgroundColor: '{{colors.purple050}}',
          },
        },
        customSeekHandle: {
          base: {
            backgroundColor: '{{colors.red050}}',
          },
        },
        customCurrentDuration: {
          base: {
            backgroundColor: '{{colors.blue050}}',
            borderStyle: 'solid',
            borderColor: '{{colors.blue050}}',
            borderWidth: '{{borders.borderWidth010}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            color: '{{colors.red050}}',
          },
        },
        customSeekPosition: {
          base: {
            backgroundColor: '{{colors.red050}}',
            borderStyle: 'solid',
            borderColor: '{{colors.red050}}',
            borderWidth: '{{borders.borderWidth010}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            color: '{{colors.blue050}}',
          },
        },
        customControlBar: {
          base: {
            backgroundColor: '{{colors.whiteTint050}}',
          },
        },
        customVolumeBar: {
          base: {
            backgroundColor: '{{colors.green060}}',
          },
        },
        customVolumeLevel: {
          base: {
            backgroundColor: '{{colors.red060}}',
          },
        },
        customDockText: {
          base: {
            backgroundImage: '{{overlays.overlayGradientBaseVertical}}',
          },
        },
        customMiniCardOverlay: {
          base: {
            backgroundColor: '{{colors.red050}}',
          },
        },
      },
    },
  }),
);

export default {
  title: 'Components/video-player/overrides',
  component: () => 'None',
  disabledRules: [
    'landmark-unique',
    'duplicate-id-aria',
    'duplicate-id-active',
  ],
};

export const StoryVideoPlayerPlayButtonOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Video Player</StorybookHeading>
    <StorybookSubHeading>Play button overrides</StorybookSubHeading>
    <VideoPlayer
      config={DEFATULT_VIDEO_PLAYER_CONFIG}
      overrides={{
        playButton: {
          stylePreset: 'customPlaybutton',
        },
      }}
    />
  </ThemeProvider>
);
StoryVideoPlayerPlayButtonOverrides.storyName = 'play-button-overrides';
StoryVideoPlayerPlayButtonOverrides.parameters = {
  eyes: {
    waitBeforeCapture: 5000,
  },
};

export const StoryVideoPlayerSeekBarOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Video Player</StorybookHeading>
    <StorybookSubHeading>Seek bar overrides</StorybookSubHeading>
    <VideoPlayer
      config={DEFATULT_VIDEO_PLAYER_CONFIG}
      overrides={{
        seekBar: {
          stylePreset: 'customSeekBarContainer',
          loadingProgressBar: {
            stylePreset: 'customLoadProgressBar',
          },
          playProgressBar: {
            stylePreset: 'customPlayProgressBar',
          },
          seekHandle: {
            stylePreset: 'customSeekHandle',
            width: '2px',
          },
          currentDuration: {
            stylePreset: 'customCurrentDuration',
            spaceInset: 'spaceInset030',
            typographyPreset: 'utilityMeta020',
          },
          seekPosition: {
            stylePreset: 'customSeekPosition',
            spaceInset: 'spaceInset030',
            typographyPreset: 'utilityMeta020',
          },
        },
      }}
    />
  </ThemeProvider>
);
StoryVideoPlayerSeekBarOverrides.storyName = 'seek-bar-overrides';
StoryVideoPlayerSeekBarOverrides.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};

export const StoryVideoPlayerControlBarOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Video Player</StorybookHeading>
    <StorybookSubHeading>Control bar overrides</StorybookSubHeading>
    <VideoPlayer
      config={DEFATULT_VIDEO_PLAYER_CONFIG}
      overrides={{
        controlBar: {
          stylePreset: 'customControlBar',
          typographyPreset: {
            xs: 'utilityMeta020',
            md: 'utilityMeta020',
          },
          maxHeight: {
            xs: 'sizing080',
            md: 'sizing090',
          },
          timeDisplay: {
            recorded: {
              typographyPreset: 'utilityMeta020',
              stylePreset: 'inkContrast',
              currentTime: {
                spaceInline: 'space020',
              },
              divider: {
                spaceInline: 'space020',
              },
            },
          },
          volumeControl: {
            volumeBar: {
              stylePreset: 'customVolumeBar',
            },
            volumeLevel: {
              stylePreset: 'customVolumeLevel',
            },
          },
          iconToggle: {
            stylePreset: 'inkContrast',
          },
        },
      }}
    />
  </ThemeProvider>
);
StoryVideoPlayerControlBarOverrides.storyName = 'control-bar-overrides';
StoryVideoPlayerControlBarOverrides.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};

export const StoryVideoPlayerDockTextOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Video Player</StorybookHeading>
    <StorybookSubHeading>Dock text overrides</StorybookSubHeading>
    <VideoPlayer
      config={DEFATULT_VIDEO_PLAYER_CONFIG}
      overrides={{
        dockText: {
          stylePreset: 'customDockText',
          spaceInset: {
            xs: 'spaceInset030',
            md: 'spaceInset040',
          },
          title: {
            stylePreset: 'inkContrast',
            typographyPreset: {
              xs: 'utilityMeta010',
              md: 'utilityMeta020',
            },
          },
          description: {
            stylePreset: 'inkContrast',
            typographyPreset: {
              xs: 'utilityMeta010',
              md: 'utilityMeta020',
            },
          },
        },
      }}
    />
  </ThemeProvider>
);
StoryVideoPlayerDockTextOverrides.storyName = 'doc-text-overrides';
StoryVideoPlayerPlayButtonOverrides.parameters = {
  eyes: {
    waitBeforeCapture: 5000,
  },
};

export const StoryVideoPlayerMiniCardOverlayOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Video Player</StorybookHeading>
    <StorybookSubHeading>MiniCardOverlay overrides</StorybookSubHeading>
    <VideoPlayer
      config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
      overrides={{
        miniCardOverlay: {
          stylePreset: 'customMiniCardOverlay',
          spaceInset: 'spaceInsetSquish030',
          countdown: {
            typographyPreset: 'utilityMeta020',
            stylePreset: 'inkContrast',
            spaceStack: 'space020',
          },
          name: {
            typographyPreset: 'utilityMeta020',
            stylePreset: 'inkContrast',
          },
          closeButton: {
            spaceInset: 'spaceInset020',
          },
        },
      }}
    />
  </ThemeProvider>
);
StoryVideoPlayerMiniCardOverlayOverrides.storyName =
  'minicard-overlay-overrides';
StoryVideoPlayerMiniCardOverlayOverrides.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};

export const StoryVideoPlayerLogicalPropsOverrides = () => (
  <>
    <StorybookHeading>Video Player</StorybookHeading>
    <StorybookSubHeading>
      MiniCardOverlay logical props overrides
    </StorybookSubHeading>
    <VideoPlayer
      config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
      overrides={{
        paddingInline: 'space020',
        paddingBlock: 'space040',
        marginBlock: 'space060',
        marginInline: 'space080',
      }}
    />
  </>
);
StoryVideoPlayerLogicalPropsOverrides.storyName = 'logical-props-overlay';
StoryVideoPlayerLogicalPropsOverrides.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};
