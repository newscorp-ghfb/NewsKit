import {ReactJSXElement} from '@emotion/react/types/jsx-namespace';
import React, {
  createContext,
  ReactElement,
  SyntheticEvent,
  useContext,
} from 'react';
import {FormatFn} from './components/time-display/types';

interface AudioPlayerProviderContext {
  id: string;
  src: string;
  autoPlay?: boolean;
  // Internal
  audioRef: React.RefObject<HTMLAudioElement>;
  audioSectionRef: React.RefObject<HTMLDivElement>;
  playing: boolean;
  canPause: boolean;
  loading: boolean;
  togglePlay: () => void;
  audioEvents: {
    onCanPlay: () => void;
    onDurationChange: ({
      target,
    }: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onTimeUpdate: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onWaiting: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onEnded: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onProgress: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
    onPause: ({target}: SyntheticEvent<HTMLAudioElement, Event>) => void;
  };
  // Getter functions

  getPlayPauseButtonProps: (args: {
    onClick?: () => void;
  }) => {
    ariaLabel: string;
    ariaPressed: boolean;
    loading: boolean;
    onClick: () => void;
    playing: boolean;
    canPause: boolean;
    playStateIcon: ReactJSXElement;
  };
  getForwardButtonProps: (args: {
    onClick?: () => void;
    seconds?: number;
  }) => {
    children: ReactElement;
    ariaLabel: string;
    onClick: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
  };
  getReplayButtonProps: (args: {
    onClick?: () => void;
    seconds?: number;
  }) => {
    defaultReplayIcon: ReactElement;
    ariaLabel: string;
    onClick: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
  };
  getTimeDisplayProps: () => {
    format: FormatFn;
    currentTime: number;
    duration: number;
  };
  getSeekBarProps: () => {
    duration: number;
    currentTime: number;
    onChange: (value: number) => void;
    buffered: TimeRanges | undefined;
  };
}

export const AudioPlayerContext = createContext<
  Partial<AudioPlayerProviderContext>
>({});

export const AudioPlayerProvider = AudioPlayerContext.Provider;

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);

  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(context).length === 0
  ) {
    // eslint-disable-next-line no-console
    console.error(
      'You are using a component which needs to be a child of <AudioPlayerComposable />',
    );
  }

  return context;
};
