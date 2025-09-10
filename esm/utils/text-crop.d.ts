import { createStyleObject } from '@capsizecss/core';
type FontUnit = 'px' | 'rem';
export type TextCropProps = {
    fontSize: `${number}${FontUnit}`;
    lineHeight: number | string;
    fontMetrics: FontMetrics;
};
export type FontMetrics = {
    capHeight: number;
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
};
export type StyleObject = Omit<ReturnType<typeof createStyleObject>, 'fontSize' | 'lineHeight'> & {
    padding: string;
    fontSize: `${number}px`;
    lineHeight: `${number}px`;
};
export type TextCropResults = Omit<StyleObject, 'fontSize' | 'lineHeight'> & {
    padding: string;
    fontSize: `${number}${FontUnit}`;
    lineHeight: `${number}${FontUnit}`;
};
export declare const textCrop: ({ lineHeight, fontSize, fontMetrics, }: TextCropProps) => TextCropResults;
export {};
//# sourceMappingURL=text-crop.d.ts.map