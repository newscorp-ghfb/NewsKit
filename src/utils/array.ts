export type MaybeArray<T> = T | T[];

export const toArray = <T>(arr: MaybeArray<T>) =>
  Array.isArray(arr) ? arr : [arr];

export const map = <T, R = unknown>(
  arr: MaybeArray<T>,
  fn: (x: T, i: number, arr: MaybeArray<T>) => R,
) => toArray(arr).map(fn);

// random change for triggering a build
