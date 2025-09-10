import { __assign, __rest } from "tslib";
import React from 'react';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { TextBlock } from '../text-block';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
import { extractLogicalPropsFromOverrides } from '../utils/logical-properties';
import { GridLayout } from '../grid-layout';
var getComponentProps = function (defaultsPath, overridesPath, themeProps) {
    var presets = ['stylePreset', 'typographyPreset'];
    return presets.reduce(function (props, presetKey) {
        // eslint-disable-next-line no-param-reassign
        props[presetKey] = getToken(themeProps, defaultsPath, overridesPath, presetKey);
        return props;
    }, { stylePreset: '', typographyPreset: '' });
};
var ThemelessCaption = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, creditText = _a.creditText, rest = __rest(_a, ["overrides", "children", "creditText"]);
    var theme = useTheme();
    var themeProps = { theme: theme, overrides: overrides };
    var captionGap = getToken(themeProps, 'caption', '', 'spaceStack');
    var captionProps = getComponentProps('caption', '', themeProps);
    var creditProps = getComponentProps('caption.credit', 'credit', themeProps);
    var logicalProps = extractLogicalPropsFromOverrides(overrides);
    return (React.createElement(GridLayout, __assign({ rowGap: captionGap, ref: ref }, logicalProps, rest),
        React.createElement(TextBlock, __assign({}, captionProps), children),
        creditText && React.createElement(TextBlock, __assign({}, creditProps), creditText)));
});
export var Caption = withOwnTheme(ThemelessCaption)({
    defaults: defaults,
});
ThemelessCaption.displayName = 'Caption';
//# sourceMappingURL=caption.js.map