"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBlock = exports.StyledStackContainer = void 0;
var tslib_1 = require("tslib");
var block_1 = require("../block");
var style_1 = require("../utils/style");
var stack_1 = require("../stack");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledStackContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), (0, logical_properties_1.logicalProps)('titleBar'), (0, style_1.getStylePreset)('titleBar'));
exports.StyledBlock = (0, style_1.styled)(block_1.Block)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map