"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var theme_1 = require("../theme");
var get_transition_duration_1 = require("../utils/get-transition-duration");
var hooks_1 = require("../utils/hooks");
var style_1 = require("../utils/style");
var transition_preset_1 = require("../utils/style/transition-preset");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
// getResponsiveSpace('zIndex') will be replaced with a new function once PPDSC-1711 is done
var StyledOverlay = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  ", ";\n\n  ", ";\n"], ["\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  ", ";\n\n  ", ";\n"])), (0, style_1.getStylePreset)('overlay', ''), (0, transition_preset_1.getTransitionPreset)('overlay', '', 'nk-overlay'));
var BaseOverlay = react_1.default.forwardRef(function (props, transitionRef) {
    (0, hooks_1.useLockBodyScroll)();
    return react_1.default.createElement(StyledOverlay, tslib_1.__assign({ "data-testid": "overlay", ref: transitionRef }, props));
});
var ThemlessOverlay = function (_a) {
    var open = _a.open, overrides = _a.overrides, props = tslib_1.__rest(_a, ["open", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    // To learn more about why this is needed: https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
    var cssTransitionNodeRef = react_1.default.useRef(null);
    return (react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: (0, get_transition_duration_1.getTransitionDuration)('overlay', '')({ theme: theme, overrides: overrides }), classNames: "nk-overlay", mountOnEnter: true, unmountOnExit: true, appear: true },
        react_1.default.createElement(BaseOverlay, tslib_1.__assign({}, props, { ref: cssTransitionNodeRef, overrides: overrides }))));
};
exports.Overlay = (0, with_own_theme_1.withOwnTheme)(ThemlessOverlay)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
var templateObject_1;
//# sourceMappingURL=overlay.js.map