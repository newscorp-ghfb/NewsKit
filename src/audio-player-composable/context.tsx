import {createContext, useContext} from 'react';
import {AudioPlayerProviderContext} from './types';

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
