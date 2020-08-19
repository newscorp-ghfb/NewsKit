/* eslint-disable @typescript-eslint/no-explicit-any */
import {Theme, UncompiledTheme} from './types';
import {get} from '../utils/get';

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

const parseAndGet = (theme: UncompiledTheme, str: string) => {
  const recurse = (value: unknown, stack: unknown[] = []): unknown => {
    if (stack.length > 4) {
      // eslint-disable-next-line no-console
      console.error(
        `Recursive loop detected, token stack: "${stack.join('", "')}"!`,
      );
      return '';
    }

    const tokens = parseTokens(value);
    if (tokens.length) {
      // Replace each token found (could be multiple, e.g. inset tokens)
      // TODO: PPDSE-68 - if there is only one token and the value is a number, it should be a
      // number where referenced (currently will be a string as we just replace values
      // inside the string, e.g. '{{token}}' -> '5'
      return tokens.reduce(
        (result, tokenPath) => {
          let tokenValue = get(theme, tokenPath);
          if (typeof tokenValue === 'undefined') {
            // eslint-disable-next-line no-console
            console.error(
              `Theme token "${tokenPath}" was not found when compiling theme!`,
            );
          } else {
            // We recurse down with that token value to support things like colors
            // e.g. (border color = semanticNegative010 = red010 = #ff0000).
            tokenValue = recurse(tokenValue, [tokenPath, ...stack]);
          }

          return result.replace(`{{${tokenPath}}}`, tokenValue as string);
        },
        value as string,
      );
    }

    // Not a token, return as is (e.g. hex code or px value).
    return value;
  };

  return recurse(str);
};

export const compileTheme = (theme: UncompiledTheme | Theme): Theme => {
  if (!theme || theme.compiled === true) {
    return theme;
  }

  const recurse = (obj: any) =>
    Object.entries(obj).reduce(
      (acc, [k, v]: any) => {
        // Key could be a token, e.g. cropAdjustments fonts object
        const key = parseAndGet(theme, k) as string;
        if (typeof v === 'function') {
          // Evaluation function, e.g. for calculating line height, run function and pass it the theme.
          acc[key] = v(theme);
        } else if (typeof v === 'object' && !Array.isArray(v)) {
          // Nested object, recurse down
          acc[key] = recurse(v);
        } else {
          // Anything else, probably string, parse and get the token value
          acc[key] = parseAndGet(theme, v);
        }
        return acc;
      },
      {} as any,
    );

  const {icons = {}, ...filteredTheme} = theme;
  return {
    ...recurse(filteredTheme),
    icons,
    compiled: true,
  };
};
