import { __assign, __makeTemplateObject, __rest, __spreadArray } from "tslib";
import React from 'react';
import { styled, getTypographyPreset, getStylePreset, } from '../../utils/style';
import defaults from './defaults';
import { withOwnTheme } from '../../utils/with-own-theme';
import { ScreenReaderOnly } from '../../screen-reader-only';
import { logicalProps } from '../../utils/logical-properties';
var ThemelessParagraphText = styled.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  ", ";\n  ", ";\n  ", "\n"], ["\n  margin: 0;\n  ", ";\n  ", ";\n  ", "\n"])), getStylePreset('paragraph', ''), getTypographyPreset('paragraph', ''), logicalProps('paragraph', ''));
export var ParagraphText = withOwnTheme(ThemelessParagraphText)({
    defaults: defaults,
});
/*
We use this solution instead of css :first-letter since there is Firefox inconsistences,
which causes the first letter to has less margin than desired.
*/
var ThemelessParagraphDropCap = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  float: left;\n  ", ";\n  ", ";\n  ", "\n"], ["\n  float: left;\n  ", ";\n  ", ";\n  ", "\n"])), getTypographyPreset('paragraph.dropCap', 'dropCap'), getStylePreset('paragraph.dropCap', 'dropCap'), logicalProps('paragraph.dropCap', 'dropCap'));
export var ParagraphDropCap = withOwnTheme(ThemelessParagraphDropCap)({
    defaults: defaults,
});
export var getFirstLetter = function (children) {
    var firstChild = children[0];
    if (typeof firstChild === 'string') {
        return firstChild.charAt(0);
    }
    if (firstChild &&
        React.isValidElement(firstChild) &&
        firstChild.type === React.Fragment &&
        firstChild.props) {
        var element = firstChild;
        return getFirstLetter(React.Children.toArray(element.props.children));
    }
    return '';
};
export var removeFirstLetter = function (children) {
    var firstChild = children[0], rest = children.slice(1);
    if (typeof firstChild === 'string') {
        return __spreadArray([firstChild.substring(1)], rest, true);
    }
    if (firstChild &&
        React.isValidElement(firstChild) &&
        firstChild.type === React.Fragment &&
        firstChild.props) {
        var element = firstChild;
        var fragmentChildren = element.props.children;
        var childrenArray = void 0;
        if (fragmentChildren == null) {
            childrenArray = [];
        }
        else if (Array.isArray(fragmentChildren)) {
            childrenArray = fragmentChildren;
        }
        else {
            childrenArray = [fragmentChildren];
        }
        return __spreadArray([removeFirstLetter(childrenArray)], rest, true);
    }
    /* istanbul ignore next */
    return children;
};
export var Paragraph = function (_a) {
    var children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.dropCap, dropCap = _c === void 0 ? false : _c, rest = __rest(_a, ["children", "overrides", "dropCap"]);
    var childrenAsArray = React.Children.toArray(children);
    var firstLetter = getFirstLetter(childrenAsArray);
    var useDropCap = dropCap && firstLetter;
    return useDropCap && children ? (React.createElement(React.Fragment, null,
        React.createElement(ParagraphText, __assign({ "aria-hidden": "true", overrides: overrides }, rest),
            React.createElement(ParagraphDropCap, { overrides: overrides }, firstLetter),
            removeFirstLetter(childrenAsArray)),
        React.createElement(ScreenReaderOnly, null, children))) : (React.createElement(ParagraphText, __assign({ overrides: overrides }, rest), children));
};
Paragraph.displayName = 'Paragraph';
export var P = Paragraph;
export var Subscript = styled.sub(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 80%;\n"], ["\n  font-size: 80%;\n"])));
Subscript.displayName = 'Subscript';
export var Sub = Subscript;
export var Superscript = styled.sup(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 80%;\n"], ["\n  font-size: 80%;\n"])));
Superscript.displayName = 'Superscript';
export var Sup = Superscript;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=paragraph.js.map