import {SliderOverrideProps} from '../../../slider';
import {MQ} from '../../../utils';

export const DEFAULT_DVR_SEEK_STEP = 10000;

export type AudioPlayerDvrSeekButtonProps = {
  /** Callback when user seeks - passes the target timestamp (ms epoch) */
  onSeek: (timestamp: number) => void;
  /** Current playback position as a ms epoch timestamp */
  currentPosition: number;
  /** Start of the rewindable range as a ms epoch timestamp */
  rangeStart: number;
  /** Current live edge as a ms epoch timestamp */
  liveEdge: number;
  /** Seek step in ms. Default: 10000 (10s) */
  seekStep?: number;
  /** Whether playback is at the live edge */
  isLive?: boolean;
  /** Override styling */
  overrides?: {
    stylePreset?: MQ<string>;
  };
};

export type AudioPlayerDvrLiveButtonProps = {
  /** Callback to return to live edge */
  onGoLive: () => void;
  /** Whether playback is at the live edge */
  isLive?: boolean;
  /** Override styling */
  overrides?: {
    stylePreset?: MQ<string>;
  };
};

export type AudioPlayerDvrSeekBarProps = {
  /** Callback when user seeks via the seekbar - passes the target timestamp (ms epoch) */
  onSeek: (timestamp: number) => void;
  /** Current playback position as a ms epoch timestamp */
  currentPosition: number;
  /** Start of the rewindable range as a ms epoch timestamp */
  rangeStart: number;
  /** End of the rewindable range as a ms epoch timestamp */
  rangeEnd: number;
  /** Current live edge as a ms epoch timestamp */
  liveEdge: number;
  /** Seek step in ms. Default: 10000 (10s) */
  seekStep?: number;
  overrides?: {
    slider?: SliderOverrideProps;
    buffering?: {
      stylePreset?: string;
    };
  };
};

export type AudioPlayerDvrTimeDisplayProps = {
  /** Time value in milliseconds to display */
  time: number;
  /** Custom format function. Receives seconds, returns formatted string. Default: MM:SS or H:MM:SS */
  format?: (seconds: number) => string;
  /** Override styling */
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
};
