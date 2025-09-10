import React from 'react';
import { Theme } from '../theme';
export declare const renderLabel: (Label: string | React.ComponentType) => string | React.JSX.Element;
export declare const getFillColor: (theme: Theme, fallback: string, token?: string) => string;
export declare const getTrackBackgroundStyle: (theme: Theme, sliderTrackToken: string, indicatorFillToken: string, values: number[], min: number, max: number, vertical: boolean | undefined) => {
    background: string;
};
//# sourceMappingURL=utils.d.ts.map