import { __assign, __rest } from "tslib";
import * as React from 'react';
import { FormInputContext } from '../form/context';
import { getComponentOverrides } from '../utils/overrides';
import { Legend as DefaultLegend } from './legend';
import { StyledFieldset } from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessFieldset = React.forwardRef(function (_a, ref) {
    var legend = _a.legend, _b = _a.size, size = _b === void 0 ? 'medium' : _b, children = _a.children, overrides = _a.overrides, props = __rest(_a, ["legend", "size", "children", "overrides"]);
    var value = React.useContext(FormInputContext);
    var formInputContextWithSize = __assign(__assign({}, value), { size: size });
    var _c = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.legend, DefaultLegend, {
        size: size,
    }), Legend = _c[0], legendProps = _c[1];
    return (React.createElement(StyledFieldset, __assign({ overrides: overrides }, props, { ref: ref }),
        legend && (React.createElement(Legend, __assign({}, legendProps), typeof legend === 'function' ? legend() : legend)),
        React.createElement(FormInputContext.Provider, { value: formInputContextWithSize }, children)));
});
export var Fieldset = withOwnTheme(ThemelessFieldset)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=fieldset.js.map