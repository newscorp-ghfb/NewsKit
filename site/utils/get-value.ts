export interface CMSDataProps {
  [key: string]: string;
}

export interface ContentProps {
  content: CMSDataProps;
}

export const getValueFromCMS = (
  obj: CMSDataProps,
  key: keyof CMSDataProps,
  fallback: string,
) => {
  if (obj[key]) {
    return obj[key];
  }
  return fallback;
};
