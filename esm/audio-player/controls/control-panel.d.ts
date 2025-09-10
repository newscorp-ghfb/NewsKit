import React from 'react';
import { MQ } from '../../utils/style';
import { ButtonOverrides } from '../../button';
export interface TrackControlProps {
    onNextTrack?: () => void;
    disableNextTrack?: boolean;
    onPreviousTrack?: () => void;
    disablePreviousTrack?: boolean;
}
export interface ControlsOverrideProps {
    space?: MQ<string>;
    previousButton?: ButtonOverrides;
    replayButton?: ButtonOverrides;
    playPauseButton?: ButtonOverrides;
    forwardButton?: ButtonOverrides;
    nextButton?: ButtonOverrides;
    popoutButton?: ButtonOverrides;
}
export interface ControlPanelProps extends TrackControlProps {
    showControls: boolean;
    playing: boolean;
    live: boolean;
    loading: boolean;
    togglePlay: () => void;
    onClickBackward?: () => void;
    onClickForward?: () => void;
    overrides?: Omit<ControlsOverrideProps, 'popoutButton'>;
}
export declare const ButtonsContainer: import("@emotion/styled").StyledComponent<import("../../stack").StackProps & React.RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const ControlPanel: React.FC<ControlPanelProps>;
//# sourceMappingURL=control-panel.d.ts.map