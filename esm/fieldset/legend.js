import { __assign, __rest } from "tslib";
import * as React from 'react';
import { StyledLegend } from './styled';
export var Legend = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(StyledLegend, __assign({}, props, { noCrop: typeof children !== 'string' }), children));
};
//# sourceMappingURL=legend.js.map