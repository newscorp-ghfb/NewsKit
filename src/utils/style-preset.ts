import {ThemeProp, css, CSSObject} from './style';
import {
  StylePresetStyles,
  StylePresetStyleKeys,
  StylePresetStateKeys,
  StylePresetsKeys,
  StylePresetStates,
} from '../themes/mappers/style-preset';
import {filterObject} from './filter-object';
import {SizingKeys} from '../themes/newskit-light/spacing';

export interface GetStylePresetFromThemeOptions {
  isLoading?: boolean;
  isCurrent?: boolean;
  omitStates?: StylePresetStateKeys[];
  omitStyles?: StylePresetStyleKeys[];
  borderRadiusSize?: SizingKeys;
}

type GetPresetStylesOptions = Pick<
  GetStylePresetFromThemeOptions,
  'omitStyles' | 'borderRadiusSize'
>;

const getPresetStyles = (
  presetStyles: StylePresetStyles,
  options?: GetPresetStylesOptions,
) => {
  const {omitStyles = [], borderRadiusSize = undefined} = options || {};
  const {borderRadius: borderRadiusSizing, ...styles} = filterObject(
    presetStyles,
    omitStyles,
  );
  const borderRadius =
    borderRadiusSizing && borderRadiusSize
      ? borderRadiusSizing[borderRadiusSize]
      : '';
  return {
    ...styles,
    borderRadius,
  };
};

const cssTmpl = (
  {iconColor = '', ...cssObject}: ReturnType<typeof getPresetStyles>,
  selector: string = '',
) => css`
  ${selector && `:${selector} {`}
  ${cssObject as CSSObject}
  ${iconColor &&
    `
    svg {
      fill: ${iconColor};
      color: ${iconColor};
    }
  `}
  ${selector && '}'}
`;

export const getStylePresetFromTheme = (
  stylePreset: StylePresetsKeys,
  options?: GetStylePresetFromThemeOptions,
) => ({theme}: ThemeProp) => {
  const {
    omitStates = [],
    isCurrent = false,
    isLoading = false,
    ...presetOptions
  } = options || {};
  const {current, loading, ...presetStates} = filterObject(
    theme.stylePresets[stylePreset] as StylePresetStates,
    omitStates,
  );

  if (isCurrent || isLoading) {
    const stateOverrides =
      (isLoading && loading) || (isCurrent && current) || {};
    const {base = {}} = presetStates;
    return cssTmpl(
      getPresetStyles({...base, ...stateOverrides}, presetOptions),
    );
  }

  const presetStateKeys = Object.keys(presetStates) as Array<
    keyof typeof presetStates
  >;
  return presetStateKeys.map(stateKey => {
    const presetState = presetStates[stateKey];

    if (presetState) {
      const presetStyle = getPresetStyles(presetState, presetOptions);

      if (stateKey === 'base') {
        return cssTmpl(presetStyle);
      }

      const selector =
        stateKey === 'disabled' ? stateKey : `${stateKey}:not(:disabled)`;

      return cssTmpl(presetStyle, selector);
    }

    return '';
  });
};
