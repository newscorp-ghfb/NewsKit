"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnorderedList = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var component_1 = require("../utils/component");
var text_block_1 = require("../text-block");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var icons_1 = require("../icons");
var ThemelessUnorderedList = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.listItemMarker, ListItemMarker = _b === void 0 ? icons_1.IconFilledCircle : _b, markerAlign = _a.markerAlign, overrides = _a.overrides, rest = tslib_1.__rest(_a, ["children", "listItemMarker", "markerAlign", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    var itemSpaceToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'unorderedList', '', 'spaceStack');
    var markerSpaceToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'unorderedList.marker', 'marker', 'spaceInline');
    var markerSizeToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'unorderedList.marker', 'marker', 'size');
    var contentTypographyPresetToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'unorderedList.content', 'content', 'typographyPreset');
    var contentStylePresetToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'unorderedList.content', 'content', 'stylePreset');
    var markerStylePresetToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'unorderedList.marker', 'marker', 'stylePreset');
    return (react_1.default.createElement(styled_1.StyledUl, tslib_1.__assign({ ref: ref, overrides: overrides, role: "list" }, rest), react_1.default.Children.map(children, function (node) {
        if (!(0, component_1.isValidNode)(node))
            return null;
        return (react_1.default.createElement(styled_1.StyledListItem, null,
            react_1.default.createElement(styled_1.StyledBlock, { spaceStack: itemSpaceToken },
                react_1.default.createElement(styled_1.StyledMarkerBlock, { spaceInline: markerSpaceToken, "aria-hidden": "true", markerAlign: markerAlign }, ListItemMarker === null ? null : (react_1.default.createElement(ListItemMarker, { overrides: {
                        size: markerSizeToken,
                        stylePreset: markerStylePresetToken,
                    } }))),
                react_1.default.createElement(text_block_1.TextBlock, { typographyPreset: contentTypographyPresetToken, stylePreset: contentStylePresetToken }, node))));
    })));
});
exports.UnorderedList = (0, with_own_theme_1.withOwnTheme)(ThemelessUnorderedList)({
    defaults: defaults_1.default,
});
//# sourceMappingURL=unordered-list.js.map