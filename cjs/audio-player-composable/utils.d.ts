import { IconButtonProps } from '../button';
import { AudioPlayerIconButtonWithShortcuts } from './components/types';
export declare const formatTrackTime: (time: number, maxTime?: number) => string;
export declare const formatDuration: (time: number, maxTime?: number) => string;
export declare const getMediaSegment: (duration: number, currentPosition: number) => "0-25" | "26-50" | "51-75" | "76-100";
type UseKeyboardShortcutsType = {
    action?: (e: KeyboardEvent) => void;
    defaults: string | string[];
    props: AudioPlayerIconButtonWithShortcuts;
};
export declare const useKeyboardShortcutsOnButton: ({ props, defaults: defaultKeys, action, }: UseKeyboardShortcutsType) => void;
export declare const useButtonOverrides: (props: Pick<IconButtonProps, 'overrides'>, defaultsPath: string) => IconButtonProps['overrides'];
export {};
//# sourceMappingURL=utils.d.ts.map