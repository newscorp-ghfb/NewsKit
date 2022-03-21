import {SyntheticEvent} from 'react';

export interface AudioFunctionDependencies {
  onPreviousTrack: () => void;
  onNextTrack: () => void;
  autoPlay: boolean;
  disablePreviousTrack: boolean;
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
  setIsPrevTrackBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TrackControlProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
}

export interface AudioElementProps
  extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'controls'> {
  src: string;
  audioRef?: React.RefObject<HTMLAudioElement>;
  autoPlay?: boolean;
  audioEvents?: {
    onPlay: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onPause: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onWaiting: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onCanPlay: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onEnded: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onDurationChange: ({
      target,
    }: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onTimeUpdate: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onProgress: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
  };
}

export interface AudioPlayerComposableProps extends AudioElementProps {
  children: React.ReactNode;
  live?: boolean;
  ariaLandmark?: string;
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
