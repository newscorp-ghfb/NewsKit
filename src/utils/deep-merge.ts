/* eslint-disable @typescript-eslint/no-explicit-any */
function isCloneable(obj: unknown) {
  return Array.isArray(obj) || {}.toString.call(obj) === '[object Object]';
}

export function deepMerge(...sources: Array<any>) {
  const res = {} as any;
  const len = sources.length;
  let obj;
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
  return res;
}

export default deepMerge;
