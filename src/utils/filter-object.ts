const filter = <T>(target: T, predicate: (x: keyof T) => boolean) =>
  (Object.entries(target) as [keyof T, T[keyof T]][]).reduce(
    (acc, [key, value]) => {
      if (predicate(key)) {
        acc[key as keyof T] = value;
      }
      return acc;
    },
    {} as Partial<T>,
  );

export const filterObject = <T>(
  target: T,
  filterKeys: Array<keyof T> = [],
): Partial<T> =>
  filterKeys.length ? filter(target, x => filterKeys.includes(x)) : {};

export const rejectObject = <T>(
  target: T,
  rejectKeys: Array<keyof T> = [],
): Partial<T> =>
  rejectKeys.length ? filter(target, x => !rejectKeys.includes(x)) : target;
