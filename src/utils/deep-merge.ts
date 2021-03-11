/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */

const isCloneable = (obj: unknown) =>
  Array.isArray(obj) || {}.toString.call(obj) === '[object Object]';

export function deepMerge(...sources: Array<any>) {
  let res = {} as any;
  const iLen = sources.length;
  for (let i = 0; i < iLen; i += 1) {
    const obj = sources[i] || {};
    if (obj.__shallow) {
      const {__shallow, ...filteredObj} = obj as Record<string, unknown>;
      res = filteredObj;
    } else {
      const entries = Object.entries(obj);
      const jLen = entries.length;
      for (let j = 0; j < jLen; j += 1) {
        const [key, value] = entries[j];
        if (isCloneable(value)) {
          res[key] = deepMerge(
            (res[key] || {}) as Record<string, unknown>,
            value as {},
          );
        } else {
          res[key] = value;
        }
      }
    }
  }
  return res;
}
