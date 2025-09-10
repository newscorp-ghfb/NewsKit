import * as React from 'react';
import { ComponentType } from 'react';
import { AudioPlayerComposableProps } from '../audio-player-composable/types';
import { AudioPlayerProps } from '../audio-player';
type Props = AudioPlayerProps | AudioPlayerComposableProps;
type Component = ComponentType<AudioPlayerProps> | ComponentType<AudioPlayerComposableProps>;
export declare const useAllPlayersCanPlayCheck: (nbPlayers: number) => {
    allPlayersCanPlay: boolean;
    onCanPlay: () => void;
};
export declare const VisualTestAudioPlayer: ({ comp: Comp, props: { src, live, children, ...rest }, }: {
    comp: Component;
    props: Props;
}) => React.JSX.Element;
export {};
//# sourceMappingURL=audio-tests.d.ts.map