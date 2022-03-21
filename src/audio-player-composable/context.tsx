import {ReactJSXElement} from '@emotion/react/types/jsx-namespace';
import {createContext, useContext} from 'react';
import {FormatFn} from './components/time-display/types';

interface AudioPlayerProviderContext {
  id: string;
  playing: boolean;
  canPause: boolean;
  loading: boolean;
  togglePlay: () => void;

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
