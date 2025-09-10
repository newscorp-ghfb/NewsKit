import React from 'react';
import { ButtonProps, IconButtonProps } from '../../button/types';
export declare const IconVisibilityButton: import("@emotion/styled").StyledComponent<((IconButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>) & {
    theme?: import("@emotion/react").Theme | undefined;
}) & (IconButtonProps & {
    hide?: boolean | undefined;
}), {}, {}>;
export interface PlayerButtonProps {
    playing: boolean;
    canPause: boolean;
    onClick: () => void;
    loading: boolean;
    overrides?: ButtonProps['overrides'];
}
export declare const PlayerButton: React.FC<PlayerButtonProps>;
//# sourceMappingURL=play-pause.d.ts.map