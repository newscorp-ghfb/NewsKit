/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {ThemeLoggerFunction, Theme, UncompiledTheme} from '../types';
import {get} from '../../utils/get';
import {ThemeCompilerOptions} from './types';

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
    return tokens.reduce(
      (result: any, tokenPath) => {
        let tokenValue = get(theme, tokenPath);
        if (typeof tokenValue === 'undefined') {
          errorLogger(
            `Theme token "${tokenPath}" was not found when compiling theme!`,
          );
        } else {
          // We recurse down with that token value to support things like colors
          // e.g. (border color = interactiveNegative010 = red010 = #ff0000).
          tokenValue = parseAndGet(theme, tokenValue, errorLogger, [
            tokenPath,
            ...stack,
          ]);
        }

        return tokens.length > 1
          ? result.replace(`{{${tokenPath}}}`, tokenValue as string)
          : recurseUnknown(theme, tokenValue, errorLogger);
      },
      value as string,
    );
  }

  // Not a token, return as is (e.g. hex code or px value).
  return value;
};

const recurseUnknown = (
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
    return Object.entries(value as any).reduce(
      (acc, [k, v]: any) => {
        // Key could be a token, e.g. cropAdjustments fonts object
        const key = parseAndGet(theme, k, errorLogger) as string;
        acc[key] = recurseUnknown(theme, v, errorLogger);
        return acc;
      },
      {} as any,
    );
  }
  // Anything else, probably string, parse and get the token value
  return parseAndGet(theme, value, errorLogger);
};

export const compileTheme = (
  theme: UncompiledTheme | Theme,
  options: ThemeCompilerOptions = {},
): Theme => {
  if (!theme || theme.compiled === true) {
    return theme;
  }

  // eslint-disable-next-line no-console
  const errorLogger = options.errorLogger || console.error.bind(console);

  const {icons = {}, ...filteredTheme} = theme;
  return {
    ...(recurseUnknown(theme, filteredTheme, errorLogger) as any),
    icons,
    compiled: true,
  };
};
