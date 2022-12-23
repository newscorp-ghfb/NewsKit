/* eslint-disable @typescript-eslint/no-explicit-any */
import {ThemeLoggerFunction, UncompiledTheme} from '../theme/types';
import {deepMerge} from './deep-merge';
import {get} from './get';

const parseTokens = (str: unknown) => {
  if (typeof str !== 'string') {
    return [];
  }

  const result = [];
  let res: RegExpExecArray | null;

  const regex = /{{([a-z0-9.]+)}}/gi;
  // eslint-disable-next-line no-cond-assign
  while ((res = regex.exec(str))) {
    result.push(res[1]);
  }
  return result;
};

const parseAndGet = (
  theme: UncompiledTheme,
  value: unknown,
  errorLogger: ThemeLoggerFunction,
  stack: unknown[] = [],
): unknown => {
  if (stack.length > 4) {
    errorLogger(
      `Recursive loop detected, token stack: "${stack.join('", "')}"!`,
    );
    return '';
  }

  const tokens = parseTokens(value);
  if (tokens.length) {
    return tokens.reduce((result: any, tokenPath) => {
      const tokenValue = get(theme, tokenPath);
      if (typeof tokenValue === 'undefined') {
        errorLogger(
          `Theme token "${tokenPath}" was not found when compiling theme!`,
        );
      } else {
        // We recurse down with that token value to support things like colors
        // e.g. (border color = interactiveNegative010 = red010 = #ff0000).
        // tokenValue = parseAndGet(theme, tokenValue, errorLogger, [
        //   tokenPath,
        //   ...stack,
        // ]);
      }

      const [tokenType, tokenName] = tokenPath.split('.');
      const cssVarName =
        tokenType === 'colors' ? `color-${tokenName}` : tokenName;
      const cssVar = `var(--${cssVarName})`;

      return tokens.length > 1
        ? result.replace(`{{${tokenPath}}}`, cssVar)
        : // eslint-disable-next-line @typescript-eslint/no-use-before-define
          recurseUnknown(theme, cssVar, errorLogger);
    }, value as string);
  }

  // Not a token, return as is (e.g. hex code or px value).
  return value;
};

export const recurseUnknown = (
  theme: UncompiledTheme,
  value: unknown,
  errorLogger: ThemeLoggerFunction,
): unknown => {
  if (typeof value === 'function') {
    // Evaluation function, e.g. for calculating line height, run function and pass it the theme.
    const fResult = value(theme);
    // Result could be an object (with tokens), so recursively compile.
    return recurseUnknown(theme, fResult, errorLogger);
  }
  if (typeof value === 'object' && !Array.isArray(value)) {
    // Nested object, recurse down
    return Object.entries(value as any).reduce((acc, [k, v]: any) => {
      // Key could be a token, e.g. cropAdjustments fonts object
      const key = parseAndGet(theme, k, errorLogger) as string;

      if (key === '__extends' || key === '__deepExtends') {
        const extendsObjects = (typeof v === 'string' ? [v] : v).map(
          (extendsToken: string) =>
            parseAndGet(theme, extendsToken, errorLogger) as object | undefined,
        );
        const mergeFn =
          key === '__deepExtends' ? deepMerge : Object.assign.bind(Object);
        return mergeFn({}, acc, ...extendsObjects);
      }

      acc[key] = recurseUnknown(theme, v, errorLogger);
      if (acc[key] === '__delete') {
        delete acc[key];
      }
      return acc;
    }, {} as any);
  }
  // Anything else, probably string, parse and get the token value
  return parseAndGet(theme, value, errorLogger);
};
