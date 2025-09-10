"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledGridLayout = void 0;
var tslib_1 = require("tslib");
var logical_properties_1 = require("../utils/logical-properties");
var style_1 = require("../utils/style");
var GRID_DEFAULT_PROPS = {
    rowGap: undefined,
    columnGap: undefined,
    columns: undefined,
    rows: undefined,
    justifyContent: undefined,
    alignContent: undefined,
    justifyItems: undefined,
    alignItems: undefined,
    areas: undefined,
    inline: false,
    autoFlow: undefined,
    autoRows: undefined,
    autoColumns: undefined,
};
var mapTemplate = function (theme, templateString) {
    return templateString === null || templateString === void 0 ? void 0 : templateString.split(' ').map(function (section) { return theme.sizing[section] || section; }).join(' ');
};
exports.StyledGridLayout = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"], ["\n  margin: 0;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"])), (0, style_1.handleResponsiveProp)({ inline: GRID_DEFAULT_PROPS.inline }, function (_a) {
    var inline = _a.inline;
    return ({
        display: inline ? 'inline-grid' : 'grid',
    });
}), (0, style_1.handleResponsiveProp)({ rowGap: GRID_DEFAULT_PROPS.rowGap }, function (_a, _b) {
    var rowGap = _a.rowGap;
    var theme = _b.theme;
    return ({
        rowGap: rowGap && (theme.spacePresets[rowGap] || rowGap),
    });
}), (0, style_1.handleResponsiveProp)({ columnGap: GRID_DEFAULT_PROPS.columnGap }, function (_a, _b) {
    var columnGap = _a.columnGap;
    var theme = _b.theme;
    return ({
        columnGap: columnGap && (theme.spacePresets[columnGap] || columnGap),
    });
}), (0, style_1.handleResponsiveProp)({ columns: GRID_DEFAULT_PROPS.columns }, function (_a, _b) {
    var columns = _a.columns;
    var theme = _b.theme;
    return ({
        gridTemplateColumns: mapTemplate(theme, columns),
    });
}), (0, style_1.handleResponsiveProp)({ rows: GRID_DEFAULT_PROPS.rows }, function (_a, _b) {
    var rows = _a.rows;
    var theme = _b.theme;
    return ({
        gridTemplateRows: mapTemplate(theme, rows),
    });
}), (0, style_1.handleResponsiveProp)({ areas: GRID_DEFAULT_PROPS.areas }, function (_a) {
    var areas = _a.areas;
    return ({
        gridTemplateAreas: areas,
    });
}), (0, style_1.handleResponsiveProp)({ autoFlow: GRID_DEFAULT_PROPS.autoFlow }, function (_a) {
    var autoFlow = _a.autoFlow;
    return ({
        gridAutoFlow: autoFlow,
    });
}), (0, style_1.handleResponsiveProp)({ autoRows: GRID_DEFAULT_PROPS.autoRows }, function (_a, _b) {
    var autoRows = _a.autoRows;
    var theme = _b.theme;
    return ({
        gridAutoRows: mapTemplate(theme, autoRows),
    });
}), (0, style_1.handleResponsiveProp)({ autoColumns: GRID_DEFAULT_PROPS.autoColumns }, function (_a, _b) {
    var autoColumns = _a.autoColumns;
    var theme = _b.theme;
    return ({
        gridAutoColumns: mapTemplate(theme, autoColumns),
    });
}), (0, style_1.handleResponsiveProp)({ justifyContent: GRID_DEFAULT_PROPS.justifyContent }, function (_a) {
    var justifyContent = _a.justifyContent;
    return ({
        justifyContent: justifyContent,
    });
}), (0, style_1.handleResponsiveProp)({ alignContent: GRID_DEFAULT_PROPS.alignContent }, function (_a) {
    var alignContent = _a.alignContent;
    return ({
        alignContent: alignContent,
    });
}), (0, style_1.handleResponsiveProp)({ justifyItems: GRID_DEFAULT_PROPS.justifyItems }, function (_a) {
    var justifyItems = _a.justifyItems;
    return ({
        justifyItems: justifyItems,
    });
}), (0, style_1.handleResponsiveProp)({ alignItems: GRID_DEFAULT_PROPS.alignItems }, function (_a) {
    var alignItems = _a.alignItems;
    return ({
        alignItems: alignItems,
    });
}), (0, style_1.getResponsiveSize)('width', 'gridLayout', '', 'width'), (0, style_1.getResponsiveSize)('minWidth', 'gridLayout', '', 'minWidth'), (0, style_1.getResponsiveSize)('maxWidth', 'gridLayout', '', 'maxWidth'), (0, style_1.getResponsiveSize)('height', 'gridLayout', '', 'height'), (0, style_1.getResponsiveSize)('minHeight', 'gridLayout', '', 'minHeight'), (0, style_1.getResponsiveSize)('maxHeight', 'gridLayout', '', 'maxHeight'), (0, logical_properties_1.logicalProps)('gridLayout'));
var templateObject_1;
//# sourceMappingURL=styled.js.map