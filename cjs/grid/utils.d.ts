import { BreakpointKeys } from '../theme';
import { ThemeProp } from '../utils/style-types';
import { CellProps, GridProps } from './types';
export declare enum OverrideProp {
    Margin = "Margin",
    ColumnGutter = "ColumnGutter",
    RowGutter = "RowGutter",
    Offset = "Offset",
    Span = ""
}
export declare const breakpointKeys: ("xs" | "sm" | "md" | "lg" | "xl")[];
export declare const reverseBreakpointKeys: ("xs" | "sm" | "md" | "lg" | "xl")[];
export declare const getInheritedValue: (prop: OverrideProp, breakpoint: BreakpointKeys, { theme, ...props }: (GridProps | CellProps) & ThemeProp) => string | undefined;
export declare const getOverridableProp: (prop: OverrideProp, breakpoint: BreakpointKeys, props: ThemeProp) => number;
//# sourceMappingURL=utils.d.ts.map