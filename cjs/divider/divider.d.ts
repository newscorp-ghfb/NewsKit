import React from 'react';
import { MQ } from '../utils/style';
import { LogicalProps } from '../utils/logical-properties';
export interface DividerOverrides {
    stylePreset?: MQ<string>;
}
export interface DividerProps {
    vertical?: MQ<boolean>;
    overrides?: DividerOverrides & LogicalProps;
}
export declare const Divider: import("../utils/with-own-theme").NewsKitReactComponents<DividerProps & React.RefAttributes<HTMLHRElement>>;
//# sourceMappingURL=divider.d.ts.map