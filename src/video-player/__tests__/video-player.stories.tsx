import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {VideoPlayer} from '..';
import {
  DEFAULT_VIDEO_PLAYER_CONFIG,
  PLAYLISTS_VIDEO_PLAYER_CONFIG,
} from './config';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

// To prevent title staying white when dark theme selected
const defaultOverrides = {
  dockText: {
    title: {
      stylePreset: 'inkLight010',
    },
    description: {
      stylePreset: 'inkLight010',
    },
  },
};

const videoPlayerCustomThemeObject: CreateThemeArgs = {
  name: 'video-player-theme',
  overrides: {
    stylePresets: {
      customPlaybutton: {
        base: {
          borderStyle: 'solid',
          borderWidth: '2px',
          borderRadius: '50%',
          borderColor: '{{colors.amber060}}',
          backgroundColor: '{{colors.amber060}}',
          color: '{{colors.white}}',
        },
      },
      customSeekBarContainer: {
        base: {
          backgroundColor: '{{colors.blue050}}',
        },
      },
      customLoadProgressBar: {
        base: {
          backgroundColor: '{{colors.blue050}}',
        },
      },
      customPlayProgressBar: {
        base: {
          backgroundColor: '{{colors.amber060}}',
        },
      },
      customSeekHandle: {
        base: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      customCurrentDuration: {
        base: {
          backgroundColor: '{{colors.amber020}}',
          borderStyle: 'solid',
          borderColor: '{{colors.amber060}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.amber060}}',
        },
      },
      customSeekPosition: {
        base: {
          backgroundColor: '{{colors.amber060}}',
          borderStyle: 'solid',
          borderColor: '{{colors.amber020}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.amber020}}',
        },
      },
      customControlBar: {
        base: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      customIconToggle: {
        base: {
          color: '{{colors.amber070}}',
        },
      },
      customTimeDisplay: {
        base: {
          color: '{{colors.amber070}}',
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
    },
  },
};

const waitForSelector = 'div.vjs-poster:not(.vjs-hidden)';

export const StoryVideoPlayerDefault = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <StorybookPage columns="auto">
      <StorybookCase>
        <VideoPlayer ref={videoRef} config={DEFAULT_VIDEO_PLAYER_CONFIG} />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryVideoPlayerDefault.storyName = 'Default';
StoryVideoPlayerDefault.parameters = {percy: {waitForSelector}};

export const StoryVideoPlayerPlaylist = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <StorybookPage columns="auto">
      <StorybookCase>
        <VideoPlayer
          ref={videoRef}
          config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
          overrides={defaultOverrides}
        />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryVideoPlayerPlaylist.storyName = 'Playlist';
StoryVideoPlayerPlaylist.parameters = {percy: {waitForSelector}};

export const StoryVideoPlayerOverrides = () => (
  <StorybookPage>
    <StorybookCase title="Style - play button">
      <VideoPlayer
        config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
        overrides={{
          ...defaultOverrides,
          playButton: {
            stylePreset: 'customPlaybutton',
          },
        }}
      />
    </StorybookCase>
    <StorybookCase title="Style - seek bar">
      <VideoPlayer
        config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
        overrides={{
          ...defaultOverrides,
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
              paddingInline: 'space030',
              paddingBlock: 'space030',
              typographyPreset: 'utilityMeta020',
            },
            seekPosition: {
              stylePreset: 'customSeekPosition',
              paddingInline: 'space030',
              paddingBlock: 'space030',
              typographyPreset: 'utilityMeta020',
            },
          },
        }}
      />
    </StorybookCase>
    <StorybookCase title="Style - control bar">
      <VideoPlayer
        config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
        overrides={{
          ...defaultOverrides,
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
              typographyPreset: 'utilityMeta020',
              stylePreset: 'customTimeDisplay',
              currentTime: {
                spaceInline: 'space020',
              },
              divider: {
                spaceInline: 'space020',
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
              stylePreset: 'customIconToggle',
            },
          },
        }}
      />
    </StorybookCase>
    <StorybookCase title="Style - dock text and overlay">
      <VideoPlayer
        config={PLAYLISTS_VIDEO_PLAYER_CONFIG}
        overrides={{
          dockText: {
            stylePreset: 'customDockText',
            paddingInline: {
              xs: 'space030',
              md: 'space040',
            },
            paddingBlock: {
              xs: 'space030',
              md: 'space040',
            },
            title: {
              stylePreset: 'inkContrast',
              typographyPreset: {
                xs: 'editorialSubheadline020',
                md: 'editorialSubheadline020',
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
    </StorybookCase>
  </StorybookPage>
);
StoryVideoPlayerOverrides.storyName = 'Overrides';
StoryVideoPlayerOverrides.parameters = {percy: {waitForSelector}};

export default {
  title: 'Components/Video Player',
  component: VideoPlayer,
  disabledRules: [
    'landmark-unique',
    'duplicate-id-aria',
    'duplicate-id-active',
  ],
  parameters: {
    nkDocs: {
      title: 'Video Player',
      url: 'https://newskit.co.uk/components/video-player',
      description:
        'The video player component wraps the <a href="https://player.support.brightcove.com/getting-started/index.html">Brightcove player</a> in NewsKit themes.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          videoPlayerCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
