"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var tslib_1 = require("tslib");
/* eslint-disable react/destructuring-assignment */
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var stack_child_1 = require("../stack-child");
var component_1 = require("../utils/component");
var logical_properties_1 = require("../utils/logical-properties");
var getAsProp = function (as, list) {
    return !list && as ? (0, component_1.as)(as) : null;
};
var hasSpacing = function (spaceStack, spaceInline) {
    if (spaceStack &&
        ((typeof spaceStack === 'string' &&
            spaceStack !== styled_1.DEFAULT_PROPS.spaceStack) ||
            (typeof spaceStack === 'object' && Object.keys(spaceStack).length > 0))) {
        return true;
    }
    if (spaceInline &&
        ((typeof spaceInline === 'string' &&
            spaceInline !== styled_1.DEFAULT_PROPS.spaceInline) ||
            (typeof spaceInline === 'object' && Object.keys(spaceInline).length > 0))) {
        return true;
    }
    return false;
};
var wrapChild = function (spaceStack, spaceInline, flow, wrap, list, inline, as) { return function (child) {
    var _a, _b, _c;
    if (!child)
        return null;
    var childProps = tslib_1.__assign({ spaceStack: spaceStack, spaceInline: spaceInline, flow: flow, $wrap: wrap }, (0, logical_properties_1.extractLogicalPropsFromOverrides)(child.props));
    var hasSpace = hasSpacing(spaceStack, spaceInline);
    var renderAs = getAsProp(as, list);
    var ChildContainer = list
        ? styled_1.StyledChildContainerListItem
        : styled_1.StyledChildContainer;
    // If child is a Stack component
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if ((0, component_1.hasMatchingDisplayNameWith)(child, exports.Stack)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        var stack = react_1.default.createElement(exports.Stack, tslib_1.__assign({ inline: inline, as: as }, child.props));
        return list || hasSpace ? (react_1.default.createElement(ChildContainer, tslib_1.__assign({}, renderAs, childProps), stack)) : (stack);
    }
    // If child is a StackChild component
    if ((0, component_1.hasMatchingDisplayNameWith)(child, stack_child_1.StackChild)) {
        if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.order) {
            childProps.$order = child.props.order;
        }
        if ((_b = child.props) === null || _b === void 0 ? void 0 : _b.alignSelf) {
            childProps.$alignSelf = child.props.alignSelf;
        }
        return (react_1.default.createElement(ChildContainer, tslib_1.__assign({}, renderAs, childProps), (_c = child.props) === null || _c === void 0 ? void 0 : _c.children));
    }
    // If child is anything else
    return list || hasSpace ? (react_1.default.createElement(ChildContainer, tslib_1.__assign({}, renderAs, (0, logical_properties_1.omitLogicalPropsFromOverrides)(childProps)), child)) : (child);
}; };
exports.Stack = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.spaceStack, spaceStack = _b === void 0 ? styled_1.DEFAULT_PROPS.spaceStack : _b, _c = _a.spaceInline, spaceInline = _c === void 0 ? styled_1.DEFAULT_PROPS.spaceInline : _c, _d = _a.flow, flow = _d === void 0 ? styled_1.DEFAULT_PROPS.flow : _d, _e = _a.wrap, wrap = _e === void 0 ? styled_1.DEFAULT_PROPS.wrap : _e, _f = _a.stackDistribution, stackDistribution = _f === void 0 ? styled_1.DEFAULT_PROPS.stackDistribution : _f, _g = _a.flexGrow, flexGrow = _g === void 0 ? styled_1.DEFAULT_PROPS.flexGrow : _g, _h = _a.flexShrink, flexShrink = _h === void 0 ? styled_1.DEFAULT_PROPS.flexShrink : _h, _j = _a.flowReverse, flowReverse = _j === void 0 ? styled_1.DEFAULT_PROPS.flowReverse : _j, _k = _a.inline, inline = _k === void 0 ? styled_1.DEFAULT_PROPS.inline : _k, as = _a.as, list = _a.list, ariaLabel = _a.ariaLabel, children = _a.children, role = _a.role, height = _a.height, props = tslib_1.__rest(_a, ["spaceStack", "spaceInline", "flow", "wrap", "stackDistribution", "flexGrow", "flexShrink", "flowReverse", "inline", "as", "list", "ariaLabel", "children", "role", "height"]);
    var MasterContainer = list
        ? styled_1.StyledMasterContainerList
        : styled_1.StyledMasterContainer;
    return (react_1.default.createElement(MasterContainer, tslib_1.__assign({ ref: ref }, getAsProp(as, list), { spaceStack: spaceStack, spaceInline: spaceInline, flow: flow, "$wrap": wrap, flexGrow: flexGrow, flexShrink: flexShrink, flowReverse: flowReverse, stackDistribution: stackDistribution, inline: inline, "aria-label": ariaLabel, role: role, "$height": height }, props), children &&
        react_1.default.Children.map(children, function (child) {
            return wrapChild(spaceStack, spaceInline, flow, wrap, list, inline, as)(child);
        })));
});
exports.Stack.displayName = 'Stack';
//# sourceMappingURL=stack.js.map