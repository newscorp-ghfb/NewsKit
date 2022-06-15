import {getResponsiveSpace, ThemeProp} from '../utils';

const getRawValue = (
  path: string,
  props: ThemeProp & {overrides?: unknown},
  overridePath: string,
  defaultsObjectKey: string,
): string | null => {
  const distance = getResponsiveSpace(
    'gap',
    path,
    overridePath,
    defaultsObjectKey,
  )(props);

  // Value returned by getResponsiveSpace depends on default / override string:
  // 1. String is not a valid token and does not contain valid CSSUnits --> ''
  if (typeof distance === 'string') {
    return null;
  }

  // 2. String is valid token --> {gap: $PARSED_TOKEN_VALUE}
  // 3. String is not a valid token but contains valid CSSUnits --> {gap: $RAW_VALUE}
  const {gap} = distance as {gap: string};
  return gap;
};

const parseRawValue = (offsetPx: string): number | null => {
  if (!offsetPx.includes('px')) {
    return null;
  }
  return parseInt(offsetPx.replace('px', ''), 10);
};

// Some floating-ui middleware APIs accept a single px value (e.g. offset and arrow.padding).
// But we want to keep this configuration in overrides so that users can use tokens
// and update component configs globally. As a solution, some overrides do not accept
// MQ objects (only strings) and a console warning will display if the value passed
// is not a valid token or px string.
// This function fetches the override value and returns the px value as an integer.
// If override is not a valid token or px string, this function returns undefined.
export const getOverridePxValue = (
  path: string,
  props: ThemeProp & {overrides?: unknown},
  overridePath: string,
  defaultsObjectKey: string,
): number | undefined => {
  const rawValue = getRawValue(path, props, overridePath, defaultsObjectKey);
  const parsedValue = rawValue ? parseRawValue(rawValue) : null;
  return parsedValue || undefined;
};

export const showOverridePxWarnings = (
  parsedValue: number | undefined,
  overridePath: string,
): void => {
  if (!parsedValue) {
    // eslint-disable-next-line no-console
    console.warn(
      `Invalid component override: please make sure '${overridePath}' is a valid token or px value.`,
    );
  }
};
