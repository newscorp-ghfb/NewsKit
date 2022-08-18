import {IconButtonProps} from '../icon-button/types';
import {
  AudioPlayerVolumeControlOverridesProps,
  AudioPlayerVolumeControlProps,
} from './components/volume-control/types';
import {AudioPlayerForwardButtonProps} from './components/forward-button/types';
import {AudioPlayerPlayPauseButtonProps} from './components/play-pause-button/types';
import {AudioPlayerReplayButtonProps} from './components/replay-button/types';
import {AudioPlayerSkipNextButtonProps} from './components/skip-next-button/types';
import {AudioPlayerSkipPreviousButtonProps} from './components/skip-previous-button/types';
import {AudioPlayerTimeFormatFn} from './components/time-display/types';
import {
  AudioPlayerPlaybackSpeedControlOverridesProps,
  AudioPlayerPlaybackSpeedControlProps,
} from './components/playback-speed-control/types';
import {MQ} from '../utils';

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
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setPlaybackSpeed: React.Dispatch<React.SetStateAction<number>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setDisplayDuration: React.Dispatch<React.SetStateAction<number>>;
  setBuffered: React.Dispatch<React.SetStateAction<TimeRanges | undefined>>;
}

export interface AudioPlayerProviderContext {
  id: string;
  playing: boolean;
  canPause: boolean;
  loading: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  audioSectionRef: React.RefObject<HTMLDivElement>;
  togglePlay: () => void;

  // Getter functions
  getPlayPauseButtonProps: (
    props: AudioPlayerPlayPauseButtonProps,
  ) => IconButtonProps & {
    playing: boolean;
    canPause: boolean;
  };
  getTimeDisplayProps: () => {
    format: AudioPlayerTimeFormatFn;
    currentTime: number;
    duration: number;
  };
  getSeekBarProps: () => {
    duration: number;
    currentTime: number;
    onChange: (value: number) => void;
    buffered: TimeRanges | undefined;
  };
  getVolumeControlProps: (
    props: AudioPlayerVolumeControlProps,
  ) => {
    overrides: AudioPlayerVolumeControlOverridesProps;
    keyboardShortcuts?: {muteToggle: string | string[]};
    layout?: 'collapsed' | 'vertical' | 'horizontal' | 'horizontal-expanded';
    onChange: (value: number) => void;
    volume: number;
    initialVolume: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
    muteButtonSize?: 'small' | 'medium' | 'large';
  };
  getPlaybackSpeedControlProps: (
    props: AudioPlayerPlaybackSpeedControlProps,
  ) => {
    overrides: AudioPlayerPlaybackSpeedControlOverridesProps;
    onChange: (value: number) => void;
    useModal: MQ<boolean>;
    playbackSpeed: number;
    buttonSize?: 'small' | 'medium' | 'large';
  };
  getSkipPreviousButtonProps: (
    props: AudioPlayerSkipPreviousButtonProps,
  ) => IconButtonProps;
  getSkipNextButtonProps: (
    props: AudioPlayerSkipNextButtonProps,
  ) => IconButtonProps;
  getForwardButtonProps: (
    props: AudioPlayerForwardButtonProps,
  ) => IconButtonProps;
  getReplayButtonProps: (
    props: AudioPlayerReplayButtonProps,
  ) => IconButtonProps;
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
  initialVolume?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  initialTime?: number;
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
