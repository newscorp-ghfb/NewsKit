"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedList = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var component_1 = require("../utils/component");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var ListItem = style_1.styled.li(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  counter-increment: item-counter;\n  ", "\n  ", "\n  display: flex;\n  &::before {\n    content: counter(item-counter) '. ';\n    ", "\n    ", "\n    display: inline-block;\n    min-width: ", ";\n  }\n"], ["\n  ", "\n  counter-increment: item-counter;\n  ", "\n  ", "\n  display: flex;\n  &::before {\n    content: counter(item-counter) '. ';\n    ", "\n    ", "\n    display: inline-block;\n    min-width: ", ";\n  }\n"])), (0, style_1.getSpacingInlineVertical)('orderedList', ''), (0, style_1.getStylePreset)('orderedList.content', 'content'), (0, style_1.getTypographyPreset)('orderedList.content', 'content', {
    withCrop: true,
}), (0, style_1.getStylePreset)('orderedList.counter', 'counter'), (0, style_1.getTypographyPreset)('orderedList.counter', 'counter'), (0, style_1.getMinWidth)('orderedList.counter', 'counter'));
var List = style_1.styled.ol(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  counter-reset: item-counter;\n\n  ", "\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  counter-reset: item-counter;\n\n  ", "\n"])), (0, logical_properties_1.logicalProps)());
var ThemelessOrderedList = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, rest = tslib_1.__rest(_a, ["children", "overrides"]);
    return (react_1.default.createElement(List, tslib_1.__assign({ ref: ref, role: "list", overrides: overrides }, rest), react_1.default.Children.map(children, function (node) {
        return (0, component_1.isValidNode)(node) ? (react_1.default.createElement(ListItem, { overrides: overrides }, node)) : null;
    })));
});
exports.OrderedList = (0, with_own_theme_1.withOwnTheme)(ThemelessOrderedList)({ defaults: defaults_1.default });
var templateObject_1, templateObject_2;
//# sourceMappingURL=ordered-list.js.map