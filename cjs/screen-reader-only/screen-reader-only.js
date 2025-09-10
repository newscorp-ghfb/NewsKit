"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenReaderOnly = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var style_1 = require("../utils/style");
// ScreenReader component shouldn't be a div element if we would like to
// nest it inside paragraph (<div> cannot appear as a descendant of <p>).
// workaround: Make the element span, but keep the display: block; in order
// to function as a div.
var ScreenReader = style_1.styled.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: block;\n  clip: rect(0 0 0 0);\n  clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  margin: -1px;\n"], ["\n  display: block;\n  clip: rect(0 0 0 0);\n  clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  margin: -1px;\n"])));
var ScreenReaderOnly = function (props) { return (React.createElement(ScreenReader, tslib_1.__assign({}, props))); };
exports.ScreenReaderOnly = ScreenReaderOnly;
var templateObject_1;
//# sourceMappingURL=screen-reader-only.js.map