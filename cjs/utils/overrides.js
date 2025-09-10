"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentOverrides = void 0;
var tslib_1 = require("tslib");
var react_is_1 = require("react-is");
var has_own_property_1 = require("./has-own-property");
var getComponentOverrides = function (OverridesValue, DefaultComponent, componentProps) {
    // componentOverride:
    if (OverridesValue && (0, react_is_1.isValidElementType)(OverridesValue)) {
        return [OverridesValue, componentProps];
    }
    // propsOverride:
    if (typeof OverridesValue === 'object' &&
        (0, has_own_property_1.hasOwnProperty)(OverridesValue, 'props')) {
        return [
            DefaultComponent,
            tslib_1.__assign(tslib_1.__assign({}, componentProps), OverridesValue.props),
        ];
    }
    // styleOverride:
    return [DefaultComponent, tslib_1.__assign({ overrides: OverridesValue }, componentProps)];
};
exports.getComponentOverrides = getComponentOverrides;
//# sourceMappingURL=overrides.js.map