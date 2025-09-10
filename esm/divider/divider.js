import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getStylePreset, handleResponsiveProp } from '../utils/style';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { logicalProps } from '../utils/logical-properties';
var StyledDivider = styled.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  border-width: 0px;\n  margin: 0;\n  ", "\n  ", "\n"], ["\n  ", ";\n  border-width: 0px;\n  margin: 0;\n  ", "\n  ", "\n"])), getStylePreset('divider.stylePreset', 'stylePreset'), handleResponsiveProp({ vertical: false }, function (_a, props) {
    var vertical = _a.vertical;
    var borderWidth = getStylePreset('divider')(props).borderWidth;
    return vertical
        ? {
            borderLeftWidth: borderWidth,
            display: 'inline-block',
            height: '100%',
        }
        : {
            borderTopWidth: borderWidth,
            width: '100%',
        };
}), logicalProps('divider'));
var ThemelessDivider = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return (React.createElement(StyledDivider, __assign({ ref: ref, "data-testid": "divider", "aria-hidden": true }, props)));
});
export var Divider = withOwnTheme(ThemelessDivider)({ defaults: defaults, stylePresets: stylePresets });
var templateObject_1;
//# sourceMappingURL=divider.js.map