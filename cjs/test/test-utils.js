"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCypressTest = exports.isVisualTest = exports.generateString = exports.applyAsyncStyling = exports.renderToFragmentInBody = exports.renderInBody = exports.renderWithThemeInBody = exports.renderHook = exports.render = exports.renderToFragmentWithTheme = exports.renderToFragmentWithThemeFactory = exports.renderWithTheme = exports.renderWithThemeFactory = exports.renderWithImplementation = exports.renderToFragment = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@testing-library/react");
var theme_1 = require("../theme");
var newskit_provider_1 = require("../newskit-provider");
var renderToFragment = function (ui, options) { return (0, react_2.render)(ui, options).asFragment(); };
exports.renderToFragment = renderToFragment;
var renderWithImplementation = function (Component, props, fireEvent, options, theme) {
    if (fireEvent === void 0) { fireEvent = function () { }; }
    return (0, react_2.render)(react_1.default.createElement(Component, tslib_1.__assign({}, props)), tslib_1.__assign(tslib_1.__assign({}, options), { wrapper: function (_a) {
            var children = _a.children;
            return (react_1.default.createElement(newskit_provider_1.NewsKitProvider, { theme: theme || theme_1.newskitLightTheme, instrumentation: { fireEvent: fireEvent } }, children));
        } }));
};
exports.renderWithImplementation = renderWithImplementation;
var renderWithThemeFactory = function (defaultTheme) { return function (Component, props, theme, options) {
    if (theme === void 0) { theme = defaultTheme; }
    return (0, react_2.render)(react_1.default.createElement(Component, tslib_1.__assign({}, props)), tslib_1.__assign(tslib_1.__assign({}, options), { wrapper: function (_a) {
            var children = _a.children;
            return (react_1.default.createElement(newskit_provider_1.NewsKitProvider, { theme: theme }, children));
        } }));
}; };
exports.renderWithThemeFactory = renderWithThemeFactory;
exports.renderWithTheme = (0, exports.renderWithThemeFactory)(theme_1.newskitLightTheme);
var renderToFragmentWithThemeFactory = function (defaultTheme) { return function (Component, props, theme, options) {
    if (theme === void 0) { theme = defaultTheme; }
    return (0, exports.renderWithTheme)(Component, props, theme, options).asFragment();
}; };
exports.renderToFragmentWithThemeFactory = renderToFragmentWithThemeFactory;
exports.renderToFragmentWithTheme = (0, exports.renderToFragmentWithThemeFactory)(theme_1.newskitLightTheme);
var react_3 = require("@testing-library/react");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return react_3.render; } });
Object.defineProperty(exports, "renderHook", { enumerable: true, get: function () { return react_3.renderHook; } });
var renderWithThemeInBody = function (Component, props, theme) {
    var _a = (0, exports.renderWithTheme)(Component, props, theme), baseElement = _a.baseElement, rest = tslib_1.__rest(_a, ["baseElement"]);
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
    return tslib_1.__assign(tslib_1.__assign({}, rest), { baseElement: baseElement, asFragment: asFragment });
};
exports.renderWithThemeInBody = renderWithThemeInBody;
// same as renderWithThemeInBody but without theme
var renderInBody = function (Component, props) {
    var _a = (0, react_2.render)(react_1.default.createElement(Component, tslib_1.__assign({}, props))), baseElement = _a.baseElement, rest = tslib_1.__rest(_a, ["baseElement"]);
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
    return tslib_1.__assign(tslib_1.__assign({}, rest), { baseElement: baseElement, asFragment: asFragment });
};
exports.renderInBody = renderInBody;
var renderToFragmentInBody = function (Component, props, theme) {
    var asFragment = (0, exports.renderWithThemeInBody)(Component, props, theme).asFragment;
    var fragment = asFragment();
    return fragment;
};
exports.renderToFragmentInBody = renderToFragmentInBody;
// The @floating-ui lib's inset styling is applied asynchronously. To make
// assertions on the top / left attribute values, we need to flush the queue to
// ensure that the element has been positioned before making assertions on
// snapshots. See https://floating-ui.com/docs/react-dom#testing for more info.
var applyAsyncStyling = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, react_2.act)(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.applyAsyncStyling = applyAsyncStyling;
var generateString = function (length) {
    return Array.from(Array(length).keys())
        .map(function () { return '*'; })
        .join('');
};
exports.generateString = generateString;
exports.isVisualTest = process.env.STORYBOOK_IS_VISUAL_TEST === 'true';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.isCypressTest = !!window.Cypress;
//# sourceMappingURL=test-utils.js.map