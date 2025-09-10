"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuGroup = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var context_1 = require("./context");
var styled_1 = require("./styled");
var text_block_1 = require("../text-block");
var a11y_1 = require("../utils/a11y");
var component_1 = require("../utils/component");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var hooks_1 = require("../utils/hooks");
var renderTitle = function (_a, titleID, theme) {
    var MenuTitle = _a.title, overrides = _a.overrides;
    if (typeof MenuTitle === 'string') {
        var stylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'menuGroup.title', 'title', 'stylePreset');
        var typographyPreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'menuGroup.title', 'title', 'typographyPreset');
        var titleOverrides = {
            stylePreset: stylePreset,
            typographyPreset: typographyPreset,
        };
        return (react_1.default.createElement(text_block_1.TextBlock, tslib_1.__assign({ as: "h2", id: titleID }, titleOverrides), MenuTitle));
    }
    return (0, component_1.renderIfReactComponent)(MenuTitle);
};
exports.MenuGroup = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, title = _a.title, restProps = tslib_1.__rest(_a, ["overrides", "children", "title"]);
    var theme = (0, theme_1.useTheme)();
    var vertical = (0, context_1.useMenuContext)().vertical;
    var _b = (0, a11y_1.splitAriaProps)(restProps), aria = _b.aria, rest = _b.rest;
    var titleID = (0, hooks_1.useReactKeys)(1)[0];
    var shouldRenderTitle = vertical && Boolean(title);
    return (react_1.default.createElement(styled_1.StyledMenuGroup, tslib_1.__assign({ className: "nk-menu-group" }, rest, { overrides: overrides, vertical: vertical, ref: ref }),
        shouldRenderTitle && (react_1.default.createElement(styled_1.StyledMenuGroupTitle, { overrides: overrides }, renderTitle({ title: title, overrides: overrides }, titleID, theme))),
        react_1.default.createElement("ul", tslib_1.__assign({}, (shouldRenderTitle && tslib_1.__assign({ 'aria-labelledby': titleID }, aria))), children)));
});
exports.MenuGroup.displayName = 'MenuGroup';
//# sourceMappingURL=menu-group.js.map