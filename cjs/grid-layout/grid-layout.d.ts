import React from 'react';
import { MQ } from '../utils/style';
import { GridLayoutRenderProps } from './types';
export declare const GridLayoutItem: import("@emotion/styled").StyledComponent<import("../block").BlockProps & React.RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & {
    area?: string | undefined;
    order?: MQ<number> | undefined;
    justifySelf?: MQ<string> | undefined;
    alignSelf?: MQ<string> | undefined;
    column?: MQ<string> | undefined;
    row?: MQ<string> | undefined;
} & React.HTMLAttributes<HTMLElement>, {}, {}>;
export declare const GridLayout: React.ForwardRefExoticComponent<{
    rowGap?: MQ<string> | undefined;
    columnGap?: MQ<string> | undefined;
    rows?: MQ<string> | undefined;
    columns?: MQ<string> | undefined;
    justifyContent?: MQ<string> | undefined;
    alignContent?: MQ<string> | undefined;
    justifyItems?: MQ<string> | undefined;
    alignItems?: MQ<string> | undefined;
    areas?: MQ<string> | undefined;
    inline?: MQ<boolean> | undefined;
    autoColumns?: MQ<string> | undefined;
    autoRows?: MQ<string> | undefined;
    autoFlow?: MQ<string> | undefined;
    children?: React.ReactNode | GridLayoutRenderProps;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
    overrides?: ({
        width?: MQ<string> | undefined;
        minWidth?: MQ<string> | undefined;
        maxWidth?: MQ<string> | undefined;
        height?: MQ<string> | undefined;
        minHeight?: MQ<string> | undefined;
        maxHeight?: MQ<string> | undefined;
    } & import("../utils/logical-properties").LogicalProps) | undefined;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=grid-layout.d.ts.map