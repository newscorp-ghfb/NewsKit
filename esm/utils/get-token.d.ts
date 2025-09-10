import { ThemeProp } from './style-types';
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
export declare const getToken: <Props extends ThemeProp & {
    overrides?: unknown;
}>(props: Props, defaultPath?: string, overridePath?: string | false, propName?: string) => any;
//# sourceMappingURL=get-token.d.ts.map