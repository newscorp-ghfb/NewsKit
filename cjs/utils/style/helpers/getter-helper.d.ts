import { FontMetrics } from '../../text-crop';
/**
 * FontMetrics for Capsize/TextCrop functionality
 * @param {any} typographyPreset Typography data in NewsKit format
 * @param {any} themeFonts Fonts data in NewsKit format
 * @return {FontMetrics | undefined} FontMetrics object or undefined
 *
 * @description Supports reading of fontMetrics defined in the typographyPreset.json file
 * for use in djds-themes-publisher and compatible with NewsKit v7.4.0 format that finds
 * the fontMetrics data defined in the fonts.json by reference using fontFamily/fontWeight
 * specified in typographyPreset.json file. FontMetrics is used to calculate the required
 * Capsize cropping.
 */
export declare const getFontMetrics: (typographyPreset: any, themeFonts: any) => FontMetrics | undefined;
//# sourceMappingURL=getter-helper.d.ts.map