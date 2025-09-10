"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollSnapAlignment = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var context_1 = require("./context");
var styled_1 = require("./styled");
var ScrollSnapAlignment = function (_a) {
    var children = _a.children, snapAlign = _a.snapAlign;
    var snapAlignContextValue = (0, react_1.useContext)(context_1.ScrollSnapAlignmentContext);
    return (react_1.default.createElement(styled_1.StyledScrollSnapAlignment, { snapAlign: snapAlign || snapAlignContextValue }, children));
};
exports.ScrollSnapAlignment = ScrollSnapAlignment;
//# sourceMappingURL=scroll-snap-alignment.js.map