import {ReactJSXElement} from '@emotion/react/types/jsx-namespace';
import React, {createContext, SyntheticEvent} from 'react';

interface AudioPlayerProviderContext {
  id: string;
  src: string;
  autoPlay?: boolean;
  // Internal
  audioRef: React.RefObject<HTMLAudioElement>;
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
  };
  duration: number;
  trackPositionArr: number[];
  onChangeSlider: (values: number[]) => void;
  // Getter functions
  getPlayPauseButtonProps: (args: {
    onClick?: () => void;
  }) => {
    ariaLabel: string;
    ariaPressed: boolean;
    loading: boolean;
    completeOnClick: () => void;
    playing: boolean;
    canPause: boolean;
    playStateIcon: ReactJSXElement;
  };
}

export const AudioPlayerContext = createContext<
  Partial<AudioPlayerProviderContext>
>({});

export const AudioPlayerProvider = AudioPlayerContext.Provider;
