import get from 'lodash.get';
import {ThemeProp} from './style-types';
import {isResponsive} from './responsive-helpers';
import {Breakpoints} from '../themes';

/**
 *  Allows the user to leave the token type off  Resolves token type. Optionally a type can be appended
 *
 * @param obj - Defaults or overrides object
 * @param breakpoints - Theme breakpoints
 * @param path - Token path from either defaults or overrides object
 * @param [autoKey] - Explicitly defined token type e.g. 'stylePreset'
 * @returns The resolved path
 *
 * @remarks
 * This allows us to assume a particular token type will listed under the appropriate name,
   e.g.when dealing with a 'stylePreset' the path will likely end in '.stylePreset', this means the user can
   optionally leave that extra part off and if needed we append it ourselves.
 */
const getAutoResolvingPath = (
  obj: unknown,
  breakpoints: Breakpoints,
  path: string,
  autoKey?: string,
) => {
  const modifiedPath = path.endsWith('.') ? path.slice(0, -1) : path;

  const value = get(obj, modifiedPath);

  if (typeof value === 'string' || isResponsive(value, breakpoints)) {
    return value;
  }

  return autoKey ? get(obj, `${modifiedPath}.${autoKey}`) : value;
};

/**
 * Takes props and paths for default and prop overrides object, returning the token name to use.
 *
 * @param props - The component props containing the theme and possibly some overrides
 * @param defaultPath - The path of the defaults in the theme
 * @param [overridePath] - The path of the override in props.overrides
 * @param [propName] - The prop we're dealing with and will append if needed, e.g. 'stylePreset'
 * @returns The resolved token name
 *
 */
export const getToken = <Props extends ThemeProp & {overrides?: unknown}>(
  props: Props,
  defaultPath: string,
  overridePath?: string | false,
  propName?: string,
) => {
  const defaultToken = getAutoResolvingPath(
    props.theme.defaultPresets,
    props.theme.breakpoints,
    `${defaultPath}`,
    propName,
  );

  if (!overridePath && overridePath !== '') {
    return defaultToken;
  }

  const overrideToken = getAutoResolvingPath(
    props,
    props.theme.breakpoints,
    `overrides.${overridePath}`,
    propName,
  );

  return overrideToken || defaultToken;
};
