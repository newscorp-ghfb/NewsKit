"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDiv = exports.Container = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
exports.Container = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  ", "\n"])), function (_a) {
    var maxHeight = _a.maxHeight, maxWidth = _a.maxWidth, paddingTop = _a.paddingTop;
    return ({ maxHeight: maxHeight, maxWidth: maxWidth, paddingTop: paddingTop });
});
exports.StyledDiv = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  ", "\n"])), function (_a) {
    var _b = _a.$width, width = _b === void 0 ? '100%' : _b, _c = _a.$height, height = _c === void 0 ? 'auto' : _c;
    return ({
        width: width,
        height: height,
    });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map