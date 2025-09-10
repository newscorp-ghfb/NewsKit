"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsKitProvider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var layer_1 = require("../layer");
var theme_1 = require("../theme");
var use_media_query_1 = require("../utils/hooks/use-media-query");
var instrumentation_1 = require("../instrumentation");
var context_1 = require("./context");
var NewsKitProvider = function (_a) {
    var children = _a.children, theme = _a.theme, 
    /* istanbul ignore next */
    _b = _a.layer, 
    /* istanbul ignore next */
    layerProps = _b === void 0 ? {} : _b, _c = _a.instrumentation, instrumentationProps = _c === void 0 ? {} : _c, _d = _a.themeOptions, themeOptions = _d === void 0 ? {} : _d;
    var initialized = (0, context_1.useNewsKitContext)().initialized;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && initialized) {
        console.warn('You are using NewsKitProvider inside NewsKitProvider, this might cause unexpected behavior');
    }
    return (react_1.default.createElement(context_1.NewsKitInternalContext.Provider, { value: { initialized: true, themeOptions: themeOptions } },
        react_1.default.createElement(theme_1.ThemeProvider, tslib_1.__assign({ theme: theme }, themeOptions),
            react_1.default.createElement(instrumentation_1.InstrumentationProvider, tslib_1.__assign({}, instrumentationProps),
                react_1.default.createElement(use_media_query_1.MediaQueryProvider, null,
                    react_1.default.createElement(layer_1.LayerOrganizer, tslib_1.__assign({}, layerProps), children))))));
};
exports.NewsKitProvider = NewsKitProvider;
//# sourceMappingURL=newskit-provider.js.map