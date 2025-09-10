import React from 'react';
import { MQ } from '../utils/style';
/**
 * @deprecated ShareBarProps is deprecated and will be removed in the next major release.
 */
export interface ShareBarProps extends React.HTMLAttributes<HTMLElement> {
    label?: string;
    vertical?: boolean;
    overrides?: {
        stylePreset?: MQ<string>;
        label?: {
            typographyPreset?: MQ<string>;
            stylePreset?: MQ<string>;
            spaceInline?: MQ<string>;
            spaceInset?: MQ<string>;
        };
        items?: {
            spaceInline?: MQ<string>;
        };
    };
}
/**
 * @deprecated ShareBar is deprecated and will be removed in the next major release.
 */
export declare const ShareBar: import("../utils/with-own-theme").NewsKitReactComponents<ShareBarProps>;
//# sourceMappingURL=share-bar.d.ts.map