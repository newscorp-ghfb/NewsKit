import {IconButtonProps} from '../icon-button/types';
import {Optional} from '../utils/types';

export interface AudioFunctionDependencies {
  autoPlay: boolean;
  src: string;
  live: NonNullable<boolean>;

  loading: boolean;
  duration: number;
  playing: boolean;

  showLoaderTimeoutRef: React.MutableRefObject<number>;
  currentTimeRef: React.MutableRefObject<number>;
  audioRef: React.RefObject<HTMLAudioElement>;

  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  // setVolume: React.Dispatch<React.SetStateAction<number>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setDisplayDuration: React.Dispatch<React.SetStateAction<number>>;
  setBuffered: React.Dispatch<React.SetStateAction<TimeRanges | undefined>>;
}

export interface AudioElementProps
  extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'controls'> {
  audioRef?: React.RefObject<HTMLAudioElement>;
}

export interface AudioPlayerComposableProps
  extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'controls'> {
  children: React.ReactNode;
  live?: boolean;
  autoPlay?: boolean;
  src: string;
  ariaLandmark?: string;
  keyboardShortcuts?: {
    jumpToStart: string | string[];
    jumpToEnd: string | string[];
  };
}

export enum AudioEvents {
  Play = 'onPlay',
  Pause = 'onPause',
  Waiting = 'onWaiting',
  CanPlay = 'onCanPlay',
  Ended = 'onEnded',
  // VolumeChange = 'onVolumeChange',
  DurationChange = 'onDurationChange',
  TimeUpdate = 'onTimeUpdate',
  Progress = 'onProgress',
}

export interface AudioPlayerIconButtonProps
  extends Optional<IconButtonProps, 'aria-label'> {
  seconds?: number;
}
