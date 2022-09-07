// JSDom doesn't support layout, and we can't manually set `scrollHeight` on elements
// until they are rendered. So accessing this prop directly makes testing difficult.
// Moving the logic to a standalone function that we can mock in tests solves this.
export const getRefScrollHeight = (el: HTMLDivElement) => el.scrollHeight;
