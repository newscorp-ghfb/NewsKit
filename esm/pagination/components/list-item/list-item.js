import { __assign } from "tslib";
import React from 'react';
// This component can be exported but styled components cannot. Exporting it as some users
// may need it when creating a custom composable component to use with Pagination.
// The only expected props are attributes, such as 'key' and 'data-testid'
export var PaginationListItem = function (props) { return (React.createElement("li", __assign({}, props))); };
//# sourceMappingURL=list-item.js.map