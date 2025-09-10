import { __assign, __rest, __spreadArray } from "tslib";
import React, { useCallback } from 'react';
import { useControlled } from '../utils/hooks';
import { hasMatchingDisplayNameWith } from '../utils/component';
import { Accordion } from './accordion';
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
        return __spreadArray([], expandedProp, true).splice(0, 1);
    }
    return expandedProp;
};
var unifyPropValue = function (expandedProp, arrayLength, single) {
    return takeFirst(expandedPropToArray(expandedProp, arrayLength), single);
};
export var AccordionGroup = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.defaultExpanded, defaultExpanded = _b === void 0 ? [] : _b, onChange = _a.onChange, expanded = _a.expanded, expandSingle = _a.expandSingle, restProps = __rest(_a, ["children", "defaultExpanded", "onChange", "expanded", "expandSingle"]);
    var childrenArray = React.Children.toArray(children);
    var _c = useControlled({
        controlledValue: unifyPropValue(expanded, childrenArray.length, expandSingle),
        defaultValue: unifyPropValue(defaultExpanded, childrenArray.length, expandSingle),
    }), expandedList = _c[0], setExpandedList = _c[1];
    var handleChange = useCallback(function (index) {
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
                newExpandedState = __spreadArray(__spreadArray([], expandedList, true), [index], false);
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
    return (React.createElement("div", __assign({ ref: ref }, restProps), childrenArray.map(function (child, index) {
        if (hasMatchingDisplayNameWith(child, Accordion)) {
            return React.cloneElement(child, {
                expanded: expandedList.includes(index),
                onChange: function () { return handleChange(index); },
            });
        }
        return child;
    })));
});
//# sourceMappingURL=accordion-group.js.map