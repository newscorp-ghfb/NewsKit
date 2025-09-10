import { BreakpointKeys, Theme } from '../theme';
export declare const getVisibleBreakpointsForLayout: (layout: Partial<{
    xs: "horizontal" | "vertical";
    sm: "horizontal" | "vertical";
    md: "horizontal" | "vertical";
    lg: "horizontal" | "vertical";
    xl: "horizontal" | "vertical";
}>, theme: Theme) => {
    verticalBreakpoints: Partial<{
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
    }>;
    horizontalBreakpoints: Partial<{
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
    }>;
};
//# sourceMappingURL=utils.d.ts.map