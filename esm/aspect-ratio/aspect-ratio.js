import React from 'react';
import { getAspectRatioStyles } from '../utils/get-aspect-ratio';
import { Container, StyledDiv } from './styled';
/**
 * @deprecated AspectRatio is deprecated and will be removed in the next major release.
 */
export var AspectRatio = function (_a) {
    var aspectRatio = _a.aspectRatio, width = _a.width, height = _a.height, children = _a.children, maxHeight = _a.maxHeight, maxWidth = _a.maxWidth;
    var _b = getAspectRatioStyles({
        aspectRatio: aspectRatio,
        width: width,
        height: height,
    }), paddingTop = _b.paddingTop, $width = _b.width, $height = _b.height;
    var _c = getAspectRatioStyles({
        aspectRatio: aspectRatio,
        width: maxWidth,
        height: maxHeight,
    }), mWidth = _c.width, mHeight = _c.height;
    return (React.createElement(Container, { paddingTop: paddingTop, maxHeight: mHeight, maxWidth: mWidth },
        React.createElement(StyledDiv, { "$width": $width, "$height": $height }, children)));
};
//# sourceMappingURL=aspect-ratio.js.map