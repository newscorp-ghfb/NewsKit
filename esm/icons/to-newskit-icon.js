import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import { withTheme } from '../theme';
import { getSizingCssFromTheme, getStylePreset, styled } from '../utils/style';
import { getTransitionPresetFromTheme } from '../utils/style/transition-preset';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { logicalProps } from '../utils/logical-properties';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var renderIconStylePreset = function (overridesOnly) { return function (props) {
    if (!overridesOnly || (props.overrides && props.overrides.stylePreset)) {
        var stylePreset = getStylePreset('icons', '', {
            isSvg: true,
        })(props);
        var transitionPreset = getTransitionPresetFromTheme('iconColorChange')(props);
        return __assign(__assign({}, stylePreset), transitionPreset);
    }
    return {};
}; };
var StyledIcon = styled.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.\n  ", "\n\n  vertical-align: unset;\n  display: inline-block;\n\n  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity\n  && {\n    //we don't want the icon to have a default size hence using non defaulted functions\n    ", "\n    ", "\n      \n      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.\n      ", "\n  }\n\n  ", "\n"], ["\n  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.\n  ", "\n\n  vertical-align: unset;\n  display: inline-block;\n\n  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity\n  && {\n    //we don't want the icon to have a default size hence using non defaulted functions\n    ", "\n    ", "\n      \n      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.\n      ", "\n  }\n\n  ", "\n"])), renderIconStylePreset(false), function (props) {
    var _a;
    return ((_a = props.overrides) === null || _a === void 0 ? void 0 : _a.size) &&
        getSizingCssFromTheme('width', props.overrides.size);
}, function (props) {
    var _a;
    return ((_a = props.overrides) === null || _a === void 0 ? void 0 : _a.size) &&
        getSizingCssFromTheme('height', props.overrides.size);
}, renderIconStylePreset(true), logicalProps());
export var toNewsKitIcon = function (PassedIcon) {
    return withOwnTheme(withTheme(React.memo(function (props) {
        var emotionIconName = PassedIcon.displayName;
        if (props.theme.icons["".concat(emotionIconName)]) {
            var Icon = props.theme.icons["".concat(emotionIconName)];
            return React.createElement(Icon, __assign({ title: props.title }, props));
        }
        return React.createElement(StyledIcon, __assign({ title: props.title }, props, { as: PassedIcon }));
    })))({ defaults: defaults, stylePresets: stylePresets });
};
var templateObject_1;
//# sourceMappingURL=to-newskit-icon.js.map