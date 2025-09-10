"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsomorphicLayoutEffect = void 0;
var react_1 = require("react");
/* istanbul ignore next */
exports.useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
//# sourceMappingURL=use-isomorphic-layout-effect.js.map