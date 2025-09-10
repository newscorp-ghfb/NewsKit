import { __assign, __rest } from "tslib";
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { StyledMasterContainer, StyledMasterContainerList, StyledChildContainer, StyledChildContainerListItem, DEFAULT_PROPS, } from './styled';
import { StackChild } from '../stack-child';
import { hasMatchingDisplayNameWith, as as asUtil } from '../utils/component';
import { extractLogicalPropsFromOverrides, omitLogicalPropsFromOverrides, } from '../utils/logical-properties';
var getAsProp = function (as, list) {
    return !list && as ? asUtil(as) : null;
};
var hasSpacing = function (spaceStack, spaceInline) {
    if (spaceStack &&
        ((typeof spaceStack === 'string' &&
            spaceStack !== DEFAULT_PROPS.spaceStack) ||
            (typeof spaceStack === 'object' && Object.keys(spaceStack).length > 0))) {
        return true;
    }
    if (spaceInline &&
        ((typeof spaceInline === 'string' &&
            spaceInline !== DEFAULT_PROPS.spaceInline) ||
            (typeof spaceInline === 'object' && Object.keys(spaceInline).length > 0))) {
        return true;
    }
    return false;
};
var wrapChild = function (spaceStack, spaceInline, flow, wrap, list, inline, as) { return function (child) {
    var _a, _b, _c;
    if (!child)
        return null;
    var childProps = __assign({ spaceStack: spaceStack, spaceInline: spaceInline, flow: flow, $wrap: wrap }, extractLogicalPropsFromOverrides(child.props));
    var hasSpace = hasSpacing(spaceStack, spaceInline);
    var renderAs = getAsProp(as, list);
    var ChildContainer = list
        ? StyledChildContainerListItem
        : StyledChildContainer;
    // If child is a Stack component
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (hasMatchingDisplayNameWith(child, Stack)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        var stack = React.createElement(Stack, __assign({ inline: inline, as: as }, child.props));
        return list || hasSpace ? (React.createElement(ChildContainer, __assign({}, renderAs, childProps), stack)) : (stack);
    }
    // If child is a StackChild component
    if (hasMatchingDisplayNameWith(child, StackChild)) {
        if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.order) {
            childProps.$order = child.props.order;
        }
        if ((_b = child.props) === null || _b === void 0 ? void 0 : _b.alignSelf) {
            childProps.$alignSelf = child.props.alignSelf;
        }
        return (React.createElement(ChildContainer, __assign({}, renderAs, childProps), (_c = child.props) === null || _c === void 0 ? void 0 : _c.children));
    }
    // If child is anything else
    return list || hasSpace ? (React.createElement(ChildContainer, __assign({}, renderAs, omitLogicalPropsFromOverrides(childProps)), child)) : (child);
}; };
export var Stack = React.forwardRef(function (_a, ref) {
    var _b = _a.spaceStack, spaceStack = _b === void 0 ? DEFAULT_PROPS.spaceStack : _b, _c = _a.spaceInline, spaceInline = _c === void 0 ? DEFAULT_PROPS.spaceInline : _c, _d = _a.flow, flow = _d === void 0 ? DEFAULT_PROPS.flow : _d, _e = _a.wrap, wrap = _e === void 0 ? DEFAULT_PROPS.wrap : _e, _f = _a.stackDistribution, stackDistribution = _f === void 0 ? DEFAULT_PROPS.stackDistribution : _f, _g = _a.flexGrow, flexGrow = _g === void 0 ? DEFAULT_PROPS.flexGrow : _g, _h = _a.flexShrink, flexShrink = _h === void 0 ? DEFAULT_PROPS.flexShrink : _h, _j = _a.flowReverse, flowReverse = _j === void 0 ? DEFAULT_PROPS.flowReverse : _j, _k = _a.inline, inline = _k === void 0 ? DEFAULT_PROPS.inline : _k, as = _a.as, list = _a.list, ariaLabel = _a.ariaLabel, children = _a.children, role = _a.role, height = _a.height, props = __rest(_a, ["spaceStack", "spaceInline", "flow", "wrap", "stackDistribution", "flexGrow", "flexShrink", "flowReverse", "inline", "as", "list", "ariaLabel", "children", "role", "height"]);
    var MasterContainer = list
        ? StyledMasterContainerList
        : StyledMasterContainer;
    return (React.createElement(MasterContainer, __assign({ ref: ref }, getAsProp(as, list), { spaceStack: spaceStack, spaceInline: spaceInline, flow: flow, "$wrap": wrap, flexGrow: flexGrow, flexShrink: flexShrink, flowReverse: flowReverse, stackDistribution: stackDistribution, inline: inline, "aria-label": ariaLabel, role: role, "$height": height }, props), children &&
        React.Children.map(children, function (child) {
            return wrapChild(spaceStack, spaceInline, flow, wrap, list, inline, as)(child);
        })));
});
Stack.displayName = 'Stack';
//# sourceMappingURL=stack.js.map