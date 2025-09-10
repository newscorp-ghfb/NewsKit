"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Svg = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var modeProps = {
    decorative: {
        'aria-hidden': true,
    },
    standalone: {
        role: 'img',
    },
};
var Svg = function (_a) {
    var children = _a.children, title = _a.title, props = tslib_1.__rest(_a, ["children", "title"]);
    // Ignore line rather than use "as any" - only want to ignore overrides
    // prop not existing in type, don't want to lose typing on the rest of props.
    // @ts-ignore
    var overrides = props.overrides, p = tslib_1.__rest(props, ["overrides"]);
    return (react_1.default.createElement("svg", tslib_1.__assign({}, p, modeProps[title ? 'standalone' : 'decorative'], { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }),
        title && react_1.default.createElement("title", null, title),
        children));
};
exports.Svg = Svg;
//# sourceMappingURL=svg.js.map