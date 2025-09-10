import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { Block } from '../block';
import { handleResponsiveProp, styled } from '../utils/style';
import { StyledGridLayout } from './styled';
import { areaToValidCSS, capitalize, getAreasList } from './utils';
function isGridLayoutRenderProps(children, areasNames) {
    return typeof children === 'function' && !!areasNames.length;
}
export var GridLayoutItem = styled(Block)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  grid-area: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  grid-area: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) { return props.area; }, handleResponsiveProp({ order: undefined }, function (_a) {
    var order = _a.order;
    return ({
        order: order,
    });
}), handleResponsiveProp({ justifySelf: undefined }, function (_a) {
    var justifySelf = _a.justifySelf;
    return ({
        justifySelf: justifySelf,
    });
}), handleResponsiveProp({ alignSelf: undefined }, function (_a) {
    var alignSelf = _a.alignSelf;
    return ({
        alignSelf: alignSelf,
    });
}), handleResponsiveProp({ column: undefined }, function (_a) {
    var column = _a.column;
    return ({
        gridColumn: column,
    });
}), handleResponsiveProp({ row: undefined }, function (_a) {
    var row = _a.row;
    return ({
        gridRow: row,
    });
}));
export var GridLayout = React.forwardRef(function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var areas = props.areas;
    var areasNames = getAreasList(areas || '');
    var Areas = {};
    var isFunctionWithAreas = isGridLayoutRenderProps(children, areasNames);
    if (isFunctionWithAreas) {
        areasNames.forEach(function (area) {
            var componentName = capitalize(area);
            Areas[componentName] = function (itemProps) { return (React.createElement(GridLayoutItem, __assign({ area: area }, itemProps))); };
        });
    }
    var validCSSAreas;
    if (typeof areas === 'object') {
        validCSSAreas = {};
        Object.entries(areas).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            validCSSAreas[key] = areaToValidCSS(value);
        });
    }
    else {
        validCSSAreas = areaToValidCSS(areas);
    }
    return (React.createElement(StyledGridLayout, __assign({ ref: ref }, props, { areas: validCSSAreas }), isFunctionWithAreas ? children(Areas) : children));
});
var templateObject_1;
//# sourceMappingURL=grid-layout.js.map