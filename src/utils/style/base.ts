import {Theme, BreakpointKeys} from '../../theme';
import {isResponsive, getMediaQueryFromTheme} from '../responsive-helpers';
import {filterObject} from '../filter-object';
import {getToken} from '../get-token';
import {ThemeProp} from '../style-types';
import {MQ} from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValid = (value: any): boolean =>
  !(Number.isNaN(value) || Array.isArray(value) || typeof value === 'object');

export const getDefaultedValue = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FromThemeUtil extends (...args: any) => any
>(
  getPresetFromThemeUtil: FromThemeUtil,
  presetType: string,
  cssProp?: string,
) => <Props extends ThemeProp>(
  defaultPath: string | undefined,
  overridePath: string | false = '',
  option?: Parameters<FromThemeUtil>[2],
) => (props: Props) =>
  getPresetFromThemeUtil(
    getToken(props, defaultPath, overridePath, presetType),
    undefined,
    cssProp || option,
  )(props);

export const getValueFromTheme = <ThemeToken extends string>(
  themeKey: keyof Theme,
) => <Props extends ThemeProp>(
  defaultToken?: MQ<ThemeToken>,
  customProp?: Exclude<keyof Props, 'theme'>,
  allowNonThemeValue?: boolean,
) => (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const section = props.theme[themeKey] as any;
  const token = (customProp && props[customProp]) || defaultToken;

  return (
    (section && section[token]) ||
    (allowNonThemeValue && isValid(token) ? token : '')
  );
};

export const getResponsiveValueFromTheme = <ThemeToken extends string>(
  themeKey: keyof Theme,
) => <Props extends ThemeProp>(
  defaultToken?: MQ<ThemeToken>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => ({theme, ...props}: Props) => {
  const section = theme[themeKey] as Record<ThemeToken, unknown>;
  const propKeys = (customProp && props[customProp]) || defaultToken;
  const {breakpoints} = theme;
  if (isResponsive(propKeys, breakpoints)) {
    // We have a breakpoints object...

    // Convert breakpoints to array and order them
    const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];
    const mq = breakpointKeys.sort((a, b) => breakpoints[a] - breakpoints[b]);

    const presetKeys: [BreakpointKeys, ThemeToken][] = Object.entries(
      filterObject(propKeys, mq),
    ).sort(
      ([a], [b]) =>
        mq.indexOf(a as BreakpointKeys) - mq.indexOf(b as BreakpointKeys),
    ) as any; // eslint-disable-line @typescript-eslint/no-explicit-any

    const cssObject = presetKeys
      .filter(
        // Exclude invalid breakpoints and theme section keys
        ([breakpointKey, presetKey]) =>
          presetKey &&
          section[presetKey] &&
          breakpointKeys.includes(breakpointKey),
      )
      .reduce(
        (acc, [key, presetKey], index, arr) => {
          const preset = section[presetKey];
          // Get next key to set the max. This stops styles overlapping when they
          // shouldn't by explicitly setting them for the range they need to apply on.
          const nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;
          const mediaQuery = getMediaQueryFromTheme(key, nextKey)({theme});
          acc[mediaQuery] = preset;
          return acc;
        },
        {} as Record<string, unknown>,
      );
    return Object.entries(cssObject);
  }

  return (propKeys && section[propKeys as ThemeToken]) || '';
};
