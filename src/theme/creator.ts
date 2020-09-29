import {deepMerge} from '../utils/deep-merge';

import {ThemeOverrides, UncompiledTheme, ThemeBase} from './types';

import * as foundations from './foundations';
import * as presets from './presets';

import {componentDefaults} from './component-defaults';

interface CreateThemeArgs {
  name?: string;
  baseTheme?: UncompiledTheme;
  overrides?: ThemeOverrides;
}

export const createTheme = ({
  name = 'unnamed-newskit-theme',
  baseTheme,
  overrides = {},
}: CreateThemeArgs): UncompiledTheme => {
  if (baseTheme && baseTheme.compiled) {
    throw new Error(
      'createTheme received a compiled baseTheme. Base themes must be uncompiled.',
    );
  }
  return deepMerge(
    {
      themeVersion: 1,
      ...foundations,
      ...presets,
      componentDefaults,
      icons: {},
    } as ThemeBase,
    baseTheme,
    overrides,
    {name},
  );
};
