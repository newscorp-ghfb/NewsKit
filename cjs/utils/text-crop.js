"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCrop = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@capsizecss/core");
var textCrop = function (_a) {
    var lineHeight = _a.lineHeight, fontSize = _a.fontSize, fontMetrics = _a.fontMetrics;
    var parsedLineHeight;
    if (typeof lineHeight === 'string') {
        var match_1 = lineHeight.match(/^\d+(\.\d+)*$/);
        if (!match_1) {
            throw Error("invalid lineHeight: ".concat(lineHeight));
        }
        parsedLineHeight = parseFloat(lineHeight);
    }
    else {
        parsedLineHeight = lineHeight;
    }
    var match = fontSize.match(/(\d+(?:\.\d+)?)(px|rem)/);
    if (!match) {
        throw Error("invalid fontSize: ".concat(fontSize));
    }
    var fontSizeAsNumber = parseFloat(match[1]);
    var fontSizeUnits = match[2];
    var leading = parsedLineHeight * fontSizeAsNumber;
    var capsizeStyles = (0, core_1.createStyleObject)({
        fontSize: fontSizeAsNumber,
        leading: leading,
        fontMetrics: fontMetrics,
    });
    // Changing cropping approach to block
    capsizeStyles['::after'].display = 'block';
    capsizeStyles['::before'].display = 'block';
    var overrides = {};
    if (fontSizeUnits !== 'px') {
        overrides.fontSize = fontSize;
        overrides.lineHeight = "".concat(leading).concat(fontSizeUnits);
    }
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, capsizeStyles), overrides), { padding: '0.5px 0px' });
};
exports.textCrop = textCrop;
//# sourceMappingURL=text-crop.js.map