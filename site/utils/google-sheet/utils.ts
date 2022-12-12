export const formatSheetData = (data: string[][] | undefined | null) => {
  if (data === undefined || data === null || data.length === 0) {
    return {};
  }
  const transformedArray = data.map(([key, value]) => [
    key.toLowerCase(),
    value,
  ]);
  // Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
  // >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
  return JSON.parse(JSON.stringify(Object.fromEntries(transformedArray)));
};
