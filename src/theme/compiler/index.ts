/* eslint-disable @typescript-eslint/no-explicit-any */
import {Theme, UncompiledTheme} from '../types';
import {ThemeCompilerOptions} from './types';
import {generateInkStylePresets} from './ink-style-preset-generator';
import {recurseUnknown} from '../../utils/recurse-unknown';

export const compileTheme = (
  theme: UncompiledTheme | Theme,
  options: ThemeCompilerOptions = {},
): Theme => {
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
  return {
    ...(recurseUnknown(uncompiledTheme, filteredTheme, errorLogger) as any),
    icons,
    compiled: true,
    // Suppress for sake of snapshots
    /* istanbul ignore next */
    ...(theme.useRem ? {useRem: theme.useRem} : {}),
  };
};
