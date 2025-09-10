import React from 'react';
import type { JSX } from 'react';
export declare const as: (tag: keyof JSX.IntrinsicElements) => any;
export declare const isValidNode: (node: React.ReactNode) => boolean;
export declare const isClassComponent: (component: any) => any;
export declare const isFunctionComponent: (Component: any) => boolean;
export declare const isStyledComponent: (value: any) => boolean;
export declare const isReactComponent: (component: any) => any;
export declare const getDisplayName: (component: any) => any;
export declare const hasMatchingDisplayNameWith: (baseComponent: any, matchComponent: any) => boolean;
export declare const renderIfReactComponent: (node?: any) => React.ReactElement<{}, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=component.d.ts.map