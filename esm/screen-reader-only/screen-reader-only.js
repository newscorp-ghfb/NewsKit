import { __assign, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { styled } from '../utils/style';
// ScreenReader component shouldn't be a div element if we would like to
// nest it inside paragraph (<div> cannot appear as a descendant of <p>).
// workaround: Make the element span, but keep the display: block; in order
// to function as a div.
var ScreenReader = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  clip: rect(0 0 0 0);\n  clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  margin: -1px;\n"], ["\n  display: block;\n  clip: rect(0 0 0 0);\n  clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  margin: -1px;\n"])));
export var ScreenReaderOnly = function (props) { return (React.createElement(ScreenReader, __assign({}, props))); };
var templateObject_1;
//# sourceMappingURL=screen-reader-only.js.map