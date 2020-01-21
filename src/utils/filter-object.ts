export const filterObject = <T>(target: T, omitKeys: Array<keyof T> = []) => {
  const originalKeys = Object.keys(target) as Array<keyof T>;

  return originalKeys
    .filter(state => !omitKeys.includes(state))
    .reduce(
      (acc, curr) => {
        acc[curr] = target[curr];
        return acc;
      },
      {} as Partial<T>,
    );
};
