import { __makeTemplateObject } from "tslib";
import { logicalProps } from '../utils/logical-properties';
import { getResponsiveSize, handleResponsiveProp, styled } from '../utils/style';
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
export var StyledGridLayout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"], ["\n  margin: 0;\n  padding: 0;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"])), handleResponsiveProp({ inline: GRID_DEFAULT_PROPS.inline }, function (_a) {
    var inline = _a.inline;
    return ({
        display: inline ? 'inline-grid' : 'grid',
    });
}), handleResponsiveProp({ rowGap: GRID_DEFAULT_PROPS.rowGap }, function (_a, _b) {
    var rowGap = _a.rowGap;
    var theme = _b.theme;
    return ({
        rowGap: rowGap && (theme.spacePresets[rowGap] || rowGap),
    });
}), handleResponsiveProp({ columnGap: GRID_DEFAULT_PROPS.columnGap }, function (_a, _b) {
    var columnGap = _a.columnGap;
    var theme = _b.theme;
    return ({
        columnGap: columnGap && (theme.spacePresets[columnGap] || columnGap),
    });
}), handleResponsiveProp({ columns: GRID_DEFAULT_PROPS.columns }, function (_a, _b) {
    var columns = _a.columns;
    var theme = _b.theme;
    return ({
        gridTemplateColumns: mapTemplate(theme, columns),
    });
}), handleResponsiveProp({ rows: GRID_DEFAULT_PROPS.rows }, function (_a, _b) {
    var rows = _a.rows;
    var theme = _b.theme;
    return ({
        gridTemplateRows: mapTemplate(theme, rows),
    });
}), handleResponsiveProp({ areas: GRID_DEFAULT_PROPS.areas }, function (_a) {
    var areas = _a.areas;
    return ({
        gridTemplateAreas: areas,
    });
}), handleResponsiveProp({ autoFlow: GRID_DEFAULT_PROPS.autoFlow }, function (_a) {
    var autoFlow = _a.autoFlow;
    return ({
        gridAutoFlow: autoFlow,
    });
}), handleResponsiveProp({ autoRows: GRID_DEFAULT_PROPS.autoRows }, function (_a, _b) {
    var autoRows = _a.autoRows;
    var theme = _b.theme;
    return ({
        gridAutoRows: mapTemplate(theme, autoRows),
    });
}), handleResponsiveProp({ autoColumns: GRID_DEFAULT_PROPS.autoColumns }, function (_a, _b) {
    var autoColumns = _a.autoColumns;
    var theme = _b.theme;
    return ({
        gridAutoColumns: mapTemplate(theme, autoColumns),
    });
}), handleResponsiveProp({ justifyContent: GRID_DEFAULT_PROPS.justifyContent }, function (_a) {
    var justifyContent = _a.justifyContent;
    return ({
        justifyContent: justifyContent,
    });
}), handleResponsiveProp({ alignContent: GRID_DEFAULT_PROPS.alignContent }, function (_a) {
    var alignContent = _a.alignContent;
    return ({
        alignContent: alignContent,
    });
}), handleResponsiveProp({ justifyItems: GRID_DEFAULT_PROPS.justifyItems }, function (_a) {
    var justifyItems = _a.justifyItems;
    return ({
        justifyItems: justifyItems,
    });
}), handleResponsiveProp({ alignItems: GRID_DEFAULT_PROPS.alignItems }, function (_a) {
    var alignItems = _a.alignItems;
    return ({
        alignItems: alignItems,
    });
}), getResponsiveSize('width', 'gridLayout', '', 'width'), getResponsiveSize('minWidth', 'gridLayout', '', 'minWidth'), getResponsiveSize('maxWidth', 'gridLayout', '', 'maxWidth'), getResponsiveSize('height', 'gridLayout', '', 'height'), getResponsiveSize('minHeight', 'gridLayout', '', 'minHeight'), getResponsiveSize('maxHeight', 'gridLayout', '', 'maxHeight'), logicalProps('gridLayout'));
var templateObject_1;
//# sourceMappingURL=styled.js.map