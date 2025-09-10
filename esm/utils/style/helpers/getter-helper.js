import { isFontConfigObject, isFontMetricsObject } from '../../guards';
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
export var getFontMetrics = function (typographyPreset, themeFonts) {
    var fontFamily = typographyPreset.fontFamily, fontWeight = typographyPreset.fontWeight, fontMetrics = typographyPreset.fontMetrics;
    // 1. If fontMetrics are embedded in typographyPreset, return fontMetrics
    if (fontMetrics) {
        return parseFontMetrics(fontMetrics);
    }
    // 2. Lookup the fontFamilyObject for the typographyPreset's fontFamily & themeFonts
    var fontFamilyObject = getFontFamilyObject(fontFamily, themeFonts);
    // 3. If fontFamilyObject is invalid, return undefined
    if (!fontFamilyObject)
        return undefined;
    // 4. Parse the referenced fontMetrics of the fontFamilyObject given the fontFamilyObject
    // and typographyPreset's fontWeight & themeFonts
    var result = parseRefFontMetrics(fontFamilyObject, fontWeight, themeFonts);
    // 5. Return valid fontMetrics or undefined
    return isValidFontMetrics(result, fontFamily) ? result : undefined;
};
var getFontFamilyObject = function (fontFamily, themeFonts) {
    var array = Object.values(themeFonts);
    var fontFamilyObject = array.find(function (fontEl) {
        return isFontConfigObject(fontEl) &&
            getFontFamilyName(fontEl.fontFamily) ===
                getFontFamilyName(fontFamily);
    });
    var isValid = isValidFontConfig(fontFamilyObject);
    return isValid ? fontFamilyObject : undefined;
};
var getFontFamilyName = function (fontFamily) {
    return fontFamily.split(',')[0];
};
var parseFontMetrics = function (fontMetrics) {
    return fontMetrics.fontWeight010 ? fontMetrics.fontWeight010 : fontMetrics;
};
var parseRefFontMetrics = function (fontFamilyObject, fontWeight, themeFonts) {
    var themeFontsProperties = Object.entries(themeFonts);
    var weightTokenArray = themeFontsProperties.find(function (element) {
        return element.includes(fontWeight);
    });
    var weightToken = weightTokenArray && weightTokenArray[0];
    var result = (weightToken && fontFamilyObject.fontMetrics[weightToken]) ||
        fontFamilyObject.fontMetrics.fontWeight010;
    return result;
};
var isValidFontConfig = function (fontFamilyObject) {
    return fontFamilyObject ? validateFontConfig() : false;
    function validateFontConfig() {
        var cropConfig = Object.getOwnPropertyDescriptor(fontFamilyObject, 'cropConfig');
        var cropAdjustments = Object.getOwnPropertyDescriptor(fontFamilyObject, 'cropAdjustments');
        if (cropConfig || cropAdjustments) {
            console.warn('cropConfig and cropAdjustments are no longer supported; please use fontMetrics instead');
            return false;
        }
        return true;
    }
};
var isValidFontMetrics = function (fontMetrics, fontFamily) {
    if (fontMetrics && isFontMetricsObject(fontMetrics))
        return true;
    console.warn("No default fontMetrics found for '".concat(fontFamily, "'."));
    return false;
};
//# sourceMappingURL=getter-helper.js.map