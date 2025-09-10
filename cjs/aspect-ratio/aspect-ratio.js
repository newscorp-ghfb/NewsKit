"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspectRatio = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var get_aspect_ratio_1 = require("../utils/get-aspect-ratio");
var styled_1 = require("./styled");
/**
 * @deprecated AspectRatio is deprecated and will be removed in the next major release.
 */
var AspectRatio = function (_a) {
    var aspectRatio = _a.aspectRatio, width = _a.width, height = _a.height, children = _a.children, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth;
    var _b = (0, get_aspect_ratio_1.getAspectRatioStyles)({
        aspectRatio: aspectRatio,
        width: width,
        height: height,
    }), paddingTop = _b.paddingTop, $width = _b.width, $height = _b.height;
    var _c = (0, get_aspect_ratio_1.getAspectRatioStyles)({
        aspectRatio: aspectRatio,
        width: maxWidth,
        height: maxHeight,
    }), mWidth = _c.width, mHeight = _c.height;
    return (react_1.default.createElement(styled_1.Container, { paddingTop: paddingTop, maxHeight: mHeight, maxWidth: mWidth },
        react_1.default.createElement(styled_1.StyledDiv, { "$width": $width, "$height": $height }, children)));
};
exports.AspectRatio = AspectRatio;
//# sourceMappingURL=aspect-ratio.js.map