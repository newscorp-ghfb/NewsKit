export const parseEnumValues = (e: object): string[] =>
  Object.values(e).map(v => (typeof v === 'number' ? `${v}` : `"${v}"`));
