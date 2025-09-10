import React from 'react';
import { ButtonProps } from '../../button';
import { MQ } from '../../utils/style';
export interface TrackControlProps {
    onClick: () => void;
    stylePreset?: MQ<string>;
    overrides?: ButtonProps['overrides'];
}
export declare const ForwardButton: React.FC<TrackControlProps>;
export declare const BackwardButton: React.FC<TrackControlProps>;
//# sourceMappingURL=forward-replay.d.ts.map