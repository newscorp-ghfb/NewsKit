const filter = <T>(
  target: T,
  predicate: (x: [keyof T, T[keyof T]]) => boolean,
) =>
  (Object.entries(target) as [keyof T, T[keyof T]][]).reduce(
    (acc, obj) => {
      if (predicate(obj)) {
        const [key, value] = obj;
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
  filterKeys.length ? filter(target, ([key]) => filterKeys.includes(key)) : {};

export const rejectObject = <T>(
  target: T,
  rejectKeys: Array<keyof T> = [],
): Partial<T> =>
  rejectKeys.length
    ? filter(target, ([key]) => !rejectKeys.includes(key))
    : target;

export const filterOutFalsyProperties = <T>(target: T) =>
  target ? filter(target, entry => !!entry[entry.length - 1]) : {};
