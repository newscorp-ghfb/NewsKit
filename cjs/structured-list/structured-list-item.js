"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredListItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var grid_1 = require("../grid");
var styled_1 = require("./styled");
var structured_list_icon_1 = require("./structured-list-icon");
var structured_list_1 = require("./structured-list");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var instrumentation_1 = require("../instrumentation");
var getCellAlign = function (child) {
    if (react_1.default.isValidElement(child) &&
        child.props &&
        typeof child.props === 'object' &&
        'align' in child.props) {
        return child.props.align;
    }
    return 'start'; // default value
};
var getPullRight = function (child) {
    if (react_1.default.isValidElement(child) &&
        child.props &&
        typeof child.props === 'object' &&
        'pullRight' in child.props) {
        return child.props.pullRight;
    }
    return false; // default value
};
var getCellFullWidth = function (child) {
    if (react_1.default.isValidElement(child) &&
        child.props &&
        typeof child.props === 'object' &&
        'fullWidthSingleCell' in child.props) {
        return child.props
            .fullWidthSingleCell;
    }
    return 'start'; // default value
};
var ThemelessStructuredListItem = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, ariaLabel = _a.ariaLabel, disabled = _a.disabled, overrides = _a.overrides, href = _a.href, hideIcon = _a.hideIcon, linkIconAlign = _a.linkIconAlign, eventContext = _a.eventContext, _b = _a.eventOriginator, eventOriginator = _b === void 0 ? 'list item' : _b, props = tslib_1.__rest(_a, ["children", "ariaLabel", "disabled", "overrides", "href", "hideIcon", "linkIconAlign", "eventContext", "eventOriginator"]);
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var childrenArray = react_1.default.Children.toArray(children);
    var hasHref = Boolean(href);
    if (hasHref &&
        childrenArray.length === 2 &&
        !getPullRight(childrenArray[1]) &&
        !hideIcon) {
        childrenArray.push(react_1.default.createElement(structured_list_1.StructuredListCell, { align: linkIconAlign, key: "link-icon" },
            react_1.default.createElement(structured_list_icon_1.StructuredListIcon, { href: href, overrides: overrides })));
    }
    if (hasHref && childrenArray.length === 1 && !hideIcon) {
        childrenArray.push(react_1.default.createElement(structured_list_1.StructuredListCell, { pullRight: true, align: linkIconAlign, key: "link-icon" },
            react_1.default.createElement(structured_list_icon_1.StructuredListIcon, { href: href, overrides: overrides })));
    }
    var alignCell1 = getCellAlign(childrenArray[0]);
    var alignCell2 = getCellAlign(childrenArray[1]);
    var alignCell3 = getCellAlign(childrenArray[2]);
    var innerGrid = (react_1.default.createElement(grid_1.Grid, { xsRowGutter: "space040", xsColumnGutter: "space000", xsMargin: "space000" },
        react_1.default.createElement(styled_1.StyledCell, { xs: 12, md: 5, align: alignCell1 }, childrenArray[0]),
        react_1.default.createElement(styled_1.StyledCell, { xs: 12, md: 7, align: alignCell2 }, childrenArray[1])));
    var renderCells = function () {
        if (childrenArray.length === 3) {
            return (react_1.default.createElement(styled_1.StyledGrid, { xsRowGutter: "space000", xsMargin: "space020", lgMargin: "space030", overrides: overrides, hasHref: hasHref },
                react_1.default.createElement(grid_1.Cell, { xs: 10 }, innerGrid),
                react_1.default.createElement(styled_1.StyledCell, { xs: 2, align: alignCell3 }, childrenArray[2])));
        }
        if (childrenArray.length === 2) {
            var pullRightOnSecond = getPullRight(childrenArray[1]);
            return (react_1.default.createElement(styled_1.StyledGrid, { xsRowGutter: "space040", mdRowGutter: "space000", xsMargin: "space020", lgMargin: "space030", overrides: overrides, hasHref: hasHref },
                react_1.default.createElement(styled_1.StyledCell, { xs: 12, md: pullRightOnSecond ? 10 : 4, align: alignCell1 }, childrenArray[0]),
                react_1.default.createElement(styled_1.StyledCell, { xs: 12, md: pullRightOnSecond ? 2 : 8, align: alignCell2 }, childrenArray[1])));
        }
        if (childrenArray.length === 1) {
            var fullWidth = getCellFullWidth(childrenArray[0]);
            return (react_1.default.createElement(styled_1.StyledGrid, { xsRowGutter: "space000", xsMargin: "space020", lgMargin: "space030", overrides: overrides, hasHref: hasHref },
                react_1.default.createElement(styled_1.StyledCell, { xs: fullWidth ? 'full-width' : 12, align: alignCell1 }, childrenArray[0])));
        }
        return react_1.default.createElement(react_1.default.Fragment, null);
    };
    return (react_1.default.createElement(styled_1.StyledListItemContainer, { "aria-label": ariaLabel, overrides: overrides, disabled: disabled }, hasHref ? (react_1.default.createElement(styled_1.StyledLink, tslib_1.__assign({ as: disabled ? 'span' : 'a', href: href, "data-testid": "list-item-link", "aria-disabled": disabled && 'true', onClick: function () {
            fireEvent({
                originator: eventOriginator,
                trigger: instrumentation_1.EventTrigger.Click,
                context: tslib_1.__assign({ href: href }, eventContext),
            });
        }, ref: ref }, props), renderCells())) : (renderCells())));
});
exports.StructuredListItem = (0, with_own_theme_1.withOwnTheme)(ThemelessStructuredListItem)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=structured-list-item.js.map