import { __makeTemplateObject } from "tslib";
import { GridLayout } from '../grid-layout';
import { styled, getStylePreset, getResponsiveSize } from '../utils/style';
export var StyledGridLayout = styled(GridLayout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ", ";\n  ", ";\n\n  svg {\n    ", ";\n    ", ";\n  }\n\n  cursor: ", ";\n\n  // Button related styles\n  overflow: hidden;\n  border: none;\n  appearance: none;\n  // End of button related styles\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ", ";\n  ", ";\n\n  svg {\n    ", ";\n    ", ";\n  }\n\n  cursor: ", ";\n\n  // Button related styles\n  overflow: hidden;\n  border: none;\n  appearance: none;\n  // End of button related styles\n\n  ", "\n"])), function (props) {
    return getResponsiveSize(function (minHeight) {
        return props.overrides && props.overrides.height
            ? { minHeight: 'auto' }
            : { minHeight: minHeight };
    }, '', '', 'minHeight')(props);
}, function (props) {
    return getResponsiveSize(function (minWidth) {
        return props.overrides && props.overrides.width
            ? { minWidth: 'auto' }
            : { minWidth: minWidth };
    }, '', '', 'minWidth')(props);
}, getResponsiveSize('width', '', '', 'iconSize'), getResponsiveSize('height', '', '', 'iconSize'), function (_a) {
    var $disabled = _a.$disabled;
    return ($disabled ? 'not-allowed' : 'default');
}, function (_a) {
    var $disabled = _a.$disabled, $loading = _a.$loading;
    return getStylePreset('', '', {
        isDisabled: $disabled,
        isLoading: $loading,
    });
});
var templateObject_1;
//# sourceMappingURL=styled.js.map