"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextBreakpoint = exports.useClientSide = exports.getResponsiveAspectRatioFromProps = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var get_aspect_ratio_1 = require("../utils/get-aspect-ratio");
var getters_1 = require("../utils/style/getters");
var getResponsiveAspectRatioFromProps = function (_a, handler) {
    var propWidth = _a.width, propHeight = _a.height, overrides = _a.overrides, props = tslib_1.__rest(_a, ["width", "height", "overrides"]);
    var imgWidth = overrides && overrides.width;
    var imgHeight = overrides && overrides.height;
    return (0, getters_1.handleResponsiveProp)({
        width: '100%',
        height: 'auto',
        loadingAspectRatio: '',
    }, function (_a) {
        var width = _a.width, height = _a.height, loadingAspectRatio = _a.loadingAspectRatio;
        var _b = (0, get_aspect_ratio_1.getAspectRatioStyles)({
            aspectRatio: loadingAspectRatio,
            height: height,
            width: width,
        }), aspectWidth = _b.width, aspectHeight = _b.height, paddingTop = _b.paddingTop;
        var responsiveProps = {
            height: aspectHeight || (!propHeight && 'auto'),
            width: aspectWidth || (!propWidth && '100%'),
            paddingTop: paddingTop || '0',
        };
        // @ts-ignore
        return handler(responsiveProps);
    })(tslib_1.__assign({ width: imgWidth, height: imgHeight }, props));
};
exports.getResponsiveAspectRatioFromProps = getResponsiveAspectRatioFromProps;
var useClientSide = function (callback, imgRef) {
    (0, react_1.useEffect)(function () {
        var imageElement = imgRef.current;
        if (imageElement && imageElement.complete) {
            callback();
        }
    });
};
exports.useClientSide = useClientSide;
var getNextBreakpoint = function (current, all) {
    var currentIndex = all.indexOf(current);
    return all[currentIndex + 1];
};
exports.getNextBreakpoint = getNextBreakpoint;
//# sourceMappingURL=utils.js.map