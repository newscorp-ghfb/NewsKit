"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var filter_object_1 = require("../utils/filter-object");
var theme_1 = require("../theme");
exports.BreadcrumbItem = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, selected = _a.selected, href = _a.href, overrides = _a.overrides, 
    /* istanbul ignore next */
    _b = _a.size, 
    /* istanbul ignore next */
    size = _b === void 0 ? 'medium' : _b, _c = _a.eventContext, eventContext = _c === void 0 ? {} : _c, _d = _a.eventOriginator, eventOriginator = _d === void 0 ? 'breadcrumb-item' : _d, rest = tslib_1.__rest(_a, ["children", "selected", "href", "overrides", "size", "eventContext", "eventOriginator"]);
    var buttonProps = tslib_1.__assign(tslib_1.__assign({}, rest), { selected: selected, size: size });
    var theme = (0, theme_1.useTheme)();
    var buttonSettings = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.breadcrumbItem[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    return (react_1.default.createElement(styled_1.StyledButton, tslib_1.__assign({}, buttonProps, { href: href, eventContext: tslib_1.__assign({ href: href }, eventContext), eventOriginator: eventOriginator, overrides: tslib_1.__assign(tslib_1.__assign({}, buttonSettings), { width: 'auto' }), "aria-current": selected && 'page', ref: ref }), children));
});
//# sourceMappingURL=breadcrumb-item.js.map