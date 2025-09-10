import { Theme, StylePresetStates, StylePresetStyleKeys, StylePresetStyles } from '../../theme';
import { ThemeProp } from '../style-types';
import { CSSObject } from './emotion';
import { MQ } from './types';
export interface GetStylePresetFromThemeOptions {
    nestedCssSelector?: string;
    isLoading?: boolean;
    isSelected?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isValid?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isActive?: boolean;
    isSvg?: boolean;
    omitStates?: StylePresetStates[];
    filterStates?: StylePresetStates[];
    omitStyles?: StylePresetStyleKeys[];
    filterStyles?: StylePresetStyleKeys[];
    isFocusedVisible?: boolean;
}
export declare const getPresetStyles: (presetStyles: StylePresetStyles, options?: GetStylePresetFromThemeOptions) => CSSObject;
export declare const getStylePresetFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string>, customProp?: Exclude<keyof Props, "theme"> | undefined, options?: GetStylePresetFromThemeOptions) => (props: Props) => "" | CSSObject;
export declare const getStylePreset: <Props extends ThemeProp>(defaultPath: string | undefined, overridePath?: string | false, option?: GetStylePresetFromThemeOptions | undefined) => (props: Props) => any;
export declare const getSingleStylePreset: ({ stylePresets }: Theme, state: StylePresetStates, cssProp: Exclude<StylePresetStyleKeys, 'borderRadius'>, defaultToken: string, customToken?: string) => string;
//# sourceMappingURL=style-preset.d.ts.map