"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Legend = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var Legend = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return (React.createElement(styled_1.StyledLegend, tslib_1.__assign({}, props, { noCrop: typeof children !== 'string' }), children));
};
exports.Legend = Legend;
//# sourceMappingURL=legend.js.map