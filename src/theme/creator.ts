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
import {FontConfig, FontThemeValue} from './foundations/fonts';
import {pixelStringToRemString} from '../utils/to-rem';
import {isApplication} from '../utils/is-application';

const fontSizeKeys = [
  'fontSize010',
  'fontSize020',
  'fontSize030',
  'fontSize040',
  'fontSize050',
  'fontSize060',
  'fontSize070',
  'fontSize080',
  'fontSize090',
  'fontSize100',
  'fontSize110',
  'fontSize120',
  'fontSize130',
  'fontSize140',
  'fontSize150',
  'fontSize160',
];

export interface CreateThemeArgs {
  name?: string;
  baseTheme?: UncompiledTheme;
  overrides?: ThemeOverrides;
  checkOverrides?: boolean;
  warningLogger?: ThemeLoggerFunction;
  useRem?: boolean;
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

const isFontFamily = (
  fontThemeValue: FontThemeValue,
): fontThemeValue is FontConfig =>
  (fontThemeValue as FontConfig).fontFamily !== undefined;

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
        (prev, [fontThemeToken, fontThemeValue]) => ({
          ...prev,
          ...(isFontFamily(fontThemeValue) && overrideFonts[fontThemeToken]
            ? {}
            : {[fontThemeToken]: fontThemeValue}),
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
  useRem,
  // eslint-disable-next-line no-console
  warningLogger = console.warn.bind(console),
}: CreateThemeArgs): UncompiledTheme => {
  if (baseTheme && baseTheme.compiled) {
    throw new Error(
      'createTheme received a compiled baseTheme. Base themes must be uncompiled.',
    );
  }

  // NB Only use REM if set on for theme or base theme and running within site or Storybook
  // to avoid 77 failing snapshot tests (for now)
  const combinedUseRem = (useRem || baseTheme?.useRem) && isApplication();

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

  const mergedTheme = deepMerge(
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
    // Suppress for sake of snapshots
    {...(combinedUseRem ? {useRem: combinedUseRem} : {})},
  );

  // This extra conversion is required for rem to show on site,
  // Storybook shows rem based on the conversion in compileTheme alone.
  // For spike, only hack light theme to rem. Keep dark theme in pixels.
  if (combinedUseRem && name.indexOf('dark') === -1) {
    const fonts = mergedTheme.fonts as Record<string, string>;
    fontSizeKeys.forEach((key, index) => {
      if (fonts[key].endsWith('px')) {
        fonts[key] = pixelStringToRemString(fonts[key]);
      }
    });

    const sizing = mergedTheme.sizing as Record<string, string>;
    for (const [key, value] of Object.entries(sizing)) {
      sizing[key] = pixelStringToRemString(value);
    }

    const typographyPresets = mergedTheme.typographyPresets as Record<
      string,
      object
    >;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, value] of Object.entries(typographyPresets)) {
      //@ts-ignore
      value['fontSize'] = pixelStringToRemString(value['fontSize']);
    }
  }

  return mergedTheme;
};
