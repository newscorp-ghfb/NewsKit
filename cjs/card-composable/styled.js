"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLink = exports.StyledActions = exports.StyledContent = exports.StyledMedia = exports.StyledCard = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var grid_layout_1 = require("../grid-layout/grid-layout");
var link_1 = require("../link");
var StyledGrid = (0, style_1.styled)(grid_layout_1.GridLayout)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", "\n"], ["\n  ", ";\n  ", ";\n  ", "\n"])), (0, style_1.getStylePreset)('', ''), (0, style_1.getTransitionPreset)('', ''), function (_a) {
    var areaName = _a.areaName;
    return areaName && "grid-area: ".concat(areaName, ";");
});
exports.StyledCard = (0, style_1.styled)(StyledGrid)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.StyledMedia = StyledGrid;
exports.StyledContent = StyledGrid;
exports.StyledActions = (0, style_1.styled)(StyledGrid)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n"], ["\n  position: relative;\n  z-index: 2;\n"])));
exports.StyledLink = (0, style_1.styled)(link_1.LinkStandalone)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  text-decoration: none;\n  ", "\n"], ["\n  text-decoration: none;\n  ", "\n"])), function (_a) {
    var expand = _a.expand;
    return expand &&
        "\n    &:before {\n      content: '';\n      position: absolute;\n      inset: 0;\n      z-index: 1;\n    }\n    ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map