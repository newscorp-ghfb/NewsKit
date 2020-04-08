export const getValueInRange = (
  value: number,
  [start, end]: [number, number],
) => Math.max(start, Math.min(end, value));
