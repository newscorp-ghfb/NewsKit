import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getStylePreset, getTypographyPreset, getSpacingInlineVertical, getMinWidth, } from '../utils/style';
import { isValidNode } from '../utils/component';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { logicalProps } from '../utils/logical-properties';
var ListItem = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  counter-increment: item-counter;\n  ", "\n  ", "\n  display: flex;\n  &::before {\n    content: counter(item-counter) '. ';\n    ", "\n    ", "\n    display: inline-block;\n    min-width: ", ";\n  }\n"], ["\n  ", "\n  counter-increment: item-counter;\n  ", "\n  ", "\n  display: flex;\n  &::before {\n    content: counter(item-counter) '. ';\n    ", "\n    ", "\n    display: inline-block;\n    min-width: ", ";\n  }\n"])), getSpacingInlineVertical('orderedList', ''), getStylePreset('orderedList.content', 'content'), getTypographyPreset('orderedList.content', 'content', {
    withCrop: true,
}), getStylePreset('orderedList.counter', 'counter'), getTypographyPreset('orderedList.counter', 'counter'), getMinWidth('orderedList.counter', 'counter'));
var List = styled.ol(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  counter-reset: item-counter;\n\n  ", "\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  counter-reset: item-counter;\n\n  ", "\n"])), logicalProps());
var ThemelessOrderedList = React.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, rest = __rest(_a, ["children", "overrides"]);
    return (React.createElement(List, __assign({ ref: ref, role: "list", overrides: overrides }, rest), React.Children.map(children, function (node) {
        return isValidNode(node) ? (React.createElement(ListItem, { overrides: overrides }, node)) : null;
    })));
});
export var OrderedList = withOwnTheme(ThemelessOrderedList)({ defaults: defaults });
var templateObject_1, templateObject_2;
//# sourceMappingURL=ordered-list.js.map