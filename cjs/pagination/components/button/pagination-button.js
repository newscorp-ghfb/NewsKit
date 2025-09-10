"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("../../styled");
var PaginationButton = function (props) { return (
// @ts-ignore - href must be allowed to be undefined so that Button renders as a link when appropriate
react_1.default.createElement(styled_1.StyledButton, tslib_1.__assign({}, props))); };
exports.PaginationButton = PaginationButton;
//# sourceMappingURL=pagination-button.js.map