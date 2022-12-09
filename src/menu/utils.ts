// Note: using an immutable concatenated string ID (instead of an array of strings)
// so that useEffect hooks do not repeatedly fire when ref changes but value
// remains the same.

export const DELIMITER = '|';

export const buildNestedId = (id: string, parentId: string | null): string =>
  parentId ? `${parentId}${DELIMITER}${id}` : id;

export const getIdDepth = (id: string): number =>
  id.length - id.replace(DELIMITER, '').length + 1;

export const isDescendant = (id: string, descendantId: string): boolean =>
  id === descendantId.split(DELIMITER).slice(0, getIdDepth(id)).join(DELIMITER);

export const getParentId = (id: string): string | null =>
  id
    .split(DELIMITER)
    .slice(0, getIdDepth(id) - 1)
    .join(DELIMITER) || null;
