export interface CMSDataProps {
  [key: string]: string;
}

export interface ContentProps {
  content: CMSDataProps;
}

export const getValueFromCMS = (
  obj: CMSDataProps,
  key: string,
  fallback: string,
) => {
  const newKey = key.toLowerCase();
  if (obj[newKey]) {
    return obj[newKey];
  }
  return fallback;
};
