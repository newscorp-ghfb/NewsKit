import { CardOverridesProps } from './types';
export declare const isHorizontal: (layout?: string) => boolean | "" | undefined;
export declare const isReverse: (layout?: string) => boolean;
export declare const filterInteractiveStates: (path: string, hasHref?: boolean) => (props: import("..").ThemeProp) => any;
export declare const getHorizontalRatio: (layout: string, cardDefaults: {
    horizontalRatio: string;
}, overrides: CardOverridesProps) => string[];
//# sourceMappingURL=utils.d.ts.map