"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sup = exports.Superscript = exports.Sub = exports.Subscript = exports.P = exports.Paragraph = exports.removeFirstLetter = exports.getFirstLetter = exports.ParagraphDropCap = exports.ParagraphText = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../../utils/style");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../../utils/with-own-theme");
var screen_reader_only_1 = require("../../screen-reader-only");
var logical_properties_1 = require("../../utils/logical-properties");
var ThemelessParagraphText = style_1.styled.p(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  ", ";\n  ", ";\n  ", "\n"], ["\n  margin: 0;\n  ", ";\n  ", ";\n  ", "\n"])), (0, style_1.getStylePreset)('paragraph', ''), (0, style_1.getTypographyPreset)('paragraph', ''), (0, logical_properties_1.logicalProps)('paragraph', ''));
exports.ParagraphText = (0, with_own_theme_1.withOwnTheme)(ThemelessParagraphText)({
    defaults: defaults_1.default,
});
/*
We use this solution instead of css :first-letter since there is Firefox inconsistences,
which causes the first letter to has less margin than desired.
*/
var ThemelessParagraphDropCap = style_1.styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  float: left;\n  ", ";\n  ", ";\n  ", "\n"], ["\n  float: left;\n  ", ";\n  ", ";\n  ", "\n"])), (0, style_1.getTypographyPreset)('paragraph.dropCap', 'dropCap'), (0, style_1.getStylePreset)('paragraph.dropCap', 'dropCap'), (0, logical_properties_1.logicalProps)('paragraph.dropCap', 'dropCap'));
exports.ParagraphDropCap = (0, with_own_theme_1.withOwnTheme)(ThemelessParagraphDropCap)({
    defaults: defaults_1.default,
});
var getFirstLetter = function (children) {
    var firstChild = children[0];
    if (typeof firstChild === 'string') {
        return firstChild.charAt(0);
    }
    if (firstChild &&
        react_1.default.isValidElement(firstChild) &&
        firstChild.type === react_1.default.Fragment &&
        firstChild.props) {
        var element = firstChild;
        return (0, exports.getFirstLetter)(react_1.default.Children.toArray(element.props.children));
    }
    return '';
};
exports.getFirstLetter = getFirstLetter;
var removeFirstLetter = function (children) {
    var firstChild = children[0], rest = children.slice(1);
    if (typeof firstChild === 'string') {
        return tslib_1.__spreadArray([firstChild.substring(1)], rest, true);
    }
    if (firstChild &&
        react_1.default.isValidElement(firstChild) &&
        firstChild.type === react_1.default.Fragment &&
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
        return tslib_1.__spreadArray([(0, exports.removeFirstLetter)(childrenArray)], rest, true);
    }
    /* istanbul ignore next */
    return children;
};
exports.removeFirstLetter = removeFirstLetter;
var Paragraph = function (_a) {
    var children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.dropCap, dropCap = _c === void 0 ? false : _c, rest = tslib_1.__rest(_a, ["children", "overrides", "dropCap"]);
    var childrenAsArray = react_1.default.Children.toArray(children);
    var firstLetter = (0, exports.getFirstLetter)(childrenAsArray);
    var useDropCap = dropCap && firstLetter;
    return useDropCap && children ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.ParagraphText, tslib_1.__assign({ "aria-hidden": "true", overrides: overrides }, rest),
            react_1.default.createElement(exports.ParagraphDropCap, { overrides: overrides }, firstLetter),
            (0, exports.removeFirstLetter)(childrenAsArray)),
        react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, null, children))) : (react_1.default.createElement(exports.ParagraphText, tslib_1.__assign({ overrides: overrides }, rest), children));
};
exports.Paragraph = Paragraph;
exports.Paragraph.displayName = 'Paragraph';
exports.P = exports.Paragraph;
exports.Subscript = style_1.styled.sub(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  font-size: 80%;\n"], ["\n  font-size: 80%;\n"])));
exports.Subscript.displayName = 'Subscript';
exports.Sub = exports.Subscript;
exports.Superscript = style_1.styled.sup(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  font-size: 80%;\n"], ["\n  font-size: 80%;\n"])));
exports.Superscript.displayName = 'Superscript';
exports.Sup = exports.Superscript;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=paragraph.js.map