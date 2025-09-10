import { useLayoutEffect, useEffect } from 'react';
/* istanbul ignore next */
export var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
//# sourceMappingURL=use-isomorphic-layout-effect.js.map