// import {TrackControlProps, ControlsOverrideProps} from './controls';
import {SliderOverrideProps} from '../slider';
import {VolumeControlOverrideProps} from '../volume-control';
import {MQ} from '../utils/style';
import {ButtonProps} from '../button';

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
  overrides?: {
    seekBar?: {
      slider?: SliderOverrideProps;
      buffering?: {
        stylePreset?: MQ<string>;
      };
    };
    // controls?: ControlsOverrideProps;
    volumeControl?: VolumeControlOverrideProps;
  };
}

export interface TrackControlProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
}

export interface PlayPauseButtonProps {
  onClick?: () => void;
  overrides?: ButtonProps['overrides'];
}

export interface AudioPlayerComposableProps {
  children: React.ReactNode;
  src: string;
  autoPlay?: boolean;
  live?: boolean;
  ariaLandmark?: string;
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
