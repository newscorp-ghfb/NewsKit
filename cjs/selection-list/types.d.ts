import React from 'react';
import { EventData } from '../instrumentation';
import { LogicalProps } from '../utils/logical-properties';
import { MQ } from '../utils/style';
export interface SelectionListProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement<SelectionListOptionProps>[] | React.ReactElement<SelectionListOptionProps>;
    overrides?: LogicalProps;
}
export interface SelectionListOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, EventData {
    children: React.ReactNode;
    selected?: boolean;
    selectedIcon?: React.ReactNode;
    overrides?: SelectionListOptionOverrides;
}
interface SelectionListOptionOverrides extends LogicalProps {
    minHeight?: MQ<string>;
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>;
    icon?: {
        stylePreset?: MQ<string>;
        iconSize?: MQ<string>;
    };
}
export {};
//# sourceMappingURL=types.d.ts.map