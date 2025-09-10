"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var flag_1 = require("../flag/flag");
var filter_object_1 = require("../utils/filter-object");
var component_1 = require("../utils/component");
var theme_1 = require("../theme");
var style_1 = require("../utils/style");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var transition_preset_1 = require("../utils/style/transition-preset");
var instrumentation_1 = require("../instrumentation");
var StyledFlag = (0, style_1.styled)(flag_1.BaseFlag)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", ";\n"])), function (_a) {
    var href = _a.href, disabled = _a.disabled;
    return href && !disabled && { cursor: 'pointer' };
}, function (_a) {
    var size = _a.size;
    return (0, transition_preset_1.getTransitionPreset)("tag.".concat(size), '');
});
var ThemelessTag = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, disabled = _a.disabled, href = _a.href, eventContext = _a.eventContext, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'tag' : _c, props = tslib_1.__rest(_a, ["overrides", "disabled", "href", "eventContext", "eventOriginator"]);
    var theme = (0, theme_1.useTheme)();
    var _d = props.size, size = _d === void 0 ? 'medium' : _d;
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    return (react_1.default.createElement(StyledFlag, tslib_1.__assign({ ref: ref, "data-testid": "tag", disabled: disabled, href: disabled ? undefined : href }, (0, component_1.as)(href && !disabled ? 'a' : 'div'), props, { overrides: tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.tag[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides)), onClick: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            fireEvent({
                originator: eventOriginator,
                trigger: instrumentation_1.EventTrigger.Click,
                context: tslib_1.__assign({ href: href }, eventContext),
            });
            if (props.onClick) {
                props.onClick.apply(props, args);
            }
        } })));
});
exports.Tag = (0, with_own_theme_1.withOwnTheme)(ThemelessTag)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
var templateObject_1;
//# sourceMappingURL=tag.js.map