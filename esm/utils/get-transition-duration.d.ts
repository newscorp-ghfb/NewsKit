import { ThemeProp } from './style-types';
type TimeoutType = {
    appear: number;
    enter: number;
    exit: number;
};
export declare const getMotionDurationValue: (transitionDuration: string) => number;
export declare const getTransitionDurationFromTheme: (themeToken: string | string[]) => (props: ThemeProp & {
    overrides?: unknown;
}) => TimeoutType;
export declare const getTransitionDuration: (defaultPath?: string, overridePath?: string | false) => (props: ThemeProp & {
    overrides?: unknown;
}) => TimeoutType;
export {};
//# sourceMappingURL=get-transition-duration.d.ts.map