import { __assign, __rest } from "tslib";
import React, { useState, useRef, useCallback } from 'react';
import dequal from 'dequal';
import composeRefs from '@seznam/compose-react-refs';
import { IconOutlinedImage } from '../icons';
import { StyledLoadingContainer, StyledIconContainer, StyledImage, StyledPicture, } from './styled';
import { useIntersection } from '../utils/hooks/use-intersection';
import { Sources } from './sources';
import { useClientSide } from './utils';
import { getComponentOverrides } from '../utils/overrides';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ImageComponent = React.forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, loadingAspectRatio = _a.loadingAspectRatio, _b = _a.placeholderIcon, placeholderIcon = _b === void 0 ? false : _b, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, _d = _a.renderOnServer, renderOnServer = _d === void 0 ? false : _d, loading = _a.loading, src = _a.src, _e = _a.sources, sources = _e === void 0 ? [] : _e, props = __rest(_a, ["width", "height", "loadingAspectRatio", "placeholderIcon", "overrides", "renderOnServer", "loading", "src", "sources"]);
    var imageRef = useRef(null);
    var _f = useState(!renderOnServer), isLoading = _f[0], setIsLoading = _f[1];
    var _g = useState(false), hasError = _g[0], setError = _g[1];
    var onLoad = useCallback(function () { return isLoading && setIsLoading(false); }, [
        isLoading,
        setIsLoading,
    ]);
    var onError = useCallback(function () { return setError(true); }, [setError]);
    useClientSide(onLoad, imageRef);
    var lazyBoundary = '256px'; // its arbitrary
    var isLazy = loading === 'lazy' && typeof window !== 'undefined';
    var hasNativeLazyLoadSupport = typeof window !== 'undefined' && 'loading' in HTMLImageElement.prototype;
    var disableIntersection = useCallback(function () {
        if (!isLazy)
            return true;
        return hasNativeLazyLoadSupport;
    }, [isLazy, hasNativeLazyLoadSupport]);
    var _h = useIntersection({
        rootMargin: lazyBoundary,
        // useIntersection is not needed when native lazy loading is supported or loading is not lazy
        disabled: disableIntersection(),
    }), setRef = _h[0], isIntersected = _h[1];
    var isVisible = !isLazy || isIntersected;
    // This code can be removed once Safari start supporting loading=lazy
    // This code can be removed once Safari start supporting loading=lazy
    var getSource = useCallback(function () {
        return isLazy && !renderOnServer && !hasNativeLazyLoadSupport && !isVisible
            ? undefined
            : src;
    }, [isVisible, isLazy, src, hasNativeLazyLoadSupport, renderOnServer]);
    var currentSrc = getSource();
    var showLoading = useCallback(function () {
        if (hasError && currentSrc !== '')
            return true;
        if (!renderOnServer && isLoading)
            return true;
        return false;
    }, [hasError, renderOnServer, isLoading, currentSrc]);
    var _j = getComponentOverrides(
    /* istanbul ignore next  */
    overrides === null || overrides === void 0 ? void 0 : overrides.placeholderIcon, IconOutlinedImage, {
        overrides: {
            size: 'iconSize040',
        },
    }), PlaceholderComponent = _j[0], placeholderProps = _j[1];
    return (React.createElement(StyledPicture, { isLoading: showLoading(), loadingAspectRatio: loadingAspectRatio, overrides: overrides, ref: setRef },
        showLoading() && (React.createElement(StyledLoadingContainer, null, placeholderIcon && (React.createElement(StyledIconContainer, null,
            React.createElement(PlaceholderComponent, __assign({}, placeholderProps)))))),
        React.createElement(Sources, { sources: sources }),
        React.createElement(StyledImage, __assign({}, props, { width: width, height: height, onLoad: onLoad, onError: onError, isLoading: showLoading(), loading: loading, overrides: overrides, loadingAspectRatio: loadingAspectRatio, ref: composeRefs(imageRef, ref), src: currentSrc }))));
});
var ThemelessImage = React.memo(ImageComponent, dequal);
export var Image = withOwnTheme(ThemelessImage)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=image.js.map