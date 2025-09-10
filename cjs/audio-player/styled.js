"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlContainer = exports.PlayerContainer = exports.PlayerGrid = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var grid_1 = require("../grid/grid");
var grid_2 = require("../grid");
var logical_properties_1 = require("../utils/logical-properties");
exports.PlayerGrid = (0, style_1.styled)(grid_1.Grid)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n"], ["\n  box-sizing: border-box;\n"])));
exports.PlayerContainer = style_1.styled.section(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  ", ";\n"], ["\n  width: 100%;\n  ", ";\n"])), (0, logical_properties_1.logicalProps)('audioPlayer'));
exports.ControlContainer = (0, style_1.styled)(grid_2.Hidden)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  width: calc(\n    184px + ", "\n  );\n  padding: 0\n    ", ";\n"], ["\n  box-sizing: border-box;\n  width: calc(\n    184px + ", "\n  );\n  padding: 0\n    ", ";\n"])), function (_a) {
    var theme = _a.theme, playerTrackSize = _a.playerTrackSize;
    return "".concat(theme.sizing[playerTrackSize]);
}, function (_a) {
    var theme = _a.theme, playerTrackSize = _a.playerTrackSize;
    return "calc(".concat(theme.sizing[playerTrackSize], " / 2)");
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map