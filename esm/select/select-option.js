import { __assign } from "tslib";
import React from 'react';
import { StyledOption } from './styled';
export var SelectOption = function (props) {
    var children = props.children;
    return (React.createElement(StyledOption, __assign({}, props), typeof children === 'string' ? (React.createElement("span", null, children)) : (React.createElement("div", null, children))));
};
//# sourceMappingURL=select-option.js.map