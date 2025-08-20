const filter = <T extends Record<string, unknown>>(
  target: T,
  predicate: (x: [keyof T, T[keyof T]]) => boolean,
) =>
  (Object.entries(target) as [keyof T, T[keyof T]][]).reduce((acc, obj) => {
    if (predicate(obj)) {
      const [key, value] = obj;
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);

export const filterObject = <T extends Record<string, unknown>>(
  target: T,
  filterKeys: Array<keyof T> = [],
): Partial<T> =>
  filterKeys.length
    ? filter(target, ([key]) => filterKeys.includes(key))
    : ({} as Partial<T>);

export const rejectObject = <T extends Record<string, unknown>>(
  target: T,
  rejectKeys: Array<keyof T> = [],
): Partial<T> =>
  rejectKeys.length
    ? filter(target, ([key]) => !rejectKeys.includes(key))
    : target;

export const filterOutFalsyProperties = <T>(target: T): Partial<T> =>
  target && typeof target === 'object'
    ? (filter(
        target as T & Record<string, unknown>,
        ([, entry]) => !!entry,
      ) as Partial<T>)
    : ({} as Partial<T>);
