import { __assign, __rest } from "tslib";
import React from 'react';
var modeProps = {
    decorative: {
        'aria-hidden': true,
    },
    standalone: {
        role: 'img',
    },
};
export var Svg = function (_a) {
    var children = _a.children, title = _a.title, props = __rest(_a, ["children", "title"]);
    // Ignore line rather than use "as any" - only want to ignore overrides
    // prop not existing in type, don't want to lose typing on the rest of props.
    // @ts-ignore
    var overrides = props.overrides, p = __rest(props, ["overrides"]);
    return (React.createElement("svg", __assign({}, p, modeProps[title ? 'standalone' : 'decorative'], { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }),
        title && React.createElement("title", null, title),
        children));
};
//# sourceMappingURL=svg.js.map