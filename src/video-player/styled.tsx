import {logicalProps} from '../utils/logical-properties';
import {
  getResponsiveBorder,
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils/style';
import {VideoPlayerProps} from './types';

export const VideoPlayerWrapper = styled.div<
  Pick<VideoPlayerProps, 'overrides'>
>`
  ${logicalProps()}
  //play button
  .video-js .vjs-big-play-button {
    ${getStylePreset('videoPlayer.playButton', 'playButton')}
  }

  //seekbar - container - collapsed
  .video-js .vjs-progress-holder {
    width: 100%;
    ${getStylePreset('videoPlayer.seekBar', 'seekBar')};
  }

  // seekbar - loading progress bar
  .video-js .vjs-load-progress {
    ${getStylePreset(
      'videoPlayer.seekBar.loadingProgressBar',
      'seekBar.loadingProgressBar',
    )};
    div {
      background: none;
    }
  }

  // seekbar - play progress bar
  .video-js .vjs-play-progress {
    ${getStylePreset(
      'videoPlayer.seekBar.playProgressBar',
      'seekBar.playProgressBar',
    )}
    .vjs-time-tooltip {
      ${getStylePreset(
        'videoPlayer.seekBar.currentDuration',
        'seekBar.currentDuration',
      )}
    }
  }
  //seekbar - currentDuration & seekPosition typographyPreset & spaceInset
  .video-js .vjs-time-tooltip {
    ${getTypographyPreset(
      'videoPlayer.seekBar.currentDuration',
      'seekBar.currentDuration',
    )}
    ${getResponsiveSpace(
      'padding',
      'videoPlayer.seekBar.currentDuration',
      'seekBar.currentDuration',
      'spaceInset',
    )}
  }

  //seekbar - seekhandle
  .video-js .vjs-progress-control .vjs-mouse-display {
    ${getStylePreset('videoPlayer.seekBar.seekHandle', 'seekBar.seekHandle')}
    ${getResponsiveBorder(
      borderSize => ({
        width: borderSize,
      }),
      'videoPlayer.seekBar.seekHandle',
      'seekBar.seekHandle',
      'width',
    )}
    .vjs-time-tooltip {
      ${getStylePreset(
        'videoPlayer.seekBar.seekPosition',
        'seekBar.seekPosition',
      )}
    }
  }
  //control-bar
  .video-js .vjs-control-bar {
    ${getStylePreset('videoPlayer.controlBar', 'controlBar')};
    ${getTypographyPreset('videoPlayer.controlBar', 'controlBar')};
    ${getResponsiveSize(
      'maxHeight',
      'videoPlayer.controlBar',
      'controlBar',
      'maxHeight',
    )}
  }

  //controlBar - timeDisplay - recorded
  .video-js .vjs-time-control {
    align-items: center;
    ${getStylePreset(
      'videoPlayer.controlBar.timeDisplay.stylePreset',
      'controlBar.timeDisplay.stylePreset',
    )}
    ${getTypographyPreset(
      'videoPlayer.controlBar.timeDisplay.typographyPreset',
      'controlBar.timeDisplay.typographyPreset',
    )}
  }
  //controlBar - timeDisplay - recorded - currentTime
  .video-js .vjs-current-time {
    ${getResponsiveSpace(
      'marginRight',
      'videoPlayer.controlBar.timeDisplay.currentTime',
      'controlBar.timeDisplay.currentTime',
      'spaceInline',
    )}
  }
  //controlBar - timeDisplay - recorded - divider
  .video-js .vjs-time-divider {
    ${getResponsiveSpace(
      'marginRight',
      'videoPlayer.controlBar.timeDisplay.divider',
      'controlBar.timeDisplay.divider',
      'spaceInline',
    )}
  }

  //control bar - volume container
  .video-js .vjs-volume-panel-horizontal {
    display: flex;
    align-items: center;
  }

  //control bar - volume bar
  .video-js .vjs-volume-bar {
    ${getStylePreset(
      'videoPlayer.controlBar.volumeControl.volumeBar',
      'controlBar.volumeControl.volumeBar',
    )}
  }

  //control bar - volume level
  .video-js .vjs-volume-level {
    ${getStylePreset(
      'videoPlayer.controlBar.volumeControl.volumeLevel',
      'controlBar.volumeControl.volumeLevel',
    )}
  }

  //control bar - Icon toggles
  .video-js .vjs-control {
    ${getStylePreset(
      'videoPlayer.controlBar.iconToggle',
      'controlBar.iconToggle',
    )}
  }

  // Dock text - text wrapper
  .video-js .vjs-dock-text {
    background: none;
    ${getStylePreset('videoPlayer.dockText', 'dockText')};
    ${getResponsiveSpace(
      'padding',
      'videoPlayer.dockText',
      'dockText',
      'spaceInset',
    )}
  }

  // Dock text - title
  .video-js .vjs-dock-title {
    ${getStylePreset('videoPlayer.dockText.title', 'dockText.title')};
    ${getTypographyPreset('videoPlayer.dockText.title', 'dockText.title')};
    ${getResponsiveSpace(
      'marginBottom',
      'videoPlayer.dockText.title',
      'dockText.title',
      'spaceStack',
    )}
  }
  // Dock text - description
  .video-js .vjs-dock-description {
    ${getStylePreset(
      'videoPlayer.dockText.description',
      'dockText.description',
    )};
    ${getTypographyPreset(
      'videoPlayer.dockText.description',
      'dockText.description',
    )};
  }

  //miniOverlayCard - container

  .video-js .vjs-next-overlay-banner {
    ${getStylePreset('videoPlayer.miniCardOverlay', 'miniCardOverlay')};
    ${getResponsiveSpace(
      'padding',
      'videoPlayer.miniCardOverlay',
      'miniCardOverlay',
      'spaceInset',
    )};
  }

  //miniOverlayCard - countdown

  .video-js .vjs-next-overlay-countdown {
    ${getTypographyPreset(
      'videoPlayer.miniCardOverlay.countdown',
      'miniCardOverlay.countdown',
    )};
    ${getStylePreset(
      'videoPlayer.miniCardOverlay.countdown',
      'miniCardOverlay.countdown',
    )};
    ${getResponsiveSpace(
      'marginBottom',
      'videoPlayer.miniCardOverlay.countdown',
      'miniCardOverlay.countdown',
      'spaceStack',
    )}
  }

  //miniOverlayCard - name

  .video-js .vjs-next-overlay-name {
    ${getTypographyPreset(
      'videoPlayer.miniCardOverlay.name',
      'miniCardOverlay.name',
    )};
    ${getStylePreset(
      'videoPlayer.miniCardOverlay.name',
      'miniCardOverlay.name',
    )};
  }

  //miniOverlayCard - closeButton
  .video-js .vjs-next-overlay {
    .vjs-close-button {
      ${getResponsiveSpace(
        'padding',
        'videoPlayer.miniCardOverlay.closeButton',
        'miniCardOverlay.closeButton',
        'spaceInset',
      )}
    }
  }
`;
