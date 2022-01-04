function isCloneable(obj: unknown) {
  return Array.isArray(obj) || {}.toString.call(obj) === '[object Object]';
}

export function deepMerge<T extends Record<string, unknown>>(
  target?: T,
  ...sources: Array<(Partial<T> | null | undefined) | null>
): T {
  const res = target || ({} as Record<string, unknown>);
  const len = sources.length;
  let obj: Record<string, unknown>;
  for (let i = 0; i < len; i += 1) {
    obj = sources[i] || {};
    Object.entries(obj).forEach(([key, value]) => {
      if (isCloneable(value)) {
        res[key] = deepMerge(
          (res[key] || {}) as Record<string, unknown>,
          value as {},
        );
      } else {
        res[key] = value;
      }
    });
  }
  return res as T;
}

export default deepMerge;
