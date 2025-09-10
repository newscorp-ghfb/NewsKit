import { __assign, __rest } from "tslib";
import { useEffect } from 'react';
import { getAspectRatioStyles } from '../utils/get-aspect-ratio';
import { handleResponsiveProp } from '../utils/style/getters';
export var getResponsiveAspectRatioFromProps = function (_a, handler) {
    var propWidth = _a.width, propHeight = _a.height, overrides = _a.overrides, props = __rest(_a, ["width", "height", "overrides"]);
    var imgWidth = overrides && overrides.width;
    var imgHeight = overrides && overrides.height;
    return handleResponsiveProp({
        width: '100%',
        height: 'auto',
        loadingAspectRatio: '',
    }, function (_a) {
        var width = _a.width, height = _a.height, loadingAspectRatio = _a.loadingAspectRatio;
        var _b = getAspectRatioStyles({
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
    })(__assign({ width: imgWidth, height: imgHeight }, props));
};
export var useClientSide = function (callback, imgRef) {
    useEffect(function () {
        var imageElement = imgRef.current;
        if (imageElement && imageElement.complete) {
            callback();
        }
    });
};
export var getNextBreakpoint = function (current, all) {
    var currentIndex = all.indexOf(current);
    return all[currentIndex + 1];
};
//# sourceMappingURL=utils.js.map