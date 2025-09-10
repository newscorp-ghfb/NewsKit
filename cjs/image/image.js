"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var dequal_1 = tslib_1.__importDefault(require("dequal"));
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var icons_1 = require("../icons");
var styled_1 = require("./styled");
var use_intersection_1 = require("../utils/hooks/use-intersection");
var sources_1 = require("./sources");
var utils_1 = require("./utils");
var overrides_1 = require("../utils/overrides");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ImageComponent = react_1.default.forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, loadingAspectRatio = _a.loadingAspectRatio, _b = _a.placeholderIcon, placeholderIcon = _b === void 0 ? false : _b, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, _d = _a.renderOnServer, renderOnServer = _d === void 0 ? false : _d, loading = _a.loading, src = _a.src, _e = _a.sources, sources = _e === void 0 ? [] : _e, props = tslib_1.__rest(_a, ["width", "height", "loadingAspectRatio", "placeholderIcon", "overrides", "renderOnServer", "loading", "src", "sources"]);
    var imageRef = (0, react_1.useRef)(null);
    var _f = (0, react_1.useState)(!renderOnServer), isLoading = _f[0], setIsLoading = _f[1];
    var _g = (0, react_1.useState)(false), hasError = _g[0], setError = _g[1];
    var onLoad = (0, react_1.useCallback)(function () { return isLoading && setIsLoading(false); }, [
        isLoading,
        setIsLoading,
    ]);
    var onError = (0, react_1.useCallback)(function () { return setError(true); }, [setError]);
    (0, utils_1.useClientSide)(onLoad, imageRef);
    var lazyBoundary = '256px'; // its arbitrary
    var isLazy = loading === 'lazy' && typeof window !== 'undefined';
    var hasNativeLazyLoadSupport = typeof window !== 'undefined' && 'loading' in HTMLImageElement.prototype;
    var disableIntersection = (0, react_1.useCallback)(function () {
        if (!isLazy)
            return true;
        return hasNativeLazyLoadSupport;
    }, [isLazy, hasNativeLazyLoadSupport]);
    var _h = (0, use_intersection_1.useIntersection)({
        rootMargin: lazyBoundary,
        // useIntersection is not needed when native lazy loading is supported or loading is not lazy
        disabled: disableIntersection(),
    }), setRef = _h[0], isIntersected = _h[1];
    var isVisible = !isLazy || isIntersected;
    // This code can be removed once Safari start supporting loading=lazy
    // This code can be removed once Safari start supporting loading=lazy
    var getSource = (0, react_1.useCallback)(function () {
        return isLazy && !renderOnServer && !hasNativeLazyLoadSupport && !isVisible
            ? undefined
            : src;
    }, [isVisible, isLazy, src, hasNativeLazyLoadSupport, renderOnServer]);
    var currentSrc = getSource();
    var showLoading = (0, react_1.useCallback)(function () {
        if (hasError && currentSrc !== '')
            return true;
        if (!renderOnServer && isLoading)
            return true;
        return false;
    }, [hasError, renderOnServer, isLoading, currentSrc]);
    var _j = (0, overrides_1.getComponentOverrides)(
    /* istanbul ignore next  */
    overrides === null || overrides === void 0 ? void 0 : overrides.placeholderIcon, icons_1.IconOutlinedImage, {
        overrides: {
            size: 'iconSize040',
        },
    }), PlaceholderComponent = _j[0], placeholderProps = _j[1];
    return (react_1.default.createElement(styled_1.StyledPicture, { isLoading: showLoading(), loadingAspectRatio: loadingAspectRatio, overrides: overrides, ref: setRef },
        showLoading() && (react_1.default.createElement(styled_1.StyledLoadingContainer, null, placeholderIcon && (react_1.default.createElement(styled_1.StyledIconContainer, null,
            react_1.default.createElement(PlaceholderComponent, tslib_1.__assign({}, placeholderProps)))))),
        react_1.default.createElement(sources_1.Sources, { sources: sources }),
        react_1.default.createElement(styled_1.StyledImage, tslib_1.__assign({}, props, { width: width, height: height, onLoad: onLoad, onError: onError, isLoading: showLoading(), loading: loading, overrides: overrides, loadingAspectRatio: loadingAspectRatio, ref: (0, compose_react_refs_1.default)(imageRef, ref), src: currentSrc }))));
});
var ThemelessImage = react_1.default.memo(ImageComponent, dequal_1.default);
exports.Image = (0, with_own_theme_1.withOwnTheme)(ThemelessImage)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=image.js.map