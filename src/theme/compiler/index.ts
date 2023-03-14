/* eslint-disable @typescript-eslint/no-explicit-any */
import {Theme, UncompiledTheme} from '../types';
import {ThemeCompilerOptions} from './types';
import {generateInkStylePresets} from './ink-style-preset-generator';
import {recurseUnknown} from '../../utils/recurse-unknown';

export const compileTheme = (
  theme: UncompiledTheme | Theme,
  options: ThemeCompilerOptions = {},
): Theme => {
  // console.time(`compile-${theme.name || 'unknown'}`);

  if (!theme || theme.compiled === true) {
    return theme;
  }

  // eslint-disable-next-line no-console
  const errorLogger = options.errorLogger || console.error.bind(console);

  const uncompiledTheme = {
    ...theme,
    stylePresets: {
      ...theme.stylePresets,
      ...generateInkStylePresets(theme),
    },
  };

  const {icons = {}, ...filteredTheme} = uncompiledTheme;
  const r = {
    ...(recurseUnknown(uncompiledTheme, filteredTheme, errorLogger) as any),
    icons,
    compiled: true,
  };
  // console.timeEnd(`compile-${theme.name || 'unknown'}`);
  return r;
};
