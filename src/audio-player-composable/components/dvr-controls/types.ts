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
