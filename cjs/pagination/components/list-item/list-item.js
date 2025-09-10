"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationListItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
// This component can be exported but styled components cannot. Exporting it as some users
// may need it when creating a custom composable component to use with Pagination.
// The only expected props are attributes, such as 'key' and 'data-testid'
var PaginationListItem = function (props) { return (react_1.default.createElement("li", tslib_1.__assign({}, props))); };
exports.PaginationListItem = PaginationListItem;
//# sourceMappingURL=list-item.js.map