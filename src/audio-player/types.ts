import {TrackControlProps, ControlsOverrideProps} from './controls';
import {SliderOverrideProps} from '../slider';
import {VolumeControlOverrideProps} from '../volume-control';
import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface AudioPlayerOverrides extends LogicalProps {
  seekBar?: {
    slider?: SliderOverrideProps;
    buffering?: {
      stylePreset?: MQ<string>;
    };
  };
  controls?: ControlsOverrideProps;
  volumeControl?: VolumeControlOverrideProps;
}
export interface AudioPlayerProps
  extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'controls'>,
    TrackControlProps {
  captionSrc?: string;
  popoutHref?: string;
  live?: boolean;
  ariaLandmark?: string;
  hideVolumeControl?: boolean;
  hidePreviousTrack?: boolean;
  hideSeekButtons?: boolean;
  overrides?: AudioPlayerOverrides;
}

export enum AudioEvents {
  Play = 'onPlay',
  Pause = 'onPause',
  Waiting = 'onWaiting',
  CanPlay = 'onCanPlay',
  Ended = 'onEnded',
  VolumeChange = 'onVolumeChange',
  DurationChange = 'onDurationChange',
  TimeUpdate = 'onTimeUpdate',
  Progress = 'onProgress',
}
