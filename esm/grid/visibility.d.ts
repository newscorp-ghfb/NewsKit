import React from 'react';
import { DisplayProperty } from 'csstype';
import { Devices } from '../theme';
interface CommonProps {
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    targetDevices?: Array<Devices>;
}
export interface VisibilityProps extends CommonProps {
    children?: React.ReactNode;
    display?: DisplayProperty;
}
export declare const Visible: React.FC<VisibilityProps>;
export declare const Hidden: React.FC<VisibilityProps>;
export {};
//# sourceMappingURL=visibility.d.ts.map