"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefScrollHeight = void 0;
// JSDom doesn't support layout, and we can't manually set `scrollHeight` on elements
// until they are rendered. So accessing this prop directly makes testing difficult.
// Moving the logic to a standalone function that we can mock in tests solves this.
var getRefScrollHeight = function (el) { return el.scrollHeight; };
exports.getRefScrollHeight = getRefScrollHeight;
//# sourceMappingURL=utils.js.map