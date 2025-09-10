import { __assign, __rest } from "tslib";
import React from 'react';
import { Cell, Grid } from '../grid';
import { StyledGrid, StyledLink, StyledListItemContainer, StyledCell, } from './styled';
import { StructuredListIcon } from './structured-list-icon';
import { StructuredListCell } from './structured-list';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { EventTrigger, useInstrumentation } from '../instrumentation';
var getCellAlign = function (child) {
    if (React.isValidElement(child) &&
        child.props &&
        typeof child.props === 'object' &&
        'align' in child.props) {
        return child.props.align;
    }
    return 'start'; // default value
};
var getPullRight = function (child) {
    if (React.isValidElement(child) &&
        child.props &&
        typeof child.props === 'object' &&
        'pullRight' in child.props) {
        return child.props.pullRight;
    }
    return false; // default value
};
var getCellFullWidth = function (child) {
    if (React.isValidElement(child) &&
        child.props &&
        typeof child.props === 'object' &&
        'fullWidthSingleCell' in child.props) {
        return child.props
            .fullWidthSingleCell;
    }
    return 'start'; // default value
};
var ThemelessStructuredListItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, ariaLabel = _a.ariaLabel, disabled = _a.disabled, overrides = _a.overrides, href = _a.href, hideIcon = _a.hideIcon, linkIconAlign = _a.linkIconAlign, eventContext = _a.eventContext, _b = _a.eventOriginator, eventOriginator = _b === void 0 ? 'list item' : _b, props = __rest(_a, ["children", "ariaLabel", "disabled", "overrides", "href", "hideIcon", "linkIconAlign", "eventContext", "eventOriginator"]);
    var fireEvent = useInstrumentation().fireEvent;
    var childrenArray = React.Children.toArray(children);
    var hasHref = Boolean(href);
    if (hasHref &&
        childrenArray.length === 2 &&
        !getPullRight(childrenArray[1]) &&
        !hideIcon) {
        childrenArray.push(React.createElement(StructuredListCell, { align: linkIconAlign, key: "link-icon" },
            React.createElement(StructuredListIcon, { href: href, overrides: overrides })));
    }
    if (hasHref && childrenArray.length === 1 && !hideIcon) {
        childrenArray.push(React.createElement(StructuredListCell, { pullRight: true, align: linkIconAlign, key: "link-icon" },
            React.createElement(StructuredListIcon, { href: href, overrides: overrides })));
    }
    var alignCell1 = getCellAlign(childrenArray[0]);
    var alignCell2 = getCellAlign(childrenArray[1]);
    var alignCell3 = getCellAlign(childrenArray[2]);
    var innerGrid = (React.createElement(Grid, { xsRowGutter: "space040", xsColumnGutter: "space000", xsMargin: "space000" },
        React.createElement(StyledCell, { xs: 12, md: 5, align: alignCell1 }, childrenArray[0]),
        React.createElement(StyledCell, { xs: 12, md: 7, align: alignCell2 }, childrenArray[1])));
    var renderCells = function () {
        if (childrenArray.length === 3) {
            return (React.createElement(StyledGrid, { xsRowGutter: "space000", xsMargin: "space020", lgMargin: "space030", overrides: overrides, hasHref: hasHref },
                React.createElement(Cell, { xs: 10 }, innerGrid),
                React.createElement(StyledCell, { xs: 2, align: alignCell3 }, childrenArray[2])));
        }
        if (childrenArray.length === 2) {
            var pullRightOnSecond = getPullRight(childrenArray[1]);
            return (React.createElement(StyledGrid, { xsRowGutter: "space040", mdRowGutter: "space000", xsMargin: "space020", lgMargin: "space030", overrides: overrides, hasHref: hasHref },
                React.createElement(StyledCell, { xs: 12, md: pullRightOnSecond ? 10 : 4, align: alignCell1 }, childrenArray[0]),
                React.createElement(StyledCell, { xs: 12, md: pullRightOnSecond ? 2 : 8, align: alignCell2 }, childrenArray[1])));
        }
        if (childrenArray.length === 1) {
            var fullWidth = getCellFullWidth(childrenArray[0]);
            return (React.createElement(StyledGrid, { xsRowGutter: "space000", xsMargin: "space020", lgMargin: "space030", overrides: overrides, hasHref: hasHref },
                React.createElement(StyledCell, { xs: fullWidth ? 'full-width' : 12, align: alignCell1 }, childrenArray[0])));
        }
        return React.createElement(React.Fragment, null);
    };
    return (React.createElement(StyledListItemContainer, { "aria-label": ariaLabel, overrides: overrides, disabled: disabled }, hasHref ? (React.createElement(StyledLink, __assign({ as: disabled ? 'span' : 'a', href: href, "data-testid": "list-item-link", "aria-disabled": disabled && 'true', onClick: function () {
            fireEvent({
                originator: eventOriginator,
                trigger: EventTrigger.Click,
                context: __assign({ href: href }, eventContext),
            });
        }, ref: ref }, props), renderCells())) : (renderCells())));
});
export var StructuredListItem = withOwnTheme(ThemelessStructuredListItem)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=structured-list-item.js.map