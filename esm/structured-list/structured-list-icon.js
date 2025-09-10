import React from 'react';
import { IconFilledLaunch, IconOutlinedArrowForwardIos, } from '../icons';
import { isLinkExternal } from '../link/utils';
import { Stack } from '../stack';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
export var StructuredListIcon = function (_a) {
    var overrides = _a.overrides, href = _a.href;
    var theme = useTheme();
    var iconSizeToken = getToken({ theme: theme, overrides: overrides }, 'structuredListItem.icon', 'icon', 'size');
    var iconStylePresetToken = getToken({ theme: theme, overrides: overrides }, 'structuredListItem.icon', 'icon', 'stylePreset');
    return (React.createElement(Stack, { stackDistribution: "flex-end", flow: "horizontal-center" }, href && isLinkExternal(href) ? (React.createElement(IconFilledLaunch, { overrides: {
            size: iconSizeToken,
            stylePreset: iconStylePresetToken,
        } })) : (React.createElement(IconOutlinedArrowForwardIos, { overrides: {
            size: iconSizeToken,
            stylePreset: iconStylePresetToken,
        } }))));
};
//# sourceMappingURL=structured-list-icon.js.map