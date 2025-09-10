import React from 'react';
import { Theme } from '../../../theme';
import { AudioPlayerPlaybackSpeedControlOverridesProps } from './types';
type PlaybackSpeedListProps = {
    playbackSpeed: number;
    updateSpeed: (speed: number) => void;
    setIsOpen: (isOpen: boolean) => void;
    theme: Theme;
    overrides: AudioPlayerPlaybackSpeedControlOverridesProps;
    selectedOptionRef: React.Ref<HTMLButtonElement>;
    isInsideModal: boolean;
};
export declare const PlaybackSpeedList: React.FC<PlaybackSpeedListProps>;
export {};
//# sourceMappingURL=playback-speed-list.d.ts.map