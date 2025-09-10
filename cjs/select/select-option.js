"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var SelectOption = function (props) {
    var children = props.children;
    return (react_1.default.createElement(styled_1.StyledOption, tslib_1.__assign({}, props), typeof children === 'string' ? (react_1.default.createElement("span", null, children)) : (react_1.default.createElement("div", null, children))));
};
exports.SelectOption = SelectOption;
//# sourceMappingURL=select-option.js.map