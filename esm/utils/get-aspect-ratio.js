var getUnit = function (value, prop) {
    return (prop && prop.replace(value.toString(), '')) || 'px';
};
export var getAspectRatioStyles = function (_a) {
    var aspectRatio = _a.aspectRatio, height = _a.height, width = _a.width;
    var widthVal = parseFloat(width);
    var heightVal = parseFloat(height);
    if (!Number.isNaN(widthVal) && !Number.isNaN(heightVal)) {
        return {
            paddingTop: "".concat(Math.trunc((heightVal / widthVal) * 100), "%"),
            height: "".concat(heightVal).concat(getUnit(heightVal, height)),
            width: "".concat(widthVal).concat(getUnit(widthVal, width)),
        };
    }
    if (aspectRatio && aspectRatio.includes(':')) {
        var _b = aspectRatio.split(':').map(parseFloat), wRatio = _b[0], hRatio = _b[1];
        if (!Number.isNaN(wRatio) && !Number.isNaN(hRatio)) {
            var paddingTop = "".concat(Math.trunc((hRatio / wRatio) * 100), "%");
            if (!Number.isNaN(widthVal)) {
                return {
                    paddingTop: paddingTop,
                    width: "".concat(widthVal).concat(getUnit(widthVal, width)),
                    height: "".concat(Math.trunc((widthVal / wRatio) * hRatio)).concat(getUnit(widthVal, width)),
                };
            }
            if (!Number.isNaN(heightVal)) {
                return {
                    paddingTop: paddingTop,
                    width: "".concat(Math.trunc((heightVal / hRatio) * wRatio)).concat(getUnit(heightVal, height)),
                    height: "".concat(heightVal).concat(getUnit(heightVal, height)),
                };
            }
            /* istanbul ignore next */
            return { paddingTop: paddingTop, height: height, width: width };
        }
    }
    return { height: height, width: width };
};
//# sourceMappingURL=get-aspect-ratio.js.map