import {Theme, BreakpointKeys} from '../../theme';
import {isResponsive, getMediaQueryFromTheme} from '../responsive-helpers';
import {filterObject} from '../filter-object';
import {getToken} from '../get-token';
import {ThemeProp} from '../style-types';
import {CSSQuery, MQ, ResponsiveValue} from './types';
import {isNonThemeValueAllowed, isValidUnit} from './utils';
import {CSSObject} from './emotion';

export type FromThemeCallback = (cssValue: string) => CSSObject | string;

export const getDefaultedValue = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FromThemeUtil extends (...args: any) => any
>(
  getPresetFromThemeUtil: FromThemeUtil,
  presetType: string,
  cssProp?: string | FromThemeCallback,
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
) => (props: Props) => {
  const canHaveNonThemeValue = isNonThemeValueAllowed(themeKey);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const section = props.theme[themeKey] as any;
  const token = (customProp && props[customProp]) || defaultToken;

  if (section && section[token]) {
    return section[token];
  }
  if (canHaveNonThemeValue && isValidUnit(themeKey, token)) {
    return token;
  }

  return '';
};

export const getResponsiveValueFromTheme = <ThemeToken extends string>(
  themeKey: keyof Theme,
) => <Props extends ThemeProp>(
  defaultToken?: ResponsiveValue<ThemeToken>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => ({theme, ...props}: Props) => {
  const section = theme[themeKey] as Record<ThemeToken, unknown>;
  const propKeys = (customProp && props[customProp]) || defaultToken;
  const {breakpoints} = theme;
  const canHaveNonThemeValue = isNonThemeValueAllowed(themeKey);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isMQTokenArray = (v: any): string[] =>
    v.length > 0 &&
    v.every((token: ThemeToken) => section[token as ThemeToken]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapTokensArray = (v: any): string[] =>
    v.map((token: ThemeToken) => section[token as ThemeToken]).join(' ');
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
    const cssMediaQueryObject = presetKeys
      .filter(
        // Exclude invalid breakpoints and theme section keys
        ([breakpointKey, presetKey]) =>
          presetKey &&
          (section[presetKey] ||
            (themeKey === 'spacePresets' &&
              isMQTokenArray(presetKey.split(' '))) ||
            (canHaveNonThemeValue && isValidUnit(themeKey, presetKey))) &&
          breakpointKeys.includes(breakpointKey),
      )
      .reduce((acc, [key, presetKey], index, arr) => {
        /* istanbul ignore next */
        let preset = '' as Record<ThemeToken, unknown>[ThemeToken];
        const MQtokens =
          typeof presetKey === 'string' && (presetKey as string).split(' ');
        if (themeKey === 'spacePresets' && isMQTokenArray(MQtokens)) {
          preset = mapTokensArray(MQtokens);
        } else {
          preset =
            section[presetKey] ||
            (canHaveNonThemeValue &&
              isValidUnit(themeKey, presetKey) &&
              presetKey);
        }
        // Get next key to set the max. This stops styles overlapping when they
        // shouldn't by explicitly setting them for the range they need to apply on.
        const nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;
        const mediaQuery = getMediaQueryFromTheme(
          key,
          nextKey,
        )({
          theme,
        });
        acc[mediaQuery] = preset;
        return acc;
      }, {} as Record<string, unknown>);

    const containerKeys = (propKeys.rules || []) as CSSQuery<ThemeToken>[];

    const cssContainerQueryObject =
      containerKeys &&
      containerKeys.reduce((acc, query) => {
        const {rule, value} = query;
        let preset = '' as Record<ThemeToken, unknown>[ThemeToken];
        const MQtokens =
          typeof value === 'string' && (value as string).split(' ');
        if (themeKey === 'spacePresets' && isMQTokenArray(MQtokens)) {
          preset = mapTokensArray(MQtokens);
        } else {
          preset =
            section[value] ||
            (canHaveNonThemeValue && isValidUnit(themeKey, value) && value);
        }
        acc[rule] = preset;
        return acc;
      }, {} as Record<string, unknown>);

    return Object.entries({...cssMediaQueryObject, ...cssContainerQueryObject});
  }

  const noMQtokens =
    typeof propKeys === 'string' && themeKey === 'spacePresets'
      ? (propKeys as string).split(' ')
      : [];
  if (isMQTokenArray(noMQtokens)) {
    return mapTokensArray(noMQtokens);
  }

  if (propKeys && section[propKeys as ThemeToken]) {
    return section[propKeys as ThemeToken];
  }
  if (canHaveNonThemeValue && propKeys && isValidUnit(themeKey, propKeys)) {
    return propKeys;
  }
  return '';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNotNullOrEmpty = (v: any): boolean =>
  v !== null && v !== undefined && v !== '';

export const getXFromTheme = (themeKey: keyof Theme) => <
  Props extends ThemeProp
>(
  cssProperty: string | FromThemeCallback,
  defaultToken: ResponsiveValue<string>,
) => (props: Props) => {
  const value = getResponsiveValueFromTheme(themeKey)(defaultToken)(
    props,
  ) as Array<[string, string]>;

  if (Array.isArray(value)) {
    return value.reduce((acc, [mq, preset]) => {
      let mqValue;
      if (typeof cssProperty === 'string') {
        mqValue = {[cssProperty]: preset};
      }
      if (typeof cssProperty === 'function') {
        mqValue = cssProperty(preset);
      }
      /* istanbul ignore next */
      if (mqValue) {
        acc[mq] = mqValue;
      }
      return acc;
    }, {} as CSSObject);
  }

  if (typeof cssProperty === 'string' && isNotNullOrEmpty(value)) {
    return {[cssProperty]: value};
  }

  if (typeof cssProperty === 'function' && isNotNullOrEmpty(value)) {
    return cssProperty(value);
  }

  return value;
};

export const getResponsiveX = (themeKey: keyof Theme) => (
  cssProperty: string | FromThemeCallback,
  defaultPath: string,
  overridePath: string,
  defaultsObjectKey: string,
) => <Props extends ThemeProp>(props: Props) => {
  const token = getToken(props, defaultPath, overridePath, defaultsObjectKey);
  return getXFromTheme(themeKey)(cssProperty, token)(props);
};
