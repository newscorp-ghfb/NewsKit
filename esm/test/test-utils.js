import { __assign, __awaiter, __generator, __rest } from "tslib";
import React from 'react';
import { act, render as renderer, } from '@testing-library/react';
import { newskitLightTheme } from '../theme';
import { NewsKitProvider } from '../newskit-provider';
export var renderToFragment = function (ui, options) { return renderer(ui, options).asFragment(); };
export var renderWithImplementation = function (Component, props, fireEvent, options, theme) {
    if (fireEvent === void 0) { fireEvent = function () { }; }
    return renderer(React.createElement(Component, __assign({}, props)), __assign(__assign({}, options), { wrapper: function (_a) {
            var children = _a.children;
            return (React.createElement(NewsKitProvider, { theme: theme || newskitLightTheme, instrumentation: { fireEvent: fireEvent } }, children));
        } }));
};
export var renderWithThemeFactory = function (defaultTheme) { return function (Component, props, theme, options) {
    if (theme === void 0) { theme = defaultTheme; }
    return renderer(React.createElement(Component, __assign({}, props)), __assign(__assign({}, options), { wrapper: function (_a) {
            var children = _a.children;
            return (React.createElement(NewsKitProvider, { theme: theme }, children));
        } }));
}; };
export var renderWithTheme = renderWithThemeFactory(newskitLightTheme);
export var renderToFragmentWithThemeFactory = function (defaultTheme) { return function (Component, props, theme, options) {
    if (theme === void 0) { theme = defaultTheme; }
    return renderWithTheme(Component, props, theme, options).asFragment();
}; };
export var renderToFragmentWithTheme = renderToFragmentWithThemeFactory(newskitLightTheme);
export { render, renderHook } from '@testing-library/react';
export var renderWithThemeInBody = function (Component, props, theme) {
    var _a = renderWithTheme(Component, props, theme), baseElement = _a.baseElement, rest = __rest(_a, ["baseElement"]);
    // TODO: asFragment takes the HTML only from the container, NOT the whole body
    // and the portals are rendered outside the container
    // that's why we need to use baseElement for snapshots
    // https://github.com/testing-library/react-testing-library/blob/c8c93f83228a68a270583c139972e79b1812b7d3/src/pure.js
    var asFragment = function () {
        var template = document.createElement('template');
        template.innerHTML = baseElement.innerHTML;
        // downshift adds this element to the body, we don't want to be part of the snapshots
        var msg = template.content.getElementById('a11y-status-message');
        if (msg)
            msg.remove();
        return template.content;
    };
    return __assign(__assign({}, rest), { baseElement: baseElement, asFragment: asFragment });
};
// same as renderWithThemeInBody but without theme
export var renderInBody = function (Component, props) {
    var _a = renderer(React.createElement(Component, __assign({}, props))), baseElement = _a.baseElement, rest = __rest(_a, ["baseElement"]);
    // TODO: asFragment takes the HTML only from the container, NOT the whole body
    // and the portals are rendered outside the container
    // that's why we need to use baseElement for snapshots
    // https://github.com/testing-library/react-testing-library/blob/c8c93f83228a68a270583c139972e79b1812b7d3/src/pure.js
    var asFragment = function () {
        var template = document.createElement('template');
        template.innerHTML = baseElement.innerHTML;
        // downshift adds this element to the body, we don't want to be part of the snapshots
        var msg = template.content.getElementById('a11y-status-message');
        if (msg)
            msg.remove();
        return template.content;
    };
    return __assign(__assign({}, rest), { baseElement: baseElement, asFragment: asFragment });
};
export var renderToFragmentInBody = function (Component, props, theme) {
    var asFragment = renderWithThemeInBody(Component, props, theme).asFragment;
    var fragment = asFragment();
    return fragment;
};
// The @floating-ui lib's inset styling is applied asynchronously. To make
// assertions on the top / left attribute values, we need to flush the queue to
// ensure that the element has been positioned before making assertions on
// snapshots. See https://floating-ui.com/docs/react-dom#testing for more info.
export var applyAsyncStyling = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, act(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var generateString = function (length) {
    return Array.from(Array(length).keys())
        .map(function () { return '*'; })
        .join('');
};
export var isVisualTest = process.env.STORYBOOK_IS_VISUAL_TEST === 'true';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var isCypressTest = !!window.Cypress;
//# sourceMappingURL=test-utils.js.map