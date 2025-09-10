import React from 'react';
import { StylePreset } from '../theme';
export type NewsKitReactComponents<T> = React.FC<T> & {
    stylePresets?: Record<string, StylePreset>;
};
export declare const withOwnTheme: <P extends {}>(BaseComponent: React.ComponentType<P> | React.ForwardRefExoticComponent<P>) => ({ defaults, stylePresets, }: {
    defaults: Record<string, Object>;
    stylePresets?: Record<string, StylePreset> | undefined;
}) => NewsKitReactComponents<P>;
//# sourceMappingURL=with-own-theme.d.ts.map