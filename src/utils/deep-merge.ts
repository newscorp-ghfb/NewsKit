/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */

type DeepMergeCallback = (obj: any) => boolean;

const isCloneable = (obj: unknown) =>
  Array.isArray(obj) || {}.toString.call(obj) === '[object Object]';

export function deepMerge(
  callbackFn?: DeepMergeCallback | any,
  ...partSources: Array<any>
) {
  let result = {} as any;
  const hasCallbackFn = typeof callbackFn === 'function';
  const sources = hasCallbackFn ? partSources : [callbackFn, ...partSources];
  const iLen = sources.length;
  for (let sourceIdx = 0; sourceIdx < iLen; sourceIdx += 1) {
    const obj = sources[sourceIdx] || {};
    if (obj.__shallow || (hasCallbackFn && callbackFn(obj))) {
      const {__shallow, ...filteredObj} = obj as Record<string, unknown>;
      result = filteredObj;
    } else if (isCloneable(obj)) {
      const entries = Object.entries(obj);
      const jLen = entries.length;
      for (let entryIdx = 0; entryIdx < jLen; entryIdx += 1) {
        const [key, value] = entries[entryIdx];
        if (isCloneable(value)) {
          result[key] = deepMerge(
            hasCallbackFn ? callbackFn : {},
            (result[key] || {}) as Record<string, unknown>,
            value as {},
          );
        } else if (isCloneable(result)) {
          result[key] = value;
        } else {
          result = obj;
        }
      }
    } else {
      result = obj;
    }
  }
  return result;
}
