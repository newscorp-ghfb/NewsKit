import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { BaseFlag } from '../flag/flag';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { as as emotionAs } from '../utils/component';
import { useTheme } from '../theme';
import { styled } from '../utils/style';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { getTransitionPreset } from '../utils/style/transition-preset';
import { EventTrigger, useInstrumentation } from '../instrumentation';
var StyledFlag = styled(BaseFlag)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", ";\n"])), function (_a) {
    var href = _a.href, disabled = _a.disabled;
    return href && !disabled && { cursor: 'pointer' };
}, function (_a) {
    var size = _a.size;
    return getTransitionPreset("tag.".concat(size), '');
});
var ThemelessTag = React.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, disabled = _a.disabled, href = _a.href, eventContext = _a.eventContext, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'tag' : _c, props = __rest(_a, ["overrides", "disabled", "href", "eventContext", "eventOriginator"]);
    var theme = useTheme();
    var _d = props.size, size = _d === void 0 ? 'medium' : _d;
    var fireEvent = useInstrumentation().fireEvent;
    return (React.createElement(StyledFlag, __assign({ ref: ref, "data-testid": "tag", disabled: disabled, href: disabled ? undefined : href }, emotionAs(href && !disabled ? 'a' : 'div'), props, { overrides: __assign(__assign({}, theme.componentDefaults.tag[size]), filterOutFalsyProperties(overrides)), onClick: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            fireEvent({
                originator: eventOriginator,
                trigger: EventTrigger.Click,
                context: __assign({ href: href }, eventContext),
            });
            if (props.onClick) {
                props.onClick.apply(props, args);
            }
        } })));
});
export var Tag = withOwnTheme(ThemelessTag)({ defaults: defaults, stylePresets: stylePresets });
var templateObject_1;
//# sourceMappingURL=tag.js.map