/// <reference types="react" />
import { AudioPlayerProps } from './types';
export declare const PlayerGrid: import("@emotion/styled").StyledComponent<import("../grid").GridProps & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const PlayerContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Pick<AudioPlayerProps, "overrides">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const ControlContainer: import("@emotion/styled").StyledComponent<import("../grid").VisibilityProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & {
    playerTrackSize: string;
}, {}, {}>;
//# sourceMappingURL=styled.d.ts.map