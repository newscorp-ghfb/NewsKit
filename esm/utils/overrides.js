import { __assign } from "tslib";
import { isValidElementType } from 'react-is';
import { hasOwnProperty } from './has-own-property';
export var getComponentOverrides = function (OverridesValue, DefaultComponent, componentProps) {
    // componentOverride:
    if (OverridesValue && isValidElementType(OverridesValue)) {
        return [OverridesValue, componentProps];
    }
    // propsOverride:
    if (typeof OverridesValue === 'object' &&
        hasOwnProperty(OverridesValue, 'props')) {
        return [
            DefaultComponent,
            __assign(__assign({}, componentProps), OverridesValue.props),
        ];
    }
    // styleOverride:
    return [DefaultComponent, __assign({ overrides: OverridesValue }, componentProps)];
};
//# sourceMappingURL=overrides.js.map