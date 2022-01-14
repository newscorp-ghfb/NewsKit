import {createContext, SyntheticEvent} from 'react';

interface AudioPlayerProviderContext {
  src: string;
  autoPlay?: boolean;
  live?: boolean;
  //   playPauseButton?: {
  //     onClick: () => void;
  //   }; -> moved to the play-pause button

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
  };
  duration: number;
  trackPositionArr: number[];
  onChangeSlider: (values: number[]) => void;
}

export const AudioPlayerContext = createContext<
  Partial<AudioPlayerProviderContext>
>({});
export const AudioPlayerProvider = AudioPlayerContext.Provider;
