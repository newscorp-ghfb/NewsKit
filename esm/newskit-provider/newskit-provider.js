import { __assign } from "tslib";
import React from 'react';
import { LayerOrganizer } from '../layer';
import { ThemeProvider } from '../theme';
import { MediaQueryProvider } from '../utils/hooks/use-media-query';
import { InstrumentationProvider, } from '../instrumentation';
import { NewsKitInternalContext, useNewsKitContext } from './context';
export var NewsKitProvider = function (_a) {
    var children = _a.children, theme = _a.theme, 
    /* istanbul ignore next */
    _b = _a.layer, 
    /* istanbul ignore next */
    layerProps = _b === void 0 ? {} : _b, _c = _a.instrumentation, instrumentationProps = _c === void 0 ? {} : _c, _d = _a.themeOptions, themeOptions = _d === void 0 ? {} : _d;
    var initialized = useNewsKitContext().initialized;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && initialized) {
        console.warn('You are using NewsKitProvider inside NewsKitProvider, this might cause unexpected behavior');
    }
    return (React.createElement(NewsKitInternalContext.Provider, { value: { initialized: true, themeOptions: themeOptions } },
        React.createElement(ThemeProvider, __assign({ theme: theme }, themeOptions),
            React.createElement(InstrumentationProvider, __assign({}, instrumentationProps),
                React.createElement(MediaQueryProvider, null,
                    React.createElement(LayerOrganizer, __assign({}, layerProps), children))))));
};
//# sourceMappingURL=newskit-provider.js.map