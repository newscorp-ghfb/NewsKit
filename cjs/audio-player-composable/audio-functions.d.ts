import { SyntheticEvent } from 'react';
import { AudioFunctionDependencies } from './types';
export declare const useAudioFunctions: ({ autoPlay, src, live, duration, loading, playing, showLoaderTimeoutRef, currentTimeRef, audioRef, setLoading, setCurrentTime, setPlayState, setVolume, setPlaybackSpeed, setDuration, setDisplayDuration, setBuffered, }: AudioFunctionDependencies) => {
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
    onClickBackward: ({ seconds }: {
        seconds: number;
    }) => void;
    onClickForward: ({ seconds }: {
        seconds: number;
    }) => void;
    togglePlay: () => void;
    onChangeSlider: (value: number) => void;
    onChangeVolumeSlider: (value: number) => void;
    onPlaybackSpeedChange: (value: number) => void;
};
//# sourceMappingURL=audio-functions.d.ts.map