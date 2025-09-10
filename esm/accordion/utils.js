// JSDom doesn't support layout, and we can't manually set `scrollHeight` on elements
// until they are rendered. So accessing this prop directly makes testing difficult.
// Moving the logic to a standalone function that we can mock in tests solves this.
export var getRefScrollHeight = function (el) { return el.scrollHeight; };
//# sourceMappingURL=utils.js.map