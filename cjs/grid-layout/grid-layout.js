"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridLayout = exports.GridLayoutItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var block_1 = require("../block");
var style_1 = require("../utils/style");
var styled_1 = require("./styled");
var utils_1 = require("./utils");
function isGridLayoutRenderProps(children, areasNames) {
    return typeof children === 'function' && !!areasNames.length;
}
exports.GridLayoutItem = (0, style_1.styled)(block_1.Block)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  grid-area: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  grid-area: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) { return props.area; }, (0, style_1.handleResponsiveProp)({ order: undefined }, function (_a) {
    var order = _a.order;
    return ({
        order: order,
    });
}), (0, style_1.handleResponsiveProp)({ justifySelf: undefined }, function (_a) {
    var justifySelf = _a.justifySelf;
    return ({
        justifySelf: justifySelf,
    });
}), (0, style_1.handleResponsiveProp)({ alignSelf: undefined }, function (_a) {
    var alignSelf = _a.alignSelf;
    return ({
        alignSelf: alignSelf,
    });
}), (0, style_1.handleResponsiveProp)({ column: undefined }, function (_a) {
    var column = _a.column;
    return ({
        gridColumn: column,
    });
}), (0, style_1.handleResponsiveProp)({ row: undefined }, function (_a) {
    var row = _a.row;
    return ({
        gridRow: row,
    });
}));
exports.GridLayout = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    var areas = props.areas;
    var areasNames = (0, utils_1.getAreasList)(areas || '');
    var Areas = {};
    var isFunctionWithAreas = isGridLayoutRenderProps(children, areasNames);
    if (isFunctionWithAreas) {
        areasNames.forEach(function (area) {
            var componentName = (0, utils_1.capitalize)(area);
            Areas[componentName] = function (itemProps) { return (react_1.default.createElement(exports.GridLayoutItem, tslib_1.__assign({ area: area }, itemProps))); };
        });
    }
    var validCSSAreas;
    if (typeof areas === 'object') {
        validCSSAreas = {};
        Object.entries(areas).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            validCSSAreas[key] = (0, utils_1.areaToValidCSS)(value);
        });
    }
    else {
        validCSSAreas = (0, utils_1.areaToValidCSS)(areas);
    }
    return (react_1.default.createElement(styled_1.StyledGridLayout, tslib_1.__assign({ ref: ref }, props, { areas: validCSSAreas }), isFunctionWithAreas ? children(Areas) : children));
});
var templateObject_1;
//# sourceMappingURL=grid-layout.js.map