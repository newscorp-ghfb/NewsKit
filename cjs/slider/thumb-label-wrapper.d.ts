import React from 'react';
import { SliderProps, ThumbLabelProps } from './types';
interface ThumbLabelWrapperProps extends Pick<SliderProps, 'thumbLabel' | 'values' | 'vertical' | 'overrides'>, Omit<ThumbLabelProps, 'children'> {
    index: number;
}
export declare const ThumbLabelWrapper: React.FC<ThumbLabelWrapperProps>;
export {};
//# sourceMappingURL=thumb-label-wrapper.d.ts.map