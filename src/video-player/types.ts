import {LogicalPaddingProps, LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    videojs?: any;
  }
}

export interface BrightCoveBasicAttributes {
  'data-account': string;
  'data-player': string;
  'data-video-id'?: string;
  'data-playlist-id'?: string;
  'data-embed': string;
  controls?: boolean;
}

export type BrightCoveOtherAttributes = object;

type VideoPlayerOverrides = {
  playButton?: {
    stylePreset?: MQ<string>;
  };
  seekBar?: {
    stylePreset?: MQ<string>;
    loadingProgressBar?: {
      stylePreset?: MQ<string>;
    };
    playProgressBar?: {
      stylePreset?: MQ<string>;
    };
    seekHandle?: {
      stylePreset?: MQ<string>;
      width?: MQ<string>;
    };
    currentDuration?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    } & LogicalProps;
    seekPosition?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    } & LogicalProps;
  };
  controlBar?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    maxHeight?: MQ<string>;
    timeDisplay?: {
      recorded?: {
        typographyPreset?: MQ<string>;
        stylePreset?: MQ<string>;
        currentTime?: {
          spaceInline?: MQ<string>;
        };
        divider?: {
          spaceInline?: MQ<string>;
        };
      };
    };
    volumeControl?: {
      volumeBar?: {
        stylePreset?: MQ<string>;
      };
      volumeLevel?: {
        stylePreset?: MQ<string>;
      };
    };
    iconToggle?: {
      stylePreset?: MQ<string>;
    };
  };
  dockText?: {
    stylePreset?: MQ<string>;
    title?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<string>;
    };
    description?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  } & LogicalProps;
  miniCardOverlay?: {
    stylePreset?: MQ<string>;
    countdown?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
      spaceStack?: MQ<string>;
    };
    name?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
    closeButton?: LogicalPaddingProps;
  } & LogicalProps;
} & LogicalProps;

export interface VideoPlayerProps {
  config: BrightCoveBasicAttributes & BrightCoveOtherAttributes;
  overrides?: VideoPlayerOverrides;
}
