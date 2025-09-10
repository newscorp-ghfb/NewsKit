"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionGroup = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var hooks_1 = require("../utils/hooks");
var component_1 = require("../utils/component");
var accordion_1 = require("./accordion");
var expandedPropToArray = function (expandedProp, arrayLength) {
    if (expandedProp === 'all') {
        return Array.from(Array(arrayLength).keys());
    }
    if (expandedProp !== undefined && !Array.isArray(expandedProp)) {
        return [expandedProp];
    }
    return expandedProp;
};
var takeFirst = function (expandedProp, onlyOne) {
    if (Array.isArray(expandedProp) && onlyOne) {
        return tslib_1.__spreadArray([], expandedProp, true).splice(0, 1);
    }
    return expandedProp;
};
var unifyPropValue = function (expandedProp, arrayLength, single) {
    return takeFirst(expandedPropToArray(expandedProp, arrayLength), single);
};
exports.AccordionGroup = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.defaultExpanded, defaultExpanded = _b === void 0 ? [] : _b, onChange = _a.onChange, expanded = _a.expanded, expandSingle = _a.expandSingle, restProps = tslib_1.__rest(_a, ["children", "defaultExpanded", "onChange", "expanded", "expandSingle"]);
    var childrenArray = react_1.default.Children.toArray(children);
    var _c = (0, hooks_1.useControlled)({
        controlledValue: unifyPropValue(expanded, childrenArray.length, expandSingle),
        defaultValue: unifyPropValue(defaultExpanded, childrenArray.length, expandSingle),
    }), expandedList = _c[0], setExpandedList = _c[1];
    var handleChange = (0, react_1.useCallback)(function (index) {
        var newExpandedState = [];
        // in the case only 1 accordion is allowed to be open
        if (expandSingle) {
            // replace current the expanded accordion with the new one
            if (!expandedList.includes(index)) {
                newExpandedState = [index];
            }
            else {
                // close all when you click on the same accordion
                newExpandedState = [];
            }
            //
        }
        else {
            // eslint-disable-next-line no-lonely-if
            if (!expandedList.includes(index)) {
                // add to the list of expanded accordions
                newExpandedState = tslib_1.__spreadArray(tslib_1.__spreadArray([], expandedList, true), [index], false);
            }
            else {
                // remove from the list of expanded accordions
                newExpandedState = expandedList.filter(function (i) { return i !== index; });
            }
        }
        setExpandedList(newExpandedState);
        if (onChange) {
            onChange(newExpandedState);
        }
    }, [setExpandedList, expandedList, expandSingle, onChange]);
    return (react_1.default.createElement("div", tslib_1.__assign({ ref: ref }, restProps), childrenArray.map(function (child, index) {
        if ((0, component_1.hasMatchingDisplayNameWith)(child, accordion_1.Accordion)) {
            return react_1.default.cloneElement(child, {
                expanded: expandedList.includes(index),
                onChange: function () { return handleChange(index); },
            });
        }
        return child;
    })));
});
//# sourceMappingURL=accordion-group.js.map