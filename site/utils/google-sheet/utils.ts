import {CMSData, CMSProps, CMSResponse} from './types';

export class CMSError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'CMSError';
  }
}

export const formatSheetData = <T extends CMSProps>(data: CMSData): T => {
  const transformedArray = data.map(([key, value]) => [
    key.toLowerCase(),
    value,
  ]);
  // Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
  // >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
  return JSON.parse(JSON.stringify(Object.fromEntries(transformedArray)));
};

export const parseCMSResponse = <T extends CMSProps>(
  cmsResponse: CMSResponse,
  {
    required,
    dynamic = {},
  }: {
    required: Record<string, string>;
    dynamic?: Record<string, string>;
  },
): T => {
  if (!cmsResponse) {
    // throw new CMSError('No CMS data found');
    return [];
  }
  const content = formatSheetData<T>(cmsResponse);

  const missingKeys = Object.keys(required).filter(key => !content[key]);
  const invalidKeys = Object.keys(content).filter(key => {
    if (required[key]) {
      return false;
    }
    const prefixMatch = Object.keys(dynamic).find(k =>
      key.match(`${k}\\d+\\b`),
    );
    return !prefixMatch;
  });

  let err = ``;
  if (missingKeys.length) {
    err = `MISSING_KEYS: ${missingKeys.join(', ')}. `;
  }
  if (invalidKeys.length) {
    err = `${err}INVALID_KEYS: ${invalidKeys.join(', ')}. `;
  }

  if (err.length) {
    // throw new CMSError(err);
  }

  return content;
};

export const getCMSPropsWithPrefix = <T extends Record<string, string>>(
  content: CMSProps,
  prefix: keyof T & string,
) => Object.entries(content).filter(([k]) => k.startsWith(prefix));
