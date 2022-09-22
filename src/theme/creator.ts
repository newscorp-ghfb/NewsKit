import {deepMerge} from '../utils/deep-merge';

import {
  BreakpointKeys,
  Breakpoints,
  ThemeBase,
  ThemeLoggerFunction,
  ThemeOverrides,
  UncompiledTheme,
} from './types';

import * as foundations from './foundations';
import * as presets from './presets';

import {get} from '../utils/get';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {FontConfig} from './foundations/fonts';

export interface CreateThemeArgs {
  name?: string;
  baseTheme?: UncompiledTheme;
  overrides?: ThemeOverrides;
  checkOverrides?: boolean;
  warningLogger?: ThemeLoggerFunction;
}

const deepDuplicationChecker = (
  warningLogger: ThemeLoggerFunction,
  baseTheme: ThemeBase,
  overrides: ThemeOverrides,
) => {
  const recurse = (obj: object, keys?: string) => {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = keys ? [keys, key].join('.') : key;
      if (typeof value === 'object') {
        recurse(value, newKey);
      } else if (get(baseTheme, newKey) === value) {
        warningLogger(
          `Override at path: '${newKey}' has the same value as base theme: '${value}'.`,
        );
      }
    });
  };
  recurse(overrides);
};

const isFontConfig = (x: string | FontConfig): x is FontConfig =>
  (x as FontConfig).fontFamily !== undefined;

// Font family info should not be merged. E.g.:
// - Base theme: { ...fontFamily010: {fontFamily: "Font A", fontMetrics: {...fontAMetrics} }
// - Overrides: { ...fontFamily010: {fontFamily: "Font B"} }
// In this example, we should remove fontFamily010 from the base theme, otherwise
// the merged object will be invalid:
// - { ...fontFamily010: {fontFamily: "Font B", fontMetrics: {...fontAMetrics} }
// This function removes font families from a theme if they are defined in an
// overrides object (which can be another theme). It should be called before merging
// the theme with the overrides.
const removeFontFamilies = <T extends ThemeBase>(
  theme: T,
  overrideFonts: T['fonts'],
): T => ({
  ...theme,
  fonts: theme.fonts
    ? Object.entries(theme.fonts).reduce<T['fonts']>(
        (prev, [k, v]) => ({
          ...prev,
          ...(isFontConfig(v) && overrideFonts[k] ? {} : {[k]: v}),
        }),
        {},
      )
    : undefined,
});

export const createTheme = ({
  name = 'unnamed-newskit-theme',
  baseTheme,
  overrides = {},
  checkOverrides,
  // eslint-disable-next-line no-console
  warningLogger = console.warn.bind(console),
}: CreateThemeArgs): UncompiledTheme => {
  if (baseTheme && baseTheme.compiled) {
    throw new Error(
      'createTheme received a compiled baseTheme. Base themes must be uncompiled.',
    );
  }

  // Don't take font family info from NKLight if defined in the base theme.
  const newskitLight = removeFontFamilies<ThemeBase>(
    {
      ...foundations,
      ...presets,
      componentDefaults: {},
      icons: {},
    },
    baseTheme?.fonts || {},
  );

  if (checkOverrides) {
    deepDuplicationChecker(warningLogger, baseTheme || newskitLight, overrides);
  }

  /* istanbul ignore next */
  const breakpointsKeys = (overrides?.breakpoints
    ? /* istanbul ignore next */
      overrides?.breakpoints
    : newskitLight.breakpoints) as Breakpoints;

  return deepMerge(
    mergeBreakpointObject(Object.keys(breakpointsKeys) as BreakpointKeys[]),
    newskitLight,
    // Don't take font family info from the base theme if defined in overrides.
    baseTheme
      ? removeFontFamilies<UncompiledTheme>(
          baseTheme,
          /* istanbul ignore next */
          overrides?.fonts || {},
        )
      : baseTheme,
    overrides,
    {name, themeVersion: 1},
  );
};
