import { SyntheticEvent } from 'react';
import { AudioPlayerProps } from './types';
export interface AudioFunctionDependencies {
    onPreviousTrack: AudioPlayerProps['onPreviousTrack'];
    onNextTrack: AudioPlayerProps['onNextTrack'];
    autoPlay: AudioPlayerProps['autoPlay'];
    disablePreviousTrack: AudioPlayerProps['disablePreviousTrack'];
    src: AudioPlayerProps['src'];
    live: NonNullable<AudioPlayerProps['live']>;
    loading: boolean;
    duration: number;
    playing: boolean;
    showLoaderTimeoutRef: React.MutableRefObject<number>;
    trackPositionRef: React.MutableRefObject<number>;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setTrackPosition: React.Dispatch<React.SetStateAction<number[]>>;
    setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    setDisplayDuration: React.Dispatch<React.SetStateAction<number>>;
    setBuffered: React.Dispatch<React.SetStateAction<TimeRanges | undefined>>;
    setIsPrevTrackBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const useAudioFunctions: ({ onPreviousTrack, onNextTrack, autoPlay, disablePreviousTrack, src, live, duration, loading, playing, showLoaderTimeoutRef, trackPositionRef, audioRef, setLoading, setTrackPosition, setPlayState, setVolume, setDuration, setDisplayDuration, setBuffered, setIsPrevTrackBtnDisabled, }: AudioFunctionDependencies) => {
    audioEvents: {
        onPlay: () => void;
        onPause: () => void;
        onWaiting: () => void;
        onCanPlay: () => void;
        onEnded: () => void;
        onVolumeChange: ({ target }: SyntheticEvent<HTMLAudioElement, Event>) => void;
        onDurationChange: ({ target }: SyntheticEvent<HTMLAudioElement, Event>) => void;
        onTimeUpdate: ({ target }: SyntheticEvent<HTMLAudioElement, Event>) => void;
        onProgress: ({ target }: SyntheticEvent<HTMLAudioElement, Event>) => void;
    };
    onClickPrevious: () => void;
    onClickNext: () => void;
    onClickBackward: () => void;
    onClickForward: () => void;
    onPopoutClick: () => void;
    togglePlay: () => void;
    onChangeSlider: ([value]: number[]) => void;
    onChangeVolumeSlider: (value: number) => void;
};
//# sourceMappingURL=audio-functions.d.ts.map